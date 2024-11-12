const TrackList = (props) => {
    const pets = props.trackList.map((track) =>(
         <a key={track._id} onClick={ () => props.updateSelected(track)}>
         <li key={track._id}>{track.name}</li>
         </a>
        ));
    
    return(
        <div>
            <h1>Track List</h1>;
            {!props.trackList.length ? <h2>No Tracks Yet!</h2> :<ul>{tracks}</ul>}
            <button onClick={props.handleFormView}>
                {props.isFormOpen ? 'Close Form' : 'New Track'}
            </button>
        </div>
    )    
  };
  
  export default TrackList;