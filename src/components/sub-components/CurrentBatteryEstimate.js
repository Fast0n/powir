import React from "react";
import { useSettings } from "../../settings/SettingsContext";

function CurrentBatteryEstimate(props) {
    const { t } = useSettings()
    // Le chiavi 1 e 3 sono fisse nello scraper: "ACTIVE (AT FULL CHARGE)" e "ACTIVE (AT DESIGN CAPACITY)"
    function renderLabel(index) {
        return index === 1 ? t('estimate.atFullCharge') : t('estimate.atDesignCapacity')
    }
    return (
        <div className="pb-4 border-bottom pw-card pw-estimate">
            <div className="pb-2">
                <h4>{props.info.data[0][0]}</h4>
                <span className="text-xs">
                    {t('notes.' + props.info.name, props.info.note)}
                </span>
            </div>
            <div className="flex flex-wrap">
                <div className="mr-1 flex">
                    <h5 className="mr-1">{renderLabel(1)}:</h5>
                    <span className="badge bg-red">{props.info.data[0][1]}</span>
                </div>
                <div className="flex">
                    <h5 className="mr-1">{renderLabel(3)}:</h5>
                    <span className="badge bg-blue">{props.info.data[0][3]}</span>
                </div>
            </div>
        </div>
    )
}

export default CurrentBatteryEstimate
