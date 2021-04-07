import React from 'react'
import {View,Text, Image,StyleSheet,Dimensions} from 'react-native'
import colors from '../styles/colors'
import ImageZoom from 'react-native-image-pan-zoom'

export default function Test(props){
    const{profiles}=props
    
    return(
        
        <View style={styles.container}>
            {/* <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={200}
                       imageHeight={200}> */}
            <Image source={{uri:profiles.profileImg[0].thumbnail}} style={styles.img}/>
            {/* </ImageZoom> */}
                <Text style={styles.txt}> {profiles.fullName}</Text>
                <Text style={styles.txt}> {profiles.gender}</Text>
                {/* <Text style={styles.txt}>Height: {profiles.height}</Text> */}
            
            </View>

        
    )
}

// stylesheet
const styles=StyleSheet.create({
    container:{
   margin:5,
   padding:10,
   backgroundColor:colors.cardBack,
   marginHorizontal:10
    },
    img:{
        margin:5,
        alignItems:"center",
        width:130,
        height:120,
        resizeMode:'contain',
        borderRadius:10,
    },
    txt:{
        textAlign:"center"
    }
})