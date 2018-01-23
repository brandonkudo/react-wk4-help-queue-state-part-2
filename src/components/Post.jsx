import React from 'react';
import PropTypes from 'prop-types';

class Post extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      likeStatus: false,
      likes: 0
    };
    this.setLike = this.setLike.bind(this);
    this.setDislike = this.setDislike.bind(this);
  }

  setLike() {
    this.setState({likeStatus: true});
    var newLikesCount = this.state.likes;
    (newLikesCount+=1);
    this.setState({likes: newLikesCount});
  }

  setDislike() {
    var newLikesCount = this.state.likes;
    (newLikesCount-=1);
    this.setState({likes: newLikesCount});
  }

  render() {
    console.log(this);
    let currentStatus = null;
    if (this.state.likes > 0) {
      currentStatus = <p>{this.state.likes}Likes</p>;
    } else {
      currentStatus = <p>Not Liked</p>;
    }

    // let currentButton = null;
    // if (this.state.likeStatus === true) {
    //   currentButton = <button onClick={this.setDislike}>Dislike</button>;
    // } else {
    //   currentButton = <button onClick={this.setLike}>Like</button>;
    // }

    return (
      <div>
        <h3>{this.props.names} - {this.props.location}</h3>
        <p><em>{this.props.issue}</em></p>
        <button onClick={this.setLike}>Like</button>
        <button onClick={this.setDislike}>Dislike</button>
        {currentStatus}
        <hr/>
      </div>
    );
  }

}

Post.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string
};

export default Post;
