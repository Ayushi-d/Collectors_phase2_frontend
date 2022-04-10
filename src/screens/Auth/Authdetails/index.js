import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Path from '../../../constants/Imagepath';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../utility';
const Authdetails = ({navigation}) => {
  const openPrivacyPolicy = () => {
    navigation.navigate('PrivacyPolicy');
  };
  const openTermofuse = () => {
    navigation.navigate('Termofuse');
  };
  return (
    <ScrollView style={{flex: 1}}>
      <ImageBackground
        source={Path.backgroundImage}
        style={{height: hp('100%'), width: wp('100%')}}>
        <View style={{alignSelf: 'center', marginTop: hp('10%')}}>
          <Image source={Path.logohd} style={{height: 40, width: 110}}></Image>
        </View>

        <View style={{marginHorizontal: 20, marginTop: hp('15%')}}>
          <Text
            style={{
              fontSize: 32,
              color: '#E9F0FA',
              lineHeight: 40,
              fontFamily: 'Poppins-Bold',
            }}>
            <Text style={styles.lightText}>A</Text> trusted market-place{' '}
            <Text style={styles.lightText}>for</Text> buying{' '}
            <Text style={styles.lightText}>and</Text> selling{' '}
            <Text style={styles.lightText}>unique</Text> collectibles!
          </Text>
        </View>
        <View style={{marginHorizontal: 20, marginTop: 15}}>
          <Text
            style={{
              fontSize: 13,
              color: '#9CA6B6',
              lineHeight: 22,
              fontFamily: 'Poppins-Medium',
            }}>
            Make an offer, discuss over chat and trade, it’s that simple!
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
          <View
            style={{
              backgroundColor: '#117AF5',
              padding: 12,

              borderRadius: 8,
              marginHorizontal: 20,
              alignItems: 'center',
              marginTop: hp('10%'),
            }}>
            <Text
              style={{
                fontSize: 13,
                color: 'white',
                lineHeight: 28,
                fontFamily: 'Poppins-Bold',
              }}>
              LOGIN/SIGNUP
            </Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',

            marginHorizontal: 20,
            justifyContent: 'space-between',
            marginTop: 15,
          }}>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#161F37',
                padding: 5,
                width: wp('43%'),
                alignItems: 'center',
                borderRadius: 8,
              }}>
              <Image source={Path.Applelogohd} resizeMode="center"></Image>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#161F37',
                padding: 5,
                width: wp('43%'),
                alignItems: 'center',
                borderRadius: 8,
              }}>
              <Image source={Path.googlehd} resizeMode="center"></Image>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center', marginTop: 30}}>
          <Text style={styles.bottomText}>
            By joining you agree to our{' '}
            <Text onPress={openTermofuse} style={styles.pressTextStyle}>
              {' '}
              Privacy Policy{' '}
            </Text>{' '}
            and{' '}
            <Text onPress={openTermofuse} style={styles.pressTextStyle}>
              {' '}
              T&C
            </Text>
          </Text>
        </View>
        <View style={{alignSelf: 'center'}}></View>
      </ImageBackground>
    </ScrollView>
  );
};
export default Authdetails;

const styles = StyleSheet.create({
  pressTextStyle: {
    fontSize: 12,
    color: 'white',
    textDecorationLine: 'underline',
    fontFamily: 'Poppins-Bold',
  },
  bottomText: {
    fontSize: 12,
    color: '#9CA6B6',
    fontFamily: 'Poppins-Regular',
  },
  lightText: {
    fontSize: 32,
    fontFamily: 'Poppins-Light',
    color: '#E9F0FA',
  },
});
