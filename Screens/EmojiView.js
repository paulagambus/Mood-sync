import React from 'react';
import { View, Text } from 'react-native';
import { Calendar } from 'react-native-calendars';

const EmojiView = () => {
    // Dummy data representing emojis for each day
    const emojiData = {
        '2024-04-01': { marked: true, emoji: '😊' },
        '2024-04-02': { marked: true, emoji: '🎉' },
        // Add more data for other days
    };

    return (
        <View style={{ flex: 1 }}>
            <Calendar
                // Customize other properties as needed
                markedDates={emojiData}
                renderDay={(day, item) => (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text>{day ? day.day : item.day}</Text>
                        {emojiData[day.dateString] && <Text>{emojiData[day.dateString].emoji}</Text>}
                    </View>
                )}
            />
        </View>
    );
};

export default EmojiView;
