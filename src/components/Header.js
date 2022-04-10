import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Path from '../constants/Imagepath';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../utility';
const Header = ({
  login,
  navigate,
  hideLogo,
  textData,
  backgroundColor = 'black',
  back = 'Back',
  onPress,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: backgroundColor,
        // alignItems: 'center',
        paddingHorizontal: 10,
      }}>
      {login ? (
        <TouchableOpacity
          onPress={onPress ? onPress : () => navigate.goBack()}
          style={{
            // alignItems: 'center',
            paddingBottom: 10,
            flex: 0.4,
          }}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: '12%',
              margin: '3%',
              alignItems: 'center',
            }}>
            <Image source={Path.back} />

            <Text
              style={{
                color: 'white',
                marginLeft: wp('5%'),
                fontSize: 13,
                fontWeight: '300',
              }}>
              {back}
            </Text>
          </View>
        </TouchableOpacity>
      ) : null}
      {hideLogo ? null : (
        <View
          style={
            login
              ? {flex: 0.6, marginTop: 5, justifyContent: 'center'}
              : {
                  marginTop: 5,
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }
          }>
          <Image source={Path.logohd} style={{height: 20, width: 55}} />
        </View>
      )}
      {textData ? (
        <View
          style={{alignItems: 'center', marginLeft: wp('15%') , justifyContent : 'center'}}>
          <Text
            style={{
              color: 'white',
              alignSelf: 'center',
              fontSize: 20,
              fontWeight: '700',
              lineHeight: 28,
            }}>
            {textData}
          </Text>
        </View>
      ) : null}
    </View>
  );
};
export default Header;
