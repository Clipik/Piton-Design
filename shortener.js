const http = require('http');
const fs = require('fs');
const path = require('path');
const { Telegraf } = require('telegraf');

const PORT = 8000;
const DB_FILE = path.join(__dirname, 'links.json');
const CONFIG_FILE = path.join(__dirname, 'config.json');
const USERS_FILE = path.join(__dirname, 'users.json');

let API_KEY, BOT_TOKEN, BOT_PASSWORD;
try {
    const config = JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf8'));
    API_KEY = config.API_KEY;
    BOT_TOKEN = config.TELEGRAM_BOT_TOKEN;
    BOT_PASSWORD = config.TELEGRAM_PASSWORD;

    if (!BOT_TOKEN || !BOT_PASSWORD) {
        throw new Error("В config.json отсутствуют TELEGRAM_BOT_TOKEN или TELEGRAM_PASSWORD!");
    }
} catch (err) {
    console.error("Ошибка безопасности:", err.message || "Создай config.json с настройками для Telegram!");
    process.exit(1);
}

if (!fs.existsSync(DB_FILE)) fs.writeFileSync(DB_FILE, JSON.stringify({}));
if (!fs.existsSync(USERS_FILE)) fs.writeFileSync(USERS_FILE, JSON.stringify([]));

function createShortLink(longUrl) {
    const db = JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let slug;
    
    for (let i = 0; i < 10; i++) {
        const rand = Array.from({length: 5}, () => chars[Math.floor(Math.random() * chars.length)]).join('');
        const tempSlug = 's' + rand;
        if (!db[tempSlug]) {
            slug = tempSlug;
            break;
        }
    }

    if (!slug) return null;

    db[slug] = longUrl;
    fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2));
    return `https://gopiton.com/${slug}`;
}


const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const pathname = url.pathname;

    if (req.method === 'POST' && pathname === '/api/shorten') {
        const apiKey = req.headers['x-api-key'];
        if (apiKey !== API_KEY) {
            res.writeHead(403, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ error: 'Forbidden' }));
        }

        let body = '';
        req.on('data', chunk => { body += chunk; });
        req.on('end', () => {
            try {
                const { url: longUrl } = JSON.parse(body);
                if (!longUrl) throw new Error();
                
                const shortUrl = createShortLink(longUrl);
                if (!shortUrl) throw new Error('Collision');

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ short_url: shortUrl }));
            } catch (err) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Bad Request' }));
            }
        });

    } else if (req.method === 'GET' && pathname.startsWith('/s')) {
        const slug = pathname.slice(1);
        if (!/^s[a-z0-9]{5}$/.test(slug)) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            return res.end('Invalid link format');
        }

        const db = JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
        const longUrl = db[slug];

        if (longUrl) {
            res.writeHead(302, { 'Location': longUrl });
            return res.end();
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            return res.end('Short link not found');
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(PORT, () => {
    console.log(`HTTP redirect server running on port ${PORT}`);
});


const bot = new Telegraf(BOT_TOKEN);

bot.on('message', async (ctx) => {
    const chatId = ctx.chat.id;
    const text = ctx.message.text ? ctx.message.text.trim() : '';

    let authUsers = [];
    try {
        authUsers = JSON.parse(fs.readFileSync(USERS_FILE, 'utf8'));
    } catch (e) {
        authUsers = [];
    }

    const isAuthorized = authUsers.includes(chatId);

    if (!isAuthorized) {
        if (text === BOT_PASSWORD) {
            authUsers.push(chatId);
            fs.writeFileSync(USERS_FILE, JSON.stringify(authUsers, null, 2));
            return ctx.reply("Пароль верный, кидай ссылку и я приведу ее в нормальный вид");
        } else {
            return ctx.reply("Введи пароль");
        }
    }

    const urlRegex = /^(https?:\/\/[^\s]+)$/i;
    if (urlRegex.test(text)) {
        try {
            const shortUrl = createShortLink(text);
            if (shortUrl) {
                return ctx.reply(`Держи короткую ссылку:\n${shortUrl}`);
            } else {
                return ctx.reply("Лимит превышен. Попробуй еще раз");
            }
        } catch (err) {
            return ctx.reply("Ошибка при записи в базу данных");
        }
    } else {
        return ctx.reply("Это не похоже на ссылку. Пришли мне ссылку, начинающуюся с http:// или https://");
    }
});

bot.launch().then(() => {
    console.log('Telegram Bot successfully started');
});

process.once('SIGINT', () => {
    bot.stop('SIGINT');
    server.close();
});
process.once('SIGTERM', () => {
    bot.stop('SIGTERM');
    server.close();
});