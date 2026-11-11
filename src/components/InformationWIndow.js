import React, { useState, useEffect } from "react";
import Icon from "./sub-components/Icon";
import KeyValueInformationTable from "./sub-components/KeyValueInformationTable";
import Chart from "./sub-components/Chart";
import CurrentBatteryEstimate from "./sub-components/CurrentBatteryEstimate";
import RecentBatteryEstimate from "./sub-components/RecentBatteryEstimate";
import { getReport } from './utils/fetcher'
import { useSettings } from "../settings/SettingsContext";

function InformationWindow() {
    const { t } = useSettings()
    function shouldRenderComponent(component) {
        return dataFetchStatus ? component : <span className="pw-loading">{t('app.loading')}</span>
    }

    const [dataFetchStatus, setDataFetchStatus] = useState(false)
    const [systemInfo, setSystemInfo] = useState({})
    const [batteryInfo, setBatteryInfo] = useState({})
    const [powerUsageInfo, setPowerUsageInfo] = useState({})
    const [batteryUsageInfoData, setBatteryUsageInfoData] = useState({})
    const [batteryCapacityHistory, setBatteryCapacityHistory] = useState({})
    const [batteryLifeHistory, setBatteryLifeHistory] = useState({})
    const [batteryLifeOverallHistory, setBatteryLifeOverallHistory] = useState({})

    function setValues(data) {
        setSystemInfo(data[0])
        setBatteryInfo(data[1])
        setPowerUsageInfo(data[2])
        setBatteryUsageInfoData(data[3])
        setBatteryCapacityHistory(data[5])
        setBatteryLifeHistory(data[6])
        setBatteryLifeOverallHistory(data[7])
        setDataFetchStatus(true)
    }

    useEffect(() => {
        getReport(setValues)
    }, [])

    return (
        <div>
            <div className="flex flex-wrap border-bottom mt-3 pb-3 pw-section">
                <div className="w-full lg:w-1/2 pw-col">
                    { shouldRenderComponent(
                        <KeyValueInformationTable
                            info={batteryInfo}
                            heading={t('info.batteryInfo')}
                            iconUrl={"assets/images/high-battery.png"}
                            iconAlt={"high-battery"}
                        />
                    )}
                </div>
                <div className="w-full lg:w-1/2 pw-col">
                    <div className="border border-primary pw-card">
                        { shouldRenderComponent(
                            <Chart
                                info={batteryCapacityHistory}
                                heading={t('info.batteryCapacityHistory')}
                                metaData={{
                                    xLabel: t('info.date'),
                                    yLabel: t('info.capacityAxis')
                                }}
                            />
                        ) }
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap border-bottom mt-3 pb-3 pw-section">
                <div className="w-full lg:w-1/2 pw-col">
                    { shouldRenderComponent(
                        <KeyValueInformationTable
                            info={systemInfo}
                            heading={t('info.systemInfo')}
                            iconUrl={"assets/images/windows8.png"}
                        />
                    )}
                </div>
                <div className="w-full lg:w-1/2 pw-col">
                    <div className="flex flex-wrap">
                        <div className="w-full mb-3">
                            { shouldRenderComponent(
                                <CurrentBatteryEstimate info={batteryLifeOverallHistory}/>
                            )}
                        </div>
                        <div className="w-full">
                            <div className="border border-primary pw-card">
                                { shouldRenderComponent(
                                    <Chart
                                        info={batteryLifeHistory}
                                        heading={t('info.batteryLifeEstimates')}
                                        metaData={{
                                            xLabel: t('info.date'),
                                            yLabel: t('info.lifeAxis')
                                        }}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap mt-3 pb-3 pw-section">
                <div className="w-full flex flex-wrap pb-2">
                    <div className="w-full lg:w-1/2 pw-col">
                      <div className="pw-card pw-recent">
                        <div className="w-full">
                            <div className="flex">
                                <Icon className='no-border mr-1' src="assets/images/lightning-arrow.png" alt={'lightning-arrow'}/>
                                <h3>{t('info.recentUsageTitle')}</h3>
                            </div>
                            <span className='text-xs'>{t('info.recentUsageNote')}</span>
                        </div>
                        <div className="flex flex-wrap">
                            <div className="w-full mt-4 mr-2">
                                { shouldRenderComponent(
                                    <Chart
                                        info={powerUsageInfo}
                                        heading={""}
                                        metaData={{
                                            xLabel: t('info.date'),
                                            yLabel: t('info.usageAxis'),
                                            type:'dailyBar'
                                        }}
                                    />
                                )}
                            </div>
                            <div className="w-full">
                                <div className="w-full flex flex-wrap">
                                    <div className="w-1/2 mt-4">
                                        { shouldRenderComponent(
                                            <Chart
                                                info={powerUsageInfo}
                                                heading={""}
                                                metaData={{
                                                    type:'cumulativePie'
                                                }}
                                            />
                                        )}
                                    </div>
                                    <div className="w-1/2 mt-4">
                                        { shouldRenderComponent(
                                            <Chart
                                                info={powerUsageInfo}
                                                heading={""}
                                                metaData={{
                                                    type:'cumulativeActiveSuspended'
                                                }}
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full lg:w-1/2 pw-col">
                        <div className="flex flex-wrap">
                            <div className="w-full mb-3">
                                { shouldRenderComponent(
                                    <RecentBatteryEstimate info={batteryUsageInfoData}/>
                                )}
                            </div>

                            <div className="w-full mt-4 border border-primary pw-card">
                                { shouldRenderComponent(
                                    <Chart
                                        info={powerUsageInfo}
                                        heading={t('info.recentUsage')}
                                        metaData={{
                                            xLabel: t('info.time'),
                                            yLabel: t('info.percentAxis'),
                                            type:'dailyLine'
                                        }}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InformationWindow