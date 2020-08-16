import { MobileGoogleMap, GoogleMapsUrl } from "../Utils/ConstValues";
const chartConfig = {
    type: "line",
    data: {},
    options: {}
};
export const calcMonth = (month) => {
    if (month >= 10) return month
    return "0" + month;
};
export const DateWeekAgo = (latestDate) => {
    let DateOfYesterday = new Date(latestDate);
    DateOfYesterday.setDate(DateOfYesterday.getDate() - 7)
    return DateOfYesterday.getFullYear() + "-" + calcMonth(DateOfYesterday.getMonth() + 1) + "-" + calcMonth(DateOfYesterday.getDate());
}
export const isDarkMode = () => {
    if (document.getElementById("API").className === 'darkmode')
        return true;
    return false;
}
export const IsMobile = () => {
    if (navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i)
      || navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i))
        return true;
    return false;
};
export const IsAndroaid = () => {
    if (navigator.userAgent.match(/Android/i))
        return true;
    return false;
}
export const GoogleMapLocationQuery = (lat,lng,placeId) => `?api=1&query=${lat},${lng}&query_place_id=${placeId}`
export const GoogleMapsSeachByPlace = (lat,lng,placeId) => `${ GoogleMapsUrl()}${GoogleMapLocationQuery(lat,lng,placeId)}`;
export const OpenGoogleMaps = (lat,lng,placeId) => {
    if (IsAndroaid())
        window.open(`geo:${lat},${lng}?z=3}`);
    else
        window.open(GoogleMapsSeachByPlace(lat,lng,placeId));
}

export const ChartConfigByType = (chartType) => {
    let ConfigCopy =  JSON.parse(JSON.stringify(chartConfig));
    ConfigCopy.type = chartType;
    return ConfigCopy;
}


export const GraphThemeLine = () => {
    let theme;
    if (IsMobile())
        return theme = { width: "80vw", height: "40vh", boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2),1px 1px 1px 0px rgba(0,0,0,0.14)" };
    else
        return theme = { width: "50vw", height: "40vh", boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2),1px 1px 1px 0px rgba(0,0,0,0.14)" };
};

export  const classDailyChange = (option) => {
    if (option > 0) return "positive";
    else if (option < 0) return "negative";
    else return "same";
};
export const LoadGoogleMap = () => {
    const googleMapScript = document.createElement('script')
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}&libraries=places`
    googleMapScript.async = true
    window.document.body.appendChild(googleMapScript);
    return googleMapScript;
}