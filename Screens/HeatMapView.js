import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Calendar } from 'react-native-calendars';

const HeatMapView = () => {
    const [selectedDay, setSelectedDay] = useState(null);
    // const [modalVisible, setModalVisible] = useState(false);
    const [selectedDayDuration, setSelectedDayDuration] = useState('');

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

    // Map activity levels to colors
    const activityColors = {
        1: '#c8e6c9', // Soft green for low activity level
        2: '#fff9c4', // Soft yellow for medium activity level
        3: '#ffcdd2', // Soft red for high activity level
    };
    
    // Generate marked dates object
    const markedDates = monthData.reduce((acc, { date, duration }) => {
        const activityLevel = getActivityLevel(duration);
        const color = activityColors[activityLevel];
        acc[`2024-04-${date}`] = { customStyles: { container: { backgroundColor: color } } };
        return acc;
    }, {});

    return (
        <View style={{ flex: 1 }}>
    <Calendar
        markingType={'custom'}
        markedDates={{
            ...markedDates,
            [selectedDay]: { selected: true },
        }}
        onDayPress={handleDayPress}
    />
    {selectedDay && (
    <View style={{ backgroundColor: '#fff', padding: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', alignItems: 'center', }}>Day: {selectedDay.split('-')[2]}-{selectedDay.split('-')[1]}</Text>
        <Text style={{ fontSize: 16 }}>Total usage time: {selectedDayDuration}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
            <Image source={monthData.find((data) => data.date === selectedDay.split('-')[2])?.emoji} style={{ width: 50, height: 50 }} />
            <Text style={{ fontSize: 16, marginLeft: 10 }}>
                {monthData.find((data) => data.date === selectedDay)?.description}
            </Text>
        </View>
        <TouchableOpacity onPress={() => setSelectedDay(null)} style={{ alignSelf: 'flex-end', marginTop: 10 }}>
            <Text style={{ color: 'blue', fontSize: 16 }}>Close</Text>
        </TouchableOpacity>
    </View>
)}

</View>

    );
};

export default HeatMapView;
