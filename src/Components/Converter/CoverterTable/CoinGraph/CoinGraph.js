import React, { useEffect, useState } from 'react';
import Close from '@material-ui/icons/Close';
import './CoinGraph.css';
import { Bar, Line } from 'react-chartjs-2';
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
    const calcMonth = (month) => {
        if (month >= 10) return month
        return "0" + month;
    }
    useEffect(() => {
        var element = document.getElementById("test");

        element.scrollIntoView({ behavior: 'smooth' });
    }, []);
    useEffect(() => {
        let DateOfYesterday = new Date(latestDate);
        let DateBeforeLates = DateOfYesterday.getFullYear() + "-" + calcMonth(DateOfYesterday.getMonth() + 1) + "-" + (DateOfYesterday.getDate() - 7);
        fetch(`${BASE_URL}history?start_at=${DateBeforeLates}&end_at=${latestDate}&symbols=ILS&base=${pickData}`)
            .then(response => response.json())
            .then(data => {
                console.table(data);
                let Dataset = [...ChartData.datasets][0];
                let datas = [];
                Dataset.data = Object.values(data.rates);
                for (let i = 0; i < Object.values(data.rates).length; i++) {
                    datas.push(Object.values(data.rates)[i].ILS);
                }
                Dataset.data = datas;
                setChartData({ ...ChartData, datasets: [Dataset] })
                setChartData({ ...ChartData, labels: Object.keys(data.rates) })
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
                    <div className="chartline" style={{width:"50vw",height:"40vh"}}>

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
                                            stepSize: 0.5,
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