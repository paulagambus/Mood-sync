import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars'; // or any other calendar library you're using

const MonthScreen = () => {
  const markedDatesWithEmojis = { /* your marked dates with emojis */ };
  const markedDatesWithPlus = { /* your marked dates with plus symbols */ };

  const renderCustomDay = (date) => {
    const emoji = markedDatesWithEmojis[date.dateString];
    const plus = markedDatesWithPlus[date.dateString];
    return (
      <View style={styles.customDayContainer}>
        <Text style={styles.dayText}>{date.day}</Text>
        <Text style={styles.emoji}>{emoji}</Text>
        <Text style={styles.plus}>{plus}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Your calendar component */}
      <Calendar
        renderDay={renderCustomDay}
        /* other props */
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customDayContainer: {
    alignItems: 'center',
  },
  dayText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  emoji: {
    fontSize: 16,
    marginTop: 4, // Adjust this value to position the emoji below the day number
  },
  plus: {
    fontSize: 16,
    marginTop: 4, // Adjust this value to position the plus symbol below the day number
  },
});

export default MonthScreen;
