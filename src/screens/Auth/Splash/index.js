import React, {useEffect} from 'react';
import {View, Text, ImageBackground, Image, Dimensions} from 'react-native';
import Path from '../../../constants/Imagepath';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../utility';
import * as Utility from '../../../utility/index';

const Splash = ({navigation}) => {
  useEffect(() => {
     const timeoutHandle = setTimeout(() => {
        retrieveData();
      }, 1000);
      return()=>clearTimeout(timeoutHandle)
    }, []);
  const retrieveData = async () => {
    let user_id = await Utility.getFromLocalStorge('user_id');
    if (user_id) {
      navigation.navigate('BottomTab');
    } else {
      // navigation.navigate('Authdetails')
      navigation.navigate('Authdetails');
    }
  };

  const width = Dimensions.get('window').width;
  return (
    <ImageBackground
      source={Path.backgroundImage}
      style={{height: hp('100%'), width: wp('100%')}}>
      <View style={{alignSelf: 'center', flex: 0.9, justifyContent: 'center'}}>
        <Image source={Path.logohd} style={{width: 75, height: 28}}></Image>
      </View>
      <View style={{flex: 0.1, paddingBottom: 50}}>
        <View style={{alignSelf: 'center'}}>
          <Image
            source={Path.logoTextlong}
            style={{width: width / 1.6, height: width / 40}}></Image>
        </View>
        <View style={{alignSelf: 'center', marginTop: 20}}>
          <Text
            style={{
              fontSize: 15,
              color: '#E9F0FA',
              fontFamily: 'Poppins-Regular',
            }}>
            Version 0.2
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};
export default Splash;
