import React from 'react'
import {View,Text,StyleSheet,Image} from 'react-native'

export default function OneToOneChat(props) {
    let item=props.route.params.xyz
    return(
        <View style={styles.container}>
            <View style={styles.main}>
            <Image
            source={{uri: item.userInfo.profileImg[0].thumbnail}}
            style={{width: 80, height: 80, borderRadius: 40}}
          />
          <View style={styles.txt1}>
          <Text>{item.userInfo.fullName}</Text>
          
            <Text>{item.lastMessage[0].text}</Text>
        </View>
        
          </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
    padding: 1,
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
})