import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, TouchableHighlight, SafeAreaView, Image, Button, TouchableOpacity } from 'react-native';

export default function App() {
  const signupPressed = () => {
    Alert.alert('Signup button pressed');
  }

  const loginPressed = () => {
    Alert.alert('Login button pressed');
  }
  return (
    // the second style is to override the first style
    <SafeAreaView style={[styles.container1]}>
      <Image
        source={require('./assets/logo.png')}
        style={styles.logo}
        resizeMode='contain'
        />
      <TouchableHighlight>
        <Text style={styles.signup} onPress={signupPressed}>Sign up</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={styles.login} onPress={loginPressed}>Login</Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#9370DB',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  logo: {
    width: '50%',
    height: '50%',
    position: 'absolute',
    marginTop: '20%',
    marginLeft: '25%',
    // top: 60, // Adjust this value to position the logo vertically
    // alignSelf: 'center', // Align the logo horizontally to the center
  },

  signup: {
    backgroundColor: 'purple',
    color: 'white',
    width: "75%",
    borderRadius: 25,
    textAlign: 'center',
    // fontWeight: 'bold',
    marginLeft: '11%',
    padding: "2%",
    fontSize:  27,
    marginTop: '90%'
  },

  login: {
    backgroundColor: 'purple',
      color: 'white',
      width: "65%",
      borderRadius: 25,
      textAlign: 'center',
      // fontWeight: 'bold',
      marginLeft: '18%',
      // fontFamily: 'serif',
      padding: "2%",
      fontSize:  33,
      marginTop: '5%'
  }
});
