import React, {Component} from 'react';
import {Text, StyleSheet, ScrollView} from 'react-native';
import {
  BarChart,
  Grid,
  AreaChart,
  LineChart,
  PieChart,
} from 'react-native-svg-charts';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import * as shape from 'd3-shape';
import styles from './styles';
import strings from '../../constants/lang';
export default class Chart extends Component {
  render() {
    const fill = colors.chart;
    const data = [
      20,
      30,
      50,
      75,
      -2,
      -32,
      null,
      75,
      undefined,
      1,
      -23,
      34,
      89,
      null,
      24,
      20,
      -27,
      -70,
    ];
    const newColor = () =>
      ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(
        0,
        7,
      );

    const pieChartData = data
      .filter(value => value > 0)
      .map((value, index) => ({
        value,
        svg: {
          fill: newColor(),
          onPress: () => console.log('press', index),
        },
        key: `pie-${index}`,
      }));

    return (
      <ScrollView>
        <Text style={styles.main}>{strings.BAR_GRAPH}</Text>
        <BarChart
          style={styles.bar}
          data={data}
          svg={{fill}}
          contentInset={styles.content}>
          <Grid />
        </BarChart>
        <Text style={styles.main}>{strings.AREA_CHART}</Text>
        <AreaChart
          style={styles.bar}
          data={data}
          contentInset={styles.content}
          curve={shape.curveNatural}
          svg={{fill}}>
          <Grid />
        </AreaChart>
        <Text style={styles.main}>{strings.LINE_CHART}</Text>
        <LineChart
          style={styles.bar}
          data={data}
          svg={{stroke:colors.chart}}
          contentInset={styles.content1}>
          <Grid />
        </LineChart>
        <Text style={styles.main}>{strings.PIE_CHART}</Text>
        <PieChart style={styles.bar} data={pieChartData} />
      </ScrollView>
    );
  }
}
