import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import ImagePath from '../constants/Imagepath';

const ChatAcceptModal = ({isVisible, onPressContinue}) => {
  return (
    <Modal isVisible={isVisible}>
      <View
        style={{
          height: 290,
          borderRadius: 15,
          backgroundColor: '#1F232E',
        }}>
        <View style={styles.topView}>
          <Image
            source={ImagePath.clap}
            style={{alignSelf: 'center', marginTop: 30}}
          />
          <Text style={styles.acceptText}>
            Your chat was{' '}
            <Text style={{fontFamily: 'Poppins-Bold'}}> accepted!</Text>
          </Text>
          <Text style={styles.mainText}>
            Beyond this, the Collectors Edition won’t be responsible for any
            kind of fraud or unfair practices. Happy and safe trading!
          </Text>
        </View>

        <TouchableOpacity
        onPress={onPressContinue}
          style={{
            height: 64,
            backgroundColor: '#117AF5',
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
            justifyContent : 'center',
            alignItems : 'center'
          }}>
          <Text style ={styles.btnText}>CONTINUE TO CHAT</Text>
          </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default ChatAcceptModal;

const styles = StyleSheet.create({
  topView: {
    height: 232,
    paddingHorizontal: 15,
  },
  acceptText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
    color: '#E9F0FA',
    textAlign: 'center',
    marginTop : 24
  },
  mainText: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#9CA6B6',
    textAlign: 'center',
    marginTop : 8
  },
  btnText : {
      fontSize : 13 ,
      fontFamily : 'Poppins-SemiBold',
      color : 'white',
      textAlign : 'center'
  }
});
