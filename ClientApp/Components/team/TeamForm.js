import PropTypes from 'prop-types';
import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';


export default function TeamForm({ team, onSave, onChange, saving, errors }) {
  return (
    <form>
    <h1>Manage Team</h1>
    <TextInput
      name="firstname"
      label="FirstName"
      value={team.FirstName}
      onChange={onChange}
      error={errors.FirstName}/>

      <TextInput
      name="lastname"
      label="LastName"
      value={team.LastName}
      onChange={onChange}
      error={errors.LastName}/>

      <TextInput
      name="Age"
      label="Age"
      value={team.Age}
      onChange={onChange}
      error={errors.Age}/>

      <TextInput
      name="Genre"
      label="Genre"
      value={team.Genre}
      onChange={onChange}
      error={errors.Genre}/>

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
