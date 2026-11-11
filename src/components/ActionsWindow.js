import React from "react";
import Icon from "./sub-components/Icon";
import { sendEvent } from './utils/fetcher'
import config from './utils/config'
import { useSettings } from "../settings/SettingsContext";

function ActionsWindow(props) {
    const { t } = useSettings()
    function actionsNote() {
        return config.liteMode ? 'border-bottom pb-4' : 'hidden'
    }
    function showOriginalReport() {
        sendEvent("show-original-report", {status: true})
    }
    function exportJSON() {
        sendEvent("export-JSON-data", {status: true})
    }
    function exportPDF() {
        props.toggleInformationWindow()
    }
    return (
        <div>
            <div className="flex flex-wrap border-bottom mt-3 pb-3 pw-section">
                <div className="w-full">
                    <h3 className={actionsNote()}>{t('actions.liteNote')} <a href="https://github.com/SlapBot/powir">Powir</a></h3>
                    <div className='pt-4 pb-6 border-bottom pw-card pw-action'>
                        <div className="flex">
                            <Icon className='no-border mr-2' src="assets/images/pdf.png" alt='pdf'/>
                            <h3>{t('actions.pdfTitle')}</h3>
                        </div>
                        <p className='mt-2'>
                            {t('actions.pdfDesc')}
                        </p>
                        <button className="mt-4 btn-success" onClick={exportPDF} disabled={config.liteMode}>{t('actions.pdfButton')}</button>
                    </div>
                    <div className='pt-4 pb-6 border-bottom pw-card pw-action'>
                        <div className="flex">
                            <Icon className='no-border mr-2' src="assets/images/code-file.png" alt='code-file'/>
                            <h3>{t('actions.jsonTitle')}</h3>
                        </div>
                        <p className='mt-2'>
                            {t('actions.jsonDesc')}
                        </p>
                        <button className="mt-4 btn-secondary" onClick={exportJSON} disabled={config.liteMode}>{t('actions.jsonButton')}</button>
                    </div>
                    <div className='pt-4 pb-6 pw-card pw-action'>
                        <div className="flex">
                            <Icon className='no-border mr-2' src="assets/images/select-all.png" alt='select-all'/>
                            <h3>{t('actions.originalTitle')}</h3>
                        </div>
                        <p className='mt-2'>
                            {t('actions.originalDesc')}
                            <kbd className='ml-1'>powercfg /batteryreport</kbd> {t('actions.originalSuffix')}
                        </p>
                        <button className="mt-4 btn-warning" onClick={showOriginalReport} disabled={config.liteMode}>{t('actions.originalButton')}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActionsWindow
