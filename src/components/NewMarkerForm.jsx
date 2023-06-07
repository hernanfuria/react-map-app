import { useState } from "react";

export const NewMarkerForm = ({lat, lng, markers, setMarkers, setMapClicked, lastMarkerIndex, setLastMarkerIndex}) => {
    const [markerName, setMarkerName] = useState('');
    const [markerDesc, setMarkerDesc] = useState('');

    const handleMarkerNameChange = (event) => {
        setMarkerName(event.target.value)
    }

    const handleMarkerDescChange = (event) => {
        setMarkerDesc(event.target.value)
    }

    const handleAddMarker = (event) => {
        event.preventDefault();
        console.log('handleAddMarker!')
        setMarkers([...markers, {
            id: lastMarkerIndex,
            lat: lat,
            lng: lng,
            name: markerName,
            desc: markerDesc,
        }]);
        setMapClicked(false);
        setLastMarkerIndex(lastMarkerIndex + 1);
    }

    return (
      <>
            <form className="new-marker-form" onSubmit={handleAddMarker}>
                <span className="form-title">Nuevo marcador</span>
                <br />

                <div className="form-line">
                    <label htmlFor="name">Nombre</label>
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        className="marker-name"
                        placeholder="Restaurant Don Fulano"
                        onChange={(event) => handleMarkerNameChange(event)} 
                        required 
                    />
                </div>
                <div className="form-line">
                    <label htmlFor="name">Descripción</label>
                    <textarea 
                        type="text"
                        cols={50}
                        rows={50} 
                        name="name" 
                        id="name" 
                        className="marker-desc"
                        placeholder="En este restaurant se sirven las mejores papas que probe"
                        onChange={(event) => handleMarkerDescChange(event)}
                        required 
                    />
                </div>
                <div className="form-submit">
                    <input type="submit" value="Añadir marcador" />
                </div>
            </form>
      </>
    )
}
