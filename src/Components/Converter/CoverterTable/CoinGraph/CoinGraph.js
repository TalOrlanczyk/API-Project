import React, { useEffect, useState } from 'react';
import Close from '@material-ui/icons/Close';
import './CoinGraph.css';
import { Bar, Line } from 'react-chartjs-2';
import { ExchangeHistory } from '../../../../API/GET/exchange';
const BASE_URL = 'https://api.exchangeratesapi.io/';
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
    const [GraphTheme,setGraphTheme] = useState({})
    const calcMonth = (month) => {
        if (month >= 10) return month
        return "0" + month;
    }
    useEffect(() => {
        if (navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i))
            setGraphTheme({ width: "80vw", height: "40vh", boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2),1px 1px 1px 0px rgba(0,0,0,0.14)" });
        else
        setGraphTheme({ width: "50vw", height: "40vh", boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2),1px 1px 1px 0px rgba(0,0,0,0.14)" });
        var element = document.getElementById("test");

        element.scrollIntoView({ behavior: 'smooth' });
    }, []);
    useEffect(() => {
        let DateOfYesterday = new Date(latestDate);
        DateOfYesterday.setDate(DateOfYesterday.getDate()-7)
        let DateBeforeLates = DateOfYesterday.getFullYear() + "-" + calcMonth(DateOfYesterday.getMonth() + 1) + "-" + calcMonth(DateOfYesterday.getDate());
        ExchangeHistory(DateBeforeLates,latestDate,pickData)
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
                setChartData({ ...ChartData, datasets: [Dataset] })
                setChartData({ ...ChartData, labels: labels })
            })
    }, [pickData]);

    const closeGraphCard = (e) => {
        setClose(true);
        setTimeout(() => {
            closeGraph();
        }, 1000)
    }
    return (

        <div className="coinGraph-container">
            <div id="test" className={close === false ? "scale-in-center" : "roll-out-left"}>{pickData}
                <button className="left-exit" onClick={(e) => closeGraphCard(e)}>
                    <Close />
                </button>
                {ChartData.labels.length > 0 ?
                    <div className="chartline" style={GraphTheme}>

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