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
import Loader from '../../Component/Loader';
import WrapperContainer from '../../Component/WrapperContainer';
import strings from '../../constants/lang';
import navigationStrings from '../../constants/navigationStrings';
import actions from '../../redux/actions';
import colors from '../../styles/colors';
import validation from '../../utils/validation';
import styles from './styles';
Button;
WrapperContainer;

export default class Login extends Component {
  state = {
    mobile: '',
    password: '',
    isLoading: false,
  };

  onChange=(key)=> {
    return value => {
      this.setState({
        [key]: value,
      });
    };
  }
  isValidData = () => {
    let {mobile, password} = this.state;
    const error = validation({phoneNumber: mobile, password: password});
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

  usingPhone = () => {
    let {mobile} = this.state;
    if (this.isValidData()) {
      actions
        .loginUsingPhone({
          contactDetails: {
            phoneNo: mobile,
            countryCode: '+91',
            countryCodeISO: 'IN',
          },
        })
        .then(res => {
          (isLoading = true), console.log(res);
          this.props.navigation.navigate(navigationStrings.OTP_VERIFICATION, {
            data: res.data.userId,
          });
        })
        .catch(error => {
          isLoading = false;
          console.log(error);
        });
      this.setState({
        isLoading: true,
      });
    }
  };

  render() {
    const {isLoading} = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.input}>{strings.LOGIN}</Text>
        <View style={styles.input2}>
          <Text style={styles.input3}>{strings.MOBILE}</Text>
          <TextInput
            placeholder="Mobile"
            style={styles.placeText}
            onChangeText={this.onChange('mobile')}
          />
          <Text style={styles.input3}>{strings.PASSWORD}</Text>
          <TextInput
            placeholder="Password"
            style={styles.placeText}
            onChangeText={this.onChange('password')}
            password={true}
            secureTextEntry={true}
          />
        </View>
        <Button name="Login" pressIt={this.usingPhone} />
        <Loader isLoading={isLoading} />
      </View>
    );
  }
}
