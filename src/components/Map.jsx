import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet'
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

const getPopup = ({lat, lng}) => {
    return (
        <Popup position={[lat, lng]}>
            <NewMarkerForm />
        </Popup>

    )
}

export const Map = () => {
    const [mapClicked, setMapClicked] = useState(false);
    const [{lat, lng}, setLatLang] = useState({lat: 0, lng: 0});

    console.log(mapClicked)

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

            {mapClicked && getPopup({lat, lng})}

            {/*
            <Marker 
                position={[51.505, -0.09]}
                eventHandlers={{
                    click: (e) => {
                    console.log('se apreto el marker!!!');
                    },
                }}
                >

                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
            */}

            <MapEvents setMapClicked={setMapClicked} setLatLang={setLatLang} />

        </MapContainer>
    )
}
