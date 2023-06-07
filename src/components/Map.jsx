import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet'


const MapEvents = () => {
    useMapEvents({
      click(e) {
        // setState your coords here
        // coords exist in "e.latlng.lat" and "e.latlng.lng"
        console.log(e.latlng.lat);
        console.log(e.latlng.lng);
      },
    });
    return false;
}

export const Map = () => {
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

        <Marker 
            position={[51.505, -0.09]}
            eventHandlers={{
                click: (e) => {
                console.log('se apreto el marker!!!' /*e.target.options.data*/);  // will print 'FooBar' in console
                },
            }}
            >

            <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>

        </Marker>

        <MapEvents />

    </MapContainer>
  )
}
