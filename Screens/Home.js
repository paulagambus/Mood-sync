import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { colors } from "./Utils/Colors";
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons
import ProfileModal from './Profile'; // Correct import path

export default function HomePage({navigation}) {

    const [isProfileModalVisible, setIsProfileModalVisible] = useState(false);

    const toggleProfileModal = () => {
        setIsProfileModalVisible(!isProfileModalVisible);
    };

    // Handler for the "Let's do it" button
    const doItHandler = () => {
        console.log('Let\'s do it button pressed');
        navigation.navigate('Mood');
    }

    // Handler for the "Let's check it" button
    const checkItHandler = () => {
        console.log('Let\'s check it button pressed');
        navigation.navigate('Visualizations');
    }
    
    // Handler for the profile button
    const pressHandlerProfile = () => {
        console.log('Profile button pressed');
        // Add your navigation logic here for the profile button
    }

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/logo.png')}
                style={styles.logo}
                resizeMode='contain'
            />
            <TouchableOpacity style={styles.profileButton} onPress={toggleProfileModal}>
                <View >
                    <Ionicons name="person-circle-outline" size={50} color={colors.DARK_PURPLE} />
                </View>
            </TouchableOpacity>
            <ProfileModal isVisible={isProfileModalVisible} onClose={toggleProfileModal} />
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
    logo: {
        width: 80, // Adjust width as needed
        height: 100, // Adjust height as needed
        position: 'absolute',
        top: 5, // Adjust top position as needed
        left: 20, // Adjust left position as needed
    },
    greetingText: {
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
        textAlign: 'center',
    },
    profileButton: {
        position: 'absolute', // Position the button absolutely
        right: 20, // Adjust the right margin as needed
        top: 20, // Adjust the top margin as needed
        borderRadius: 20, // Make the button circular
        padding: 10, // Add padding for the icon to have some space from the button edge
        zIndex: 1, // Ensure the button appears above other elements
        backgroundColor: colors.LIGHT_PURPLE, // Match the background color of the screen
    },
});
