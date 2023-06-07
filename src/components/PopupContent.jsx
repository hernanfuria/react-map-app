export const PopupContent = ({markerName, markerDesc, markerIndex, deleteMarkerByIndex}) => {
    const handleDeleteMarkerByIndex = () => {
        deleteMarkerByIndex(markerIndex);
    }

  return (
    <>
        <h1 className="marker-popup-title">{markerName}</h1>
        <p className="marker-popup-desc">{markerDesc}</p>
        <div class="flex-end">
          <button className="delete-marker" onClick={handleDeleteMarkerByIndex}>Borrar</button>
        </div>
    </>
  )
}
