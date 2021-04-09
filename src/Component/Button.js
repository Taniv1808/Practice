import React from 'react'
import {View,Text, TouchableOpacity,StyleSheet} from 'react-native'
import colors from '../styles/colors'

export default function Button(props){
    const{name,pressIt}=props
    return(
        <View>
            <TouchableOpacity style={styles.btn} onPress={pressIt}>
                <Text>{name}</Text>
            </TouchableOpacity>
        </View>
    )
}


// Stylesheet
const styles=StyleSheet.create({
    btn:{
        backgroundColor:colors.btnColor,
        borderWidth:0.2,
        marginTop:20,
        width:120,
        height:30,
        marginLeft:120,
        borderRadius:25,
        textAlign:'center',
        alignItems:'center',
        justifyContent:'center',

    }
})