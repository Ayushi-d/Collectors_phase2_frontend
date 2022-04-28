import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Header from '../../../../components/Header';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import axios from 'axios';
import * as Utility from '../../../../utility/index';
import {
  getFromLocalStorge,
  heightPercentageToDP as hp,
  setInLocalStorge,
  widthPercentageToDP as wp,
} from '../../../../utility';
import WrapperContainer from '../../../../components/WrapperContainer';
const styles = StyleSheet.create({
  root: {flex: 1, padding: 10},
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
    color: '#484C76',
  },
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: 44,
    height: 56,
    lineHeight: 55,
    fontSize: 24,
    borderWidth: 1.5,
    borderColor: '#00000030',
    textAlign: 'center',
    borderRadius: 10,
    color: 'white',
  },
  focusCell: {
    borderColor: '#117AF5',
    borderRadius: 6,
    color: '#484C76',
  },
});

const CELL_COUNT = 4;
const SigninOTp = ({navigation}) => {
  const [value, setValue] = useState('');
  const [email, setEmail] = useState();
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const callOtpVerifyAPi = async () => {
    try {
      if (value && email) {
        let response = await axios.post('https://collectorsapp.herokuapp.com/verifyOtp', {
          email: email,
          otp: value,
        });
        console.log('befire', response.data);
        console.log('email..', email);
        if (response.data.code == 200) {
          await Utility.setInLocalStorge('user_id', response.data.user_id);
          navigation.navigate('SigninPassword');
        } else {
          Alert.alert(response.data.msg);
        }
      } else {
        Alert.alert('Parameter is missing');
      }
    } catch (error) {
      Alert.alert(error);
    }
  };
  useEffect(() => {
    getEmail();
  });
  const getEmail = async () => {
    var email = await Utility.getFromLocalStorge('user_email');
    console.log(':bb.....', email);
    setEmail(email);
  };
  return (
    <WrapperContainer statusBarColor='black' >
 
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        style={{
          flex: 1,

          backgroundColor: 'black',
        }}
        behavior={'padding'}>
        <Header login="true" navigate={navigation} />
        <View style={{flex: 0.8}}>
          <View style={{marginHorizontal: 20, marginTop: 50}}>
            <Text
              style={{
                color: 'white',

                fontSize: 32,
                fontFamily: 'Poppins-Bold',
              }}>
              OTP{' '}
              <Text style={{fontFamily: 'Poppins-Regular'}}>Verification</Text>
            </Text>
          </View>
          <View style={{marginHorizontal: 20, marginTop: 8}}>
            <Text
              style={{
                color: '#9CA6B6',
                fontSize: 13,
                fontFamily: 'Poppins-Regular',
              }}>
              Enter the One Time Password that is sent to your registered E-mail
              id..
            </Text>
          </View>
          <View
            style={{
              marginTop: 36,
              alignSelf: 'center',
              marginBottom: 50,
            }}>
            <CodeField
              ref={ref}
              {...props}
              // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
              value={value}
              onChangeText={setValue}
              cellCount={CELL_COUNT}
              rootStyle={styles.codeFieldRoot}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={({index, symbol, isFocused}) => (
                <View
                  style={{
                    alignSelf: 'center',
                    borderWidth: 1,
                    backgroundColor: '#1F232E',
                    borderRadius: 10,
                    marginRight: 10,
                  }}
                  key={index}>
                  <Text
                    style={[styles.cell, isFocused && styles.focusCell]}
                    onLayout={getCellOnLayoutHandler(index)}>
                    {symbol || (isFocused ? <Cursor /> : null)}
                  </Text>
                </View>
              )}
            />
          </View>
        </View>
        <View style={{flex: 0.2, justifyContent: 'flex-end', marginBottom: 20}}>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              margin: hp('1%'),
            }}>
            <View
              style={{
                borderBottomColor: '#117AF5',
                borderBottomWidth: 5,
                width: '15%',
                marginTop: 5,
              }}
            />
            <View
              style={{
                borderBottomColor: '#117AF5',
                borderBottomWidth: 5,
                width: '12%',
                marginTop: 5,
                marginLeft: 5,
              }}
            />
            <View
              style={{
                borderBottomColor: '#117AF520',
                borderBottomWidth: 5,
                width: '12%',
                marginTop: 5,
                marginLeft: 5,
              }}
            />
          </View>
          <TouchableOpacity onPress={() => callOtpVerifyAPi()}>
            <View
              style={{
                backgroundColor: '#117AF5',
                padding: 10,
                borderRadius: 8,
                width: wp('80%'),
                alignSelf: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontFamily : 'Poppins-Bold',
                  fontSize: 13,
                  lineHeight: 28,
                }}>
                VERIFY OTP
              </Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              margin: hp('3%'),
            }}>
            <View>
              <Text
                style={{color: '#9CA6B690',fontFamily : 'Poppins-Regular', fontSize: 12}}>
                Haven’t recieved the OTP?{' '}
              </Text>
            </View>
            <View>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: 13,
                    fontFamily : 'Poppins-Bold',
                    color: 'white',
                    textDecorationLine: 'underline',
                  }}>
                  RESEND
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
    </WrapperContainer>
  );
};
export default SigninOTp;
