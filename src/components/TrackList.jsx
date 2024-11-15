import { Link } from "react-router-dom";
import { useParams} from "react-router-dom"

const TrackList = (props) => {
    const {trackId} = useParams()
    const tracks = props.trackList.map((track) =>(
         <div>
         
         <li key={track._id}>{track.title}</li>
         <p>{track.artist}</p>
         <Link to='/tracks/form'><button onClick={ () => props.updateSelected(track)}>Update Track</button></Link>
         <Link to='/tracks/nowPlaying'><button onClick={ () => props.updateSelected(track)}>Play</button></Link>
         <button onClick={ () => props.handleRemoveTrack(track._id)}>Delete Track</button>
         </div>
        ));
    
    return(
        <div>
            <Link to={'/tracks/form'}><button>New Track </button></Link>
            <h1>Track List</h1>
            {!props.trackList.length ? <h2>No Tracks Yet!</h2> :<ul>{tracks}</ul>}
        </div>
    )    
  };
  
  export default TrackList;