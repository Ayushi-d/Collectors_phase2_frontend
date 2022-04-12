import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import ImagePath from '../constants/Imagepath';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const EmptyComp = ({topText, bottomText}) => {
  return (
    <View>
      <View style={{alignSelf: 'center', marginTop: hp('15%')}}>
        <View>
          <Image source={ImagePath.Nopost}></Image>
        </View>
      </View>
      <View
        style={{alignSelf: 'center', alignItems: 'center', margin: hp('5%')}}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            fontFamily: 'Poppins-Bold',
            lineHeight: 24,
          }}>
          {topText}
        </Text>
        <Text
          style={{
            color: '#9CA6B6',
            fontSize: 14,
            fontFamily: 'Poppins-Regular',
            lineHeight: 20,
            alignSelf: 'center',
            marginTop: 10,
            textAlign: 'center',
          }}>
          {bottomText}
        </Text>
      </View>
    </View>
  );
};
export default EmptyComp;

const styles = StyleSheet.create({});
