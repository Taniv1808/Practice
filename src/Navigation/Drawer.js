import React,{Component} from 'react'
import {createDrawerNavigator} from "@react-navigation/drawer"
import navigationStrings from '../constants/navigationStrings';
import BottomTabNavigator from './TabRoutes';
import { Chart, Stores } from '../Screens';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
    drawerStyle={{
        backgroundColor: '#c6cbef',
        width: 240,
      }}>
          <Drawer.Screen name={navigationStrings.HOMEPAGE} component={BottomTabNavigator}/>
      <Drawer.Screen name={navigationStrings.STORES} component={Stores} />
      <Drawer.Screen name={navigationStrings.CHART} component={Chart} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;