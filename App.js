import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, TouchableHighlight, SafeAreaView, Image, Button } from 'react-native';

export default function App() {
  const handlePress = () => console.log("Text clicked");
  return (
    // the second style is to override the first style
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Button 
        color={"black"}
        title='Click Me' 
        onPress={() => 
          // Creating an alert box with a title, message and buttons
        //   Alert.alert("My Title", "My message", [
        //   {text: "Yes", onPress: () => console.log("Yes")},
        //   {text: "No", onPress: () => console.log("No")},
        // ])
        // Create a pop up with input field
        Alert.prompt("My Title", "My message", (text) => console.log(text))
      }
      />
    </SafeAreaView>
  );
}

{/* <Text numberOfLines={1} onPress={handlePress}>
Hello girls!
</Text>
<TouchableHighlight onPress={() => console.log("Image tapped")}>
<Image
  source={{ 
    width: 200,
    height: 300,
    uri: "https://picsum.photos/200/300",
  }} 
/>
</TouchableHighlight>
<View style={{width: 100, height: 50, backgroundColor:"dodgerblue"}}></View>
<StatusBar style="auto" /> */}

const containerStyle = {backgroundColor: "orange"};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
