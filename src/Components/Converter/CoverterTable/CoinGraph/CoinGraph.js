import React, { useEffect, useState } from 'react';
import styles from './CoinGraph.module.css'
import { ExchangeHistory } from '../../../../API/GET/exchange';
import {GraphThemeLine, DateWeekAgo } from '../../../../functions/functions';
import PropTypes from 'prop-types';
import LineGraph from './LineGraph/LineGraph';
import { ExchangeLineOption, ExchangeDatasetLine } from '../../../../Utils/ConstValues';
import ActionBar from './ActionBar/ActionBar';

const CoinGraph = ({ latestDate, pickData, closeGraph }) => {
    const [ChartData, setChartData] = useState(ExchangeDatasetLine("ערך המטבע"))
    const [close, setClose] = useState(false);
    useEffect(() => {
        let DateBeforeLates = DateWeekAgo(latestDate)
        ExchangeHistory(DateBeforeLates, latestDate, pickData)
            .then(data => {
                let Dataset = [...ChartData.datasets][0];
                let datas = [];
                Dataset.data = Object.values(data.rates);
                const labels = Object.keys(data.rates).sort();
                for (let i = 0; i < Object.values(data.rates).length; i++) {
                    datas.push(data.rates[labels[i]].ILS);
                }
                Dataset.data = datas;
                setChartData({ ...ChartData, datasets: [Dataset], labels: labels });
                window.scrollTo(0, document.body.scrollHeight);
            })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pickData]);
    return (
        <div className={styles.coinGraphContainer}>
            <div className={close === false ? styles.scaleInCenter : styles.slideOutBckCenter} onAnimationEnd={close === true ? () => closeGraph() : null}>{pickData}
                <ActionBar StartCloseAnimation={() => setClose(true)} />
                {ChartData.labels.length > 0 ?
                    <div className={styles.chartline} style={GraphThemeLine()}>
                        <LineGraph
                            data={ChartData}
                            options={ExchangeLineOption(pickData)} />
                    </div>
                    : null}
            </div>
        </div>
    )
}
CoinGraph.propTypes = {
    latestDate: PropTypes.string.isRequired,
    pickData: PropTypes.string.isRequired,
    closeGraph: PropTypes.func.isRequired
}
export default CoinGraph