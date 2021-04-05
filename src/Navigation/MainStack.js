import React from 'react'
import navigationStrings from '../constants/navigationStrings'
import MyDrawer from './Drawer'
import BottomTabNavigator from './TabRoutes'

export default function(Stack){
    return(
      <>  
        <Stack.Screen
        name={navigationStrings.HOMEPAGE}
        component={MyDrawer}
        options={{headerShown:false}}
        />
      </>  
    )
}