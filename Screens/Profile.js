import { StyleSheet, Text, View, Modal, Alert, TouchableHighlight, SafeAreaView, Image, Button, TouchableOpacity } from 'react-native';
import { colors } from "./Utils/Colors";
import React, { useState } from 'react';

const ProfileModal = ({ isVisible, onClose }) => {
    // Sample user data
    const userData = {
      name: 'John',
      surname: 'Doe',
      age: 30,
      birthdate: '1994-05-20',
      phoneModel: 'iPhone 12',
      profession: 'Software Engineer',
      // Add more data fields as needed
    };
  
    return (
      <Modal
        animationType="slide" // Slide animation from the bottom
        transparent={true} // Transparent background
        visible={isVisible} // Show/hide modal based on prop
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
  
            <Text style={styles.label}>Name:</Text>
            <Text>{userData.name}</Text>
  
            <Text style={styles.label}>Surname:</Text>
            <Text>{userData.surname}</Text>
  
            <Text style={styles.label}>Age:</Text>
            <Text>{userData.age}</Text>
  
            <Text style={styles.label}>Birthdate:</Text>
            <Text>{userData.birthdate}</Text>
  
            <Text style={styles.label}>Phone Model:</Text>
            <Text>{userData.phoneModel}</Text>
  
            <Text style={styles.label}>Profession:</Text>
            <Text>{userData.profession}</Text>
  
            {/* Add more fields here */}
          </View>
        </View>
      </Modal>
    );
  };
  
  const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center', // Align items to the right
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    },
    modalContent: {
      width: '70%', // Adjust the width as needed
      backgroundColor: '#fff',
      padding: 20,
    },
    closeButton: {
      alignSelf: 'flex-end',
      padding: 10,
    },
    closeButtonText: {
      color: 'blue',
      fontWeight: 'bold',
    },
    label: {
      fontWeight: 'bold',
      marginTop: 10,
    },
  });

  export default ProfileModal;