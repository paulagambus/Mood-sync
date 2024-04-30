import React from 'react';
import { View, Image, ScrollView, StyleSheet } from 'react-native';
import { colors } from "./Utils/Colors";

const MonthScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/month/month_view.png')} style={styles.image1} />
      </View>
      <View style={styles.imageContainer}>
      <Image source={require('../assets/month/under_month.png')} style={styles.image2} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    marginVertical: 20, // Adjust as needed
  },
  image1: {
    width: 350, // Adjust width as needed
    height: 470, // Adjust height as needed
    resizeMode: 'contain', // Adjust the resizeMode property as needed
    // Add any additional styles for the first image here
  },
  image2: {
    width: 550, // Adjust width as needed
    height: 350, // Adjust height as needed
    resizeMode: 'contain', // Adjust the resizeMode property as needed
    // Add any additional styles for the second image here
  },
});

export default MonthScreen;
