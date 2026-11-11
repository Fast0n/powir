// Testi del processo principale di Electron (menu e finestre di dialogo)
const strings = {
    en: {
        file: 'File', mainWebsite: 'Main Website', author: 'Author',
        actions: 'Actions', exportJSON: 'Export JSON', exportPDF: 'Export PDF', displayOriginal: 'Display Original Report',
        view: 'View', tools: 'Tools', help: 'Help',
        issues: 'Issues/Bugs', chat: 'Chat/Updates', feedback: 'Feedback/Enquiry',
        jsonDialogTitle: 'Export Data: JSON format', jsonDialogButton: 'Save JSON',
        pdfDialogTitle: 'Export Report: PDF format', pdfDialogButton: 'Save PDF',
        allFiles: 'All Files'
    },
    it: {
        file: 'File', mainWebsite: 'Sito ufficiale', author: 'Autore',
        actions: 'Azioni', exportJSON: 'Esporta JSON', exportPDF: 'Esporta PDF', displayOriginal: 'Mostra report originale',
        view: 'Visualizza', tools: 'Strumenti', help: 'Aiuto',
        issues: 'Problemi/Bug', chat: 'Chat/Aggiornamenti', feedback: 'Feedback/Richieste',
        jsonDialogTitle: 'Esporta dati: formato JSON', jsonDialogButton: 'Salva JSON',
        pdfDialogTitle: 'Esporta report: formato PDF', pdfDialogButton: 'Salva PDF',
        allFiles: 'Tutti i file'
    },
    es: {
        file: 'Archivo', mainWebsite: 'Sitio web', author: 'Autor',
        actions: 'Acciones', exportJSON: 'Exportar JSON', exportPDF: 'Exportar PDF', displayOriginal: 'Mostrar informe original',
        view: 'Ver', tools: 'Herramientas', help: 'Ayuda',
        issues: 'Problemas/Errores', chat: 'Chat/Novedades', feedback: 'Comentarios/Consultas',
        jsonDialogTitle: 'Exportar datos: formato JSON', jsonDialogButton: 'Guardar JSON',
        pdfDialogTitle: 'Exportar informe: formato PDF', pdfDialogButton: 'Guardar PDF',
        allFiles: 'Todos los archivos'
    },
    fr: {
        file: 'Fichier', mainWebsite: 'Site officiel', author: 'Auteur',
        actions: 'Actions', exportJSON: 'Exporter en JSON', exportPDF: 'Exporter en PDF', displayOriginal: 'Afficher le rapport original',
        view: 'Affichage', tools: 'Outils', help: 'Aide',
        issues: 'Problèmes/Bugs', chat: 'Discussion/Nouveautés', feedback: 'Avis/Questions',
        jsonDialogTitle: 'Exporter les données : format JSON', jsonDialogButton: 'Enregistrer le JSON',
        pdfDialogTitle: 'Exporter le rapport : format PDF', pdfDialogButton: 'Enregistrer le PDF',
        allFiles: 'Tous les fichiers'
    },
    pt: {
        file: 'Ficheiro', mainWebsite: 'Site oficial', author: 'Autor',
        actions: 'Ações', exportJSON: 'Exportar JSON', exportPDF: 'Exportar PDF', displayOriginal: 'Mostrar relatório original',
        view: 'Ver', tools: 'Ferramentas', help: 'Ajuda',
        issues: 'Problemas/Erros', chat: 'Conversa/Novidades', feedback: 'Sugestões/Questões',
        jsonDialogTitle: 'Exportar dados: formato JSON', jsonDialogButton: 'Guardar JSON',
        pdfDialogTitle: 'Exportar relatório: formato PDF', pdfDialogButton: 'Guardar PDF',
        allFiles: 'Todos os ficheiros'
    },
    pl: {
        file: 'Plik', mainWebsite: 'Strona główna', author: 'Autor',
        actions: 'Akcje', exportJSON: 'Eksportuj JSON', exportPDF: 'Eksportuj PDF', displayOriginal: 'Pokaż oryginalny raport',
        view: 'Widok', tools: 'Narzędzia', help: 'Pomoc',
        issues: 'Problemy/Błędy', chat: 'Czat/Nowości', feedback: 'Opinie/Pytania',
        jsonDialogTitle: 'Eksport danych: format JSON', jsonDialogButton: 'Zapisz JSON',
        pdfDialogTitle: 'Eksport raportu: format PDF', pdfDialogButton: 'Zapisz PDF',
        allFiles: 'Wszystkie pliki'
    }
}

let currentLanguage = 'en'

function normalizeLanguage(language) {
    const code = String(language || 'en').slice(0, 2).toLowerCase()
    return strings[code] ? code : 'en'
}

function setLanguage(language) {
    currentLanguage = normalizeLanguage(language)
    return currentLanguage
}

function getLanguage() {
    return currentLanguage
}

function t(key) {
    return strings[currentLanguage][key] || strings.en[key] || key
}

module.exports = {
    setLanguage,
    getLanguage,
    normalizeLanguage,
    t
}
