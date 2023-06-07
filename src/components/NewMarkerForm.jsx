import { useState } from "react";

export const NewMarkerForm = ({lat, lng, markers, setMarkers, setMapClicked}) => {
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
            lat: lat,
            lng: lng,
            name: markerName,
            desc: markerDesc,
        }]);
        setMapClicked(false);
    }

    return (
      <>
            <form className="form-example" onSubmit={handleAddMarker}>
                <span className="form-title">New marker</span>
                <br />

                <div className="form-example">
                    <label htmlFor="name">Enter marker name: </label>
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        onChange={(event) => handleMarkerNameChange(event)} 
                        required 
                    />
                </div>
                <div className="form-example">
                    <label htmlFor="name">Enter marker description: </label>
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        onChange={(event) => handleMarkerDescChange(event)}
                        required 
                    />
                </div>
                <div className="form-example">
                    <input type="submit" value="Add marker" />
                </div>
            </form>
      </>
    )
}
