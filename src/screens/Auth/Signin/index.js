import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Alert,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../../utility';
import Header from '../../../components/Header';
import Path from '../../../constants/Imagepath';
import Loader from '../../../components/loader';
import {TextInput} from 'react-native-paper';
import axios from 'axios';
import * as Utility from '../../../utility/index';
import ImagePath from '../../../constants/Imagepath';
const Signin = ({navigation}) => {
  const [Authdata, setAuthData] = useState('Login');
  const [loading, setLoading] = useState(false);
  const [loadingRegister, setLoadingRegister] = useState(false);
  const [text, setText] = React.useState('');
  const [fullName, setFullname] = useState('');
  const [emailid, setEmailid] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');
  const [loginuserName, setLoginuserName] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginIsClick1, setLoginIsCLick] = useState(false);
  const [loginIsClick12, setLoginIsCLick2] = useState(false);
  const [isCheckfullName, setIsCheckfullName] = useState(false);
  const [isCheckEmail, setIsCheckEMail] = useState(false);
  const [isCheckCode, setIsCheckCode] = useState(false);
  const [isCheckMobile, setIsCheckMobile] = useState(false);
  const [isCheckPassword1, setIsChcekPassword1] = useState(false);
  const [loginpasswordEye, setLoginPasswordEye] = useState(true);
  const [resgisterPasswordeye, setRegisterPasswordeye] = useState(true);
  const [loginuserNameactive, setLoginuserNameactive] = useState(false);
  const [loginPasswordactive, setLoginUserPasswordactive] = useState(false);
  const [registername, setRegisterName] = useState(false);
  const [registerEmail, setRegisterEmail] = useState(false);
  const [registerPassword, setRegisterPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [passErr, setPassErr] = useState(false);

  const [passLengthErr, setPassLengthErr] = useState(false);
  const onChangeText = text => setText(text);
  const hasErrors = () => {
    return !text.includes('@');
  };
  const loginApi = async () => {
    setIsError(false);
    setEmailErr(false);
    setPassErr(false);
    if (loginuserName.length === 0 || loginPassword.length == 0) {
      alert('Enter Username & Password to Continue');
      return;
    }
    setLoading(!loading);
    try {
      if (loginuserName && loginPassword) {
        let response = await axios.post('http://3.138.124.101:9000/login', {
          logintype: 'email',
          emailOrUserName: loginuserName.trim(),
          password: loginPassword,
        });
        console.log('Signin.......', response.data);
        if (response.data.msg == "Success! Yo're logged in.") {
          await Utility.setInLocalStorge(
            'user_id',
            response.data.data.customer_id,
          );
          navigation.navigate('BottomTab');
          setLoading(false);
          setLoginuserName('');
          setLoginPassword('');
        } else {
          setLoading(false);
          if (response.data.msg === 'User not found.') {
            setIsError(true);
            setErrorMessage('Invalid username. Try again or Sign up.');
            setEmailErr(true);
            return;
          }
          if (response.data.msg === 'Failed! Password not matched.') {
            setIsError(true);
            setErrorMessage('Passwords do not match please try again.');
            setPassErr(true);
            return;
          }

          console.log(response.data.msg, 'responseresponse');
        }
      } else {
        Alert.alert('Something missing');
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const registerApi = async () => {
    if (fullName.length == 0 || emailid.length == 0 || password.length == 0) {
      alert('Enter All Details to Continue');
      return;
    }
    if (password.length < 6) {
      setPassLengthErr(true);
      return;
    }
    setPassLengthErr(false);
    setLoadingRegister(true);
    try {
      let response = await axios.post('http://3.138.124.101:9000/register', {
        name: fullName,
        email: emailid.trim(),
        phone_number: '',
        password: password,
      });
      console.log(response.data);
      await Utility.setInLocalStorge('user_email', emailid.trim());
      if (response.data.code == 200) {
        setLoadingRegister(false);
        navigation.navigate('SignupOtp');
        setFullname('');
        setEmailid('');
        setPassword('');
      } else {
        setLoadingRegister(false);

        console.log(response.data.msg, 'esponse.data.msg');
        Alert.alert(response.data.msg);
      }
    } catch (error) {
      Alert.alert(error);
    }
  };
  const openTermofuse = () => {
    navigation.navigate('Termofuse');
  };

  const onFocusAction = a => {
    setLoginuserNameactive(false);
    setLoginUserPasswordactive(false);
    setRegisterName(false);
    setRegisterEmail(false);
    setRegisterPassword(false);
    a(true);
  };
  return (
    <View
      style={{backgroundColor: 'black', height: hp('100%'), width: wp('100%')}}>
      <Header backgroundColor="#0D111C" />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          backgroundColor: '#0D111C',
          padding: 5,
          paddingTop: 20,
        }}>
        <TouchableOpacity
          onPress={() => setAuthData('Login')}
          style={{alignItems: 'center'}}>
          <View>
            <Text
              style={
                Authdata == 'Login'
                  ? {color: 'white', fontFamily: 'Poppins-SemiBold'}
                  : {
                      color: '#E9F0FA70',

                      fontSize: 14,
                      fontFamily: 'Poppins-SemiBold',
                    }
              }>
              LOGIN
            </Text>
          </View>

          {Authdata == 'Login' ? (
            <View
              style={{
                borderBottomColor: 'white',
                borderBottomWidth: 3,
                width: wp('10%'),
                borderRadius: 30,
                marginTop: 5,
              }}
            />
          ) : null}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setAuthData('Signup')}
          style={{alignItems: 'center'}}>
          <View>
            <Text
              style={
                Authdata == 'Signup'
                  ? {color: 'white', fontFamily: 'Poppins-SemiBold'}
                  : {
                      color: '#E9F0FA70',
                      fontFamily: 'Poppins-SemiBold',
                      fontSize: 14,
                    }
              }>
              SIGNUP
            </Text>
          </View>

          {Authdata == 'Signup' ? (
            <View
              style={{
                borderBottomColor: 'white',
                borderBottomWidth: 3,
                width: wp('10%'),
                borderRadius: 30,
                marginTop: 5,
              }}
            />
          ) : null}
        </TouchableOpacity>
      </View>

      <KeyboardAwareScrollView style={{flexGrow: 1}} enableOnAndroid={true}>
        {Authdata == 'Login' ? (
          <View>
            <TextInput
              mode="flat"
              theme={{
                colors: {
                  text: 'white',
                  primary: '#9CA6B6',
                  placeholder: '#9CA6B6',
                },
              }}
              onChangeText={e => setLoginuserName(e)}
              style={{
                marginTop: 70,
                height: 56,
                color: '#E9F0FA',
                fontSize: 14,
                marginHorizontal: 20,
                borderRadius: 10,
                borderWidth: 1.5,
                borderColor:
                  loginuserNameactive && !emailErr
                    ? '#117AF5'
                    : emailErr
                    ? '#D02B29'
                    : '#1F232E',
                backgroundColor: '#1F232E',
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
                overflow: 'hidden',
                fontFamily: 'Poppins-Regular',
              }}
              underlineColor="transparent"
              underlineColorAndroid="transparent"
              selectionColor="white"
              onFocus={() => onFocusAction(setLoginuserNameactive)}
              label="Username or E-mail ID"
              value={loginuserName}
            />

            <View
              style={{
                marginTop: -4,
                borderTopColor:
                  loginuserNameactive && !emailErr
                    ? '#117AF5'
                    : emailErr
                    ? '#D02B29'
                    : '#1F232E',
                borderTopWidth: 3,
                marginHorizontal: 24,
              }}
            />

            <TextInput
              onChangeText={e => setLoginPassword(e)}
              theme={{
                colors: {
                  text: 'white',
                  primary: '#9CA6B6',
                  placeholder: '#9CA6B6',
                },
              }}
              style={{
                marginTop: 20,
                height: 56,
                color: 'white',
                fontSize: 14,
                marginHorizontal: 20,
                borderRadius: 10,
                borderWidth: 1.5,
                fontFamily: 'Poppins-Regular',
                borderColor:
                  loginPasswordactive && !passErr
                    ? '#117AF5'
                    : passErr
                    ? '#D02B29'
                    : '#1F232E',
                backgroundColor: '#1F232E',
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
                overflow: 'hidden',
              }}
              onFocus={() => onFocusAction(setLoginUserPasswordactive)}
              underlineColor="transparent"
              selectionColor="white"
              secureTextEntry={loginpasswordEye}
              label="Password"
              right={
                <TextInput.Icon
                  onPress={() => setLoginPasswordEye(!loginpasswordEye)}
                  forceTextInputFocus={false}
                  color={'#117AF5'}
                  name={loginpasswordEye ? ImagePath.eye : ImagePath.eyeBlue}
                />
              }
              value={loginPassword}
            />

            <View
              style={{
                marginTop: -4,
                borderTopColor:
                  loginPasswordactive && !passErr
                    ? '#117AF5'
                    : passErr
                    ? '#D02B29'
                    : '#1F232E',
                borderTopWidth: 3,
                marginHorizontal: 24,
              }}
            />

            {isError ? (
              <Text style={styles.warningText}>{errorMessage}</Text>
            ) : null}

            <TouchableOpacity
              disabled={
                loginuserName.length && loginPassword.length ? false : true
              }
              style={{marginTop: 50, marginHorizontal: 20}}
              onPress={() => loginApi()}>
              <View
                style={{
                  backgroundColor:
                    loginuserName.length && loginPassword.length
                      ? '#117AF5'
                      : '#2D313C',
                  padding: 12,
                  borderRadius: 8,

                  alignItems: 'center',
                }}>
                {!loading ? (
                  <Text
                    style={{
                      color: 'white',
                      fontFamily: 'Poppins-SemiBold',
                      lineHeight: 28,
                    }}>
                    LOGIN
                  </Text>
                ) : (
                  <ActivityIndicator size="large" color="white" />
                )}
              </View>
            </TouchableOpacity>

            <View style={{marginTop: 20, alignItems: 'center'}}>
              <Text
                style={{
                  color: '#9CA6B6',

                  fontSize: 13,
                  fontFamily: 'Poppins-Regular',
                }}>
                Forgot your password?{' '}
                <Text
                  onPress={() => navigation.navigate('SigninForgot')}
                  style={[styles.pressTextStyle, {fontSize: 13}]}>
                  GET HELP
                </Text>
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                marginTop: 100,
              }}>
              <View
                style={{
                  borderBottomColor: '#526086',
                  borderBottomWidth: 1,
                  width: wp('20%'),
                  alignSelf: 'center',
                  marginTop: 5,
                }}></View>
              <View style={{alignItems: 'center'}}>
                <Text
                  style={{
                    color: '#9CA6B6',
                    alignSelf: 'center',
                    marginLeft: '5%',
                    marginRight: '5%',
                    fontFamily: 'Poppins-Regular',
                  }}>
                  or login using
                </Text>
              </View>
              <View
                style={{
                  borderBottomColor: '#526086',
                  borderBottomWidth: 1,
                  alignSelf: 'center',
                  width: wp('20%'),
                  marginTop: 5,
                }}></View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 20,

                justifyContent: 'space-between',

                marginTop: 20,
              }}>
              <TouchableOpacity style={{flex: 0.48}}>
                <View
                  style={{
                    backgroundColor: '#161F37',
                    padding: 5,

                    alignItems: 'center',
                    borderRadius: 8,
                  }}>
                  <Image source={Path.Applelogohd} resizeMode="center"></Image>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{flex: 0.48}}>
                <View
                  style={{
                    backgroundColor: '#161F37',
                    padding: 5,

                    alignItems: 'center',
                    borderRadius: 8,
                  }}>
                  <Image source={Path.googlehd} resizeMode="center"></Image>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{alignItems: 'center', marginTop: 40}}>
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
          </View>
        ) : (
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                marginTop: 40,
              }}>
              <View
                style={{
                  borderBottomColor: '#526086',
                  borderBottomWidth: 1,
                  width: wp('20%'),
                  alignSelf: 'center',
                  marginTop: 5,
                }}></View>
              <View>
                <Text
                  style={{
                    fontSize: 12,
                    color: '#E9F0FA',
                    marginLeft: 10,
                    marginRight: 10,
                    opacity: 0.7,
                    fontFamily: 'Poppins-Regular',
                  }}>
                  sign up using
                </Text>
              </View>
              <View
                style={{
                  borderBottomColor: '#526086',
                  borderBottomWidth: 1,
                  width: wp('20%'),
                  alignSelf: 'center',
                  marginTop: 5,
                }}></View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 15,
                marginHorizontal: 20,

                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                style={{
                  flex: 0.48,
                  height: 44,
                  backgroundColor: '#161F37',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 8,
                }}>
                <Image source={Path.Applelogohd} resizeMode="center"></Image>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 0.48,
                  height: 44,
                  backgroundColor: '#161F37',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 8,
                }}>
                <Image source={Path.googlehd} resizeMode="center"></Image>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                marginTop: 40,
              }}>
              <View
                style={{
                  borderBottomColor: '#526086',
                  borderBottomWidth: 1,
                  width: wp('20%'),
                  alignSelf: 'center',
                  marginTop: 5,
                }}></View>
              <View>
                <Text
                  style={{
                    fontSize: 12,
                    color: '#E9F0FA',
                    marginLeft: '5%',
                    opacity: 0.7,
                    fontFamily: 'Poppins-Regular',
                  }}>
                  or sign up using Email
                </Text>
              </View>
              <View
                style={{
                  borderBottomColor: '#526086',
                  borderBottomWidth: 1,
                  width: wp('20%'),
                  alignSelf: 'center',
                  marginTop: 5,
                }}></View>
            </View>

            <TextInput
              mode="flat"
              theme={{
                colors: {
                  text: 'white',
                  primary: '#9CA6B6',
                  placeholder: '#9CA6B6',
                },
              }}
              underlineColor="transparent"
              underlineColorAndroid="transparent"
              selectionColor="white"
              label={'Full Name'}
              style={[
                styles.inputStyle,
                {borderColor: registername ? '#117AF5' : '#1F232E'},
              ]}
              onFocus={() => onFocusAction(setRegisterName)}
              value={fullName}
              onChangeText={e => setFullname(e)}
              onTouchStart={() => setIsCheckfullName(!isCheckfullName)}
            />
            <View
              style={{
                marginTop: -4,
                borderTopColor: registername ? '#117AF5' : '#1F232E',

                borderTopWidth: 3,
                marginHorizontal: 24,
              }}
            />

            <TextInput
              mode="flat"
              theme={{
                colors: {
                  text: 'white',
                  primary: '#9CA6B6',
                  placeholder: '#9CA6B6',
                },
              }}
              underlineColor="transparent"
              underlineColorAndroid="transparent"
              selectionColor="white"
              label={'Email ID'}
              style={[
                styles.inputStyle,
                {borderColor: registerEmail ? '#117AF5' : '#1F232E'},
              ]}
              value={emailid}
              onChangeText={e => setEmailid(e)}
              onFocus={() => onFocusAction(setRegisterEmail)}
              onTouchStart={() => setIsCheckEMail(!isCheckEmail)}
            />
            <View
              style={{
                marginTop: -4,
                borderTopColor: registerEmail ? '#117AF5' : '#1F232E',

                borderTopWidth: 3,
                marginHorizontal: 24,
              }}
            />

            <TextInput
              mode="flat"
              theme={{
                colors: {
                  text: 'white',
                  primary: '#9CA6B6',
                  placeholder: '#9CA6B6',
                },
              }}
              underlineColor="transparent"
              underlineColorAndroid="transparent"
              selectionColor="white"
              label={'Password'}
              value={password}
              style={[
                styles.inputStyle,
                {borderColor: registerPassword ? '#117AF5' : '#1F232E'},
              ]}
              onChangeText={e => setPassword(e)}
              onFocus={() => onFocusAction(setRegisterPassword)}
              secureTextEntry={resgisterPasswordeye}
              onTouchStart={() => setIsChcekPassword1(!isCheckPassword1)}
              right={
                <TextInput.Icon
                  onPress={() => setRegisterPasswordeye(!resgisterPasswordeye)}
                  forceTextInputFocus={false}
                  color={'#117AF5'}
                  name={
                    resgisterPasswordeye ? ImagePath.eye : ImagePath.eyeBlue
                  }
                />
              }
            />
            <View
              style={{
                marginTop: -4,
                borderTopColor: registerPassword ? '#117AF5' : '#1F232E',

                borderTopWidth: 3,
                marginHorizontal: 24,
              }}
            />

            {passLengthErr ? (
              <Text style={styles.warningText}>
                {' '}
                Passwords must be 6 letters long.
              </Text>
            ) : null}

            <TouchableOpacity
              disabled={
                fullName.length && emailid.length && password.length
                  ? false
                  : true
              }
              onPress={() => registerApi()}>
              <View
                style={{
                  backgroundColor:
                    fullName.length && emailid.length && password.length
                      ? '#117AF5'
                      : '#2D313C',
                  padding: 10,
                  borderRadius: 8,
                  marginHorizontal: 20,
                  marginTop: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                {!loadingRegister ? (
                  <Text
                    style={{
                      color: 'white',
                      lineHeight: 28,
                      fontFamily: 'Poppins-Bold',
                      fontSize: 13,
                    }}>
                    CREATE ACCOUNT
                  </Text>
                ) : (
                  <ActivityIndicator
                    size="large"
                    color="white"></ActivityIndicator>
                )}
              </View>
            </TouchableOpacity>

            <View style={{alignItems: 'center', marginTop: 50}}>
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
        )}
      </KeyboardAwareScrollView>
    </View>
  );
};
export default Signin;

const styles = StyleSheet.create({
  textInputView: {
    marginTop: hp('5%'),
    backgroundColor: '#1F232E',
    borderRadius: 10,
    borderColor: '#161F37',
    borderWidth: 1,
    padding: 6,
    marginLeft: '5%',
    marginRight: '5%',
    height: hp('9%'),
  },
  textInputViewWithFocus: {
    marginTop: hp('5%'),
    backgroundColor: '#1F232E',
    borderRadius: 10,
    // borderColor: '#117AF5',
    borderColor: '#117AF5',
    borderWidth: 1,
    padding: 6,
    marginLeft: '5%',
    marginRight: '5%',
    height: hp('9%'),
  },
  pressTextStyle: {
    fontSize: 12,

    color: 'white',
    textDecorationLine: 'underline',
    fontFamily: 'Poppins-SemiBold',
  },
  bottomText: {
    fontSize: 12,
    color: '#9CA6B6',
    fontFamily: 'Poppins-Regular',
  },
  warningText: {
    marginHorizontal: 20,
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
    color: '#D02B29',
    marginTop: 10,
  },
  inputStyle: {
    height: 56,
    marginHorizontal: 20,
    marginTop: 16,
    backgroundColor: '#1F232E',
    borderRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    color: '#E9F0FA',
    fontSize: 14,
    marginHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#117AF5',
    fontFamily: 'Poppins-Regular',

    overflow: 'hidden',
  },
});
