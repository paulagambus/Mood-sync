import { StyleSheet, Text, View, Alert, TouchableHighlight, SafeAreaView, Image, Button, TouchableOpacity } from 'react-native';
import { colors } from "./Utils/Colors";
import TwoTabButton from '../Components/TwoTabButton';


export default function DataScreen({navigation}) {

    // Handler of the add button
    // const pressHandler = () => {
    //   navigation.navigate('HomePage');
    // }

    return (
      // the second style is to override the first style
      <SafeAreaView style={[styles.container1]}>
        <TwoTabButton text1 = {"Week"} text2={"Month"}/>
      </SafeAreaView>
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
      marginTop: '20%',
      marginLeft: '25%',
      marginRight: '25%'
      // top: 60, // Adjust this value to position the logo vertically
      // alignSelf: 'center', // Align the logo horizontally to the center
    },
  
    button: {
      width: "50%",
      borderRadius: 25,
      marginVertical: 320,
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
  