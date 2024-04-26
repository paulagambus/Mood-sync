import { StyleSheet, Text, View, Alert, TouchableHighlight, SafeAreaView, Image, Button, TouchableOpacity, Dimensions } from 'react-native';
import { colors } from "./Utils/Colors";

export default function LoginPage ({navigation}) {

    // Handler of the add button
    const pressHandler = () => {
      console.log('Login button pressed');
      navigation.navigate('Home'); // in the future, this will navigate to the home page
    }

    return (
      // the second style is to override the first style
      <SafeAreaView style={[styles.container1]}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
          resizeMode='contain'
          />
        <TouchableOpacity
          onPress={pressHandler}
          style={styles.button}
        >
          <View style={styles.buttonInner}>
            <Text style={styles.buttonText}>Login</Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container1: {
      flex: 1,
      backgroundColor: colors.LIGHT_PURPLE,
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      // alignItems: 'center',
      // justifyContent: 'center',
    },
  
    logo: {
      width: '50%',
      height: '50%',
      position: 'absolute',
      marginTop: '20%',
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
    
    buttonInner: {
      backgroundColor: colors.DARK_PURPLE,
      paddingVertical: 15,
      borderRadius: 25,
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
  