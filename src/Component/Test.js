import React from 'react'
import {View,Text, Image,StyleSheet,Dimensions,Modal} from 'react-native'
import colors from '../styles/colors'
import ImageZoom from 'react-native-image-pan-zoom'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Test(props){
    const{profiles,open,close,isModal}=props
    
    return(
        
        <View style={styles.container}>
            
            <ImageZoom cropWidth={Dimensions.get('window').width-220}
                       cropHeight={Dimensions.get('window').height-500}
                       imageWidth={120}
                       imageHeight={120}>
                           <TouchableOpacity onPress={open}>
            <Image source={{uri:profiles.profileImg[0].thumbnail}} style={styles.img}/>
            </TouchableOpacity>
            </ImageZoom>
                <Text style={styles.txt}> {profiles.fullName}</Text>
                <Text style={styles.txt}> {profiles.gender}</Text>
              
                <Modal visible={isModal}>
              <TouchableOpacity onPress={close}>
                  <Text style={{fontSize:50}}>
                      
                  </Text>
              </TouchableOpacity>
                <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={120}
                       imageHeight={120}>
            <Image source={{uri:profiles.profileImg[0].thumbnail}} style={styles.img}/>
           
            </ImageZoom>
                
            </Modal>
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
        margin:2,
        alignItems:"center",
        width:120,
        height:120,
        resizeMode:'contain',
        borderRadius:20,
    },
    txt:{
        textAlign:"center"
    }
})