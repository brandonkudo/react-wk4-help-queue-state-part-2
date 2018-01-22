import React from 'react';
import PropTypes from 'prop-types';

class Post extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      likeStatus: false
    };
    this.setLike = this.setLike.bind(this);
    this.setDislike = this.setDislike.bind(this);
  }

  setLike() {
    this.setState({likeStatus: true});
  }

  setDislike() {
    this.setState({likeStatus: false});
  }

  render(props) {
    console.log(this);
    let currentStatus = null;
    if (this.state.likeStatus) {
      currentStatus = <p>Liked</p>;
    } else {
      currentStatus = <p>Not Liked</p>;
    }

    let currentButton = null;
    if (this.state.likeStatus === true) {
      currentButton = <button onClick={this.setDislike}>Dislike</button>
    } else {
      currentButton = <button onClick={this.setLike}>Like</button>
    }

    return (
      <div>
        <h3>{this.props.names} - {this.props.location}</h3>
        <p><em>{this.props.issue}</em></p>
        {currentButton}
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
