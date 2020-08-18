import { ExchangeUrlToday, ExchangeUrlByDate, ExchangeUrlHistory } from "../../Utils/ConstValues";

const get = async (url) => (
    await fetch(url)
        .then(response => response.json())
        .then(json =>  json)
)
export const TodayExchangeRate = () => get(`${ExchangeUrlToday}`);//base on EUR
export const TodayExchangeRateBase = (base) => get(`${ExchangeUrlToday}?base=${base}`);
export const ExchangeByDateAndBase = (DateToCheck,base) => get(`${ExchangeUrlByDate}${DateToCheck}?base=${base}`);
export const TodayExchangeRateByBaseAndSymbol = (fromCurrency,toCurrency) => get(`${ExchangeUrlToday}?base=${fromCurrency}&symbols=${toCurrency}`);
export const TodatExchangeRateBySymbol = (options) => get(`${ExchangeUrlToday}?symbols=ILS&base=${options}`)
export const ExchangeByDataAndOption = (DateBeforeLates,options) => get(`${ExchangeUrlByDate}${DateBeforeLates}?symbols=ILS&base=${options}`);
export const ExchangeHistory = (DateBeforeLates,LatestDate,PickData) => get(`${ExchangeUrlHistory}?start_at=${DateBeforeLates}&end_at=${LatestDate}&symbols=ILS&base=${PickData}`)