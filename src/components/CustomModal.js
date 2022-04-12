import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import ImagePath from '../constants/Imagepath';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const CustomModal = ({
  isVisible,
  mainText,
  leftButton,
  rightButton,
  warningText,
  onPressLeft,
  onPressRight,
  mainText2,
  backgroundColor = '#D02B29',
}) => {
  return (
    <Modal isVisible={isVisible} transparent={true}>
      <View
        style={{
          backgroundColor: '#1F232E',
          width: wp('90%'),
          borderRadius: 10,
          alignSelf: 'center',
        }}>
        <View style={{alignSelf: 'center'}}>
          <Image source={ImagePath.ModalImage} resizeMode="center"></Image>
        </View>
        <View style={{alignSelf: 'center'}}>
          <Text
            style={{
              color: '#E9F0FA',
              fontSize: 20,
              fontFamily: 'Poppins-Bold',
              lineHeight: 28,
            }}>
            {mainText}
            <Text style={{fontFamily: 'Poppins-Regular'}}>{mainText2}</Text>
          </Text>
        </View>
        <View style={{alignSelf: 'center'}}>
          <Text
            style={{
              color: '#9CA6B6',
              fontSize: 14,
              fontFamily: 'Poppins-Regular',
            }}>
            {warningText}
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: hp('2%')}}>
          <TouchableOpacity
            onPress={onPressLeft}
            style={{
              backgroundColor: '#2E3853',
              padding: 10,
              width: wp('45%'),
              alignItems: 'center',
              borderBottomLeftRadius: 10,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 13,
                fontFamily: 'Poppins-SemiBold',
                lineHeight: 20,
                color: '#E9F0FA',
              }}>
              {leftButton}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={onPressRight}
            style={{
              backgroundColor: backgroundColor,
              height: 64,
              width: wp('45%'),
              alignItems: 'center',
              height: 64,
              justifyContent: 'center',
              borderBottomRightRadius: 10,
            }}>
            <Text
              style={{
                fontSize: 13,
                fontWeight: '600',
                lineHeight: 20,
                color: '#E9F0FA',
              }}>
              {rightButton}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
export default CustomModal;
