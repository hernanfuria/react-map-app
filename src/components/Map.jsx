import { MapContainer, TileLayer, Marker, Popup, Tooltip, useMapEvents } from 'react-leaflet'
import { NewMarkerForm } from './NewMarkerForm';
import { PopupContent } from './PopupContent'; 
import { useState } from 'react';


const MapEvents = ({setMapClicked, setLatLang}) => {
    useMapEvents({
    click(e) {
        setMapClicked(true);
        setLatLang({lat: e.latlng.lat, lng: e.latlng.lng});
    },
    });
    return false;
}

const getPopup = ({lat, lng, markers, setMarkers, setMapClicked, lastMarkerIndex, setLastMarkerIndex}) => {
    return (
        <Popup position={[lat, lng]}>
            <NewMarkerForm 
                lat={lat} 
                lng={lng} 
                markers={markers} 
                setMarkers={setMarkers} 
                setMapClicked={setMapClicked}
                lastMarkerIndex={lastMarkerIndex}
                setLastMarkerIndex={setLastMarkerIndex} 
            />
        </Popup>
    )
}

const getMarker = ({id, lat, lng, name, desc, deleteMarkerByIndex}) => {
    return (
        <Marker 
            key={`marker${id}`}
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
                <PopupContent markerName={name} markerDesc={desc} markerIndex={id} deleteMarkerByIndex={deleteMarkerByIndex}/>
            </Popup>
        </Marker>
    )
}

export const Map = () => {
    const [mapClicked, setMapClicked] = useState(false);
    const [{lat, lng}, setLatLang] = useState({lat: 0, lng: 0});
    const [markers, setMarkers] = useState([]);
    const [lastMarkerIndex, setLastMarkerIndex] = useState(0);

    const deleteMarkerByIndex = (index) => {
        console.log(`borrando marker ${index}`)

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

            {mapClicked && getPopup({lat, lng, markers, setMarkers, setMapClicked, lastMarkerIndex, setLastMarkerIndex})}

            {
                markers.map(({id, lat, lng, name, desc}) => {
                    return getMarker({id, lat, lng, name, desc, deleteMarkerByIndex})
                })
            }

            <MapEvents setMapClicked={setMapClicked} setLatLang={setLatLang} />

        </MapContainer>
    )
}
