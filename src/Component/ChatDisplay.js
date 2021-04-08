import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import imagePath from '../constants/imagePath';
import navigationStrings from '../constants/navigationStrings';
import colors from '../styles/colors';
import fontFamily from '../styles/fontFamily';


export default function ChatDisplay(props) {
  const {data} = props;
  const navigation=useNavigation()
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={()=>{navigation.navigate(navigationStrings.ONE_TO_ONE,{xyz:data})}}>
      <View style={styles.main}>
        
          <Image
            source={{uri: data.userInfo.profileImg[0].thumbnail}}
            style={{width: 80, height: 80, borderRadius: 40}}
          />
        
        <View style={styles.txt1}>
            {/* <View style={{flexDirection:'row'}}> */}
          <Text>{data.userInfo.fullName}</Text>
          {/* <Image
              source={data.userInfo.isOnline ? imagePath.green : imagePath.red}
              style={{width: 10, height: 10,marginTop:0,marginLeft:"auto"}}
            /> */}
            {/* </View> */}
            <Text>{data.lastMessage[0].text}</Text>
        </View>
        
      </View>
      </TouchableOpacity>
      <Image source={imagePath.delete} style={{width:20,height:20,marginLeft:'auto',marginTop:-20}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 1,
    //    backgroundColor:colors.chat,
    width: 320,
    marginLeft: 20,
    marginTop: 10,
  },
  main: {
    flexDirection: 'row',
    margin: 2,
    width:320
  },
  txt1: {
    margin: 10,
  },
  active: {
    flexDirection: 'row',
  },
});
