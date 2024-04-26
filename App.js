import { StyleSheet, Text, View, Alert, TouchableHighlight, SafeAreaView, Image, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './Screens/LoginPage'; 
import HomePage from './Screens/Home';
import MoodScreen from './Screens/MoodScreen';
import Visualizations from './Screens/VisualizationScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Mood" component={MoodScreen} />
        <Stack.Screen name="Visualizations" component={Visualizations} />
      </Stack.Navigator>
    </NavigationContainer>
  )

};
