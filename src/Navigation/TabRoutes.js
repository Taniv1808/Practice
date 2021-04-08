import React from 'react'
import{Image} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import navigationStrings from '../constants/navigationStrings'
import { Account, Chart, Chat, HomePage, OneToOneConversation, Stores } from '../Screens'
import Icon from 'react-native-vector-icons/Ionicons'
import imagePath from '../constants/imagePath'
Chart
Account
Stores
const Tab=createBottomTabNavigator()

export default function BottomTabNavigator(){
    return(
        <Tab.Navigator 
        initialRouteName={navigationStrings.HOMEPAGE}
        activeColor="#ff3f6c"
        barStyle={{
            backgroundColor:'white'
        }}>
            <Tab.Screen 
            name={navigationStrings.HOMEPAGE}
            component={HomePage}
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({tintColor }) => {
                  return <Image source={require('../assets/images/home.png')} style={{width:30,height:30}}/>
              }
              
              }}/>
              <Tab.Screen 
            name={navigationStrings.STORES}
            component={Stores}
            options={{
                tabBarLabel: 'Stores',
                tabBarIcon: ({tintColor }) => {
                  return <Image source={require('../assets/images/stores.png')} style={{width:30,height:30}}/>
              }
              }}/>
            <Tab.Screen 
            name={navigationStrings.CHART}
            component={Chart}
            options={{
                tabBarLabel: 'Chart',
                tabBarIcon: ({tintColor }) => {
                  return <Image source={require('../assets/images/chart.png')} style={{width:30,height:30}}/>
              }
              }}/>
              <Tab.Screen
              name={navigationStrings.CHAT}
              component={Chat}
              options={{
                  tabBarLabel:'Chat',
                  tabBarIcon:({tintColor})=>{
                      return<Image source={require('../assets/images/chat.png')} style={{width:30,height:30}}/>
                  }
              }}/>
              <Tab.Screen 
            name={navigationStrings.ACCOUNT}
            component={Account}
            options={{
                tabBarLabel: 'Account',
                tabBarIcon: ({tintColor }) => {
                  return <Image source={require('../assets/images/account.png')} style={{width:30,height:30}}/>
              }
              }}/>
              
        </Tab.Navigator>
    )
}