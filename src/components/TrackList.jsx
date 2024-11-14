const TrackList = (props) => {
    const tracks = props.trackList.map((track) =>(
         <div>
         
         <li key={track._id}>{track.title}</li>
         <p>{track.artist}</p>
         <button onClick={ () => props.updateSelected(track)}>Update Track</button>
         
         </div>
        ));
    
    return(
        <div>
            <h1>Track List</h1>
            {!props.trackList.length ? <h2>No Tracks Yet!</h2> :<ul>{tracks}</ul>}
        </div>
    )    
  };
  
  export default TrackList;