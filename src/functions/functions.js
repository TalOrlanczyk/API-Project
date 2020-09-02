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
export const ChartConfigByType = (chartType) => {
    let ConfigCopy =  JSON.parse(JSON.stringify(chartConfig));
    ConfigCopy.type = chartType;
    return ConfigCopy;
}


export const GraphThemeLine = () => {
    let theme;
    if (IsMobile())
         theme = { width: "80vw", height: "40vh", boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2),1px 1px 1px 0px rgba(0,0,0,0.14)" };
    else
        theme = { width: "50vw", height: "40vh", boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2),1px 1px 1px 0px rgba(0,0,0,0.14)" };
    return theme;
};

export  const classDailyChange = (option) => {
    if (option > 0) return "positive";
    else if (option < 0) return "negative";
    else return "same";
};
export const amountConverter = (isSwitchedPlaces = false , amountInFromCurrency = true, amount = 1,exchangeRate = 1) => {
    let fromAmount,toAmount;
    if (isSwitchedPlaces) {
        fromAmount = amount;
        toAmount = amount / exchangeRate;
    } else if (amountInFromCurrency) {
        fromAmount = amount;
        toAmount = amount * exchangeRate;
    } else {
        toAmount = amount;
        fromAmount = amount / exchangeRate;
    }
    return {toAmount,fromAmount};
}