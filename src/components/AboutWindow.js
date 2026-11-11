import React from "react";
import Icon from "./sub-components/Icon";
import openExternalLink from "./utils/openExternalLink";
import { useSettings } from "../settings/SettingsContext";

const FEATURE_ICONS = [
    'assets/images/picture.png',
    'assets/images/high-battery.png',
    'assets/images/hourglass--v1.png',
    'assets/images/statistics--v1.png',
    'assets/images/rescan-document.png',
    'assets/images/console--v2.png',
    'assets/images/audio-cable.png'
]

const REASON_ICONS = [
    'assets/images/error.png',
    'assets/images/delete-sign.png',
    'assets/images/iphone-spinner.png',
    'assets/images/api.png'
]

function AboutWindow() {
    const { t } = useSettings()
    let features = t('about.features').map((text, id) => ({id: id, text: text, icon: FEATURE_ICONS[id]}))
    let reasons = t('about.reasons').map((text, id) => ({id: id, text: text, icon: REASON_ICONS[id]}))
    let faqs = t('about.faqs')
    return (
        <div>
            <div className="flex flex-wrap border-bottom mt-3 pb-3 pw-section">
                <div className="w-full">
                    <div className="flex flex-wrap pb-2 border-bottom pw-row">
                        <div className="w-full lg:w-1/2 pw-col">
                            <div className="pw-card">
                                <div className="flex">
                                    <Icon className="no-border mr-2" src="assets/images/windows-client.png" alt='windows-client'/>
                                    <h3>{t('about.whatTitle')}</h3>
                                </div>
                                <div className="p-3">
                                    <p>{t('about.what1')}</p>
                                    <p className='mt-1'>{t('about.what2')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 pw-col">
                            <div className="pw-card">
                                <div className="flex">
                                    <Icon className="no-border mr-2" src="assets/images/so-so.png" alt='so-so'/>
                                    <h3>{t('about.whoTitle')}</h3>
                                </div>
                                <div className="p-3">
                                    <p>{t('about.who1a')}
                                        <button
                                            className='clean-button ml-1 underline mb-0'
                                            onClick={() => openExternalLink('https://slapbot.me/')}>
                                            Ujjwal</button> {t('about.who1b')}</p>
                                    <p className='mt-1'>{t('about.who2a')} <button
                                        className='clean-button ml-1 underline mb-0'
                                        onClick={() => openExternalLink('https://twitter.com/ugupta41')}>
                                        Twitter</button> {t('about.who2b')}</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap pt-2 border-bottom pw-row">
                        <div className="w-full lg:w-1/2 pw-col">
                            <div className="pw-card">
                                <div className="flex flex-wrap">
                                    <Icon className="no-border mr-2" src="assets/images/used-product.png" alt='used-product'/>
                                    <h3>{t('about.featuresTitle')}</h3>
                                </div>
                                <div className="p-1 mt-2">
                                    <ol>
                                        {features.map(item => {
                                            return <li key={item.id} className="mb-1 flex">
                                                <div className='content-center'>
                                                    <Icon className="no-border mr-1" src={item.icon} alt={item.icon}/>
                                                    <p>{item.text}</p>
                                                </div>
                                            </li>
                                        })}
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 pw-col">
                            <div className="pw-card">
                                <div className="flex">
                                    <Icon className="no-border mr-2" src="assets/images/hammer--v1.png" alt='hammer--v1'/>
                                    <h3>{t('about.whyTitle')}</h3>
                                </div>
                                <div className="p-1 mt-2">
                                    <ol>
                                        {reasons.map(item => {
                                            return <li key={item.id} className="mb-1 flex">
                                                <div className='content-center'>
                                                    <Icon className="no-border mr-1" src={item.icon} alt={item.icon} variant="reason"/>
                                                    <p>{item.text}</p>
                                                </div>
                                            </li>
                                        })}
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <div className='mt-2 pw-card pw-faq'>
                        <div className='flex mb-4'>
                            <Icon className="no-border mr-2" src="assets/images/help.png" alt='help'/>
                            <h3>{t('about.faqTitle')}</h3>
                        </div>
                        {faqs.map((faq, index) => {
                            return <div key={index} className='mt-3'>
                                <h4>{faq.q}</h4>
                                <p className='mt-1'>{faq.a}</p>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutWindow
