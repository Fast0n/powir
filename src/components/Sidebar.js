import React, {useState, useEffect} from "react";
import Icon from "./sub-components/Icon";
import SidebarRow from "./sub-components/SidebarRow";
import openExternalLink from "./utils/openExternalLink";
import { useSettings } from "../settings/SettingsContext";

function Sidebar(props) {
    const { t } = useSettings()
    // I nomi delle voci sono chiavi di traduzione
    const [sidebarRows, setSideBarRows] = useState([
        {
            'index': 0,
            'name': 'nav.information',
            'rootClass': 'mt-6',
            'liClass': 'mb-3',
            'spanClass': 'border border-primary p-1 pw-nav-active'
        },{
            'index': 1,
            'name': 'nav.about',
            'rootClass': '',
            'liClass': '',
            'spanClass': ''
        },{
            'index': 2,
            'name': 'nav.actions',
            'rootClass': '',
            'liClass': '',
            'spanClass': ''
        },{
            'index': 3,
            'name': 'nav.links',
            'rootClass': '',
            'liClass': '',
            'spanClass': ''
        }
    ])
    function notifyBody(sidebarIndex) {
        setSideBarRows(sidebarRows.map((item, index) => {
            if (index === sidebarIndex) {
                return {...item, liClass: 'mt-3 mb-3', spanClass: 'border border-primary p-1 pw-nav-active'}
            }
            return {...item, liClass: '', spanClass: ''}
        }))
        props.notifyContentWindow(sidebarIndex)
    }

    // Se la sezione cambia dall'esterno (es. "Esporta PDF" torna a Informazioni) riallinea l'evidenziazione
    useEffect(() => {
        if (props.currentSection === undefined) {
            return
        }
        setSideBarRows(rows => {
            const activeIndex = rows.findIndex(item => item.spanClass)
            if (activeIndex === props.currentSection) {
                return rows
            }
            return rows.map((item, index) => index === props.currentSection
                ? {...item, liClass: 'mt-3 mb-3', spanClass: 'border border-primary p-1 pw-nav-active'}
                : {...item, liClass: '', spanClass: ''})
        })
    }, [props.currentSection])

    return (
        <div className="fixed pw-sidebar">
            <ul>
                {sidebarRows.map(
                    item => <SidebarRow key={item.index} value={{...item, name: t(item.name)}} notifyBody={notifyBody}/>
                )}
            </ul>
            <div className="border-top mt-8 pt-8 pw-sidebar-credits">
                <p>{t('sidebar.madeWith')}</p>
                <Icon className='no-border' src="assets/images/like--v1.png" alt="heart" />
                <p>{t('sidebar.by')} <button className='clean-button underline' onClick={() => openExternalLink("https://slapbot.me")}>
                    Slapbot
                </button></p>
                <p className="text-xs sidebar-footnote">{t('sidebar.openSource')}</p>
            </div>
        </div>
    )
}

export default Sidebar
