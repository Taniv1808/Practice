import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {CodeField} from 'react-native-confirmation-code-field';
import Button from '../../Component/Button';
import Loader from '../../Component/Loader';
import strings from '../../constants/lang';
import navigationStrings from '../../constants/navigationStrings';
import actions from '../../redux/actions';
import colors from '../../styles/colors';
import styles from './styles';

const CELL_COUNT = 5;
export default class OtpVerification extends Component {
  state = {
    isLoading: false,
    otp: '',
  };

  // onChange(key) {
  //   return value => {
  //     this.setState({
  //       [key]: value,
  //     });
  //   };
  // }
  onVerifyOtp = () => {
    let {isLoading} = this.state;
    actions
      ._OtpVerification({
        userId: this.props.route.params.data,
        otp: '12345',
        deviceToken: '123',
        registerFrom: 'ANDROID',
      })
      .then(res => {
        isLoading = true;
        console.log(res);
        this.props.navigation.navigate(navigationStrings.HOMEPAGE);
      })
      .catch(error => {
        console.log(error);
        isLoading = false;
      });
    this.setState({
      isLoading: true,
    });
  };
  render() {
    const {isLoading, otp} = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.input}>{strings.OTP_VERIFICATION}</Text>
        <Text style={styles.input2}>
          
        </Text>
        <View style={styles.txtInput}>
          <TextInput
            style={styles.input3}
            maxLength={5}
            keyboardType="number-pad"
            // onChangeText={this.onChangeOtp(otp)}
            style={styles.input3}
          />
          <TextInput
            style={styles.input3}
            keyboardType="number-pad"
            onChangeText={this.onChangeOtp}
          />
          <TextInput
            style={styles.input3}
            keyboardType="number-pad"
            onChangeText={this.onChangeOtp}
          />
          <TextInput
            style={styles.input3}
            keyboardType="number-pad"
            onChangeText={this.onChangeOtp}
          />
          <TextInput
            style={styles.input3}
            keyboardType="number-pad"
            onChangeText={this.onChangeOtp}
          />
        </View>
        <View style={{marginTop: 20}}>
          <Button name={strings.VERIFY_ACCOUNT} pressIt={this.onVerifyOtp} />
        </View>
        <Loader isLoading={isLoading} />
      </View>
    );
  }
}
