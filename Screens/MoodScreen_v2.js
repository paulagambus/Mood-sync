import React, { useState, useRef, useEffect } from 'react';
import { colors } from "./Utils/Colors";
import { View, StyleSheet, TouchableOpacity, FlatList, Image, Dimensions, Button, Alert , Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WheelSelector = () => {
  const imageSources = [
    require('../assets/moods/very_sad.png'),
    require('../assets/moods/confused.png'),
    require('../assets/moods/bit_sad.png'),
    require('../assets/moods/neutral.png'),
    require('../assets/moods/ok-happy.png'),
    require('../assets/moods/happy.png'),
    require('../assets/moods/very_happy.png'),
  ];

  const [selectedSquare, setSelectedSquare] = useState(3); // Initially select the neutral face image
  const flatListRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(Dimensions.get('window').width);

  useEffect(() => {
    // Scroll to the center image on initial render
    if (flatListRef.current) {
      const initialOffset = (Dimensions.get('window').width - 100) / 2 - 10;
      flatListRef.current.scrollToOffset({ offset: initialOffset, animated: false });
    }
  }, []);
  

  const handleLayout = (event) => {
    setContainerWidth(event.nativeEvent.layout.width);
  };

  const renderItem = ({ item, index }) => (
    
    <TouchableOpacity
      onPress={() => setSelectedSquare(index)}
      style={[styles.square, index === selectedSquare ? styles.selectedSquare : null]}
    >
      <Image source={item} style={styles.image} />
    </TouchableOpacity>
  );

  const onScroll = (event) => {
    const centerX = event.nativeEvent.contentOffset.x + containerWidth / 2;
    const selectedIndex = Math.floor(centerX / 120); // Assuming each image has a width of 100 and margin of 20
    setSelectedSquare(selectedIndex);
  };

  const navigation = useNavigation();

  const handleSaveButtonPress = () => {
    // Save the mood here
    const selectedEmojiIndex = selectedSquare;
    const selectedEmojiPath = imageSources[selectedSquare];
    console.log('Chosen emoji index:', selectedEmojiIndex);
    console.log('Chosen emoji path:', selectedEmojiPath);
    Alert.alert('Mood Saved', 'Your mood has been saved!', [
      {
        text: 'OK',
        onPress: () => navigation.navigate('Home'), // Navigate to VisualizationScreen
      },
    ]);
  };

  return (
    <View style={styles.container} onLayout={handleLayout}>
      <Text style={styles.heading}>How do you feel today?</Text>
      <View style={styles.flatListContainer}></View>
        <FlatList
          ref={flatListRef}
          data={['', ...imageSources, '']} // Add empty items as margins
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={120} // Width of each image plus margin
          decelerationRate="fast"
          keyExtractor={(item, index) => index.toString()}
          onScroll={onScroll}
          scrollEventThrottle={16}
        />
      
      <View style={styles.buttonContainer}>
        <Button title="Save" onPress={handleSaveButtonPress} color={colors.DARK_PURPLE}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    paddingTop: 20, // Add padding at the top to prevent squeezing
    backgroundColor: colors.LIGHT_PURPLE, // Change the background color
  },
  heading: {
    fontSize: 24, // Increase font size
    marginTop: 20, // Add more margin at the bottom
    color: colors.DARK_PURPLE, // Change the color
  },
  flatListContainer: {
    flex: 1,
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },
  square: {
    width: 100,
    height: 100,
    marginHorizontal: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  selectedSquare: {
    width: 120, // Increase the width when selected
    height: 120, // Increase the height when selected
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  buttonContainer: {
    marginVertical: 60, // Add margin to the top and bottom
    color: colors.LIGHT_PURPLE, // Change the color
  },
});



export default WheelSelector;
