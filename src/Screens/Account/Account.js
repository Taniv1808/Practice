import React,{Component} from 'react'
import {View,Text,StyleSheet} from 'react-native'
import colors from '../../styles/colors'
import Button from '../../Component/Button'
import navigationStrings from '../../constants/navigationStrings'
import actions from '../../redux/actions'
import { logoutUsingPhone } from '../../redux/actions/auth'
import { showMessage } from 'react-native-flash-message'

export default class Account extends Component{

    logout(){
        logoutUsingPhone();
        showMessage({
            type: 'success',
            icon: 'success',
            message: 'Logged Out',
          });
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.input}>Account</Text>
                <Button name='Logout' pressIt={this.logout}/>
            </View>
        )
    }
}

// StyleSheet

const styles=StyleSheet.create({
    container:{
        backgroundColor:colors.themeClr,
        flex:1
    },
    input:{
        textAlign:'center',
        marginTop:20,
        fontSize:20
    }
})
