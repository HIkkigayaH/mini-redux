import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from './src/Components/HomeScreen/HomeScreen';
import View2 from './src/Components/SignUpScreen/SignUpScreen';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator();

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                shifting={ true }
            >
                <Tab.Screen
                    name="1"
                    component={ View1 }
                    options={ {
                        tabBarLabel: 'Home',
                        tabBarColor: 'rgba(35,140,234,1)',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="home" color={ color } size={ 26 } />
                        ),
                    } }
                />
                <Tab.Screen
                    name="2"
                    component={ View2 }
                    options={ {
                        tabBarLabel: 'Sign Up',
                        tabBarColor: 'rgba(154,24,138,1)',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="bell" color={ color } size={ 26 } />
                        ),
                    } }
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
  }
}

export default Test;
