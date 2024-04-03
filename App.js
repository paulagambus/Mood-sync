import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, TouchableHighlight, SafeAreaView, Image, Button, TouchableOpacity } from 'react-native';
import Navigator from './routes/homeStack';

export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{flex:1}}>
        <Navigator />
      </View>
    </SafeAreaView>
  )

};
