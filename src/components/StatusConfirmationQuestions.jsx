import React from 'react';
import PropTypes from 'prop-types';

function StatusConfirmationQuestions(props){
  return(
    <div>
      <p>Are you sure you want to change your status?</p>
      <button onClick={props.onTroubleshootingConfirmation}>Yes</button>
    </div>
  );
}

StatusConfirmationQuestions.propTypes = {
  onTroubleshootingConfirmation: PropTypes.func
};

export default StatusConfirmationQuestions;
