import { MapContainer, TileLayer, Marker, Popup, Tooltip, useMapEvents } from 'react-leaflet'
import { NewMarkerForm } from './NewMarkerForm';
import { useState } from 'react';


const MapEvents = ({setMapClicked, setLatLang}) => {
    useMapEvents({
    click(e) {
        // setState your coords here
        // coords exist in "e.latlng.lat" and "e.latlng.lng"
        console.log(e.latlng.lat);
        console.log(e.latlng.lng);
        setMapClicked(true);
        setLatLang({lat: e.latlng.lat, lng: e.latlng.lng});
    },
    });
    return false;
}

const getPopup = ({lat, lng, markers, setMarkers, setMapClicked}) => {
    return (
        <Popup position={[lat, lng]}>
            <NewMarkerForm lat={lat} lng={lng} markers={markers} setMarkers={setMarkers} setMapClicked={setMapClicked} />
        </Popup>
    )
}

const getMarker = ({lat, lng, name, desc}) => {
    return (
        <Marker 
            key={`${lat}${lng}`}
            position={[lat, lng]}
            eventHandlers={{
                click: (e) => {
                console.log('se apreto el marker!!!');
                },
            }}
            >

            <Tooltip>
                <span className="tooltip-name">{name}</span>
            </Tooltip>

            <Popup>
                {name} <br /> {desc}
            </Popup>
        </Marker>
    )
}

export const Map = () => {
    const [mapClicked, setMapClicked] = useState(false);
    const [{lat, lng}, setLatLang] = useState({lat: 0, lng: 0});
    const [markers, setMarkers] = useState([]);

    return (
        <MapContainer 
            center={[51.505, -0.09]} 
            zoom={13} 
            scrollWheelZoom={true} 
            doubleClickZoom={true}
            inertia={true}
            >
            
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
            />

            {mapClicked && getPopup({lat, lng, markers, setMarkers, setMapClicked})}

            {
                markers.map(({lat, lng, name, desc}) => {
                    return getMarker({lat, lng, name, desc})
                })
            }

            <MapEvents setMapClicked={setMapClicked} setLatLang={setLatLang} />

        </MapContainer>
    )
}
