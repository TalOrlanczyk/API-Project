import React, { useEffect, useState } from 'react';
import Close from '@material-ui/icons/Close';
import './CoinGraph.css';
import { Line } from 'react-chartjs-2';
import { ExchangeHistory } from '../../../../API/GET/exchange';
import { calcMonth, GraphThemeLine } from '../../../../functions/functions';
const data = {
    labels: "",
    datasets: [
        {
            label: "ערך המטבע",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: "butt",
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "#007c9a",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 3,
            pointHoverRadius: 6,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 3,
            pointRadius: 1,
            pointHitRadius: 10,
            data: ""
        }
    ]
};

const CoinGraph = ({ latestDate, openGraph, pickData, closeGraph }) => {
    const [ChartData, setChartData] = useState(data)
    const [close, setClose] = useState(false);
    let theme = GraphThemeLine();
    
    window.scrollTo(0,document.body.scrollHeight);
    useEffect(() => {

        let DateOfYesterday = new Date(latestDate);
        DateOfYesterday.setDate(DateOfYesterday.getDate() - 7)
        let DateBeforeLates = DateOfYesterday.getFullYear() + "-" + calcMonth(DateOfYesterday.getMonth() + 1) + "-" + calcMonth(DateOfYesterday.getDate());
        ExchangeHistory(DateBeforeLates, latestDate, pickData)
            .then(data => {
                console.table(data);
                let Dataset = [...ChartData.datasets][0];
                let datas = [];
                Dataset.data = Object.values(data.rates);
                const labels = Object.keys(data.rates).sort();
                for (let i = 0; i < Object.values(data.rates).length; i++) {
                    datas.push(data.rates[labels[i]].ILS);
                }
                Dataset.data = datas;
                setChartData({ ...ChartData, datasets: [Dataset], labels: labels  })
            })
    }, [pickData]);
    const AnimationEnd = () => {
        closeGraph()
    }
    const AnimateStart = () =>{
        console.log("hi")
    }
    return (
        <div className="coinGraph-container">
            <div className={close === false ? "scale-in-center" : "slide-out-bck-center"} onAnimationEnd={close === true ?() =>AnimationEnd():null} onAnimationStart={()=>AnimateStart()}>{pickData}
                <button className="left-exit" onClick={() => setClose(true)}>
                    <Close />
                </button>
                {ChartData.labels.length > 0 ?
                    <div className="chartline" style={theme}>

                        <Line
                            data={ChartData}
                            options={{
                                responsive: true,
                                maintainAspectRatio: false,
                                title: {
                                    display: true,
                                    text: `${pickData} ערך המטבע `,
                                    fontSize: 10
                                },
                                legend: {
                                    display: true,
                                    position: 'top',
                                    labels: {
                                        fontSize: 17,
                                        fontColor: "black"
                                    }
                                },
                                scales: {
                                    yAxes: [{
                                        ticks: {
                                            fontColor: "black",
                                            fontSize: 14,
                                            stepSize: 0.005,
                                            // beginAtZero: true
                                        }
                                    }],
                                    xAxes: [{
                                        ticks: {
                                            fontColor: "black",
                                            fontSize: 14,
                                            stepSize: 1,
                                            // beginAtZero: true
                                        }
                                    }]
                                }
                            }}
                        />
                    </div>
                    : null}
            </div>
        </div>
    )
}
export default CoinGraph