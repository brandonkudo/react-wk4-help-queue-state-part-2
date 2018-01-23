import React from 'react';
import StatusUpdateForm from './StatusUpdateForm';
import StatusConfirmationQuestions from './StatusConfirmationQuestions';
import PropTypes from 'prop-types';

class StatusUpdateFormControl extends React.Component {

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
      currentlyVisibleContent = <StatusUpdateForm onNewStatusCreation={this.props.onNewStatusCreation}/>;
    } else {
      currentlyVisibleContent = <StatusConfirmationQuestions onTroubleshootingConfirmation={this.handleTroubleshootingConfirmation}/>;
    }
    return(
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

StatusUpdateFormControl.propTypes = {
  onNewStatusCreation: PropTypes.func
};

export default StatusUpdateFormControl;
