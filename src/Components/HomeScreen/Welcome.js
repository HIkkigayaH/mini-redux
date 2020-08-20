import React, { Component } from 'react';
import { 
  View, 
  Text, 
  StyleSheet,  
  Animated, 
  UIManager, 
  LayoutAnimation, 
  Dimensions 
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-paper';


if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

// const mapStateToProps = (state) => ({
//   theme: state.theme
// })

class Welcome extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       opacityAnim: new Animated.Value(1),
       widthAnim: new Animated.Value(0),
       search: false,
    };
  };
  
  _searchPressed = () => {
    Animated.timing(this.state.widthAnim, {
      toValue: Dimensions.get('window').width*0.95,
      duration: 300,
      useNativeDriver: false
    }).start();
    this.setState({ search: true })
  }

  _crossPressed = () => {
    Animated.timing(this.state.widthAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false
    }).start(() => {
      LayoutAnimation.configureNext({
        duration: 200,
        create: {
          type: 'linear',
          property: 'opacity'
        }
      })
      this.setState({ search: false })
    });
  }
  
  render() {
    return (
        <View style={ [ styles.welcomeBar, this.state.search ? { justifyContent: 'center' } : null ] }>
          {
            this.state.search || 
            <Text style={ styles.welcomeText }>
              Welcome{ this.props.firstname ? `, ${this.props.firstname}` : null}
            </Text>
          }
          {
            this.state.search &&
            <Animated.View
              style={ [{width: this.state.widthAnim}] }
            >
              <TextInputWithIcon
                placeholder="Search..."
                style={ styles.searchBar }
                onCrossPressed={this._crossPressed}
                iconName="arrow-left"
                theme={ {
                  colors: {
                    primary: 'white',
                    accent: 'white',
                  }
                }}
              />
            </Animated.View>
          }
          {
            this.state.search || 
            <MaterialCommunityIcons 
              name="magnify" 
              size={32} 
              style={styles.searchIcon} 
              onPress={()=>{
                LayoutAnimation.configureNext({
                  duration: 200,
                  delete: {
                    type: 'linear',
                    property: 'opacity'
                  }
                })
                this._searchPressed()
              }}
            />
          }
        </View>
    );
  }
}

const TextInputWithIcon = ({onCrossPressed, iconName, style,...rest}) => {
  return(
    <View
     style={[{
       flexDirection: 'row',
       alignItems: 'center'     
     }, style]}
    >
      <MaterialCommunityIcons 
        name={ iconName }
        onPress={ onCrossPressed }
        size={26}
        style={{margin: 10}}
      />
      <TextInput
        style={{
          flex: 1,
          backgroundColor: 'transparent',
          height: style.height
        }}
        underlineColor="transparent"
        { ...rest }
      />
    </View>
  );
}

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: 'transparent'
  },
  welcomeBar: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(35,140,234,1)',
    height: 130,
    width: '100%',
    elevation: 50
  },
  welcomeText: {
    color: 'white',
    fontSize: 38,
    margin: 10,
  },
  searchIcon: {
    margin: 10,
    color: 'white',
  },
  searchBar: {
    marginBottom: 10,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20
  },
})