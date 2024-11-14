// src/App.jsx
import {useState, useEffect} from 'react'
import * as trackService from './services/trackService'
import TrackList from './components/TrackList';
import TrackForm from './components/TrackForm';



const App = () => {

  const [trackList, setTrackList] = useState([])
  const [selected, setSelected] = useState(null);



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

 
  const handleAddTrack = async(FormData) => {
    try{
      const newTrack = await trackService.create(FormData)
      setTrackList([newTrack, ...trackList]);
      setIsFormOpen(false)
    } catch (error) {
      console.log(error)
    }
  }

  return ( 
    <>
    <TrackForm handleAddTrack={handleAddTrack}/>
    <TrackList trackList ={trackList}
    selected={selected}
     updateSelected={updateSelected}
    />
    
    
    
    
    
    
    
    </>




  )
}

export default App;