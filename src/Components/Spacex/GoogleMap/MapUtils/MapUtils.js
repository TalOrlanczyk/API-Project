import { GoogleMapsUrl } from "../../../../Utils/ConstValues";


export const LoadGoogleMap = () => {
    const googleMapScript = document.createElement('script');
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}&libraries=places&language=en`;
    googleMapScript.async = true;
    window.document.body.appendChild(googleMapScript);
    return googleMapScript;
}
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