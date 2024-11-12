// src/App.jsx
import {useState, useEffect} from 'react'
import * as trackService from './services/trackService'
import TrackList from './components/TrackList';




const App = () => {

  const [trackList, setTrackList] = useState([])




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


  return ( 
    <>
    <TrackList trackList ={trackList}/>
    
    
    
    
    
    
    
    </>




  )
}

export default App;