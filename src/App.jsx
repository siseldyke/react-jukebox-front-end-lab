// src/App.jsx
import {useState, useEffect} from 'react'
import {useNavigate, Route , Routes, Link} from 'react-router-dom'
import * as trackService from './services/trackService'
import TrackList from './components/TrackList';
import TrackForm from './components/TrackForm';
import NowPlaying from './components/NowPlaying';


const App = () => {

  const [trackList, setTrackList] = useState([])
  const [selected, setSelected] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const tracks = await trackService.index();

        if (tracks.error) {
          throw new Error(tracks.error);
        }

        setTrackList(tracks);
      } catch (error) {
        console.log(error);
      }
      
    };

    fetchTracks();
  }, []);

  const updateSelected = (track) =>{
    setSelected(track)
  }

  const handleFormView = () => {
    setIsFormOpen(!isFormOpen)
  }
 
  const handleAddTrack = async(FormData) => {
    try{
      const newTrack = await trackService.create(FormData)
      setTrackList([newTrack, ...trackList]);
    } catch (error) {
      console.log(error)
    }
    
  }

  const handleRemoveTrack = async (trackId) => {
    try {
      const deletedTrack = await trackService.deleteTrack(trackId);
  
      if (deletedTrack.error) {
        throw new Error(deletedTrack.error);
      }
      setTrackList(trackList.filter((track) => track._id !== deletedTrack._id));
      setSelected(null);
      
    } catch (error) {
      console.log(error);
    }
  };
  

  return ( 
    <>
    
    <Routes>
    <Route path ="/tracks/form" element ={<TrackForm handleAddTrack={handleAddTrack}
    selected={selected} 
    updateSelected = {updateSelected}/>}/>
    <Route path ="/tracks" element = {<TrackList trackList ={trackList} 
    selected={selected} 
    updateSelected = {updateSelected}
    handleRemoveTrack = {handleRemoveTrack}
    />}/>
    <Route path ="/tracks/nowPlaying" element ={<NowPlaying selected={selected}/>}/>
    </Routes>
    
    </>

  )
}

export default App;