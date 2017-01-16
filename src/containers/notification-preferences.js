import React from 'react';
import {connect} from 'react-redux';

import {Notifications as _Notifications} from '../windows';
import {navigationActions} from '../actions';

class Notifications extends React.Component {

  render() {
    return (
      <_Notifications
        onBack={this.props.onBack}
        onClose={this.props.onClose}
      />
    );
  }
}

export default connect(
  (state) => ({
  }),
  (dispatch) => ({
    onNavigateBack: () => dispatch(navigationActions.pop()),
  }),
)(Notifications);
