import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, Modal , Text, TouchableHighlight, Dimensions} from 'react-native';
import TwoTabButton from '../Components/TwoTabButton';
// import { BarChart } from 'react-native-chart-kit';
import { BarChart } from 'react-native-chart-kit-with-pressable-bar-graph';
import { colors } from "./Utils/Colors";

export default function DataScreen({navigation}) {
  const [activeTab, setActiveTab] = useState('Week'); // Week or Month
  const [selectedBar, setSelectedBar] = useState(null);

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

  const calculateTotalDuration = (data) => {
    let totalSeconds = 0;
    data.forEach(item => {
       const [hours, minutes, seconds] = item.duration.split(':').map(Number);
       totalSeconds += hours * 3600 + minutes * 60 + seconds;
    });
   
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    return `${hours}h ${minutes}min`;
   };   

  const formatChartData = (data) => {
    return data.map(item => {
      const [hours, minutes, seconds] = item.duration.split(':').map(Number);
      const totalSeconds = hours * 3600 + minutes * 60 + seconds;
      const totalHours = totalSeconds / 3600;
      return totalHours;
    });
  };

  const formatAverageDuration = (duration) => {
    const [hours, minutes, seconds] = duration.split(':').map(Number);
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    return `${formattedHours} h ${formattedMinutes}min`;
   };
   
  const handleBarPress = (data, index) => {
    const [hours, minutes, seconds] = data.duration.split(':').map(Number);
    const formattedDuration = `${hours}:${minutes.toString().padStart(2, '0')} h`;
    setSelectedBar({ ...data, duration: formattedDuration });
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
        <View style={styles.averageContainer}>
          <View style={styles.textRow}>
            <Text style={styles.averageTitle}>Last Week's Average</Text>
          </View>
          <View style={styles.textRow}>
            <Text style={styles.averageValue}>{formatAverageDuration(weekMean)}</Text>
            <Text style={styles.percentageText}>11% more than last week</Text>
          </View>
        </View>
        <View style={styles.chartContainer}>
          <BarChart
            data={{
              labels: weekData.map(item => item.date),
              datasets: [{ data: formatChartData(graphData) }]
            }}
            withDots={false}
            withScrollableDot={false}
            // width={Dimensions.get('window').width - 40}
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
              yLabelsOffset: -10, // Adjust the position of the y-axis labels
              yAxisInterval: 1, // Set the interval of the y-axis labels
            }}
            style={styles.chart}
            onDataPointClick={({ datasetIndex, index }) => handleBarPress(weekData[index], index)}
          />
          <Modal
            animationType="slide"
            transparent={true}
            visible={selectedBar !== null}
            onRequestClose={() => {
                setSelectedBar(null); // Close the modal and reset the selected bar
            }}
            >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Usage time: {selectedBar ? selectedBar.duration : ''}</Text>
                  <TouchableHighlight
                    style={{ ...styles.openButton, backgroundColor: colors.DARK_PURPLE }}
                    onPress={() => {
                      setSelectedBar(null); // Close the modal and reset the selected bar
                    }}
                  >
                    <Text style={styles.textStyle}>Close</Text>
                  </TouchableHighlight>
                </View>
            </View>
          </Modal>
          {/* Add horizontal line at weekMean */}
          <View style={[styles.horizontalLine, {
          top: parseFloat(weekMean.split(':')[0]) * 22
          }]}/>
        </View>
        <View style={styles.totalDurationContainer}>
          <Text style={styles.totalDurationTitle}>Total Screen Time:</Text>
          <Text style={styles.totalDurationValue}>{calculateTotalDuration(graphData)}</Text>
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
    marginTop: 0,
    alignItems: 'center',
    marginHorizontal: 5,
  },

  chart: {
    marginVertical: 10,
    borderRadius: 16,
    alignItems: 'center',
  },

  horizontalLine: {
    position: 'absolute',
    left: 20,
    right: 0,
    height: 2,
    backgroundColor: 'red',
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
 },

 modalView: {
    margin: 20,
    backgroundColor: colors.WHITE,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
 },

 openButton: {
    color: colors.DARK_PURPLE,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: colors.DARK_PURPLE,
 },

 textStyle: {
    color: colors.WHITE,
    fontWeight: "bold",
    textAlign: "center",
 },
 
 modalText: {
    marginBottom: 15,
    textAlign: "center",
 },

 averageContainer: {
  alignItems: 'flex-start', // Align items to the start of the cross-axis
  marginBottom: 5,
  marginTop: 30,
 },

 textRow: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between', // Ensures space between the title/value and the percentage text
  alignSelf: 'flex-start', // Aligns the text to the center
 },

 averageTitle: {
  fontSize: 18, // Adjust the font size as needed
  marginBottom: 5, // Space between the title and the value
  color: colors.DARK_PURPLE,
  // marginHorizontal: -100, // Space on the sides of the text
  alignSelf: 'flex-start', // Aligns the text to the left
 },

 averageValue: {
  fontSize: 22, // Larger font size for the value
  fontWeight: 'bold',
  marginRight: 20, // Space between the value and the percentage text
  color: colors.DARK_PURPLE,
  alignSelf: 'flex-start', // Aligns the value to the right
 },

 percentageContainer: {
  alignSelf: 'flex-end', // Aligns the percentage text to the right
  marginRight: 10, // Space between the value and the percentage text
 },

 percentageText: {
  fontSize: 14, // Same font size as the value
  // fontWeight: 'bold',
  color: colors.DARK_PURPLE,
  alignSelf: 'flex-end', // Aligns the percentage text to the right
  marginLeft: 15, // Space between the value and the percentage text
 }, 

 totalDurationContainer: {
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  width: '100%',
  paddingHorizontal: 33,
  marginTop: 20,
 },

 totalDurationTitle: {
  fontSize: 18,
  fontWeight: 'bold',
  color: colors.DARK_PURPLE,
  alignSelf: 'flex-start',
 },

 totalDurationValue: {
  fontSize: 18,
  color: colors.DARK_PURPLE,
  alignSelf: 'flex-end',
 },
 
});
