import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ChatDisplay from '../../Component/ChatDisplay';
import Loader from '../../Component/Loader';
import strings from '../../constants/lang';
import navigationStrings from '../../constants/navigationStrings';
import actions from '../../redux/actions';
import {conversation, OneToOneText} from '../../redux/actions/action';
import styles from './styles';

export default class Chat extends Component {
  state = {
    data: [],
    limit: 10,
    skip: 0,
    isLoading: true,
  };

  getData = query => {
    const {isLoading, data} = this.state;
    conversation(query)
      .then(res => {
        console.log(res);
        this.setState({data: res.data, isLoading: false});
      })
      .catch(err => {
        console.log(err);
      });
  };

  goToChatScreen=item=>{
    let query=`?commonConversationId=${item.commonConversationId}`;
    this.props.navigation.navigate(navigationStrings.ONE_TO_ONE,{
      commonConversationId: item.commonConversationId,
      profileImage: item.userInfo.profileImg[0].thumbnail,
      name: item.userInfo.fullName,
      id: item.userInfo._id,
      lastSeen: item.updatedAt.slice(11, 19),
  })
  }

  componentDidMount = () => {
    const {limit, skip} = this.state;
    let query = `?limit= ${limit}&skip=${skip}`;
    this.getData(query);
  };

  render() {
    const {data,isLoading} = this.state;
    return (
      <View>
        <Text style={styles.txt}>{strings.CHAT_ROOM}</Text>
        <FlatList
          data={data}
          numColumns={1}
          showsHorizontalScrollIndicator={false}
          keyExtractor={({key}) => key}
          ItemSeparatorComponent={() => (
            <View style={{marginBottom: 10}}></View>
          )}
          renderItem={({item}) => (
            <ChatDisplay data={item} goToChatScreen={this.goToChatScreen}/>
          )}
        />       
        <Loader isLoading={isLoading}/> 
      </View>
    );
  }
}
