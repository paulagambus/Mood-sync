import { StyleSheet, Text, View, Alert, TouchableHighlight, SafeAreaView, Image, Button, TouchableOpacity } from 'react-native';
import { colors } from "./Utils/Colors";

export default function MoodScreen ({navigation}) {

    // Handler of the add button
  const pressHandler = () => {
    console.log('Save button pressed');
    // Add your save functionality here
  }

  return (
    <SafeAreaView style={styles.container1}>
      <View style={styles.header}>
        <Text style={styles.headerText}>How did you feel today?</Text>
      </View>
      <View style={styles.imageContainer}>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => console.log('Image 1 pressed')}>
            <Image source={require('../assets/moods/anxious_face.png')} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('Image 2 pressed')}>
            <Image source={require('../assets/moods/confused_face.png')} style={styles.image} />
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => console.log('Image 3 pressed')}>
            <Image source={require('../assets/moods/grinning_face.png')} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('Image 4 pressed')}>
            <Image source={require('../assets/moods/neutral_face.png')} style={styles.image} />
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => console.log('Image 5 pressed')}>
            <Image source={require('../assets/moods/pouting_face.png')} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('Image 6 pressed')}>
            <Image source={require('../assets/moods/smiling_face.png')} style={styles.image} />
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => console.log('Image 7 pressed')}>
            <Image source={require('../assets/moods/star_struck.png')} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('Image 8 pressed')}>
            <Image source={require('../assets/moods/woozy_face.png')} style={styles.image} />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
          onPress={pressHandler}
          style={styles.button}
        >
          <View style={styles.buttonInner}>
            <Text style={styles.buttonText}>Save</Text>
          </View>
      </TouchableOpacity>
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
      marginVertical: 25,
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

    header: {
      marginTop: 40,
      marginBottom: 35,
      alignItems: 'center',
    },

    headerText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: colors.WHITE,
    },

    imageContainer: {
      alignItems: 'center',
    },

    row: {
      flexDirection: 'row',
      marginBottom: 10,
    },

    image: {
      width: 100,
      height: 100,
      marginHorizontal: 30,
      marginVertical: 5,
    },
  });