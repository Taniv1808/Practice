import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ChatDisplay from '../../Component/ChatDisplay';
import strings from '../../constants/lang';
import navigationStrings from '../../constants/navigationStrings';
import actions from '../../redux/actions';
import {conversation, OneToOneText} from '../../redux/actions/action';
import styles from './styles';
styles;

export default class Chat extends Component {
  state = {
    data: [],
    limit: 10,
    skip: 0,
    isLoading: true,
    commonConversationData: [],
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

  componentDidMount = () => {
    const {limit, skip} = this.state;
    let query = `?limit= ${limit}&skip=${skip}`;
    this.getData(query);
  };

  getChat = commonConversationId => {
    let query = `?commonConversationId=${commonConversationId}`;
    this.setState({isLoading: true, commonConversationData: []}, () => {
      actions
        .OneToOneText(query)
        .then(res => {
          this.props.navigation.navigate(navigationStrings.ONE_TO_ONE, {
            data: res.data,
          });
          this.setState({commonConversationData: res.data, isLoading: false});
        })
        .catch(err => this.setState({isLoading: false}));
    });
  };
  //   const {isLoading,commonConversationData}=this.state
  //   OneToOneText(query).then(res=>{
  //     this.props.navigation.navigate(navigationStrings.ONE_TO_ONE,{commonConversationData:res.data})
  //     this.setState({commonConversationData:res.data,isLoading:false})
  //   }).catch(err=>{
  //     this.setState({isLoading:false})
  //   })
  // }

  render() {
    const {data} = this.state;
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
            <ChatDisplay data={item} moveTo={this.getChat} />
          )}
        />
      </View>
    );
  }
}
