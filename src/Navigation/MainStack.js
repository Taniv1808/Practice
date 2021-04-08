import React from 'react'
import OneToOneChat from '../Component/OneToOneChat'
import { OneToOneConversation_API } from '../config/urls'
import navigationStrings from '../constants/navigationStrings'
import { OneToOneConversation } from '../Screens'
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