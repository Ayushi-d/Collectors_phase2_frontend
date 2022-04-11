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
    <View style={{flex: 1}}>
      <ImageBackground
        source={Path.backgroundImage}
        style={{height: hp('100%'), width: wp('100%'), flex: 1}}>
        <View style={{flex: 0.6, justifyContent: 'space-between'}}>
          <View style={{alignSelf: 'center', marginTop: 20}}>
            <Image source={Path.logohd} style={{height: 20, width: 55}}></Image>
          </View>

          <View>
            <View style={{marginHorizontal: 20}}>
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
            <View style={{marginHorizontal: 20, marginTop: 10}}>
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
          </View>
        </View>
        <View
          style={{flex: 0.4, justifyContent: 'flex-end', paddingBottom: 30}}>
          <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
            <View
              style={{
                backgroundColor: '#117AF5',
                padding: 12,

                borderRadius: 8,
                marginHorizontal: 20,
                alignItems: 'center',
                height: 48,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 13,
                  color: '#E9F0FA',
                  lineHeight: 28,
                  fontFamily: 'Poppins-SemiBold',
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
                  borderRadius: 10,
                  height: 44,
                  justifyContent: 'center',
                }}>
                <Image
                  source={Path.Applelogohd}
                  style={{height: 20, width: 17}}></Image>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: '#161F37',
                  padding: 5,
                  width: wp('43%'),
                  alignItems: 'center',
                  borderRadius: 10,
                  justifyContent: 'center',
                  height: 44,
                }}>
                <Image
                  source={Path.googlehd}
                  style={{height: 18, width: 18}}></Image>
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
        </View>
      </ImageBackground>
    </View>
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
