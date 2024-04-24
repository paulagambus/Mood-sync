import { StyleSheet, Text, View, Alert, TouchableHighlight, SafeAreaView, Image, Button, TouchableOpacity, Dimensions } from 'react-native';
import { colors } from "./Utils/Colors";


export default function HomePage({navigation}) {

  // Handler for the "Let's do it" button
  const doItHandler = () => {
      console.log('Let\'s do it button pressed');
      // Add your navigation logic here for the "Let's do it" button
  }

  // Handler for the "Let's check it" button
  const checkItHandler = () => {
      console.log('Let\'s check it button pressed');
      // Add your navigation logic here for the "Let's check it" button
  }
  
  return (
      <View style={styles.container}>
          <Image
                source={require('../assets/logo.png')}
                style={styles.logo}
                resizeMode='contain'
          />
          <Text style={styles.feelText}>How do you feel today?</Text>
          <TouchableOpacity onPress={doItHandler} style={styles.button}>
              <View style={styles.buttonInner}>
                  <Text style={styles.buttonText}>Let's do it</Text>
              </View>
          </TouchableOpacity>
          <Text style={styles.weekText}>How was the week?</Text>
          <TouchableOpacity onPress={checkItHandler} style={styles.button}>
              <View style={styles.buttonInner}>
                  <Text style={styles.buttonText}>Let's check it</Text>
              </View>
          </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.LIGHT_PURPLE,
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
  },
  logo: {
    width: 100, // Adjust width as needed
    height: 100, // Adjust height as needed
    position: 'absolute',
    top: 20, // Adjust top position as needed
    left: 20, // Adjust left position as needed
  },
  feelText: {
      marginBottom: 20,
      color: colors.DARK_PURPLE,
      fontSize: 20,
      fontWeight: 'bold',
  },
  weekText: {
      marginBottom: 20,
      color: colors.DARK_PURPLE,
      fontSize: 20,
      fontWeight: 'bold',
  },
  button: {
      width: "50%",
      borderRadius: 25,
      marginBottom: 30,
      alignItems: 'center',
      backgroundColor: colors.DARK_PURPLE,
      paddingHorizontal: 50,
  },
  buttonInner: {
      paddingVertical: 20,
      borderRadius: 25,
      marginTop: '-10%',
      width: '100%',
      alignItems: 'center',
  },
  buttonText: {
      color: colors.WHITE,
      fontWeight: 'bold',
      marginTop: 5,
      fontSize: 16,
      alignItems: 'center',
  },
});