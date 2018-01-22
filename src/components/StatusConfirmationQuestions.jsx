import React from 'react';
import PropTypes from 'prop-types';

function StatusConfirmationQuestions(props){
  return(
    <div>
      <p>Have you gone through all the steps on the Learn How to Program debugging lesson?</p>
      <button onClick={props.onTroubleshootingConfirmation}>Yes</button>
    </div>
  );
}

StatusConfirmationQuestions.propTypes = {
  onTroubleshootingConfirmation: PropTypes.func
};

export default StatusConfirmationQuestions;
