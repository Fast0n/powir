import React from "react";
import Icon from "./sub-components/Icon";
import openExternalLink from './utils/openExternalLink'
import { useSettings } from "../settings/SettingsContext";

const SHARE_LINKS = [
    {
        'iconUrl': 'assets/images/link.png',
        'url': 'https://powir.slapbot.me'
    },{
        'iconUrl': 'assets/images/twitter-circled.png',
        'url': 'https://twitter.com/intent/tweet?url=powir.slapbot.me&text=Check%20out%20this%20open%20source%20windows%20battery%20monitoring%20app:&hashtags=powir'
    },{
        'iconUrl': 'assets/images/facebook.png',
        'url': 'http://www.facebook.com/sharer.php?s=100&p[title]=Powir&p[url]=powir.slapbot.me'
    },{
        'iconUrl': 'assets/images/email-sign.png',
        'url': 'mailto:?subject=Powir: open source windows based battery monitoring app&amp;body=Check out app at: https://www.powir.slapbot.me'
    },{
        'iconUrl': 'assets/images/linkedin-circled.png',
        'url': 'https://www.linkedin.com/sharing/share-offsite/?url=powir.slapbot.me'
    },{
        'iconUrl': 'assets/images/reddit.png',
        'url': 'https://www.reddit.com/submit?url=https://powir.slapbot.me&title=Powir:%20Open%20Source%20Windows%20Based%20Battery%20Monitoring%20App'
    },
]

const HELP_LINKS = [
    {
        'iconUrl': 'assets/images/repository.png',
        'url': 'https://github.com/slapbot/powir/issues'
    },{
        'iconUrl': 'assets/images/comments.png',
        'url': 'https://twitter.com/ugupta41'
    },{
        'iconUrl': 'assets/images/mail-contact.png',
        'url': 'mailto:ugupta41@gmail.com'
    },
]

function LinksWindow() {
    const { t } = useSettings()
    let shareTexts = t('links.share')
    let helpTexts = t('links.help')
    let shareLinks = SHARE_LINKS.map((link, id) => ({...link, id: id, text: shareTexts[id]}))
    let helpLinks = HELP_LINKS.map((link, id) => ({...link, id: id, heading: helpTexts[id].heading, message: helpTexts[id].message}))

    return (
        <div>
            <div className="flex flex-wrap border-bottom mt-3 pb-3 pw-section">
                <div className="w-full">
                    <div className='border-bottom pb-2 pw-card'>
                        <div className='mt-2 mb-4'>
                            <div className="flex">
                                <Icon className='no-border mr-2' src="assets/images/help.png" alt='help'/>
                                <h3>{t('links.helpTitle')}</h3>
                            </div>
                            <div>
                                <span>{t('links.helpSubtitle')}</span>
                            </div>
                        </div>
                        {helpLinks.map(helpLink => {
                            return <div key={helpLink.id} className='pw-link-row'>
                                <div className='flex mt-2'>
                                    <div className='content-center'>
                                        <Icon className='no-border mr-2' src={helpLink.iconUrl} alt={helpLink.iconUrl}/>
                                        <h4><button
                                            className='clean-button'
                                            onClick={() => openExternalLink(helpLink.url)}>{helpLink.heading}
                                        </button></h4>
                                    </div>
                                </div>
                                <span className='mt-1'>{helpLink.message}</span>
                            </div>
                        })}

                    </div>
                    <div className='pb-2 pw-card'>
                        <div>
                            <div className='mt-2 mb-4'>
                                <div className="flex">
                                    <Icon className='no-border mr-2' src="assets/images/share--v1.png" alt='share--v1'/>
                                    <h3>{t('links.shareTitle')}</h3>
                                </div>
                                <div>
                                    <span>{t('links.shareSubtitle')}</span>
                                </div>
                            </div>
                        </div>
                        <div className='pw-share-grid'>
                            {shareLinks.map(shareLink => {
                                return <div key={shareLink.id} className='flex mt-2 pw-link-row'>
                                    <div className='content-center'>
                                        <Icon className='no-border mr-2' src={shareLink.iconUrl} alt={shareLink.iconUrl}/>
                                        <h4><button className='clean-button' onClick={() => openExternalLink(shareLink.url)}>
                                            {shareLink.text}
                                        </button></h4>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LinksWindow
