import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Modal, Linking, Image} from 'react-native';
import colors from '../../styles/colors';
import Button from '../../Component/Button';
import navigationStrings from '../../constants/navigationStrings';
import actions from '../../redux/actions';
import {showMessage} from 'react-native-flash-message';
import QRCode from 'react-native-qrcode-svg';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import imagePath from '../../constants/imagePath';
import styles from './styles';
import strings from '../../constants/lang';
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
    actions.logoutUsingPhone();
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
        <Text style={styles.input}>{strings.ACCOUNT}</Text>

        <Button name="Logout" pressIt={this.logout} />
        <TouchableOpacity onPress={this.openModal}>
          <Text style={{textAlign:'center',marginTop:20,fontSize:20}}>{strings.SHOW_MY_QR_CODE}</Text>
        </TouchableOpacity>
        <Modal visible={isVisible}>
          <View style={{alignItems: 'center', marginTop: 20}}>
            <Text style={{fontSize: 20}}>{strings.QR_CODE}</Text>
            <QRCode value="www.google.com" size={200}/>
          </View>
          <TouchableOpacity onPress={this.closeModal}>
            <Text style={{textAlign:'center',marginTop:20}}>{strings.CLOSE}</Text>
          </TouchableOpacity>
        </Modal>
        <QRCodeScanner
          onRead={this.onSuccess}
          flashMode={RNCamera.Constants.FlashMode.auto}
          topContent={
            <Text style={styles.centerText}>
              
              <Text style={styles.textBold}>{strings.SCAN_HERE}</Text>
              
            </Text>
          }
          centerContent={
              <Image source={imagePath.down} style={{width:90,height:90}}/>
          }
          bottomContent={
            <TouchableOpacity style={styles.buttonTouchable}>
              <Text style={styles.buttonText}>{strings.LETS_SCAN}</Text>
            </TouchableOpacity>
          }
          fadeIn={true}
          cameraStyle={styles.qr}
        />
      </View>
    );
  }
}


