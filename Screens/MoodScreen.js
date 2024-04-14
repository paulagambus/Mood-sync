import { StyleSheet, Text, View, Alert, TouchableHighlight, SafeAreaView, Image, Button, TouchableOpacity } from 'react-native';
import { colors } from "./Utils/Colors";
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import ProfileModal from './Profile'; // Correct import path

export default function MoodScreen ({navigation}) {
  // Manage pressed state for each image separately
  const [pressedImages, setPressedImages] = useState({
    "anxious face": false,
    "confused face": false,
    "grinning face": false,
    "neutral face": false,
    "pouting face": false,
    "smiling face": false,
    "star struck face": false,
    "woozy face": false,
  });

  const [isProfileModalVisible, setIsProfileModalVisible] = useState(false);

  const toggleProfileModal = () => {
    setIsProfileModalVisible(!isProfileModalVisible);
  };

  const handlePressImage = (imageName) => {
    // Toggle pressed state for the clicked image
    setPressedImages(prevState => ({
      ...prevState,
      [imageName]: !prevState[imageName]
    }));
    console.log('Mood pressed:', imageName);
  };

  // Handler of the add button
  const pressHandler = () => {
    console.log('Save button pressed');
    Alert.alert('Mood saved', 'Your mood has been saved successfully.', [
      { text: 'Ok', onPress: () => navigation.navigate('Home') }
    ]);
  }

  const pressHandlerProfile = () => {
    console.log('Profile button pressed');
    // navigation.navigate('Profile');
  }

  return (
    <SafeAreaView style={styles.container1}>
      <View style={styles.header}>
        <Text style={styles.headerText}>How did you feel today?</Text>
      </View>
      <View style={styles.imageContainer}>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => handlePressImage("anxious face")}>
            <Image source={require('../assets/moods/anxious_face.png')} 
            style={[styles.image, pressedImages["anxious face"] && styles.pressedImage]} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePressImage("confused face")}>
            <Image source={require('../assets/moods/confused_face.png')}
            style={[styles.image, pressedImages["confused face"] && styles.pressedImage]} />
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => handlePressImage("grinning face")}>
            <Image source={require('../assets/moods/grinning_face.png')}
            style={[styles.image, pressedImages["grinning face"] && styles.pressedImage]} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePressImage("neutral face")}>
            <Image source={require('../assets/moods/neutral_face.png')}
            style={[styles.image, pressedImages["neutral face"] && styles.pressedImage]} />
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => handlePressImage("pouting face")}>
            <Image source={require('../assets/moods/pouting_face.png')} 
            style={[styles.image, pressedImages["pouting face"] && styles.pressedImage]} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePressImage("smiling face")}>
            <Image source={require('../assets/moods/smiling_face.png')} 
            style={[styles.image, pressedImages["smiling face"] && styles.pressedImage]}/>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => handlePressImage("star struck face")}>
            <Image source={require('../assets/moods/star_struck.png')}
            style={[styles.image, pressedImages["star struck face"] && styles.pressedImage]} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePressImage("woozy face")}>
            <Image source={require('../assets/moods/woozy_face.png')}
            style={[styles.image, pressedImages["woozy face"] && styles.pressedImage]}/>
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
      <TouchableOpacity style={styles.profileButton} onPress={toggleProfileModal}>
        <View >
          <Ionicons name="person-circle-outline" size={60} color={colors.DARK_PURPLE} />
        </View>
      </TouchableOpacity>
      <ProfileModal isVisible={isProfileModalVisible} onClose={toggleProfileModal} />
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
    opacity: 0.5
  },

  pressedImage: {
    width: 100,
    height: 100,
    marginHorizontal: 30,
    marginVertical: 5,
    opacity: 1,
  },

  profileButton: {
    borderRadius: 20, // Make the button circular
    padding: 10, // Add padding for the icon to have some space from the button edge
    marginBottom: 10, // Add margin to the bottom of the button
  },

});