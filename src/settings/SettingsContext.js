import React, {createContext, useContext, useEffect, useState} from "react";
import {defaults} from 'react-chartjs-2';
import en from '../i18n/locales/en';
import it from '../i18n/locales/it';
import es from '../i18n/locales/es';
import fr from '../i18n/locales/fr';
import pt from '../i18n/locales/pt';
import pl from '../i18n/locales/pl';
import {sendEvent} from '../components/utils/fetcher';

// Lingue disponibili (codice -> nome nativo + dizionario)
export const LANGUAGES = {
    it: {label: 'Italiano', dict: it},
    en: {label: 'English', dict: en},
    es: {label: 'Español', dict: es},
    fr: {label: 'Français', dict: fr},
    pt: {label: 'Português', dict: pt},
    pl: {label: 'Polski', dict: pl}
}

// Temi disponibili: l'originale (PaperCSS) e il moderno in stile Windows 11
export const THEMES = ['original', 'modern-light', 'modern-dark']

const THEME_LABEL_KEYS = {
    'original': 'app.themes.original',
    'modern-light': 'app.themes.modernLight',
    'modern-dark': 'app.themes.modernDark'
}

// Palette dei grafici: l'originale mantiene esattamente i colori di Powir
const PALETTES = {
    'original': {primary: 'red', secondary: 'blue', ac: 'green', battery: 'orange', on: 'blue', off: 'red'},
    'modern-light': {primary: '#c42b1c', secondary: '#005fb8', ac: '#0f7b0f', battery: '#e3a21a', on: '#005fb8', off: '#c42b1c'},
    'modern-dark': {primary: '#ff99a4', secondary: '#60cdff', ac: '#6ccb5f', battery: '#fce100', on: '#60cdff', off: '#ff99a4'}
}

const STORAGE_LANG = 'powir.language'
const STORAGE_THEME = 'powir.theme'

function readStorage(key) {
    try {
        return window.localStorage.getItem(key)
    } catch (e) {
        return null
    }
}

function writeStorage(key, value) {
    try {
        window.localStorage.setItem(key, value)
    } catch (e) {
        // localStorage non disponibile: la preferenza vale solo per la sessione
    }
}

function detectLanguage() {
    const saved = readStorage(STORAGE_LANG)
    if (saved && LANGUAGES[saved]) {
        return saved
    }
    const browserLang = (navigator.language || 'en').slice(0, 2).toLowerCase()
    return LANGUAGES[browserLang] ? browserLang : 'en'
}

function detectTheme() {
    const saved = readStorage(STORAGE_THEME)
    return THEMES.includes(saved) ? saved : 'original'
}

function lookup(dict, path) {
    return path.split('.').reduce((obj, part) => (obj && obj[part] !== undefined ? obj[part] : undefined), dict)
}

// Applica tema: classi su <html>, attiva/disattiva PaperCSS e imposta i default di Chart.js
export function applyTheme(theme) {
    const root = document.documentElement
    const modern = theme !== 'original'
    root.classList.toggle('theme-original', !modern)
    root.classList.toggle('theme-modern', modern)
    root.classList.toggle('theme-dark', theme === 'modern-dark')
    const paper = document.getElementById('paper-css')
    if (paper) {
        paper.disabled = modern
    }
    if (modern) {
        const dark = theme === 'modern-dark'
        defaults.global.defaultFontFamily = '"Segoe UI Variable Text", "Segoe UI", system-ui, sans-serif'
        defaults.global.defaultFontColor = dark ? '#d6d6d6' : '#5c5c5c'
        defaults.scale.gridLines.color = dark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.07)'
        defaults.scale.gridLines.zeroLineColor = dark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)'
    } else {
        defaults.global.defaultFontFamily = 'Neucha'
        defaults.global.defaultFontColor = '#666'
        defaults.scale.gridLines.color = 'rgba(0, 0, 0, 0.1)'
        defaults.scale.gridLines.zeroLineColor = 'rgba(0, 0, 0, 0.25)'
    }
}

const SettingsContext = createContext(null)

export function SettingsProvider(props) {
    const [language, setLanguageState] = useState(detectLanguage)
    const [theme, setThemeState] = useState(() => {
        const initial = detectTheme()
        applyTheme(initial)
        return initial
    })

    useEffect(() => {
        document.documentElement.lang = language
        // Allinea menu e finestre di dialogo di Electron alla lingua scelta
        sendEvent('set-language', {language: language})
    }, [language])

    function setLanguage(value) {
        if (!LANGUAGES[value]) {
            return
        }
        writeStorage(STORAGE_LANG, value)
        setLanguageState(value)
    }

    function setTheme(value) {
        if (!THEMES.includes(value)) {
            return
        }
        writeStorage(STORAGE_THEME, value)
        applyTheme(value)
        setThemeState(value)
    }

    // t('chiave.annidata', fallback): restituisce stringhe o array, con ripiego su inglese
    function t(path, fallback) {
        const value = lookup(LANGUAGES[language].dict, path)
        if (value !== undefined) {
            return value
        }
        const english = lookup(en, path)
        if (english !== undefined) {
            return english
        }
        return fallback !== undefined ? fallback : path
    }

    const value = {
        language,
        setLanguage,
        theme,
        setTheme,
        t,
        palette: PALETTES[theme],
        themeLabel: (id) => t(THEME_LABEL_KEYS[id]),
        // Chiave per rimontare i grafici quando cambiano tema o lingua
        renderKey: theme + '-' + language
    }

    return (
        <SettingsContext.Provider value={value}>
            {props.children}
        </SettingsContext.Provider>
    )
}

export function useSettings() {
    return useContext(SettingsContext)
}
