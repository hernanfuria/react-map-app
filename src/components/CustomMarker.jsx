import { Marker, Popup, Tooltip } from 'react-leaflet' 
import { PopupContent } from './PopupContent';


export const CustomMarker = ({id, lat, lng, name, desc, deleteMarkerByIndex}) => {
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