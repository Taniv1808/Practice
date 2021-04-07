import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import colors from '../../styles/colors';
import Button from '../../Component/Button';
import navigationStrings from '../../constants/navigationStrings';
import actions from '../../redux/actions';
import {logoutUsingPhone} from '../../redux/actions/auth';
import {showMessage} from 'react-native-flash-message';
import QRCode from 'react-native-qrcode-svg';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
export default class Account extends Component {
  state = {
    isVisible: false,
  };

  openModal = () => {
    this.setState({
      isVisible: true,
    });
  };
  closeModal = () => {
    this.setState({
      isVisible: false,
    });
  };

  logout() {
    logoutUsingPhone();
    showMessage({
      type: 'success',
      icon: 'success',
      message: 'Logged Out',
    });
    onSuccess = e => {
      Linking.openURL(e.data).catch(err =>
        console.error('An error occured', err),
      );
    };
  }
  render() {
    const {isVisible} = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.input}>Account</Text>

        <Button name="Logout" pressIt={this.logout} />
        <TouchableOpacity onPress={this.openModal}>
          <Text style={{textAlign:'center',marginTop:20}}>Open QR Code</Text>
        </TouchableOpacity>
        <Modal visible={isVisible}>
          <View style={{alignItems: 'center', marginTop: 20}}>
            <Text style={{fontSize: 20}}>QR Code</Text>
            <QRCode value="www.google.com" />
          </View>
          <TouchableOpacity onPress={this.closeModal}>
            <Text style={{textAlign:'center',marginTop:20}}>Close</Text>
          </TouchableOpacity>
        </Modal>
        <QRCodeScanner
          onRead={this.onSuccess}
          flashMode={RNCamera.Constants.FlashMode.auto}
          topContent={
            <Text style={styles.centerText}>
              Go to{' '}
              <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
              your computer and scan the QR code.
            </Text>
          }
          bottomContent={
            <TouchableOpacity style={styles.buttonTouchable}>
              <Text style={styles.buttonText}>Let's Scan!</Text>
            </TouchableOpacity>
          }
        />
      </View>
    );
  }
}

// StyleSheet

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.themeClr,
    flex: 1,
  },
  input: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 20,
  },
});
