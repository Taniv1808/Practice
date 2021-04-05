import React, {Component} from 'react';
import {Text, StyleSheet, ScrollView} from 'react-native';
import {BarChart, Grid, AreaChart,LineChart,PieChart} from 'react-native-svg-charts';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import * as shape from 'd3-shape';
export default class Chart extends Component {
  render() {
    const fill = 'rgb(129, 30, 144)';
    const data = [20,30,50,75,-2,-32,null,75,undefined,1,0,23,null,24,20,-27,-70,];
    const newColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)
 
    const pieChartData = data
        .filter((value) => value > 0)
        .map((value, index) => ({
            value,
            svg: {
                fill: newColor(),
                onPress: () => console.log('press', index),
            },
            key: `pie-${index}`,
        }))

    return (
       <ScrollView >
       <Text style={styles.main}>BAR GRAPH</Text>
        <BarChart
          style={styles.bar}
          data={data}
          svg={{fill}}
          contentInset={{top: 30, bottom: 30}}>
          <Grid />
        </BarChart>
        <Text style={styles.main}>AREA CHART</Text>
        <AreaChart
          style={styles.bar}
          data={data}
          contentInset={{top: 30, bottom: 30}}
          curve={shape.curveNatural}
          svg={{fill}}>
          <Grid />
        </AreaChart>
        <Text style={styles.main}>LINE CHART</Text>
        <LineChart
                style={styles.bar}
                data={data}
                svg={{ stroke: 'rgb(129, 30, 144)' }}
                contentInset={{ top: 20, bottom: 20 }}
            >
                <Grid />
            </LineChart>
            <Text style={styles.main}>PIE CHART</Text>
            <PieChart style={styles.bar} data={pieChartData} />
       </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  bar: {
    height: 300,
    width: 300,
    marginHorizontal: 30,
    // marginTop:30
  },
  main: {
    textAlign: 'center',
    fontFamily: fontFamily.regular,
    marginBottom:20,
    marginTop: 30,
    fontSize: 20,
    color: colors.btnColor,
    
  },
 
});