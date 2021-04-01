import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import {connect} from 'react-redux'

const Stack = createStackNavigator();

function Routes(props) {
  // console.log(props)
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {props.userData && AuthStack(Stack)}
        {MainStack(Stack)}  
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const mapStateToProps=state=>{
  return{
  userData: state.userData
}
}

export default connect(mapStateToProps)(Routes)