import React from "react";
import Icon from "./sub-components/Icon";
import openExternalLink from "./utils/openExternalLink";
import { useSettings } from "../settings/SettingsContext";

function Footer() {
    const { t, theme } = useSettings()
    const modern = theme !== 'original'
    return (
        <div className="custom-border border-top pw-footer">
            <div className='mt-2 flex justify-between'>
                <div>
                    <div className="flex">
                        <Icon className='no-border mr-2' src="assets/images/copyright.png" alt="heart"/>
                        <button
                            className="clean-button"
                            onClick={() => openExternalLink("https://slapbot.me")}>
                            Ujjwal Gupta (Slapbot)
                        </button>
                    </div>
                </div>
                <div>
                    {modern
                        ? <button
                            className='clean-button' onClick={() => openExternalLink("https://github.com/microsoft/fluentui-system-icons")}>
                            {t('footer.iconsModern')}
                        </button>
                        : <button
                            className='clean-button' onClick={() => openExternalLink("https://icons8.com/")}>
                            {t('footer.icons8')}
                        </button>
                    }
                </div>
            </div>
        </div>
    )
}

export default Footer
