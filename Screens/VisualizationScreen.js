import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from "./Utils/Colors";
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import DataScreen from './DataScreen';
import HeatMapView from './HeatMapView';

const VisualizationScreen = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'week', title: 'Week' },
    { key: 'month', title: 'Month' },
  ]);

  const renderScene = SceneMap({
    week: DataScreen,
    month: HeatMapView,
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: colors.DARK_PURPLE }}
      style={{ backgroundColor: "while" }}
      labelStyle={{ color: colors.DARK_PURPLE }}
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
