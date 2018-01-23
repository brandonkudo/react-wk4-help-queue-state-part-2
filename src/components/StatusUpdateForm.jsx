import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function StatusUpdateForm(props){
  let _name = null;
  let _status = null;

  function handleStatusUpdateFormSubmission(event) {
    event.preventDefault();
    props.onNewStatusCreation({name: _name.value, status: _status.value, id: v4()});
    _name.value = '';
    _status.value = '';
  }

  return (
    <div>
      <form onSubmit={handleStatusUpdateFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Input your name'
          ref={(input) => {_name = input;}}/>
        <input
          type='text'
          id='status'
          placeholder='What is your status update'
          ref={(input) => {_status = input;}}/>

        <button type='submit'>Update Your Status!</button>
      </form>
    </div>
  );
}

StatusUpdateForm.propTypes = {
  onNewStatusCreation: PropTypes.func
};

export default StatusUpdateForm;
