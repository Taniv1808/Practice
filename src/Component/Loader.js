import React from 'react';
import {ActivityIndicator,View,StyleSheet}from 'react-native';

export default function Loader({isLoading}){
    if(isLoading){
        return(
        <View style={styles.load}>
        <ActivityIndicator color="red"  size="large"/>
        </View>
        )
    }
    return(null);
}

const styles=StyleSheet.create({
    load:{
        position:'absolute',
        top:0,right:0,left:0,bottom:0,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#dcdcdc"}
})