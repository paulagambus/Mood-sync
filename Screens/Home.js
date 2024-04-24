import { StyleSheet, Text, View, Alert, TouchableHighlight, SafeAreaView, Image, Button, TouchableOpacity, Dimensions } from 'react-native';
import { colors } from "./Utils/Colors";


export default function HomePage({navigation}) {

    // Handler of the add button
    const pressHandler = () => {
      console.log('button 1 pressed');
      navigation.navigate('HomePage');
    }

    //const loginPressed = () => {
      //Alert.alert('Login button pressed');
    //}
    
    return (
      <View>
        <SafeAreaView>
          <TouchableOpacity onPress={pressHandler}>
            <View>
              <Text>Let's go!</Text>
            </View>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    );
    
  }
  
  const styles = StyleSheet.create({
    container1: {
      flex: 1,
      backgroundColor: colors.LIGHT_PURPLE,
      // alignItems: 'center',
      // justifyContent: 'center',
    },
  
    logo: {
      width: '50%',
      height: '50%',
      position: 'absolute',
      //marginTop: '1%',
      marginLeft: '25%',
      marginRight: '25%'
      // top: 60, // Adjust this value to position the logo vertically
      // alignSelf: 'center', // Align the logo horizontally to the center
    },
  
    button: {
      width: "50%",
      borderRadius: 25,
      marginTop: '90%',
      alignItems: 'center',
      marginLeft: '24%',
      paddingHorizontal: 10,
    },
    
    button2: {
      width: "50%",
      borderRadius: 25,
      marginTop: '10%',
      alignItems: 'center',
      marginLeft: '24%',
      paddingHorizontal: 10,
    },

    buttonInner: {
      backgroundColor: colors.DARK_PURPLE,
      paddingVertical: 15,
      borderRadius: 25,
      marginTop: '-10%',
      width: '100%',
      alignItems: 'center',
    },
  
    buttonInner2: {
      backgroundColor: colors.DARK_PURPLE,
      paddingVertical: 15,
      borderRadius: 25,
      marginTop: '100%',
      width: '100%',
      alignItems: 'center',
    },

    buttonText: {
      color: colors.WHITE,
      fontWeight: 'bold',
      alignItems: 'center',
      fontSize: 16,
    },

  
  });
  