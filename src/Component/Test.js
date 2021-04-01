import React from 'react'
import {View,Text, Image,StyleSheet} from 'react-native'
import colors from '../styles/colors'

export default function Test(props){
    const{profiles}=props
    
    return(
        
        <View style={styles.container}>
            <View style={{borderWidth:0.2,borderRadius:10,width:170,height:210,marginLeft:5,backgroundColor:colors.cardBack}}>
            <View style={styles.img}>
            <Image source={{uri:profiles.profileImg[0].thumbnail}} style={{width:150,height:140}}/>
            </View>
            <View style={{marginLeft:30}}>
                
                <Text> {profiles.fullName}</Text>
            </View>
            <View style={styles.txt}>
                <Text> {profiles.gender}</Text>
                {/* <Text>Height: {data.height}</Text> */}
            </View>
            </View>

        </View>
        
    )
}

// stylesheet
const styles=StyleSheet.create({
    container:{
    flex:1,
    marginTop:20,
    marginBottom:25
    },
    img:{
        marginLeft:10,
        marginTop:20
    },
    txt:{
        marginLeft:30,
       
    }
})