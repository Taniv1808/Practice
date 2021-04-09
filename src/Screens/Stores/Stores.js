import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import colors from '../../styles/colors';
import {find_text} from '../../redux/actions/action';
import Test from '../../Component/Test';
import {ActivityIndicator} from 'react-native-paper';
import Geolocation from 'react-native-geolocation-service';
import {locationPermission} from '../../utils/permissions';
import styles from './styles';

export default class Stores extends Component {
  state = {
    name: '',
    search: [],
    isLoading: false,
  };

  apicall = query => {
    const {name} = this.state;
    find_text(query)
      .then(res => {
        console.log(res.data, 'name');
        this.setState({search: [...res.data], isLoading: false});
      })
      .catch(err => {
        console.log(err);
      });
  };

  onChangeText = val => {
    let {name} = this.state;
    
    this.setState({name: val});
    let query = `?name=${name}`;
    // console.log(name);
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }
    this.searchTimeout = setTimeout(() => {
      this.setState({
        isLoading: true,
      });
      this.apicall(query);
    }, 600);
  };

  locationPermission = () => {
    let coordinates = [76.7794179, 30.7333148];
    coordinates = JSON.stringify(coordinates);
    let query = `?coordinates=${coordinates}`;
    this.apicall(query);
  };

  render() {
    const {search, isLoading} = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.input}>Stores</Text>
        <View style={styles.search}>
          <TextInput
            placeholder="Search here..."
            style={{
              width: 290,
              borderWidth: 0.2,
              borderRadius: 10,
              height: 40,
              marginTop: 2,
            }}
            onChangeText={this.onChangeText}
          />
          <TouchableOpacity onPress={this.locationPermission}>
            <Text
              style={{
                marginLeft: 35,
                marginTop:10,
                borderWidth: 0.2,
                width: 220,
                height: 30,
                textAlign: 'center',
                borderRadius: 10,
                backgroundColor: '#dcdcdc',
                padding:4,
              }}>
              Find Near Me
            </Text>
          </TouchableOpacity>
          {isLoading ? (
            <ActivityIndicator
              style={{position: 'absolute', marginLeft: 230, marginTop: 10}}
            />
          ) : null}
        </View>
        <FlatList
          data={search}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          keyExtractor={key => key}
          renderItem={({item}) => <Test profiles={item} />}
        />
      </View>
    );
  }
}

// StyleSheet
