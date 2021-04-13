import React from 'react'
import { OneToOneConversation_API } from '../config/urls'
import navigationStrings from '../constants/navigationStrings'
import { OneToOneConversation } from '../Screens'
import OneToOneChat from '../Screens/OneToOneChat/OneToOneChat'
import MyDrawer from './Drawer'

export default function(Stack){
    return(
      <>  
        <Stack.Screen
        name={navigationStrings.HOMEPAGE}
        component={MyDrawer}
        options={{headerShown:false}}
        />
        <Stack.Screen
        name={navigationStrings.ONE_TO_ONE}
        component={OneToOneChat}
        options={{headerShown:false}}/>
      </>  
    )
}