import React,{Component} from 'react'
import FlashMessage from 'react-native-flash-message'
import Routes from './src/Navigation/Routes'
import {Provider} from 'react-redux'
import store from './src/redux/store'
import SplashScreen from 'react-native-splash-screen'
import { getUserData } from './src/utils/utils'
import { saveUserData } from './src/redux/actions/auth'
import { requestUserPermission } from './src/utils/permissions'
export default class App extends Component{

componentDidMount=()=>{
    getUserData().then((res)=>{
      console.log(res, 'userData');
      saveUserData(res);
      SplashScreen.hide()
    })
  }
  render(){
    return(
      <Provider store={store}>
      <Routes/>
      <FlashMessage position='top'/>
      </Provider>
    )
  }
}
