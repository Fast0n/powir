import {Bar, Line, Pie} from "react-chartjs-2";
import React from "react";
import { createData } from "./ChartData";
import { useSettings } from "../../settings/SettingsContext";

function Chart(props) {
    const { t, palette, renderKey } = useSettings()
    function renderChart(info, type, metaData) {
        try {
            return getChart(info, type, metaData)
        } catch (e) {
            console.log(e)
        }
    }
    function getChart(info, type, metaData) {
        let data = createData(info, type, metaData, {t: t, palette: palette})
        let options = {
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: metaData.xLabel
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: metaData.yLabel
                    }
                }]
            }
        }
        // La key forza il rimontaggio del grafico al cambio di tema o lingua
        switch (type) {
            case 'batteryCapacityHistory':
            case 'batteryLifeHistory':
                return <Line key={renderKey} data={data} options={options}/>
            case 'powerUsageInfo':
                if (metaData.type === 'cumulativePie') {
                    return <Pie key={renderKey} data={data} />
                }
                else if(metaData.type === 'cumulativeActiveSuspended') {
                    return <Pie key={renderKey} data={data}/>
                }
                else if (metaData.type === 'dailyBar') {
                    return <Bar key={renderKey} data={data} options={options}/>
                }
                else if (metaData.type === 'dailyLine') {
                    return <Line key={renderKey} data={data} options={options} />
                }
                return <Pie key={renderKey} data={data} />
            default:
                return <Line key={renderKey} data={data} options={options}/>
        }
    }

    return (
        <div className="pw-chart">
            <div className="content-center">
                <div>
                    <h3>{props.heading}</h3>
                    <span className="text-xs content-center">{t('notes.' + props.info.name, props.info.note)}</span>
                </div>
            </div>
            {renderChart(props.info, props.info.name, props.metaData)}
        </div>
    )
}

export default Chart
