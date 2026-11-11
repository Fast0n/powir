export default {
    app: {
        tagline: 'Monitoruj i analizuj swoją baterię!',
        loading: 'Ładowanie...',
        language: 'Język',
        theme: 'Motyw',
        themes: {
            original: 'Oryginalny',
            modernLight: 'Windows 11 · Jasny',
            modernDark: 'Windows 11 · Ciemny'
        }
    },
    nav: {
        information: 'Informacje',
        about: 'O programie',
        actions: 'Akcje',
        links: 'Linki'
    },
    sidebar: {
        madeWith: 'Stworzone z',
        by: 'przez',
        openSource: '100% open source'
    },
    footer: {
        icons8: 'Wielkie podziękowania dla Icons8 za wszystkie piękne ikony',
        iconsModern: 'Ikony: Fluent UI System Icons (Microsoft) i Bootstrap Icons'
    },
    info: {
        batteryInfo: 'Informacje o baterii',
        batteryCapacityHistory: 'Historia pojemności baterii',
        systemInfo: 'Informacje o systemie',
        batteryLifeEstimates: 'Szacowany czas pracy',
        recentUsageTitle: 'Ostatnie zużycie energii i baterii',
        recentUsageNote: 'Stany zasilania i baterii systemu zaobserwowane w ostatnim okresie.',
        recentUsage: 'Ostatnie użycie',
        date: 'Data',
        time: 'Godzina',
        capacityAxis: 'Pojemność baterii ( mWh )',
        lifeAxis: 'Czas pracy ( minuty )',
        usageAxis: 'Użycie ( godziny )',
        percentAxis: 'Poziom baterii (%)'
    },
    table: {
        key: 'Klucz',
        value: 'Wartość',
        designCapacityHelp: 'Ładunek, jaki bateria miała mieścić według projektu.',
        fullChargeHelp: 'Ładunek, jaki bateria może obecnie zmieścić.'
    },
    estimate: {
        atFullCharge: 'Przy pełnym naładowaniu',
        atDesignCapacity: 'Przy pojemności projektowej',
        recentTitle: 'Ostatnie oszacowanie czasu pracy',
        minimum: 'Minimum',
        maximum: 'Maksimum',
        average: 'Średnia',
        none: 'BRAK'
    },
    chart: {
        ac: 'Zasilacz',
        battery: 'Bateria',
        on: 'WŁ.',
        off: 'WYŁ.',
        batteryPercentage: 'Poziom baterii (%)',
        acVsBattery: 'Zasilacz vs Bateria',
        hr: 'godz.',
        minutes: 'min'
    },
    notes: {
        systemInfo: 'Informacje o Twoim systemie',
        batteryInfo: 'Informacje o każdej zainstalowanej baterii',
        powerUsageInfo: 'Stany zasilania z ostatnich kilku dni',
        batteryUsageInfo: 'Rozładowania baterii z ostatnich kilku dni',
        powerUsageHistoryInfo: 'Historia użycia systemu na zasilaczu i na baterii',
        batteryCapacityHistory: 'Historia pojemności baterii systemu',
        batteryLifeHistory: 'Szacowany czas pracy na podstawie zaobserwowanych rozładowań',
        batteryLifeOverallHistory: 'Aktualne oszacowanie czasu pracy na podstawie wszystkich rozładowań od instalacji systemu'
    },
    actions: {
        liteNote: 'Uwaga: akcje są dostępne tylko w aplikacji Electron:',
        pdfTitle: 'Eksportuj raport (PDF)',
        pdfDesc: 'Eksportuj bieżący raport systemu z Powir do formatu PDF:',
        pdfButton: 'Eksportuj PDF',
        jsonTitle: 'Eksportuj dane (JSON)',
        jsonDesc: 'Eksportuj przetworzone przez Powir dane systemu do formatu JSON:',
        jsonButton: 'Eksportuj JSON',
        originalTitle: 'Oryginalny raport',
        originalDesc: 'Wyświetla oryginalny raport wygenerowany przez Windows poleceniem:',
        originalSuffix: 'w terminalu.',
        originalButton: 'Pokaż raport'
    },
    about: {
        whatTitle: 'Czym jest Powir?',
        what1: 'Powir to narzędzie dla Windows 10 do monitorowania i analizowania zużycia energii i baterii w Twoim systemie.',
        what2: 'Dostarcza informacji i statystyk o bieżącym użyciu oraz całej historii zasilania i baterii Twojego systemu.',
        whoTitle: 'Kto go stworzył?',
        who1a: 'Cześć! Jestem',
        who1b: 'i w społecznościach open source występuję jako Slapbot. Często znajdziesz mnie na /r/soccer, gdzie dzielę się zupełnie stronniczymi opiniami, albo przy budowaniu czegoś nowego.',
        who2a: 'Najłatwiej złapać mnie na',
        who2b: 'gdzie piszę o tym, nad czym pracuję — śmiało obserwuj albo napisz wiadomość. :)',
        featuresTitle: 'Co potrafi?',
        features: [
            'Prosty i przejrzysty interfejs z informacjami o baterii i systemie.',
            'Pokazuje zmianę pojemności baterii od instalacji systemu operacyjnego.',
            'Analizuje bieżący i ogólny szacowany czas pracy na baterii.',
            'Oblicza różne statystyki, aby lepiej zrozumieć zużycie energii.',
            'Eksport wszystkich danych w różnych formatach: PDF (aplikacja), JSON (przetworzone), HTML (oryginalny raport).',
            '100% darmowy i w pełni open source, dla pełnej przejrzystości.',
            'W pełni przenośna aplikacja bez instalacji, gotowa do użycia od razu.'
        ],
        whyTitle: 'Dlaczego powstał?',
        reasons: [
            'Na rynku brakowało narzędzia do monitorowania i analizy zasilania oraz baterii.',
            'Dokumentacja w Internecie o sprawdzaniu stanu baterii jest niejasna.',
            'Trzeba było używać terminala, by uruchomić polecenie pokazujące informacje o systemie.',
            'Bazowe API ani raport nie dawały prostych i zrozumiałych wskaźników.'
        ],
        faqTitle: 'FAQ',
        faqs: [
            {q: 'Czy jest całkowicie darmowy?', a: 'Tak, Powir jest w 100% darmowy do pobrania i używania.'},
            {q: 'Czy wyświetlane liczby są w 100% poprawne?', a: 'To zależy: Powir analizuje surowe raporty generowane przez Windows, oblicza statystyki i rysuje wykresy.'},
            {q: 'Jakich narzędzi użyto do stworzenia aplikacji?', a: 'Powir działa jako aplikacja Electron (wbudowany silnik Chromium) i używa React do obsługi interfejsu i danych.'},
            {q: 'Czy udostępnia gdzieś moje dane?', a: 'Nie, Powir nigdy nie wysyła Twoich danych poza Twój komputer, a cały kod źródłowy jest publicznie dostępny do wglądu. Nie wysyła żadnych zapytań do serwera, bo żadnego nie ma — to aplikacja działająca wyłącznie lokalnie.'}
        ]
    },
    links: {
        helpTitle: 'Pomoc',
        helpSubtitle: 'Potrzebujesz pomocy?',
        help: [
            {heading: 'Problemy/Błędy', message: 'Potrzebujesz pomocy z produktem lub chcesz zgłosić błąd? Utwórz zgłoszenie (issue) na GitHubie'},
            {heading: 'Czat/Nowości', message: 'Chcesz podzielić się pomysłem bez rejestracji na GitHubie lub szukasz nowości? Obserwuj mnie na Twitterze: @ugupta41'},
            {heading: 'Opinie/Pytania', message: 'Wolisz klasykę? Napisz do mnie na: ugupta41@gmail.com'}
        ],
        shareTitle: 'Udostępnij',
        shareSubtitle: 'Podoba Ci się? Poleć znajomym :)',
        share: ['Kopiuj link!', 'Napisz tweeta!', 'Udostępnij na Facebooku!', 'Wyślij e-mailem!', 'Udostępnij na LinkedIn!', 'Udostępnij na Reddicie!']
    }
}
