import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import connect from '../../MyRedux/Connect';
import Welcome from './Welcome';

const stateStuff = (state)=>({
    name: state.name
})

class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <SafeAreaView style={ {
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "center",
            backgroundColor: 'transparent'
        }}>
            <Welcome firstname={ this.props.name } />
        </SafeAreaView>
    );
  }
}

export default connect(stateStuff)(HomeScreen);
