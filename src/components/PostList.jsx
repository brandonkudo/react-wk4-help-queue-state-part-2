import React from 'react';
import Post from './Post';
import StatusUpdate from './StatusUpdate';
import PropTypes from 'prop-types';

function PostList(props){
  console.log(props.postList);
  return (
    <div>
      <hr/>
      {props.postList.map((post) =>
        <Post names={post.names}
          location={post.location}
          issue={post.issue}
          key={post.id}/>
      )}
      <hr/>
      {props.postList.map((post)=>
        <StatusUpdate name={post.name}
          status={post.status}
          key={post.id}/>
      )}
    </div>
  );
}

PostList.propTypes = {
  postList: PropTypes.array
};

export default PostList;
