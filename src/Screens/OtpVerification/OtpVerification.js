import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Button from '../../Component/Button';
import Loader from '../../Component/Loader';
import navigationStrings from '../../constants/navigationStrings';
import {_OtpVerification} from '../../redux/actions/auth';
import colors from '../../styles/colors';
Button

export default class OtpVerification extends Component {
  state = {
    isLoading: false,
  };
  
  onVerifyOtp = () => {
    let {isLoading} = this.state;
    _OtpVerification({
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
          isLoading:true
      })
  };
  render() {
    const {isLoading} = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.input}> OTP VERIFICATION</Text>
        <Text style={styles.input2}>
          ENTER CODE TO VERIFY YOUR EMAIL AND PHONE NUMBER
        </Text>
        <View style={styles.txtInput}>
          <TextInput
            style={styles.input3}
            maxLength={1}
            keyboardType="number-pad"
          />
          <TextInput style={styles.input3} keyboardType="number-pad" onChangeText={this.onChangeOtp} />
          <TextInput style={styles.input3} keyboardType="number-pad" onChangeText={this.onChangeOtp}/>
          <TextInput style={styles.input3} keyboardType="number-pad" onChangeText={this.onChangeOtp}/>
          <TextInput style={styles.input3} keyboardType="number-pad" onChangeText={this.onChangeOtp}/>
        </View>
        <View style={{marginTop: 20}}>
          
          <Button name='Verify Account' pressIt={this.onVerifyOtp}/>
        </View>
        <Loader isLoading={isLoading} />
      </View>
    );
  }
}

// Stylesheet
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.themeClr,
    flex: 1,
  },
  input: {
    marginTop: 30,
    textAlign: 'center',
    fontSize: 20,
  },
  btn: {
    backgroundColor: colors.btnColor,
    borderWidth: 0.2,
    marginTop: 20,
    width: 120,
    height: 30,
    marginLeft: 130,
    borderRadius: 25,
  },
  txtInput: {
    flexDirection: 'row',
    marginTop: 40,
    marginLeft: 20,
    justifyContent: 'space-between',
  },
  input3: {
    borderWidth: 0.2,
    width: 50,
    borderRadius: 20,
    marginRight: 14,
    textAlign: 'center',
  },
  input2: {
    lineHeight: 20,
    textAlign: 'center',
    marginTop: 20,
  },
});
