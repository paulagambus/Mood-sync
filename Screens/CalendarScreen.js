import React, { useState } from 'react';
import { View, Button } from 'react-native';
import HeatMapView from './HeatMapView';
import EmojiView from './EmojiView';

const CalendarScreen = () => {
    const [viewMode, setViewMode] = useState('heatMap'); // Default view mode is heat map

    const toggleViewMode = () => {
        setViewMode((prevMode) => (prevMode === 'heatMap' ? 'emoji' : 'heatMap'));
    };

    return (
        <View style={{ flex: 1 }}>
            {viewMode === 'heatMap' ? <HeatMapView /> : <EmojiView />}
            <Button title={viewMode === 'heatMap' ? 'Switch to Emoji View' : 'Switch to Heat Map View'} onPress={toggleViewMode} />
        </View>
    );
};

export default CalendarScreen;
