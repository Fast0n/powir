export default {
    app: {
        tagline: 'Monitorize e analise a sua bateria!',
        loading: 'A carregar...',
        language: 'Idioma',
        theme: 'Tema',
        themes: {
            original: 'Original',
            modernLight: 'Windows 11 · Claro',
            modernDark: 'Windows 11 · Escuro'
        }
    },
    nav: {
        information: 'Informações',
        about: 'Sobre',
        actions: 'Ações',
        links: 'Ligações'
    },
    sidebar: {
        madeWith: 'Feito com',
        by: 'por',
        openSource: '100 % open source'
    },
    footer: {
        icons8: 'Muito obrigado à Icons8 por todos os ícones fantásticos',
        iconsModern: 'Ícones: Fluent UI System Icons (Microsoft) e Bootstrap Icons'
    },
    info: {
        batteryInfo: 'Informações da bateria',
        batteryCapacityHistory: 'Histórico da capacidade da bateria',
        systemInfo: 'Informações do sistema',
        batteryLifeEstimates: 'Estimativas de autonomia',
        recentUsageTitle: 'Utilização recente de energia e bateria',
        recentUsageNote: 'Estados de energia e bateria do sistema observados no período recente.',
        recentUsage: 'Utilização recente',
        date: 'Data',
        time: 'Hora',
        capacityAxis: 'Capacidade da bateria ( mWh )',
        lifeAxis: 'Autonomia ( minutos )',
        usageAxis: 'Utilização ( horas )',
        percentAxis: 'Percentagem da bateria'
    },
    table: {
        key: 'Chave',
        value: 'Valor',
        designCapacityHelp: 'Carga que a bateria foi concebida para armazenar.',
        fullChargeHelp: 'Carga que a bateria consegue armazenar atualmente.'
    },
    estimate: {
        atFullCharge: 'Com carga completa',
        atDesignCapacity: 'Com capacidade de origem',
        recentTitle: 'Estimativa recente de autonomia',
        minimum: 'Mínimo',
        maximum: 'Máximo',
        average: 'Média',
        none: 'N/D'
    },
    chart: {
        ac: 'Corrente',
        battery: 'Bateria',
        on: 'LIGADO',
        off: 'DESLIGADO',
        batteryPercentage: 'Percentagem da bateria',
        acVsBattery: 'Corrente vs Bateria',
        hr: 'h',
        minutes: 'minutos'
    },
    notes: {
        systemInfo: 'Informações sobre o seu sistema',
        batteryInfo: 'Informações sobre cada bateria instalada',
        powerUsageInfo: 'Estados de energia dos últimos dias',
        batteryUsageInfo: 'Descargas da bateria dos últimos dias',
        powerUsageHistoryInfo: 'Histórico de utilização do sistema na corrente e na bateria',
        batteryCapacityHistory: 'Histórico da capacidade de carga das baterias',
        batteryLifeHistory: 'Estimativas de autonomia com base nas descargas observadas',
        batteryLifeOverallHistory: 'Estimativa atual de autonomia com base em todas as descargas observadas desde a instalação do sistema'
    },
    actions: {
        liteNote: 'Nota: as ações só estão disponíveis na aplicação Electron:',
        pdfTitle: 'Exportar relatório (PDF)',
        pdfDesc: 'Exporte em PDF o relatório atual do seu sistema gerado pelo Powir:',
        pdfButton: 'Exportar PDF',
        jsonTitle: 'Exportar dados (JSON)',
        jsonDesc: 'Exporte em JSON os dados do seu sistema analisados e processados pelo Powir:',
        jsonButton: 'Exportar JSON',
        originalTitle: 'Relatório original',
        originalDesc: 'Mostra o relatório original gerado pelo Windows com o comando:',
        originalSuffix: 'no terminal.',
        originalButton: 'Mostrar relatório'
    },
    about: {
        whatTitle: 'O que é o Powir?',
        what1: 'O Powir é uma ferramenta para Windows 10 que monitoriza e analisa o consumo de energia e bateria do seu sistema.',
        what2: 'Fornece informações e estatísticas sobre a utilização atual e o histórico completo de energia e bateria do seu sistema.',
        whoTitle: 'Quem o criou?',
        who1a: 'Olá! Sou o',
        who1b: 'e nas comunidades open source sou conhecido como Slapbot. Vai encontrar-me muitas vezes a dar opiniões completamente parciais no /r/soccer ou ocupado a criar coisas novas.',
        who2a: 'A forma mais fácil de me contactar é o',
        who2b: 'onde publico novidades sobre aquilo em que estou a trabalhar; siga-me ou envie-me uma mensagem privada. :)',
        featuresTitle: 'O que faz?',
        features: [
            'Uma interface simples e limpa com as informações da bateria e do sistema.',
            'Mostra a evolução da capacidade da bateria desde a instalação do sistema operativo.',
            'Analisa a autonomia estimada atual e global do seu sistema.',
            'Calcula várias estatísticas para compreender melhor o seu consumo de energia.',
            'Exporta todos os dados em vários formatos: PDF (app), JSON (processado), HTML (relatório original).',
            '100 % gratuito e totalmente open source, para total transparência.',
            'Aplicação totalmente portátil, sem instalação: pronta a usar.'
        ],
        whyTitle: 'Porquê criá-lo?',
        reasons: [
            'Não existia no mercado nenhuma ferramenta de monitorização e análise de energia e bateria.',
            'A documentação na Internet sobre como consultar o estado da bateria é pouco clara.',
            'Era preciso usar o terminal para executar um comando que mostrasse as informações do sistema.',
            'A API ou o relatório de base não ofereciam métricas simples e compreensíveis.'
        ],
        faqTitle: 'Perguntas frequentes',
        faqs: [
            {q: 'É totalmente gratuito?', a: 'Sim, o Powir é 100 % gratuito para transferir e utilizar.'},
            {q: 'Os números apresentados estão 100 % corretos?', a: 'Depende: o Powir analisa os relatórios gerados pelo Windows, calcula as várias estatísticas e desenha os gráficos.'},
            {q: 'Que ferramentas foram usadas para criar a aplicação?', a: 'O Powir funciona como aplicação Electron (motor web Chromium integrado) e usa React para a interface e o fluxo de dados.'},
            {q: 'Partilha os meus dados?', a: 'Não, o Powir nunca partilha os seus dados fora do seu computador e todo o código-fonte está online para qualquer pessoa verificar. Aliás, não faz pedidos a nenhum servidor, porque não existe nenhum: é uma aplicação totalmente local.'}
        ]
    },
    links: {
        helpTitle: 'Ajuda',
        helpSubtitle: 'Precisa de ajuda?',
        help: [
            {heading: 'Problemas/Erros', message: 'Precisa de ajuda com o produto ou quer reportar um erro? Abra uma issue no GitHub'},
            {heading: 'Conversa/Novidades', message: 'Quer partilhar uma ideia sem se registar no GitHub ou procura novidades? Siga-me no Twitter: @ugupta41'},
            {heading: 'Sugestões/Questões', message: 'Old school? Escreva-me para: ugupta41@gmail.com'}
        ],
        shareTitle: 'Partilhar',
        shareSubtitle: 'Gostou? Partilhe com os seus amigos :)',
        share: ['Copiar ligação!', 'Tweete sobre isto!', 'Partilhar no Facebook!', 'Enviar por e-mail!', 'Partilhar no LinkedIn!', 'Partilhar no Reddit!']
    }
}
