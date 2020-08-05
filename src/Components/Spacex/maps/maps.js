import React, { useRef, useEffect, useState } from 'react';
import Room from '@material-ui/icons/Room';
import MapIcon from '@material-ui/icons/Map';
import './maps.css'
const GoogleMap = ({ openMap, open, placeName }) => {
    const googleMapRef = useRef();
    let googleMap;
    let lat
    let lng;
    let latlng;
    let placeId;
    let marker;
    const OpenGoogleMaps = (e) => {
        if (navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i))
            window.open(`https://maps.google.com/maps/search/?api=1&query=${lat},${lng}&query_place_id=${placeId}`);
        else if (navigator.userAgent.match(/Android/i))
            window.open(`geo:${lat},${lng}?z=3}`);
        // window.open(`geo:${lat},${lng}?z=3&q=${encodeURIComponent('Kennedy Space Center Launch Complex 39b, Kennedy Space Center, FL, United States')}`);
        else
            window.open(`https://www.google.com/maps/search/?api=1&query=${lat},${lng}&query_place_id=${placeId}`);
    }
    useEffect(() => {
        const googleMapScript = document.createElement('script')
        googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}&libraries=places`
        window.document.body.appendChild(googleMapScript)
        googleMapScript.addEventListener('load', () => {
            latlng = getLatLng();
            // googleMap = createGoogleMap();
            // marker = createMarker();
            
        })
        const script = document.createElement('script')
        script.src = 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js'
        script.async = true
        script.addEventListener('load', () => {
            // let ddd = new MarkerClusterer()
            
        })
        document.body.appendChild(script)

    }, []);
    const createMarker = (googleMap, coordinates) => {
        var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var locations = [
            {lat: -31.563910, lng: 147.154312},
            {lat: -33.718234, lng: 150.363181},
            {lat: -33.727111, lng: 150.371124},
            {lat: -33.848588, lng: 151.209834},
            {lat: -33.851702, lng: 151.216968},
            {lat: -34.671264, lng: 150.863657},
            {lat: -35.304724, lng: 148.662905},
            {lat: -36.817685, lng: 175.699196},
            {lat: -36.828611, lng: 175.790222},
            {lat: -37.750000, lng: 145.116667},
            {lat: -37.759859, lng: 145.128708},
            {lat: -37.765015, lng: 145.133858},
            {lat: -37.770104, lng: 145.143299},
            {lat: -37.773700, lng: 145.145187},
            {lat: -37.774785, lng: 145.137978},
            {lat: -37.819616, lng: 144.968119},
            {lat: -38.330766, lng: 144.695692},
            {lat: -39.927193, lng: 175.053218},
            {lat: -41.330162, lng: 174.865694},
            {lat: -42.734358, lng: 147.439506},
            {lat: -42.734358, lng: 147.501315},
            {lat: -42.735258, lng: 147.438000},
            {lat: -43.999792, lng: 170.463352}
          ];
        var markerss = locations.map(function(location, i) {
            return new window.google.maps.Marker({
              position: location,
              label: labels[i % labels.length]
            });
          });
        //   var markerCluster = new MarkerClusterer(GoogleMap, markerss, {});
        // new window.google.maps.Marker({
        //     position: { lat: coordinates.lat(), lng: coordinates.lng() },
        //     map: googleMap,
        // })
    }
    const PlaceServices = () => {
        let request = {
            placeId: placeId,
            fields: ['name', 'formatted_address', 'place_id', 'geometry']
        };
        let infowindow = new window.google.maps.InfoWindow();
        let service = new window.google.maps.places.PlacesService(googleMap);
        service.getDetails(request, function (place, status) {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                createMarker();
                // marker = new window.google.maps.Marker({
                //     map: googleMap,
                //     position: place.geometry.location
                // });
                window.google.maps.event.addListener(marker, 'click', function () {
                    infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
                        'Place ID: ' + place.place_id + '<br>' +
                        place.formatted_address + '</div>');
                    infowindow.open(googleMap, this);
                });

            }
        })
    }
    const createGoogleMap = (coordinates) => {

        googleMap = new window.google.maps.Map(googleMapRef.current, {
            zoom: 16,
            center: {
                lat: coordinates.lat(),
                lng: coordinates.lng(),
            },
            disableDefaultUI: true,
        })
        // createMarker(googleMap,coordinates);
        PlaceServices()
    }
    const getLatLng = () => {
        new window.google.maps.Geocoder().geocode({ 'address': `${placeName}` }, function (results, status) {
            if (status == window.google.maps.GeocoderStatus.OK) {
                console.log(results[0].geometry.location);
                placeId = results[0].place_id;
                createGoogleMap(results[0].geometry.location);
                lat = results[0].geometry.location.lat();
                lng = results[0].geometry.location.lng();
                //In this case it creates a marker, but you can get the lat and lng from the location.LatLng

            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    }


    return (
        <div>

            <div className="grid-button">
                <div>

                    <button className="GoToLocation" onClick={(e) => OpenGoogleMaps(e)}>
                        <Room className="Location-Icon" /> <span className="Location-Icon">See Location</span>
                    </button>
                </div>
                <div>

                    <button className="GoToLocation" onClick={(e) => openMap(e)}>
                        <MapIcon className="Location-Icon" /> <span className="Location-Icon">Open Map</span>
                    </button>
                </div>

            </div>
            <div className="mapRelative">

                <div
                    id="google-map"
                    ref={googleMapRef}
                    style={{ width: '400px', height: '300px' }}
                />
            </div>
        </div>
    )
}
export default GoogleMap;

// import React, { Component, createRef } from 'react'

// class GoogleMap extends Component {
//   googleMapRef = React.createRef()

//   componentDidMount() {
//     const googleMapScript = document.createElement('script')
//     googleMapScript .src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAB70UiNosNBHpm0sX0O_E22ZyjxlHzjp0&libraries=places`
//     window.document.body.appendChild(googleMapScript )

//     googleMapScript .addEventListener('load',()=> {
//       this.googleMap = this.createGoogleMap()
//       this.marker = this.createMarker()
//     })
//   }
//   createGoogleMap = () =>
//     new window.google.maps.Map(this.googleMapRef.current, {
//       zoom: 16,
//       center: {
//         lat: 28.626486173436586,
//         lng: -80.62047030219247,
//       },
//       disableDefaultUI: true,
//     })

//   createMarker = () =>
//     new window.google.maps.Marker({
//       position: { lat: 43.642567, lng: -79.387054 },
//       map: this.googleMap,
//     })

//   render() {
//     return (
//       <div
//         id="google-map"
//         ref={this.googleMapRef}
//         style={{ width: '400px', height: '300px' }}
//       />
//     )
//   }
// }
// export default GoogleMap;