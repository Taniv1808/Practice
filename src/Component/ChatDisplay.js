import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import imagePath from '../constants/imagePath';
import navigationStrings from '../constants/navigationStrings';

export default function ChatDisplay(props) {
  const {data, goToChatScreen} = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          goToChatScreen(data);
        }}>
        <View style={styles.main}>
          <Image
            source={{uri: data.userInfo.profileImg[0].thumbnail}}
            style={styles.img}
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
      <Image source={imagePath.delete} style={styles.del} />
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
    width: 320,
  },
  txt1: {
    margin: 10,
  },
  active: {
    flexDirection: 'row',
  },
  del: {
    width: 20,
    height: 20,
    marginLeft: 'auto',
    marginTop: -20,
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
});
