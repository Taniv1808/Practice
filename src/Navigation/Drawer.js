import React,{Component} from 'react'
import {createDrawerNavigator} from "@react-navigation/drawer"
import navigationStrings from '../constants/navigationStrings';
import BottomTabNavigator from './TabRoutes';
import { Chart, Chat, OneToOneConversation, Stores } from '../Screens';
import colors from '../styles/colors';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
    drawerStyle={{
        backgroundColor:colors.drawer ,
        width: 240,
      }}>
      <Drawer.Screen name={navigationStrings.HOMEPAGE} component={BottomTabNavigator}/>
      <Drawer.Screen name={navigationStrings.STORES} component={Stores} />
      <Drawer.Screen name={navigationStrings.CHART} component={Chart} />
      <Drawer.Screen name={navigationStrings.CHAT} component={Chat}/>
    </Drawer.Navigator>
  );
}

export default MyDrawer;