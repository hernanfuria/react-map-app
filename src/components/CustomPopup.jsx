import { Popup } from 'react-leaflet' 
import { NewMarkerForm } from './NewMarkerForm';


export const CustomPopup = ({lat, lng, markers, setMarkers, setMapClicked, lastMarkerIndex, setLastMarkerIndex}) => {
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