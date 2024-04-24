import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from "../Screens/Utils/Colors";

const TwoTabButton = ({ text1, text2, onPress }) => {
  const [activeTab, setActiveTab] = useState(1); // Initial tab is 1

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.tab, activeTab === 1 ? styles.activeTab : null]}
        onPress={() => {
          setActiveTab(1);
          onPress('week'); // Pass 'week' when text1 is pressed
        }}
      >
        <Text style={styles.tabText}>{text1}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 2 ? styles.activeTab : null]}
        onPress={() => {
          setActiveTab(2);
          onPress('month'); // Pass 'month' when text2 is pressed
        }}
      >
        <Text style={styles.tabText}>{text2}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 50,
    paddingTop: 40,
    borderWidth: 1,
    borderColor: colors.LIGHT_PURPLE,
    borderRadius: 5,
    overflow: 'hidden',
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  activeTab: {
    backgroundColor: colors.DARK_PURPLE,
    borderRadius: 15,
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.WHITE,
  },
});

export default TwoTabButton;