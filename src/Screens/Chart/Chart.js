import React, {Component} from 'react';
import {Text, StyleSheet, ScrollView} from 'react-native';
import {BarChart, Grid, AreaChart,LineChart,PieChart} from 'react-native-svg-charts';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import * as shape from 'd3-shape';
export default class Chart extends Component {
  render() {
    const fill = 'rgb(134, 65, 244)';
    const data = [
      50,
      10,
      40,
      95,
      -4,
      -24,
      null,
      85,
      undefined,
      0,
      35,
      53,
      -53,
      24,
      50,
      -20,
      -80,
    ];
    const randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)
 
    const pieData = data
        .filter((value) => value > 0)
        .map((value, index) => ({
            value,
            svg: {
                fill: randomColor(),
                onPress: () => console.log('press', index),
            },
            key: `pie-${index}`,
        }))

    return (
       <ScrollView >
       <Text style={styles.title}>BAR GRAPH</Text>
        <BarChart
          style={styles.bargraph}
          data={data}
          svg={{fill}}
          contentInset={{top: 30, bottom: 30}}>
          <Grid />
        </BarChart>
        <Text style={styles.title}>AREA CHART</Text>
        <AreaChart
          style={styles.bargraph}
          data={data}
          contentInset={{top: 30, bottom: 30}}
          curve={shape.curveNatural}
          svg={{fill}}>
          <Grid />
        </AreaChart>
        <Text style={styles.title}>LINE CHART</Text>
        <LineChart
                style={styles.bargraph}
                data={data}
                svg={{ stroke: 'rgb(134, 65, 244)' }}
                contentInset={{ top: 20, bottom: 20 }}
            >
                <Grid />
            </LineChart>
            <Text style={styles.title}>PIE CHART</Text>
            <PieChart style={styles.bargraph} data={pieData} />
       </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  bargraph: {
    height: 300,
    width: 300,
    marginHorizontal: 30,
  },
  title: {
    textAlign: 'center',
    color: colors.btnColor,
    fontFamily: fontFamily.regular,
    marginBottom:20,
    marginTop: 20,
    fontSize: 20,
    
  },
 
});