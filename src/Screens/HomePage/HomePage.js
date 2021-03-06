import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  RefreshControl,
  ActivityIndicator,
  Text,
} from 'react-native';
import Loader from '../../Component/Loader';
import Test from '../../Component/Test';
import WrapperContainer from '../../Component/WrapperContainer';
import actions from '../../redux/actions';
import colors from '../../styles/colors';
import Button from '../../Component/Button';
import {createDrawerNavigator} from '@react-navigation/drawer';
import styles from './styles';
import strings from '../../constants/lang';

const LIMIT = '10';

export default class Login extends Component {
  state = {
    profiles: [],
    isLoading: true,
    skip: 0,
    isLoadingMore: false,
    isNoMoreData: false,
    isListEnd: false,
    refreshing: false,
    isSearch: false,
  };

  componentDidMount = () => {
    this.getData();
  };

  getData = (onEndReachCall = false) => {
    const {skip, profiles, isListEnd} = this.state;

    let calcSkip = onEndReachCall ? skip + profiles.length : 0;

    let data = {
      searchType: 'LEADERBOARD',
      limit: LIMIT,
      skip: calcSkip.toString(),
    };
    console.log(data);
    actions
      .scrollApi(data)
      .then(res => {
        let updatedStateVar = {};
        if (res.data.length > 0) {
          let profilesData = onEndReachCall
            ? [...profiles, ...res.data]
            : res.data;

          updatedStateVar = {
            profiles: profilesData,
          };
        } else {
          updatedStateVar = {
            isListEnd: true,
            isNoMoreData: true,
          };
        }

        this.setState({
          ...updatedStateVar,
          isLoading: false,
          isLoadingMore: false,
          refreshing: false,
        });
      })
      .catch(err => {
        this.setState({isLoading: false, isLoadingMore: false});
      });
  };

  onEndReached = () => {
    const {isLoadingMore, isNoMoreData} = this.state;

    if (isLoadingMore || isNoMoreData) {
      return;
    }
    this.setState({isLoadingMore: true});
    this.getData(true);
  };

  renderFooter = () => {
    const {isLoadingMore} = this.state;
    if (isLoadingMore) {
      return (
        <View style={{paddingBottom: 20}}>
          <ActivityIndicator color={colors.btnColor} />
        </View>
      );
    }
    return <View style={{height: 50}} />;
  };

  onRefresh = () => {
    this.setState({refreshing: true, isNoMoreData: false});
    this.getData();
  };

  // searchAPi

  onChange(key) {
    return value => {
      this.setState({
        [key]: value,
      });
    };
  }

  render() {
    const {profiles, refreshing, isLoading, isVisible} = this.state;

    return (
      <WrapperContainer isLoading={isLoading}>
        <View style={styles.container}>
          <Text
            style={styles.main}>
            {strings.IMAGES}
          </Text>
          <FlatList
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={this.onRefresh}
              />
            }
            data={profiles}
            numColumns={2}
            showsHorizontalScrollIndicator={false}
            keyExtractor={({item, key}) => key}
            onEndReached={this.onEndReached}
            ListFooterComponent={this.renderFooter}
            ItemSeparatorComponent={() => (
              <View style={{marginBottom: 10}}></View>
            )}
            renderItem={({item}) => <Test profiles={item} />}
          />
        </View>
      </WrapperContainer>
    );
  }
}
