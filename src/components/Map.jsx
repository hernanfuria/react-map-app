import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet' 
import { useState } from 'react';
import { CustomMarker } from './CustomMarker';
import { CustomPopup } from './CustomPopup';


const MapEvents = ({setMapClicked, setLatLang}) => {
    useMapEvents({
    click(e) {
        setMapClicked(true);
        setLatLang({lat: e.latlng.lat, lng: e.latlng.lng});
    },
    });
    return false;
}

export const Map = () => {
    const [mapClicked, setMapClicked] = useState(false);
    const [{lat, lng}, setLatLang] = useState({lat: 0, lng: 0});
    const [markers, setMarkers] = useState([]);
    const [lastMarkerIndex, setLastMarkerIndex] = useState(0);

    const deleteMarkerByIndex = (index) => {
        const newMarkers = [];
        for (const marker of markers) {
            if (marker.id != index) {
                newMarkers.push(marker);
            }
        }
        setMapClicked(false);
        setMarkers(newMarkers);
    }

    return (
        <MapContainer 
            center={[-32.95, -60.66]} 
            zoom={12} 
            scrollWheelZoom={true} 
            doubleClickZoom={true}
            inertia={true}
            >
            
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
            />

            {mapClicked && CustomPopup({lat, lng, markers, setMarkers, setMapClicked, lastMarkerIndex, setLastMarkerIndex})}

            {
                markers.map(({id, lat, lng, name, desc}) => {
                    return CustomMarker({id, lat, lng, name, desc, deleteMarkerByIndex})
                })
            }

            <MapEvents setMapClicked={setMapClicked} setLatLang={setLatLang} />

        </MapContainer>
    )
}
