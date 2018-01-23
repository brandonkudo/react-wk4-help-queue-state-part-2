import React from 'react';
import PropTypes from 'prop-types';

function StatusUpdate(props) {

  return (
    <div>
      <h3>{props.name} </h3>
      <p>{props.status}</p>
      <hr/>
    </div>
  );
}


StatusUpdate.propTypes = {
  name: PropTypes.string,
  status: PropTypes.string,
};

export default StatusUpdate;
