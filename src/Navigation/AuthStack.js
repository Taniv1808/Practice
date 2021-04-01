import React from 'react'
import navigationStrings from '../constants/navigationStrings'
import {Login,OtpVerification,Signup} from '../Screens'

export default function(Stack){
    return(
      <>  
        {/* <Stack.Screen
        name={navigationStrings.SIGNUP}
        component={Signup}
        options={{headerShown:false}}
        /> */}
        
        <Stack.Screen
        name={navigationStrings.LOGIN}
        component={Login}
        options={{headerShown:false}}
        />
        <Stack.Screen
        name={navigationStrings.OTP_VERIFICATION}
        component={OtpVerification}
        options={{headerShown:false}}
        />
     
      </>  
    )
}