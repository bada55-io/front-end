import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ColorList from '../components/ColorList/index';
import * as ColorListActions from '../components/ColorList/actions';

class ColorApp extends Component {
  render() {
    const { actions} = this.props;
    return (
      <section>
        <h1>Liste de couleurs</h1>
        <ColorList {...this.props} />
      </section>
    );
  }
}


function mapStateToProps(state) {
  return Object.assign({}, state.ColorList);
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ColorListActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorApp)