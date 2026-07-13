// keystatic.config.ts
import { config, fields, collection } from '@keystatic/core';

// Описываем схему полей один раз
const projectSchema = {
    title: fields.text({ label: 'Название проекта (в списке)' }),
    slug: fields.text({ label: 'Slug (URL адрес)' }),
    id: fields.number({ label: 'ID (для сортировки)', defaultValue: 1 }),
    category: fields.array(fields.text({ label: 'Категория' }), {
        label: 'Категории (теги)',
        itemLabel: (props) => props.value || 'Категория',
    }),
    badge: fields.text({ label: 'Иконка/Badge (код SVG)', multiline: true }),
    duration: fields.text({ label: 'Длительность выполнения' }),
    image: fields.text({ label: 'Путь к обложке (coverphoto)' }),
    link: fields.text({ label: 'Ссылка на сайт проекта (опционально)' }),
    sections: fields.blocks(
        {
            hero: {
                label: 'Hero секция (Шапка)',
                itemLabel: (props) => `Hero: ${props.fields.title.value || 'Без заголовка'}`,
                schema: fields.object({
                    title: fields.text({ label: 'Главный заголовок' }),
                    tags: fields.array(fields.text({ label: 'Тег' }), {
                        label: 'Теги',
                        itemLabel: (props) => props.value || 'Тег',
                    }),
                }),
            },
            text: {
                label: 'Текстовый блок',
                itemLabel: (props) => `Текст: ${props.fields.title.value || 'Без заголовка'}`,
                schema: fields.object({
                    title: fields.text({ label: 'Заголовок блока' }),
                    text: fields.text({ label: 'Текст', multiline: true }),
                }),
            },
            image: {
                label: 'Изображение',
                itemLabel: (props) => `Картинка: ${props.fields.alt.value || props.fields.src.value || 'Без названия'}`,
                schema: fields.object({
                    src: fields.text({ label: 'Путь к картинке (например, /photos/...)' }),
                    loading: fields.select({
                        label: 'Тип загрузки',
                        options: [
                            { label: 'Lazy (Отложенная)', value: 'lazy' },
                            { label: 'Eager (Мгновенная)', value: 'eager' },
                        ],
                        defaultValue: 'lazy',
                    }),
                    alt: fields.text({ label: 'Описание (alt)' }),
                }),
            },
            stats: {
                label: 'Статистика (Цифры)',
                itemLabel: () => 'Блок статистики',
                schema: fields.object({
                    items: fields.array(
                        fields.object({
                            label: fields.text({ label: 'Метка' }),
                            value: fields.text({ label: 'Значение' }),
                        }),
                        {
                            label: 'Элементы статистики',
                            itemLabel: (props) => `${props.fields.label.value || 'Показатель'}: ${props.fields.value.value || ''}`,
                        }
                    ),
                }),
            },
            summary: {
                label: 'Сводка / Итог (Summary)',
                itemLabel: (props) => `Итог: ${props.fields.title.value || 'Без заголовка'}`,
                schema: fields.object({
                    title: fields.text({ label: 'Заголовок' }),
                    text: fields.text({ label: 'Описание', multiline: true }),
                    buttons: fields.array(
                        fields.object({
                            label: fields.text({ label: 'Текст кнопки' }),
                            url: fields.text({ label: 'Ссылка' }),
                            primary: fields.checkbox({ label: 'Основная кнопка (Primary)', defaultValue: false }),
                        }),
                        {
                            label: 'Кнопки',
                            itemLabel: (props) => props.fields.label.value || 'Кнопка',
                        }
                    ),
                }),
            },
            button: {
                label: 'Одиночная кнопка',
                itemLabel: (props) => `Кнопка: ${props.fields.label.value || 'Без текста'}`,
                schema: fields.object({
                    label: fields.text({ label: 'Текст кнопки' }),
                    url: fields.text({ label: 'Ссылка' }),
                    primary: fields.checkbox({ label: 'Основная кнопка (Primary)', defaultValue: false }),
                }),
            },
            video: {
                label: 'Видео',
                itemLabel: (props) => `Видео: ${props.fields.src.value || 'Без пути'}`,
                schema: fields.object({
                    src: fields.text({ label: 'Путь к видео' }),
                    alt: fields.text({ label: 'Описание (alt)' }),
                }),
            },
        },
        {
            label: 'Секции страницы проекта',
        }
    ),
};

export default config({
    storage: {
        kind: 'local',
    },
    collections: {
        // Проекты
        projects_ru: collection({
            label: 'Проекты (RU)',
            slugField: 'slug',
            path: 'src/content/projects/ru/*',
            format: { data: 'json' },
            schema: projectSchema,
        }),
        projects_en: collection({
            label: 'Projects (EN)',
            slugField: 'slug',
            path: 'src/content/projects/en/*',
            format: { data: 'json' },
            schema: projectSchema,
        }),

        // Блоги
        blog_ru: collection({
            label: 'Блог (RU)',
            slugField: 'slug',
            path: 'src/content/blog/ru/*',
            format: { data: 'json' },
            schema: projectSchema, // Используем ту же схему
        }),
        blog_en: collection({
            label: 'Blog (EN)',
            slugField: 'slug',
            path: 'src/content/blog/en/*',
            format: { data: 'json' },
            schema: projectSchema, // Используем ту же схему
        }),
    },
});
