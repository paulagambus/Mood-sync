import { StyleSheet, Text, View, Alert, TouchableHighlight, SafeAreaView, Image, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './Screens/LoginPage'; 
import HomePage from './Screens/Home';
import MoodScreen from './Screens/MoodScreen';
import DataScreen from './Screens/DataScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Mood" component={MoodScreen} />
        <Stack.Screen name="Data" component={DataScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )

};
