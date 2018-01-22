import React from 'react';
import NewStatusUpdate from './NewStatusUpdate';
import ConfirmationQuestions from './ConfirmationQuestions';
import PropTypes from 'prop-types';

class StatusUpdateControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this);
  }

  handleTroubleshootingConfirmation(){
    this.setState({formVisibleOnPage: true});

  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewStatusUpdate onNewPostCreation={this.props.onNewPostCreation}/>;
    } else {
      currentlyVisibleContent = <ConfirmationQuestions onTroubleshootingConfirmation={this.handleTroubleshootingConfirmation}/>;
    }
    return(
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

StatusUpdateControl.propTypes = {
  onNewPostCreation: PropTypes.func
};

export default StatusUpdateControl;
