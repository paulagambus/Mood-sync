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
          <Text style={styles.greetingText}>How do you feel today?</Text>
          <TouchableOpacity onPress={doItHandler} style={styles.button}>
              <View style={styles.buttonInner}>
                  <Text style={styles.buttonText}>Let's do it</Text>
              </View>
          </TouchableOpacity>
          <Text style={styles.greetingText}>How was the week?</Text>
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
  greetingText: {
      marginBottom: 20,
      color: colors.WHITE,
      fontSize: 20,
      fontWeight: 'bold',
  },
  button: {
      width: "50%",
      borderRadius: 25,
      marginBottom: 20,
      alignItems: 'center',
      backgroundColor: colors.DARK_PURPLE,
      paddingHorizontal: 10,
  },
  buttonInner: {
      paddingVertical: 15,
      borderRadius: 25,
      marginTop: '-10%',
      width: '100%',
      alignItems: 'center',
  },
  buttonText: {
      color: colors.WHITE,
      fontWeight: 'bold',
      fontSize: 16,
  },
});
