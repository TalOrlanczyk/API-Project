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
    return `https://${IsMobile() ? 'maps': 'www'}.google.com/maps/search/`
}