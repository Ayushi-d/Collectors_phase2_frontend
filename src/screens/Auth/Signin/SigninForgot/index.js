import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import Header from '../../../../components/Header';
import axios from 'axios';
import * as Utility from '../../../../utility/index';
import {TextInput} from 'react-native-paper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../../../utility';
import WrapperContainer from '../../../../components/WrapperContainer';
const SigninForgot = ({navigation}) => {
  const [text, setText] = useState();
  const [isClick, setIsclick] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailActive, setEmailACtive] = useState(false);
  const onChangeText = text => {
    setText(text);
  };
  const hasErrors = () => {
    return !text.includes('@');
  };
  const callForgotAPi = async () => {
    setLoading(false);
    try {
      if (!text) {
        Alert.alert('Please Enter Email');
      } else {
        let response = await axios.post(
          'http://13.233.246.19:9000/forgotPassword',
          {
            email: text,
          },
        );
        console.log('befire', response.data);
        if (response.data.msg == 'Otp sent successfully.') {
          await Utility.setInLocalStorge('user_email', text);
          setLoading(false);
          navigation.navigate('SigninOTp');
        } else {
          Alert.alert(response.data.msg);
        }
      }
    } catch (error) {
      Alert.alert(error);
      setLoading(false);
    }
  };
  return (
    <WrapperContainer statusBarColor='black' >

    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        behavior="padding"
        style={{backgroundColor: 'black', flex: 1}}>
        <Header login="true" navigate={navigation} />
        <View style={{flex: 0.7}}>
          <View style={{marginHorizontal: 20, marginTop: 50}}>
            <Text
              style={{
                color: 'white',
                fontSize: 24,
                fontFamily: 'Poppins-Bold',
              }}>
              Forgot
              <Text style={{fontFamily: 'Poppins-Regular'}}> Password?</Text>
            </Text>
          </View>
          <View style={{marginHorizontal: 20, marginTop: 8}}>
            <Text
              style={{
                color: '#9CA6B6',

                fontSize: 13,

                fontFamily: 'Poppins-Regular',
              }}>
              Don’t worry, we’ve got you covered! Enter your registered contact
              to reset your password.
            </Text>
          </View>

          <TextInput
            mode="flat"
            theme={{
              colors: {
                text: 'white',
                primary: '#9CA6B6',
                placeholder: '#9CA6B6',
              },
              fonts: {
                regular: '',
              },
            }}
            onFocus={() => setEmailACtive(true)}
            value={text}
            fontFamily="Poppins-Regular"
            onTouchStart={() => setIsclick(!isClick)}
            onChangeText={e => onChangeText(e)}
            label={'E-mail ID'}
            style={[
              styles.inputStyle,
              {borderColor: emailActive ? '#117AF5' : '#1F232E'},
            ]}
          />

          <View
            style={{
              marginTop: -4,
              borderTopColor: emailActive ? '#117AF5' : '#1F232E',
              borderTopWidth: 3,
              marginHorizontal: 24,
            }}
          />
        </View>
        <View style={{flex: 0.3, justifyContent: 'flex-end', marginBottom: 40}}>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              margin: hp('1%'),
              marginTop: hp('10%'),
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
                borderBottomColor: '#117AF520',
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
          <TouchableOpacity onPress={() => callForgotAPi()}>
            <View
              style={{
                backgroundColor: '#117AF5',
                padding: 10,
                borderRadius: 8,
                width: wp('87%'),
                alignSelf: 'center',
                alignItems: 'center',
              }}>
              {!loading ? (
                <Text
                  style={{
                    lineHeight: 28,
                    color: 'white',
                    fontSize: 13,
                    fontWeight: '600',
                    fontFamily: 'Poppins',
                  }}>
                  VERIFY
                </Text>
              ) : (
                <ActivityIndicator
                  size="large"
                  color="white"></ActivityIndicator>
              )}
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
    </WrapperContainer>
  );
};
export default SigninForgot;

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
  inputStyle: {
    marginHorizontal: 20,
    marginTop: 50,
    height: 56,
    fontSize: 14,
    backgroundColor: '#1F232E',
    borderRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
    borderWidth: 1.5,
    borderColor: 'red',
  },
});
