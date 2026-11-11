export default {
    app: {
        tagline: 'Surveillez et analysez votre batterie !',
        loading: 'Chargement...',
        language: 'Langue',
        theme: 'Thème',
        themes: {
            original: 'Original',
            modernLight: 'Windows 11 · Clair',
            modernDark: 'Windows 11 · Sombre'
        }
    },
    nav: {
        information: 'Informations',
        about: 'À propos',
        actions: 'Actions',
        links: 'Liens'
    },
    sidebar: {
        madeWith: 'Fait avec',
        by: 'par',
        openSource: '100 % open source'
    },
    footer: {
        icons8: 'Un grand merci à Icons8 pour toutes ces jolies icônes',
        iconsModern: 'Icônes : Fluent UI System Icons (Microsoft) et Bootstrap Icons'
    },
    info: {
        batteryInfo: 'Informations sur la batterie',
        batteryCapacityHistory: 'Historique de capacité de la batterie',
        systemInfo: 'Informations système',
        batteryLifeEstimates: "Estimations d'autonomie",
        recentUsageTitle: "Utilisation récente de l'alimentation et de la batterie",
        recentUsageNote: "États d'alimentation et de batterie du système observés sur la période récente.",
        recentUsage: 'Utilisation récente',
        date: 'Date',
        time: 'Heure',
        capacityAxis: 'Capacité de la batterie ( mWh )',
        lifeAxis: 'Autonomie ( minutes )',
        usageAxis: 'Utilisation ( heures )',
        percentAxis: 'Pourcentage de batterie'
    },
    table: {
        key: 'Clé',
        value: 'Valeur',
        designCapacityHelp: 'Charge que la batterie a été conçue pour contenir.',
        fullChargeHelp: 'Charge que la batterie peut contenir actuellement.'
    },
    estimate: {
        atFullCharge: 'À pleine charge',
        atDesignCapacity: 'À capacité nominale',
        recentTitle: "Estimation récente de l'autonomie",
        minimum: 'Minimum',
        maximum: 'Maximum',
        average: 'Moyenne',
        none: 'N/D'
    },
    chart: {
        ac: 'Secteur',
        battery: 'Batterie',
        on: 'ALLUMÉ',
        off: 'ÉTEINT',
        batteryPercentage: 'Pourcentage de batterie',
        acVsBattery: 'Secteur vs Batterie',
        hr: 'h',
        minutes: 'minutes'
    },
    notes: {
        systemInfo: 'Informations sur votre système',
        batteryInfo: 'Informations sur chaque batterie installée',
        powerUsageInfo: "États d'alimentation des derniers jours",
        batteryUsageInfo: 'Décharges de la batterie des derniers jours',
        powerUsageHistoryInfo: "Historique d'utilisation du système sur secteur et sur batterie",
        batteryCapacityHistory: 'Historique de la capacité de charge des batteries',
        batteryLifeHistory: "Estimations d'autonomie basées sur les décharges observées",
        batteryLifeOverallHistory: "Estimation actuelle de l'autonomie basée sur toutes les décharges observées depuis l'installation du système"
    },
    actions: {
        liteNote: "Remarque : les actions ne sont disponibles que dans l'application Electron :",
        pdfTitle: 'Exporter le rapport (PDF)',
        pdfDesc: 'Exportez au format PDF le rapport actuel de votre système généré par Powir :',
        pdfButton: 'Exporter en PDF',
        jsonTitle: 'Exporter les données (JSON)',
        jsonDesc: 'Exportez au format JSON les données de votre système analysées et traitées par Powir :',
        jsonButton: 'Exporter en JSON',
        originalTitle: 'Rapport original',
        originalDesc: 'Affiche le rapport original généré par Windows avec la commande :',
        originalSuffix: 'dans le terminal.',
        originalButton: 'Afficher le rapport'
    },
    about: {
        whatTitle: "Qu'est-ce que Powir ?",
        what1: "Powir est un outil pour Windows 10 qui surveille et analyse la consommation d'énergie et de batterie de votre système.",
        what2: "Il vous fournit des informations et des statistiques sur l'utilisation actuelle et l'historique complet de l'alimentation et de la batterie de votre système.",
        whoTitle: "Qui l'a créé ?",
        who1a: 'Salut ! Je suis',
        who1b: "et on me connaît sous le nom de Slapbot dans les communautés open source. Vous me trouverez souvent à donner mes avis totalement partiaux sur /r/soccer ou occupé à créer de nouvelles choses.",
        who2a: 'Le plus simple pour me joindre, c’est',
        who2b: "où je publie des nouvelles de mes projets : n'hésitez pas à me suivre ou à m'écrire en privé. :)",
        featuresTitle: 'Que fait-il ?',
        features: [
            'Une interface simple et épurée pour afficher les informations de votre batterie et de votre système.',
            "Montre l'évolution de la capacité de la batterie depuis l'installation du système.",
            "Analyse l'autonomie estimée actuelle et globale de votre système.",
            "Calcule diverses statistiques pour mieux comprendre votre consommation d'énergie.",
            'Exporte toutes les données dans plusieurs formats : PDF (app), JSON (traité), HTML (rapport original).',
            '100 % gratuit et entièrement open source, pour une transparence totale.',
            "Application entièrement portable, sans installation : prête à l'emploi."
        ],
        whyTitle: 'Pourquoi le créer ?',
        reasons: [
            "Aucun outil de surveillance et d'analyse de l'alimentation et de la batterie n'existait sur le marché.",
            "La documentation en ligne sur la lecture de l'état de la batterie est obscure.",
            "Il fallait utiliser le terminal pour lancer une commande affichant les informations du système.",
            "L'API ou le rapport sous-jacent ne fournissait aucune métrique simple et compréhensible."
        ],
        faqTitle: 'FAQ',
        faqs: [
            {q: 'Est-ce entièrement gratuit ?', a: 'Oui, Powir est 100 % gratuit à télécharger et à utiliser.'},
            {q: 'Les chiffres affichés sont-ils exacts à 100 % ?', a: 'Cela dépend : Powir analyse les rapports bruts générés par Windows, calcule les différentes statistiques et trace les graphiques.'},
            {q: "Quels outils ont servi à créer l'application ?", a: "Powir est une application Electron (moteur web Chromium intégré) et utilise React pour l'interface et le flux de données."},
            {q: 'Partage-t-il mes données ?', a: "Non, Powir ne partage jamais vos données en dehors de votre ordinateur, et tout le code source est en ligne pour que chacun puisse le vérifier. Il n'envoie aucune requête à un serveur, puisqu'il n'y en a pas : c'est une application entièrement locale."}
        ]
    },
    links: {
        helpTitle: 'Aide',
        helpSubtitle: "Besoin d'aide ?",
        help: [
            {heading: 'Problèmes/Bugs', message: "Besoin d'aide avec le produit ou envie de signaler un bug ? Ouvrez une issue sur GitHub"},
            {heading: 'Discussion/Nouveautés', message: "Envie de partager une idée sans vous inscrire sur GitHub ou de suivre les nouveautés ? Suivez-moi sur Twitter : @ugupta41"},
            {heading: 'Avis/Questions', message: "Old school ? Écrivez-moi à : ugupta41@gmail.com"}
        ],
        shareTitle: 'Partager',
        shareSubtitle: 'Vous aimez ? Faites-le connaître à vos amis :)',
        share: ['Copier le lien !', 'Tweetez-le !', 'Partager sur Facebook !', 'Envoyer par e-mail !', 'Partager sur LinkedIn !', 'Partager sur Reddit !']
    }
}
