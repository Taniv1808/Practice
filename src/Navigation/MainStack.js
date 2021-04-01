import React from 'react'
import navigationStrings from '../constants/navigationStrings'
import BottomTabNavigator from './TabRoutes'

export default function(Stack){
    return(
      <>  
        <Stack.Screen
        name={navigationStrings.HOMEPAGE}
        component={BottomTabNavigator}
        options={{headerShown:false}}
        />
      </>  
    )
}