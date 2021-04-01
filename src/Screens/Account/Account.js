import React,{Component} from 'react'
import {View,Text,StyleSheet} from 'react-native'
import colors from '../../styles/colors'
import Button from '../../Component/Button'
import navigationStrings from '../../constants/navigationStrings'
import actions from '../../redux/actions'
import { logoutUsingPhone } from '../../redux/actions/auth'

export default class Account extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.input}>Account</Text>
                <Button name='LogOut' pressIt={()=>actions.logoutUsingPhone()}/>
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
