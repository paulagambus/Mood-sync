import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { colors } from "./Utils/Colors";
import { useNavigation } from '@react-navigation/native';

const HeatMapView = () => {
    const [selectedDay, setSelectedDay] = useState(null);
    // const [modalVisible, setModalVisible] = useState(false);
    const [selectedDayDuration, setSelectedDayDuration] = useState('');
    const [emojiCounts, setEmojiCounts] = useState({});
    const navigation = useNavigation();

    const monthData = [
        { date: '01', duration: '5:50:42', emoji: require('../assets/moods/very_sad.png') },
        { date: '02', duration: '7:47:48', emoji: require('../assets/moods/ok-happy.png'), },
        { date: '03', duration: '7:11:03', emoji: require('../assets/moods/very_sad.png'),},
        { date: '04', duration: '4:22:16', emoji: require('../assets/moods/bit_sad.png'), },
        { date: '05', duration: '5:59:05', emoji: require('../assets/moods/very_sad.png')},
        { date: '06', duration: '6:40:39', emoji: require('../assets/moods/very_sad.png'),},
        { date: '07', duration: '5:06:26', emoji:  require('../assets/moods/neutral.png'),},
        { date: '08', duration: '5:24:23', emoji: require('../assets/moods/bit_sad.png'), },
        { date: '09', duration: '6:27:49', emoji:  require('../assets/moods/confused.png'),},
        { date: '10', duration: '5:35:24', emoji: require('../assets/moods/bit_sad.png'), },
        { date: '11', duration: '6:50:08', emoji: require('../assets/moods/very_sad.png'), },
        { date: '12', duration: '7:11:47', emoji: require('../assets/moods/confused.png'),},
        { date: '13', duration: '6:50:25', emoji: require('../assets/moods/very_sad.png') },
        { date: '14', duration: '5:24:56', emoji: require('../assets/moods/ok-happy.png'), },
        { date: '15', duration: '5:48:00', emoji: require('../assets/moods/ok-happy.png'), },
        { date: '16', duration: '7:31:11', emoji: require('../assets/moods/neutral.png'), },
        { date: '17', duration: '6:43:19', emoji: require('../assets/moods/neutral.png'), },
        { date: '18', duration: '8:53:50', emoji: require('../assets/moods/bit_sad.png'), },
        { date: '19', duration: '2:58:21', emoji: require('../assets/moods/happy.png'), },
        { date: '20', duration: '1:20:13', emoji: require('../assets/moods/very_happy.png') },
        { date: '21', duration: '4:21:12', emoji: require('../assets/moods/very_happy.png') },
        { date: '22', duration: '3:06:43', emoji: require('../assets/moods/ok-happy.png'), },
        { date: '23', duration: '4:54:53', emoji: require('../assets/moods/ok-happy.png'), },
        { date: '24', duration: '7:44:30', emoji: require('../assets/moods/very_happy.png') },
        { date: '25', duration: '5:50:52', emoji: require('../assets/moods/happy.png'), },
        { date: '26', duration: '5:01:55', emoji: require('../assets/moods/ok-happy.png'), },
        { date: '27', duration: '4:28:18', emoji: require('../assets/moods/bit_sad.png'), },
        { date: '28', duration: '3:09:33', emoji: require('../assets/moods/happy.png'), },
        { date: '29', duration: '5:26:50', emoji: require('../assets/moods/bit_sad.png'), },
        { date: '30', duration: '4:17:07', emoji: require('../assets/moods/neutral.png'),},
        { date: '31', duration: '6:03:28', emoji: require('../assets/moods/confused.png'),}
    ];

    useEffect(() => {
        // Count the occurrences of each emoji in the monthData array
        const counts = monthData.reduce((acc, { emoji }) => {
            acc[emoji] = (acc[emoji] || 0) + 1;
            return acc;
        }, {});
        console.log(counts);
        setEmojiCounts(counts);
    }, []);

    const orderedEmojis = [
        require('../assets/moods/very_sad.png'),
        require('../assets/moods/confused.png'),
        require('../assets/moods/bit_sad.png'),
        require('../assets/moods/neutral.png'),
        require('../assets/moods/ok-happy.png'),
        require('../assets/moods/happy.png'),
        require('../assets/moods/very_happy.png'),
        
    ];

    const handleDayPress = (day) => {
        const selectedDate = day.dateString;
        setSelectedDay(selectedDate);
        const selectedData = monthData.find((data) => data.date === selectedDate.split('-')[2]);
        console.log(selectedData);
        if (selectedData) {
            setSelectedDayDuration(selectedData.duration);
        }
    };
    

    // Convert duration to activity level
    const getActivityLevel = (duration) => {
        // Logic to determine activity level based on duration
        // For example, you can categorize durations into different ranges
        // and assign activity levels accordingly
        const hours = parseInt(duration.split(':')[0]);
        if (hours >= 5) {
            return 3; // High activity level
        } else if (hours >= 3) {
            return 2; // Medium activity level
        } else {
            return 1; // Low activity level
        }
    };

    const handleUpdateMood = () => {
        navigation.navigate('Mood');
      };

    // Map activity levels to colors
    const activityColors = {
        1: 'lightgreen', // Soft green for low activity level
        2: 'orange', // Soft yellow for medium activity level
        3: 'red', // Soft red for high activity level
    };
    
    // Generate marked dates object
    const markedDates = monthData.reduce((acc, { date, duration }) => {
        const activityLevel = getActivityLevel(duration);
        const color = activityColors[activityLevel];
        acc[`2024-04-${date}`] = {
            customStyles: {
                text: {
                    fontWeight: 'bold',
                    textDecorationLine: 'underline', // Add underline
                    textDecorationColor: color, // Color of the underline
                    color: '#555', // Dark gray color
                }
            }
        };
        return acc;
    }, {});
    
    

    
    return (
        <ScrollView style={{ flex: 1, backgroundColor: colors.WHITE}}>
            <View style={{ flex: 1 }}>
                <Calendar
                    markingType={'custom'}
                    markedDates={{
                        ...markedDates,
                        [selectedDay]: { selected: true },
                    }}
                    onDayPress={handleDayPress}
                    style={{ borderWidth: 0.5, borderColor: colors.WHITE, backgroundColor: colors.WHITE}}
                    firstDay={1} // Set Monday as the first day of the week
                    theme={{
                        arrowColor: colors.DARK_PURPLE,
                        textSectionTitleColor: colors.DARK_PURPLE,
                        selectedDayBackgroundColor: colors.DARK_PURPLE,
                        monthTextFontWeight: 'bold', 
                        textDayFontSize: 15,
                        textDayFontWeight: "light",
                        monthTextColor: colors.DARK_PURPLE,
                        backgroundColor: colors.WHITE,
                        calendarBackground: colors.WHITE,
                        todayTextColor: colors.DARK_PURPLE, // Color of today's date
                    }}
                />
                {selectedDay && (
                <View style={{ backgroundColor: '#f2f2f2', padding: 10, borderRadius: 10, marginLeft: 5, marginRight: 5}}>
                    <Text style={{ fontSize: 18, color: colors.DARK_PURPLE }}>Screen time: </Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        {/* Display time */}
                        <Text style={{ fontWeight: 'bold', color: colors.DARK_PURPLE, fontSize: 30, marginRight:20 }}>{selectedDayDuration}</Text>
                        {/* Display emoji */}
                        <Image source={monthData.find((data) => data.date === selectedDay.split('-')[2])?.emoji} style={{ width: 50, height: 50 }} />
                    </View>
                    {/* Buttons */}
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => handleUpdateMood()} style={{ borderRadius: 8, backgroundColor: colors.DARK_PURPLE, padding: 10, marginRight: 5 }}>
                        <Text style={{ color: colors.WHITE, fontSize: 16 }}>Update Mood</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setSelectedDay(null)} style={{ borderRadius: 8, backgroundColor: colors.DARK_PURPLE, padding: 10 }}>
                        <Text style={{ color: colors.WHITE, fontSize: 16 }}>Close</Text>
                        </TouchableOpacity>
                    </View>
                    </View>
                </View>
                )}

                <View style={{ marginTop: 10, padding: 10, backgroundColor: '#f2f2f2', borderRadius: 10, marginLeft: 5, marginRight: 5 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginBottom: 10, color: colors.DARK_PURPLE}}>Month Mood Overview</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    {orderedEmojis.map((emoji) => (
                        <View key={emoji} style={{ alignItems: 'center', marginBottom: 10 }}>
                            <Image source={emoji} style={{ width: 50, height: 50 }} />
                            <View style={{ backgroundColor: colors.DARK_PURPLE, width: 30, height: emojiCounts[emoji] ? emojiCounts[emoji] * 10 : 0, marginTop: 5 }} />
                            <Text style={{fontWeight: "bold", color: colors.DARK_PURPLE}}>{emojiCounts[emoji]}</Text>
                        </View>
                    ))}
                </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default HeatMapView;
