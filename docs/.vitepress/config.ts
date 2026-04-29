import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'DeckWP Docs',
    description: 'Documentation for DeckWP — WordPress site management SaaS.',
    lang: 'en-US',
    cleanUrls: true,
    lastUpdated: true,

    head: [
        ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
        ['meta', { name: 'theme-color', content: '#1a8fc4' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:site_name', content: 'DeckWP Docs' }],
    ],

    themeConfig: {
        logo: '/logo.svg',

        nav: [
            { text: 'Getting Started', link: '/getting-started/pair-your-first-site' },
            { text: 'API', link: '/api/connector-rest-reference' },
            { text: 'Guides', link: '/guides/bulk-updates' },
            { text: 'Compare', link: '/compare/vs-manage-gpl' },
            { text: 'Sign up', link: 'https://deckwp.com' },
        ],

        sidebar: {
            '/getting-started/': [
                {
                    text: 'Getting Started',
                    items: [
                        { text: 'Pair your first site', link: '/getting-started/pair-your-first-site' },
                        { text: 'Auto vs manual install', link: '/getting-started/auto-vs-manual-install' },
                    ],
                },
            ],
            '/api/': [
                {
                    text: 'API Reference',
                    items: [
                        { text: 'Connector REST', link: '/api/connector-rest-reference' },
                        { text: 'HMAC authentication', link: '/api/hmac-authentication' },
                        { text: 'Webhooks', link: '/api/webhooks' },
                    ],
                },
            ],
            '/guides/': [
                {
                    text: 'Guides',
                    items: [
                        { text: 'Bulk updates', link: '/guides/bulk-updates' },
                        { text: 'Backup & rollback', link: '/guides/backup-and-rollback' },
                        { text: 'Scheduled updates', link: '/guides/scheduled-updates' },
                        { text: 'Whitelabel', link: '/guides/whitelabel' },
                        { text: 'Multisite', link: '/guides/multisite' },
                    ],
                },
            ],
            '/compare/': [
                {
                    text: 'Compare',
                    items: [
                        { text: 'vs Manage GPL', link: '/compare/vs-manage-gpl' },
                        { text: 'vs Zeebrar', link: '/compare/vs-zeebrar' },
                        { text: 'vs ManageWP', link: '/compare/vs-managewp' },
                        { text: 'vs MainWP', link: '/compare/vs-mainwp' },
                    ],
                },
            ],
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/ultrapackadm/deckwp-connect' },
        ],

        search: {
            provider: 'local',
        },

        footer: {
            message: 'Released under the MIT License. Connector plugin: GPLv2.',
            copyright: 'Copyright © 2026 DeckWP',
        },

        editLink: {
            pattern: 'https://github.com/ultrapackadm/deckwp-docs/edit/main/docs/:path',
            text: 'Edit this page on GitHub',
        },
    },
})
