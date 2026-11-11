import React from "react";
import Icon from "./sub-components/Icon";
import openExternalLink from "./utils/openExternalLink";
import config from "./utils/config";
import { useSettings, LANGUAGES, THEMES } from "../settings/SettingsContext";

function Navbar() {
    const { t, language, setLanguage, theme, setTheme, themeLabel } = useSettings()
    function formatVersion(version) {
        return  version.split(".").splice(0, 2).join(".")
    }
    return (
        <div className="custom-border border-bottom pw-navbar">
            <div className="mb-2">
                <div className='flex justify-between flex-wrap'>
                    <div className="content-center">
                        <div
                            className="content-center pr-2 custom-border border-right cursor-pointer pw-brand"
                            onClick={() => openExternalLink('https://powir.slapbot.me')}
                        >
                            <h4>
                                Powir
                            </h4>
                            <span className="badge ml-1 mt-0-3 text-sm">v{formatVersion(config.version)}</span>
                        </div>
                        <h5 className="content-center ml-2 pw-tagline">{t('app.tagline')}</h5>
                    </div>
                    <div className="content-center">
                        <label className="content-center mr-2 pw-select" title={t('app.language')}>
                            <span className="pw-select-label">{t('app.language')}</span>
                            <select value={language} onChange={event => setLanguage(event.target.value)}>
                                {Object.keys(LANGUAGES).map(code =>
                                    <option key={code} value={code}>{LANGUAGES[code].label}</option>
                                )}
                            </select>
                        </label>
                        <label className="content-center mr-2 pw-select" title={t('app.theme')}>
                            <span className="pw-select-label">{t('app.theme')}</span>
                            <select value={theme} onChange={event => setTheme(event.target.value)}>
                                {THEMES.map(id =>
                                    <option key={id} value={id}>{themeLabel(id)}</option>
                                )}
                            </select>
                        </label>
                        <div className="content-center mr-1">
                            <Icon className="no-border cursor-pointer pw-icon-button"
                                 src="assets/images/github--v1.png"
                                 alt="Github"
                                 onClick={() => openExternalLink('https://github.com/slapbot/powir')}
                            />
                        </div>
                        <div className="content-center">
                            <Icon className="no-border cursor-pointer pw-icon-button"
                                 src="assets/images/twitter--v1.png"
                                 alt="Twitter"
                                 onClick={() => openExternalLink('https://twitter.com/ugupta41')}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
