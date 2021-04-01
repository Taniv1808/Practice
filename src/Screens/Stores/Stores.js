import React,{Component} from 'react'
import {View,Text,StyleSheet} from 'react-native'
import colors from '../../styles/colors'

export default class Stores extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.input}>Stores</Text>
            </View>
        )
    }
}

// StyleSheet
const styles=StyleSheet.create({
    container:{
        backgroundColor:colors.themeClr,
        flex:1,  
    },
    input:{
        textAlign:'center',
        fontSize:20,
        marginTop:20
    }
})