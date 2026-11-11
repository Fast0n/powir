export default {
    app: {
        tagline: '¡Monitoriza y analiza tu batería!',
        loading: 'Cargando...',
        language: 'Idioma',
        theme: 'Tema',
        themes: {
            original: 'Original',
            modernLight: 'Windows 11 · Claro',
            modernDark: 'Windows 11 · Oscuro'
        }
    },
    nav: {
        information: 'Información',
        about: 'Acerca de',
        actions: 'Acciones',
        links: 'Enlaces'
    },
    sidebar: {
        madeWith: 'Hecho con',
        by: 'por',
        openSource: '100 % código abierto'
    },
    footer: {
        icons8: 'Muchas gracias a Icons8 por todos sus preciosos iconos',
        iconsModern: 'Iconos: Fluent UI System Icons (Microsoft) y Bootstrap Icons'
    },
    info: {
        batteryInfo: 'Información de la batería',
        batteryCapacityHistory: 'Historial de capacidad de la batería',
        systemInfo: 'Información del sistema',
        batteryLifeEstimates: 'Estimaciones de autonomía',
        recentUsageTitle: 'Uso reciente de energía y batería',
        recentUsageNote: 'Estados de energía y batería del sistema observados en el periodo reciente.',
        recentUsage: 'Uso reciente',
        date: 'Fecha',
        time: 'Hora',
        capacityAxis: 'Capacidad de la batería ( mWh )',
        lifeAxis: 'Autonomía ( minutos )',
        usageAxis: 'Uso ( horas )',
        percentAxis: 'Porcentaje de batería'
    },
    table: {
        key: 'Clave',
        value: 'Valor',
        designCapacityHelp: 'Carga que la batería fue diseñada para almacenar.',
        fullChargeHelp: 'Carga que la batería puede almacenar actualmente.'
    },
    estimate: {
        atFullCharge: 'Con carga completa',
        atDesignCapacity: 'Con capacidad de diseño',
        recentTitle: 'Estimación reciente de autonomía',
        minimum: 'Mínimo',
        maximum: 'Máximo',
        average: 'Promedio',
        none: 'N/D'
    },
    chart: {
        ac: 'CA',
        battery: 'Batería',
        on: 'ENCENDIDO',
        off: 'APAGADO',
        batteryPercentage: 'Porcentaje de batería',
        acVsBattery: 'CA vs Batería',
        hr: 'h',
        minutes: 'minutos'
    },
    notes: {
        systemInfo: 'Información sobre tu sistema',
        batteryInfo: 'Información sobre cada batería instalada',
        powerUsageInfo: 'Estados de energía de los últimos días',
        batteryUsageInfo: 'Descargas de batería de los últimos días',
        powerUsageHistoryInfo: 'Historial de uso del sistema con CA y con batería',
        batteryCapacityHistory: 'Historial de capacidad de carga de las baterías',
        batteryLifeHistory: 'Estimaciones de autonomía basadas en las descargas observadas',
        batteryLifeOverallHistory: 'Estimación actual de autonomía basada en todas las descargas observadas desde la instalación del sistema'
    },
    actions: {
        liteNote: 'Nota: las acciones solo están disponibles en la app de Electron:',
        pdfTitle: 'Exportar informe (PDF)',
        pdfDesc: 'Exporta en PDF el informe actual de tu sistema generado por Powir:',
        pdfButton: 'Exportar PDF',
        jsonTitle: 'Exportar datos (JSON)',
        jsonDesc: 'Exporta en JSON los datos de tu sistema analizados y procesados por Powir:',
        jsonButton: 'Exportar JSON',
        originalTitle: 'Informe original',
        originalDesc: 'Muestra el informe original generado por Windows con el comando:',
        originalSuffix: 'en el terminal.',
        originalButton: 'Mostrar informe'
    },
    about: {
        whatTitle: '¿Qué es Powir?',
        what1: 'Powir es una herramienta para Windows 10 que monitoriza y analiza el uso de energía y batería de tu sistema.',
        what2: 'Te ofrece información y estadísticas sobre el uso actual y el historial completo de energía y batería de tu sistema.',
        whoTitle: '¿Quién lo creó?',
        who1a: '¡Hola! Soy',
        who1b: 'y en las comunidades de código abierto me conocen como Slapbot. Me encontrarás a menudo dando mis opiniones totalmente parciales en /r/soccer o construyendo cosas nuevas.',
        who2a: 'La forma más fácil de contactarme es',
        who2b: 'donde publico novedades sobre lo que estoy haciendo; sígueme o escríbeme un mensaje privado. :)',
        featuresTitle: '¿Qué hace?',
        features: [
            'Una interfaz sencilla y limpia con la información de tu batería y sistema.',
            'Muestra cómo ha cambiado la capacidad de la batería desde que se instaló el sistema operativo.',
            'Analiza la autonomía estimada actual y global de tu sistema.',
            'Calcula diversas estadísticas para entender mejor tu consumo de energía.',
            'Exporta todos los datos en varios formatos: PDF (app), JSON (procesado), HTML (informe original).',
            '100 % gratuito y de código abierto, para una transparencia total.',
            'App totalmente portátil, sin instalación: lista para usar.'
        ],
        whyTitle: '¿Por qué crearlo?',
        reasons: [
            'No existía en el mercado ninguna herramienta de monitorización y análisis de energía y batería.',
            'La documentación en Internet sobre cómo consultar el estado de la batería es confusa.',
            'Había que usar el terminal para ejecutar un comando que mostrara la información del sistema.',
            'La API o el informe subyacente no ofrecían métricas sencillas y comprensibles.'
        ],
        faqTitle: 'Preguntas frecuentes',
        faqs: [
            {q: '¿Es totalmente gratuito?', a: 'Sí, Powir es 100 % gratuito para descargar y usar.'},
            {q: '¿Los números mostrados son 100 % correctos?', a: 'Depende: Powir analiza los informes generados por Windows, calcula las distintas estadísticas y dibuja los gráficos.'},
            {q: '¿Con qué herramientas se creó la app?', a: 'Powir funciona como app de Electron (motor web Chromium integrado) y usa React para la interfaz y el flujo de datos.'},
            {q: '¿Comparte mis datos con alguien?', a: 'No, Powir nunca comparte tus datos fuera de tu equipo y todo el código fuente está publicado para que cualquiera lo revise. De hecho, no hace peticiones a ningún servidor porque no existe ninguno: es una app totalmente local.'}
        ]
    },
    links: {
        helpTitle: 'Ayuda',
        helpSubtitle: '¿Necesitas ayuda?',
        help: [
            {heading: 'Problemas/Errores', message: '¿Necesitas ayuda con el producto o quieres informar de un error? Abre una issue en GitHub'},
            {heading: 'Chat/Novedades', message: '¿Quieres aportar una idea sin registrarte en GitHub o buscas novedades? Sígueme en Twitter: @ugupta41'},
            {heading: 'Comentarios/Consultas', message: '¿De la vieja escuela? Escríbeme a: ugupta41@gmail.com'}
        ],
        shareTitle: 'Compartir',
        shareSubtitle: '¿Te ha gustado? Compártelo con tus amigos :)',
        share: ['¡Copiar enlace!', '¡Tuitéalo!', '¡Compartir en Facebook!', '¡Enviar por correo!', '¡Compartir en LinkedIn!', '¡Compartir en Reddit!']
    }
}
