import PropTypes from 'prop-types';
import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';


export default function TeamForm({ team }) {
  return (
    <form>
    <h1>Manage Team</h1>
    <TextInput
      name="name"
      label="Name"
      value={team.Name}
      onChange={onChange}
      error={errors.Name}/>

    <SelectInput
      name="Genre"
      label="Genre"
      value={team.Genre}
      defaultOption="Select Genre"
      options={allNames}
      onChange={onChange} error={errors.Genre}/>

    
    <input
      type="submit"
      disabled={saving}
      value={saving ? 'Saving...' : 'Save'}
      className="btn btn-primary"
      onClick={onSave}/>
  </form>
  );
}





TeamForm.propTypes = {
    team: PropTypes.shape({    
        Name: PropTypes.string,
        Genre: PropTypes.string
      })

    
    
};
