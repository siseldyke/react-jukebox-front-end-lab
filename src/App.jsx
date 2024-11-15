// src/App.jsx
import {useState, useEffect} from 'react'
import {useNavigate, Route , Routes, Link} from 'react-router-dom'
import * as trackService from './services/trackService'
import TrackList from './components/TrackList';
import TrackForm from './components/TrackForm';



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



  

  return ( 
    <>
    
    <Routes>
    <Route path ="/tracks/form" element ={<TrackForm handleAddTrack={handleAddTrack}
    selected={selected} 
    updateSelected = {updateSelected}/>}/>
    <Route path ="/tracks" element = {<TrackList trackList ={trackList} 
    selected={selected} 
    updateSelected = {updateSelected}
    />}/>
    {/* <Route path ="/edit-track/:id" element = {<TrackForm/>}/> */}
    </Routes>
    
    </>

  )
}

export default App;