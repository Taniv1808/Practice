import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import Button from '../../Component/Button';
import navigationStrings from '../../constants/navigationStrings';
import colors from '../../styles/colors';
import validation from '../../utils/validation';
import styles from './styles';

export default class Signup extends Component {
  state = {
    name: '',
    mobile: '',
    password: '',
    confirmPassword: '',
    isLoading: false,
  };

  onChange(key) {
    return value => {
      this.setState({
        [key]: value,
      });
    };
  }
  isValidData = () => {
    let {name, mobile, password, confirmPassword} = this.state;
    const error = validation({
      firstName: name,
      phoneNumber: mobile,
      password: password,
      confirmPassword: confirmPassword,
    });
    if (error) {
      showMessage({
        type: 'danger',
        icon: 'danger',
        message: error,
      });
      return false;
    }
    return true;
  };

  // signup_api = () => {
  //   let {mobile} = this.state;
  //   if (this.isValidData()) {
  //       signUp({
  //       contactDetails: {
  //         phoneNo: mobile,
  //         countryCode: '+91',
  //         countryCodeISO: 'IN',
  //       },
  //     })
  //       .then(res => {
  //         isLoading=true,
  //         console.log(res);
  //         this.props.navigation.navigate(navigationStrings.HOMEPAGE,{data:res.data.userId});
  //       })
  //       .catch(error => {
  //         isLoading=false
  //         console.log(error);
  //       });
  //       this.setState({
  //         isLoading:true
  //       })
  //   }
  // };

  render() {
    // const{isLoading}=this.state
    return (
      <View style={styles.container}>
        <Text style={styles.input}>SIGNUP</Text>
        <View style={styles.input2}>
          <Text style={styles.input3}>Name</Text>
          <TextInput
            placeholder="Name"
            style={styles.placeText}
            onChangeText={this.onChange('name')}
          />
          <Text style={styles.input3}>Mobile</Text>
          <TextInput
            placeholder="Mobile"
            style={styles.placeText}
            onChangeText={this.onChange('mobile')}
          />
          <Text style={styles.input3}>Password</Text>
          <TextInput
            placeholder="Password"
            style={styles.placeText}
            onChangeText={this.onChange('password')}
          />
          <Text style={styles.input3}>Confirm Password</Text>
          <TextInput
            placeholder="Confirm Password"
            style={styles.placeText}
            onChangeText={this.onChange('confirmPassword')}
          />
        </View>
        
        <TouchableOpacity onPress={this.isValidData()} style={styles.btn}>
          <Text style={{textAlign: 'center', padding: 4}}>Signup</Text>
        </TouchableOpacity>
        <View style={styles.bottom}>
          <Text>New Customer?</Text>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate(navigationStrings.LOGIN);
            }}>
            <Text style={{color: 'blue'}}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

// Stylesheet
