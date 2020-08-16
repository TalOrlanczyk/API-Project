import { IsMobile } from "../functions/functions";

const ExchangeBaseUrl = `https://api.exchangeratesapi.io/`;
const SpaceXBaseUrl = `https://api.spacexdata.com/v4/`;
const PokemonBaseUrl = `https://pokeapi.co/api/v2/`;
export const ExchangeUrlByDate = `${ExchangeBaseUrl}`;
export const ExchangeUrlToday = `${ExchangeBaseUrl}latest`;
export const ExchangeUrlHistory = `${ExchangeBaseUrl}history`;
export const SpaceXBaseUrlLaunches = `${SpaceXBaseUrl}launches`;
export const PokemonSearch = `${PokemonBaseUrl}pokemon`;
export const MobileGoogleMap = `https://maps.google.com/maps/search/`;
export const DesktopGoogleMap = `https://www.google.com/maps/search/`;
export const GoogleMapsUrl = () => {
    return `https://${IsMobile() ? 'maps' : 'www'}.google.com/maps/search/`
}
export const ExchangeLineOption = (pickData) => {
    return {
        responsive: true,
        maintainAspectRatio: false,
        title: {
            display: true,
            text: `${pickData} ערך המטבע `,
            fontSize: 10,
            fontColor: 'rgb(31 31 31)'
        },
        legend: {
            display: true,
            position: 'top',
            labels: {
                fontSize: 17,
                fontColor: 'rgb(31 31 31)'
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: 'rgb(31 31 31)',
                    fontSize: 14,
                    stepSize: 0.005,
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: 'rgb(31 31 31)',
                    fontSize: 14,
                    stepSize: 1,
                }
            }]
        }
    }
}


export const ExchangeDatasetLine = (label) => {
    return  {
        labels: "",
        datasets: [
            {
                label,
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
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
    
}