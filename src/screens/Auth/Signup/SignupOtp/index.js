import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import Header from '../../../../components/Header';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import * as Utility from '../../../../utility/index';
import axios from 'axios';
import {
  heightPercentageToDP as hp,
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
const SignupOTp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const callSignUpOtpVerifyAPi = async () => {
    // console.log(text);
    if (value && email) {
      // console.log(text);
      let body = JSON.stringify({
        // email: text,
        email: email,
        otp: value,
      });
      let headers = {
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
      };
      console.log('user body is..', body);
      let response = await axios.post('https://collectorsapp.herokuapp.com/verifyOtp', {
        email: email,
        otp: value,
      });
      console.log('befire.SIgnup OTP', response.data.user_id);
      if (response.data.code == 200) {
        await Utility.setInLocalStorge('user_id', response.data.user_id);
        console.log('out put come');
        navigation.navigate('SignupUsername');
      } else {
        Alert.alert(response.data.msg);
      }
    } else {
      Alert.alert('Otp is missing');
    }
  };
  useEffect(() => {
    getEmail();
  }, []);
  const getEmail = async () => {
    var email = await Utility.getFromLocalStorge('user_email');
    setEmail(email);
  };
  const resendOtpAPi = async () => {
    let response = await axios.post(
      'https://collectorsapp.herokuapp.com/forgotPassword',
      {
        email: email,
      },
    );
    // console.log('befire', response.data);
    if (response.data.code == '200') {
      await Utility.setInLocalStorge('user_email', email);
      setLoading(false);
      navigation.navigate('SigninOTp');
    } else {
      Alert.alert(response.data.msg);
    }
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
                fontFamily: 'Poppins-Bold',
                fontSize: 32,
              }}>
              OTP{' '}
              <Text style={{fontFamily: 'Poppins-Light'}}>Verification</Text>
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
                    borderWidth: 1.5,
                    backgroundColor: '#1F232E',
                    borderRadius: 10,
                    marginRight: 5,
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

        <View style={{flex: 0.2, justifyContent: 'flex-end'}}>
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
                width: '14%',
                marginTop: 5,
              }}
            />

            <View
              style={{
                borderBottomColor: '#117AF530',
                borderBottomWidth: 5,
                width: '12%',
                marginTop: 5,
                marginLeft: 5,
              }}
            />

            <View
              style={{
                borderBottomColor: '#117AF530',
                borderBottomWidth: 5,
                width: '12%',
                marginTop: 5,
                marginLeft: 5,
              }}
            />
          </View>
          <TouchableOpacity onPress={() => callSignUpOtpVerifyAPi()}>
            <View
              style={{
                backgroundColor: '#117AF5',
                height : 48,
                borderRadius: 10,
                marginHorizontal: 20,
                justifyContent: 'center',

                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'Poppins-Bold',
                  fontSize: 13,
                }}>
                VERIFY OTP
              </Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              marginTop: 20,
              marginBottom: 30,
            }}>
            <View>
              <Text
                style={{
                  color: '#9CA6B690',
                  fontWeight: '400',
                  fontSize: 13,
                  fontFamily: 'Poppins-Regular',
                }}>
                Haven’t recieved the OTP?{' '}
              </Text>
            </View>
            <View>
              <TouchableOpacity onPress={() => resendOtpAPi()}>
                <Text
                  style={{
                    fontSize: 13,
                    fontFamily: 'Poppins-Bold',
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
export default SignupOTp;
