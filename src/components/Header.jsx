import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1>Help Queue</h1>
      <Link to="/">Home</Link> | <Link to="/newpost">Create Post</Link> | <Link to="/statusupdate">Update Status</Link>
    </div>
  );
}

export default Header;
