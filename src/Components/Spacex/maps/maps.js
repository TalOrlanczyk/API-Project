import React, { useRef, useEffect, useState, useCallback } from 'react';
import LoadingComp from '../../LoadingComp/LoadingComp';
import { LoadGoogleMap, OpenGoogleMaps } from '../../../functions/functions';
import GoogleMapComp from './GoogleMapComp/GoogleMapComp';
import GoogleMapActions from './GoogleMapActions/GoogleMapActions';
const GoogleMap = ({ openMap, open, placeName }) => {
    const googleMapRef = useRef();
    // const [googleMapRef, googleMapRefReady] = useRefCallback();
    const [GoogleMapInfo, setGoogleMapInfo] = useState({
        lat: 0,
        lng: 0,
        placeId: "",
        isLoading: true
    });
    let googleMap;
    useEffect(() => {
        if (googleMapRef.current)
            LoadGoogleMap().addEventListener('load', () => {
                getLatLng();
            });
    }, [open]);
    const createGoogleMap = (coordinates) => {
        googleMap = new window.google.maps.Map(googleMapRef.current, {
            zoom: 16,
            center: {
                lat: coordinates.lat(),
                lng: coordinates.lng(),
            },
            disableDefaultUI: true,
        })
    };
    const getLatLng = () => {
        let lat, lng, placeId;
        new window.google.maps.Geocoder().geocode({ 'address': `${placeName}` }, function (results, status) {
            if (status == window.google.maps.GeocoderStatus.OK) {
                console.log(results[0].geometry.location);
                placeId = results[0].place_id;
                createGoogleMap(results[0].geometry.location);
                lat = results[0].geometry.location.lat();
                lng = results[0].geometry.location.lng();
                new window.google.maps.Marker({
                    position: { lat, lng },
                    map: googleMap,
                    animation: window.google.maps.Animation.DROP,
                    title: `${placeName}`
                });
                setGoogleMapInfo({ ...GoogleMapInfo, lat, lng, placeId, isLoading: false });
                //In this case it creates a marker, but you can get the lat and lng from the location.LatLng

            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    }
    return (
        <div className="GoogleMapContainer">
            <GoogleMapActions open={open} openMap={(e) => openMap(e)} MapCoords={{ lat: GoogleMapInfo.lat, lng: GoogleMapInfo.lng, placeId: GoogleMapInfo.placeId }} />
            {open ?
                <GoogleMapComp ref={googleMapRef} />
                : null}
        </div>
    )
}
export default GoogleMap;