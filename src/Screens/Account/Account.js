import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Modal, Linking, Image} from 'react-native';
import colors from '../../styles/colors';
import Button from '../../Component/Button';
import navigationStrings from '../../constants/navigationStrings';
import actions from '../../redux/actions';
import {logoutUsingPhone} from '../../redux/actions/auth';
import {showMessage} from 'react-native-flash-message';
import QRCode from 'react-native-qrcode-svg';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import imagePath from '../../constants/imagePath';
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
    
  }
  onSuccess = e => {
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err),
    );
  };
  render() {
    const {isVisible} = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.input}>Account</Text>

        <Button name="Logout" pressIt={this.logout} />
        <TouchableOpacity onPress={this.openModal}>
          <Text style={{textAlign:'center',marginTop:20,fontSize:20}}>Show My QR Code</Text>
        </TouchableOpacity>
        <Modal visible={isVisible}>
          <View style={{alignItems: 'center', marginTop: 20}}>
            <Text style={{fontSize: 20}}>QR Code</Text>
            <QRCode value="www.google.com" size={200}/>
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
              
              <Text style={styles.textBold}>Scan Here</Text>
              
            </Text>
          }
          centerContent={
              <Image source={imagePath.down} style={{width:90,height:90}}/>
          }
          bottomContent={
            <TouchableOpacity style={styles.buttonTouchable}>
              <Text style={styles.buttonText}>Let's Scan!</Text>
            </TouchableOpacity>
          }
          fadeIn={true}
          cameraStyle={styles.qr}
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
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
    marginTop:30,
    textAlign:'center'

  },
  textBold: {
    fontWeight: '500',
    color: 'blue',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
    marginTop:50
  },
  buttonTouchable: {
    padding: 16
  },
  qr:{
    width:250,
    height:250,
    marginLeft:25,
    marginTop:30
  }
  
});
