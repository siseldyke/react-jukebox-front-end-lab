import { useState } from 'react';

const TrackForm = (props) => {

  const initialState = {
    title: '',
    artist: ''
  }

  // formData state to control the form
  const [formData, setFormData] = useState(props.selected ? props.selected : initialState);

  // handleChange function to update formData state
  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.title]: evt.target.value });
  };

  const handleSubmitForm = (evt) => {
    evt.preventDefault();
    if (props.selected) {
      props.handleUpdatePet(formData, props.selected._id)
    } else{
      props.handleAddPet(formData)
    }
    setFormData({title: '' , artist: '' });
    
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
          value={formData.age}
          onChange={handleChange}
        />
        <button type="submit">{props.selected ? 'Update Track' : 'Add New Track'}</button>
      </form>
    </div>
  );
};

export default TrackForm;