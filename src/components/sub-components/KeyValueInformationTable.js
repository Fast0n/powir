import React from "react";
import Icon from "./Icon";
import { useSettings } from "../../settings/SettingsContext";

function KeyValueInformationTable(props) {
    const { t } = useSettings()
    function renderInfo(element, index, type) {
        const extraHelp = [
            {
                'popoverHelp': t('table.designCapacityHelp'),
                'spanClass': 'badge bg-blue text-lg'
            },{
                'popoverHelp': t('table.fullChargeHelp'),
                'spanClass': 'badge bg-red text-lg'
            },
        ]
        switch (type) {
            case "batteryInfo":
                switch (index) {
                    case 4:
                    case 5:
                        return <div className="flex">
                            <div>
                                <span className={index === 4 ? extraHelp[0].spanClass : extraHelp[1].spanClass}>
                                    {element}
                                </span>
                            </div>
                            <div className="content-center ml-1">
                                <div className='m-0-important'
                                     popover-right={index === 4 ? extraHelp[0].popoverHelp : extraHelp[1].popoverHelp}
                                >
                                    <Icon className="no-border"
                                         src="assets/images/ios-help.png"
                                         alt="help"
                                    />
                                </div>
                            </div>
                        </div>
                    default:
                        return <p>{element}</p>
                }
            case "systemInfo":
                switch (index) {
                    case 6:
                        return <span className="badge success text-lg">{element}</span>
                    default:
                        return <p>{element}</p>
                }
            default:
                return <p>{element}</p>
        }
    }

    return (
        <div className="pw-card pw-table-card">
            <div className='flex'>
                <Icon className='no-border mr-1' src={props.iconUrl} alt={props.iconAlt}/>
                <h3>{props.heading}</h3>
            </div>
            <span className="text-xs">{t('notes.' + props.info.name, props.info.note)}</span>
            <table>
                <thead>
                <tr>
                    <th>{t('table.key')}</th>
                    <th>{t('table.value')}</th>
                </tr>
                </thead>
                <tbody>
                {props.info.keys.map((keyInfo, index) => {
                    return <tr key={keyInfo}>
                        <td>{keyInfo}</td>
                        <td>{renderInfo(props.info.data[index], index, props.info.name)}</td>
                    </tr>
                })}
                </tbody>
            </table>
        </div>
    )
}

export default KeyValueInformationTable
