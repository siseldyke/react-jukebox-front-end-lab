import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateTrack } from '../services/trackService';



const TrackForm = (props) => {
  const navigate = useNavigate()
  const initialState = {
    title: '',
    artist: ''
  }
  const [formData, setFormData] = useState(props.selected ? props.selected : initialState);

  useEffect(() => {
    if (props.selected) {
      setFormData(props.selected);
    } else {
      setFormData(initialState);
    }
  }, [props.selected]);
  
  
  
  const handleChange = (evt) => {
    const {name, value} = evt.target
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitForm = (evt) => {
    evt.preventDefault();
    if (props.selected) {
      updateTrack(formData, props.selected._id)
      props.selected.title = formData.title
      props.selected.artist = formData.artist
    } else{
      props.handleAddTrack(formData)
    }
    setFormData({title: '' , artist: '' });
    navigate('/tracks')
  };

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <label htmlFor="title"> Title </label>
        <input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <label htmlFor="artist"> Artist </label>
        <input
          id="artist"
          name="artist"
          value={formData.artist}
          onChange={handleChange}
        />
        <button type="submit">{props.selected ? 'Update Track' : 'Add New Track'}</button>
      </form>
    </div>
  );
};

export default TrackForm;