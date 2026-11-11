export default {
    app: {
        tagline: 'Monitora e analizza la tua batteria!',
        loading: 'Caricamento...',
        language: 'Lingua',
        theme: 'Tema',
        themes: {
            original: 'Originale',
            modernLight: 'Windows 11 · Chiaro',
            modernDark: 'Windows 11 · Scuro'
        }
    },
    nav: {
        information: 'Informazioni',
        about: 'Su Powir',
        actions: 'Azioni',
        links: 'Link'
    },
    sidebar: {
        madeWith: 'Fatto con',
        by: 'da',
        openSource: '100% open source'
    },
    footer: {
        icons8: 'Un grazie a Icons8 per tutte le splendide icone',
        iconsModern: 'Icone: Fluent UI System Icons (Microsoft) e Bootstrap Icons'
    },
    info: {
        batteryInfo: 'Informazioni batteria',
        batteryCapacityHistory: 'Storico capacità batteria',
        systemInfo: 'Informazioni di sistema',
        batteryLifeEstimates: 'Stime di autonomia',
        recentUsageTitle: 'Utilizzo recente di alimentazione e batteria',
        recentUsageNote: 'Stati di alimentazione e batteria del sistema osservati nel periodo recente.',
        recentUsage: 'Utilizzo recente',
        date: 'Data',
        time: 'Ora',
        capacityAxis: 'Capacità batteria ( mWh )',
        lifeAxis: 'Autonomia ( minuti )',
        usageAxis: 'Utilizzo ( ore )',
        percentAxis: 'Percentuale batteria'
    },
    table: {
        key: 'Voce',
        value: 'Valore',
        designCapacityHelp: 'Carica che la batteria è stata progettata per contenere.',
        fullChargeHelp: 'Carica che la batteria riesce a contenere oggi.'
    },
    estimate: {
        atFullCharge: 'A carica completa',
        atDesignCapacity: 'A capacità di progetto',
        recentTitle: 'Stima autonomia recente',
        minimum: 'Minimo',
        maximum: 'Massimo',
        average: 'Media',
        none: 'N/D'
    },
    chart: {
        ac: 'Rete',
        battery: 'Batteria',
        on: 'ACCESO',
        off: 'SPENTO',
        batteryPercentage: 'Percentuale batteria',
        acVsBattery: 'Rete vs Batteria',
        hr: 'h',
        minutes: 'minuti'
    },
    notes: {
        systemInfo: 'Informazioni sul tuo sistema',
        batteryInfo: 'Informazioni su ogni batteria installata',
        powerUsageInfo: 'Stati di alimentazione degli ultimi giorni',
        batteryUsageInfo: 'Consumi della batteria degli ultimi giorni',
        powerUsageHistoryInfo: 'Storico di utilizzo del sistema a rete e a batteria',
        batteryCapacityHistory: 'Storico della capacità di carica delle batterie',
        batteryLifeHistory: 'Stime di autonomia basate sui consumi osservati',
        batteryLifeOverallHistory: "Stima attuale dell'autonomia basata su tutti i consumi osservati dall'installazione del sistema"
    },
    actions: {
        liteNote: "Nota: le azioni sono disponibili solo nell'app Electron:",
        pdfTitle: 'Esporta report (PDF)',
        pdfDesc: 'Esporta in PDF il report attuale del tuo sistema generato da Powir:',
        pdfButton: 'Esporta PDF',
        jsonTitle: 'Esporta dati (JSON)',
        jsonDesc: 'Esporta in JSON i dati del tuo sistema analizzati ed elaborati da Powir:',
        jsonButton: 'Esporta JSON',
        originalTitle: 'Report originale',
        originalDesc: 'Mostra il report originale generato da Windows con il comando:',
        originalSuffix: 'nel terminale.',
        originalButton: 'Mostra report'
    },
    about: {
        whatTitle: "Cos'è Powir?",
        what1: 'Powir è uno strumento per Windows 10 che monitora e analizza i consumi di alimentazione e batteria del tuo sistema.',
        what2: "Ti fornisce informazioni e statistiche sull'utilizzo attuale e sullo storico complessivo di alimentazione e batteria del tuo sistema.",
        whoTitle: "Chi l'ha creato?",
        who1a: 'Ciao! Sono',
        who1b: 'e nelle community open source mi faccio chiamare Slapbot. Mi trovi spesso a dire la mia, in modo del tutto di parte, su /r/soccer o impegnato a costruire cose nuove.',
        who2a: 'Il modo più semplice per contattarmi è',
        who2b: 'dove pubblico aggiornamenti su ciò a cui lavoro: seguimi o scrivimi in privato. :)',
        featuresTitle: 'Cosa fa?',
        features: [
            "Un'interfaccia semplice e pulita con le informazioni su batteria e sistema.",
            "Mostra come è cambiata la capacità della batteria dall'installazione del sistema operativo.",
            "Analizza l'autonomia stimata attuale e complessiva del tuo sistema.",
            'Calcola diverse statistiche per capire meglio i tuoi consumi.',
            'Esporta tutti i dati in vari formati: PDF (app), JSON (elaborato), HTML (report originale).',
            '100% gratuito e completamente open source, per la massima trasparenza.',
            'App totalmente portatile: nessuna installazione, pronta all’uso.'
        ],
        whyTitle: 'Perché è nato?',
        reasons: [
            'Sul mercato mancava del tutto uno strumento di monitoraggio e analisi di alimentazione e batteria.',
            'La documentazione online su come leggere lo stato della batteria è poco chiara.',
            'Serviva usare il terminale per lanciare un comando che mostrasse le informazioni di sistema.',
            "L'API o il report di base non offrivano metriche semplici e comprensibili."
        ],
        faqTitle: 'Domande frequenti',
        faqs: [
            {q: 'È completamente gratuito?', a: 'Sì, Powir è gratuito al 100% da scaricare e usare.'},
            {q: 'I numeri mostrati sono corretti al 100%?', a: 'Dipende: Powir analizza i report grezzi generati da Windows, calcola le varie statistiche e disegna i grafici.'},
            {q: "Con quali strumenti è stata creata l'app?", a: "Powir è un'app Electron (motore Chromium integrato) e usa React per l'interfaccia e la gestione dei dati."},
            {q: 'Condivide i miei dati da qualche parte?', a: "No, Powir non condivide mai i tuoi dati al di fuori del tuo computer e tutto il codice sorgente è online, verificabile da chiunque. Non invia richieste a nessun server, perché non ne esiste uno: è un'app interamente lato client."}
        ]
    },
    links: {
        helpTitle: 'Aiuto',
        helpSubtitle: 'Ti serve una mano?',
        help: [
            {heading: 'Problemi/Bug', message: 'Ti serve aiuto con il prodotto o vuoi segnalare un bug? Apri pure una issue su GitHub'},
            {heading: 'Chat/Aggiornamenti', message: 'Vuoi dare un suggerimento senza registrarti su GitHub o cerchi aggiornamenti? Seguimi su Twitter: @ugupta41'},
            {heading: 'Feedback/Richieste', message: "Vecchia scuola? Scrivimi un'email a: ugupta41@gmail.com"}
        ],
        shareTitle: 'Condividi',
        shareSubtitle: 'Ti è piaciuto? Fallo conoscere ai tuoi amici :)',
        share: ['Copia link!', 'Twittalo!', 'Condividi su Facebook!', 'Invia per email!', 'Condividi su LinkedIn!', 'Condividi su Reddit!']
    }
}
