import React from "react";
import { useSettings } from "../../settings/SettingsContext";

// Corrispondenza icone PNG (tema Originale) -> icone moderne (tema Windows 11)
// fluent/: Fluent UI System Icons (MIT) - brands/: Bootstrap Icons (MIT)
const MODERN_ICONS = {
    'high-battery.png': 'fluent/battery_9',
    'windows8.png': 'fluent/laptop',
    'lightning-arrow.png': 'fluent/flash',
    'ios-help.png': 'fluent/question_circle',
    'github--v1.png': 'brands/github',
    'twitter--v1.png': 'brands/twitter-x',
    'like--v1.png': 'fluent/heart',
    'copyright.png': 'fluent/person',
    'delete-sign.png': 'fluent/dismiss',
    'pdf.png': 'fluent/document_pdf',
    'code-file.png': 'fluent/braces',
    'select-all.png': 'fluent/document_text',
    'windows-client.png': 'fluent/battery_charge',
    'so-so.png': 'fluent/hand_wave',
    'used-product.png': 'fluent/box',
    'hammer--v1.png': 'fluent/wrench',
    'help.png': 'fluent/question_circle',
    'picture.png': 'fluent/apps_list',
    'hourglass--v1.png': 'fluent/hourglass',
    'statistics--v1.png': 'fluent/data_trending',
    'rescan-document.png': 'fluent/arrow_export_ltr',
    'console--v2.png': 'fluent/code',
    'audio-cable.png': 'fluent/usb_stick',
    'error.png': 'fluent/warning',
    'iphone-spinner.png': 'fluent/prompt',
    'api.png': 'fluent/plug_connected',
    'repository.png': 'fluent/bug',
    'comments.png': 'fluent/chat',
    'mail-contact.png': 'fluent/mail',
    'share--v1.png': 'fluent/share',
    'link.png': 'fluent/link',
    'twitter-circled.png': 'brands/twitter-x',
    'facebook.png': 'brands/facebook',
    'email-sign.png': 'fluent/mail',
    'linkedin-circled.png': 'brands/linkedin',
    'reddit.png': 'brands/reddit'
}

// Eccezione di contesto: nella lista "Perché" il "delete-sign" indica un problema, non "chiudi"
const VARIANTS = {
    'reason:delete-sign.png': 'fluent/dismiss_circle'
}

function Icon(props) {
    const { theme } = useSettings()
    const { src, alt, className, variant, ...rest } = props
    const fileName = String(src).split('/').pop()
    const modern = VARIANTS[(variant || '') + ':' + fileName] || MODERN_ICONS[fileName]

    if (theme === 'original' || !modern) {
        return <img className={className} src={src} alt={alt} {...rest}/>
    }

    // Icona monocromatica via CSS mask: prende il colore dal tema (currentColor)
    const url = 'url("assets/icons/' + modern + '.svg")'
    return (
        <span
            role="img"
            aria-label={alt}
            title={rest.title}
            className={'pw-icon pw-icon-' + modern.split('/')[0] + ' ' + (className || '')}
            style={{WebkitMaskImage: url, maskImage: url}}
            {...rest}
        />
    )
}

export default Icon
