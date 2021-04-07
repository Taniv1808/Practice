import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import colors from '../styles/colors';
const WrapperContainer = ({
  children,
  bgColor = colors.themeClr,
  statusBarColor = colors.btnColor,
  barStyle = 'light-content',
}) => {
  return (
    <SafeAreaView >
      <StatusBar backgroundColor={statusBarColor} barStyle={barStyle}  />
     
        {children}
     
    </SafeAreaView>
  );
};
export default WrapperContainer;