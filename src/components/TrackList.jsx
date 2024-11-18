import { Link } from "react-router-dom";
import { useParams} from "react-router-dom"

const TrackList = (props) => {
    const {trackId} = useParams()
    const playButton = (track) => {
        props.setNowPlaying(true)
        props.updateSelected(track)
    }
    const tracks = props.trackList.map((track) =>(
         <div>
         
         <li key={track._id}>{track.title}</li>
         <p>{track.artist}</p>
         <Link to='/tracks/form'><button onClick={ () => props.updateSelected(track)}>Update Track</button></Link>
         <button onClick={ () => playButton(track)}>Play</button>
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