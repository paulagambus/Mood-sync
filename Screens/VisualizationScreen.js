import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import WeekScreen from './WeekScreen';
import MonthScreen from './MonthScreen';

const VisualizationScreen = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'week', title: 'Week' },
    { key: 'month', title: 'Month' },
  ]);

  const renderScene = SceneMap({
    week: WeekScreen,
    month: MonthScreen,
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'blue' }}
      style={{ backgroundColor: 'white' }}
      labelStyle={{ color: 'black' }}
    />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: 300 }}
      renderTabBar={renderTabBar}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default VisualizationScreen;
