import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, ImageBackground, ToastAndroid, KeyboardAvoidingView, } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import connect from '../../MyRedux/Connect';
import { setName } from '../../MyRedux/Actions';

const mapStateToProps = (state) => ({
    firstname: state.firstname,
    theme: state.theme
})

const mapDispathToProps = (dispatch) => ({
    setName: (value) => {
        dispatch(setName(value))
    }
})

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: ''
    };
  }

    handleSignUp = () => {
        this.props.setName(this.state)
        setTimeout(() => {
            this.props.navigation.jumpTo('1')
        }, 500);
        ToastAndroid.show("Thank You!", ToastAndroid.SHORT);
    }

  render() {
    return (
        <ImageBackground
            blurRadius={ 2 }
            style={ styles.background }
            source={ require('./back.jpg') }
        >
            <KeyboardAvoidingView style={ styles.container }>
                <View style={ styles.container }>
                    <Text style={ styles.welcome }>
                        Welcome
                    </Text>
                    <TextInput
                        mode="flat"
                        label="First Name"
                        style={ styles.input }
                        onChangeText={ txt => this.setState({ name: txt }) }
                        theme={ this.props.theme }
                        underlineColor="white"
                    />
                    <TextInput
                        mode="flat"
                        label="Last Name"
                        style={ styles.input }
                        onChangeText={ txt => this.setState({ lastname: txt }) }
                        theme={ this.props.theme }
                        underlineColor="white"
                    />
                    <Button
                        mode='text'
                        labelStyle={ { fontSize: 20, color: 'white' } }
                        style={ styles.button }
                        theme={ { colors: { primary: 'white', accent: 'white' } } }
                        onPress={ this.handleSignUp }
                    >
                        Sign up
                    </Button>
                </View>
            </KeyboardAvoidingView>
        </ImageBackground>
    );
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Signup);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    },
    input: {
        width: Dimensions.get('window').width * 0.9,
        margin: 10,
        backgroundColor: 'transparent',
    },
    button: {
        width: Dimensions.get('window').width * 0.9,
        height: 50,
        justifyContent: 'center',
        marginVertical: 10
    },
    background: {
        flex: 1,
        width: '100%'
    },
    welcome: {
        fontSize: 50,
        alignSelf: 'flex-start',
        margin: 20,
        color: 'white',
        fontWeight: '700'
    }
})