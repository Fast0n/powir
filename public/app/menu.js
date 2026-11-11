const { t } = require('./i18n')

function getMenuTemplate(server) {
    return [
        // { role: 'fileMenu' }
        {
            label: t('file'),
            submenu: [
                {
                    label: t('mainWebsite'),
                    click: async () => {
                        await server.openLink('https://powir.slapbot.me')
                    }
                },{
                    label: t('author'),
                    click: async () => {
                        server.showAuthorPage()
                    }
                },
                { type: 'separator' },
                { role: 'quit' }
            ]
        },
        // { role: 'editMenu' }
        {
            label: t('actions'),
            submenu: [
                {
                    label: t('exportJSON'),
                    click: async () => {
                        server.exportJSONData()
                    }
                },
                {
                    label: t('exportPDF'),
                    click: async () => {
                        server.exportPDFReport()
                    }
                },
                { type: 'separator' },
                {
                    label: t('displayOriginal'),
                    click: async () => {
                        server.showOriginalReport()
                    }
                },
            ]
        },
        {
            label: t('view'),
            submenu: [
                { role: 'resetzoom' },
                { role: 'zoomin' },
                { role: 'zoomout' },
                { type: 'separator' },
                { role: 'togglefullscreen' }
            ]
        },
        {
            label: t('tools'),
            submenu: [
                { role: 'reload' },
                { role: 'forcereload' },
                { role: 'toggledevtools' },
            ]
        },
        {
            role: 'help',
            label: t('help'),
            submenu: [
                {
                    label: t('issues'),
                    click: async () => {
                        await server.openLink('https://github.com/slapbot/powir/issues')
                    }
                },{
                    label: t('chat'),
                    click: async () => {
                        await server.openLink('https://twitter.com/ugupta41')
                    }
                },{
                    label: t('feedback'),
                    click: async () => {
                        await server.openLink('https://slapbot.me')
                    }
                }
            ]
        }
    ]
}

module.exports = {
    getMenuTemplate
}
