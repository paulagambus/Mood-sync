import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import TwoTabButton from '../Components/TwoTabButton';
import { BarChart } from 'react-native-chart-kit';
import { colors } from "./Utils/Colors";

export default function DataScreen({navigation}) {
  const [activeTab, setActiveTab] = useState('Week'); // Week or Month

  const weekData = [
    { date: 'M', duration: '5:06:26' },
    { date: 'T', duration: '5:24:23' },
    { date: 'W', duration: '6:27:49' },
    { date: 'T', duration: '5:35:24' },
    { date: 'F', duration: '6:50:08' },
    { date: 'S', duration: '7:11:47' },
    { date: 'S', duration: '6:50:25' }
  ];

  const weekMean = '6:00:51'; // Average duration for the week

  const monthData = [
    { date: '01', duration: '5:50:42' },
    { date: '02', duration: '7:47:48' },
    { date: '03', duration: '7:11:03' },
    { date: '04', duration: '4:22:16' },
    { date: '05', duration: '5:59:05' },
    { date: '06', duration: '6:40:39' },
    { date: '07', duration: '5:06:26' },
    { date: '08', duration: '5:24:23' },
    { date: '09', duration: '6:27:49' },
    { date: '10', duration: '5:35:24' },
    { date: '11', duration: '6:50:08' },
    { date: '12', duration: '7:11:47' },
    { date: '13', duration: '6:50:25' },
    { date: '14', duration: '5:24:56' },
    { date: '15', duration: '5:48:00' },
    { date: '16', duration: '7:31:11' },
    { date: '17', duration: '6:43:19' },
    { date: '18', duration: '8:53:50' },
    { date: '19', duration: '2:58:21' },
    { date: '20', duration: '1:20:13' },
    { date: '21', duration: '4:21:12' },
    { date: '22', duration: '3:06:43' },
    { date: '23', duration: '4:54:53' },
    { date: '24', duration: '7:44:30' },
    { date: '25', duration: '5:50:52' },
    { date: '26', duration: '5:01:55' },
    { date: '27', duration: '4:28:18' },
    { date: '28', duration: '3:09:33' },
    { date: '29', duration: '5:26:50' },
    { date: '30', duration: '4:17:07' },
    { date: '31', duration: '6:03:28' }
  ];

  const formatChartData = (data) => {
    return data.map(item => {
      // Parse the duration strings and convert them to total seconds
      const [hours, minutes, seconds] = item.duration.split(':').map(Number);
      const totalSeconds = hours * 3600 + minutes * 60 + seconds;
      // return totalSeconds;

          // Convert total seconds to total hours
      const totalHours = totalSeconds / 3600;

      return totalHours;
    });
  };

  let graphData = activeTab === 'Week' ? weekData : monthData;

  // Convert weekMean to decimal hours
  const [meanHours, meanMinutes, meanSeconds] = weekMean.split(':').map(Number);
  const meanWeekHours = meanHours + (meanMinutes / 60) + (meanSeconds / 3600);

  return (
    <SafeAreaView style={styles.container}>
      <TwoTabButton
        text1="Week"
        text2="Month"
        onPress={(tab) => setActiveTab(tab)}
      />
        <View style={styles.chartContainer}>
          <BarChart
            data={{
              labels: weekData.map(item => item.date),
              datasets: [{ data: formatChartData(graphData) }]
            }}
            width={350}
            height={220}
            // yAxisLabel="h"
            chartConfig={{
              backgroundColor: colors.LIGHT_PURPLE,
              backgroundGradientFrom: colors.LIGHT_PURPLE,
              backgroundGradientTo: colors.LIGHT_PURPLE,
              decimalPlaces: 1,
              color: (opacity = 1) => `rgba(81, 48, 148, ${opacity})`, // dark purple color
              labelColor: (opacity = 1) => `rgba(81, 48, 148, ${opacity})`, // dark purple color
              style: { borderRadius: 16 },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: colors.DARK_PURPLE
              },
              formatYLabel: value => `${value} h`,
              fromZero: true, // Ensure the chart starts from zero
              // yLabelsOffset: -10 // Adjust the position of the y-axis labels
            }}
            style={styles.chart}
          />
          {/* Add horizontal line at weekMean */}
          <View style={[styles.horizontalLine, {
            top: `${parseFloat(weekMean.split(':')[0]) * 22}px`}
            ]}/>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.LIGHT_PURPLE,
    alignItems: 'center',
    justifyContent: 'center',
  },

  chartContainer: {
    marginTop: 20,
    alignItems: 'center',
    marginHorizontal: 5,
  },

  chart: {
    marginVertical: 20,
    borderRadius: 16,
    alignItems: 'center',
  },

  horizontalLine: {
    position: 'absolute',
    left: 20,
    right: 0,
    height: 2,
    backgroundColor: 'red',
    marginTop: 125,
  },
});
