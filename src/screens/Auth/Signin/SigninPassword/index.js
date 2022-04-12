import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import Header from '../../../../components/Header';
import * as Utility from '../../../../utility/index';
import axios from 'axios';
import {
  getFromLocalStorge,
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../../../utility';
import {TextInput} from 'react-native-paper';
import ImagePath from '../../../../constants/Imagepath';

const SigninPassword = ({navigation}) => {
  const [isClick, setIsclick] = useState(true);
  const [isClick1, setIsclick1] = useState(true);
  const [password, setPassword] = useState();
  const [passwordActive, setpasswordActive] = useState(false);
  const [confirmPasswordActive, setConfirmPasswordActive] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState();
  const [user_id, setUser_id] = useState();
  const onChangeText = text => setPassword(text);
  const onChangeText1 = text => setConfirmPassword(text);
  const [errMsg, setErrMsg] = useState(false);

  const hasErrors = () => {
    return !text.includes('@');
  };
  useEffect(() => {
    getUserId();
  }, []);
  const getUserId = async () => {
    var user_id = await Utility.getFromLocalStorge('user_id');
    setUser_id(user_id);
  };
  const callsetUsernamePasswordAPi = async () => {
    setpasswordActive(false);
    setConfirmPasswordActive(false);
    if (password !== confirmPassword) {
      setErrMsg(true);
      return;
    }
    setErrMsg(false);
    if (user_id && password && confirmPassword) {
      let headers = {
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
      };

      let response = await axios.post('http://3.138.124.101:9000/newPassword', {
        user_id: user_id,
        password: password,
      });
      console.log('befire', response.data);
      if (response.data.msg == 'Success! Password updated.') {
        console.log('out put come');
        navigation.navigate('Signin');
      } else {
        Alert.alert(response.data.msg);
      }
    } else {
      Alert.alert('Something is missing');
    }
  };
  const onFocusAction = a => {
    setpasswordActive(false);
    setConfirmPasswordActive(false);
    a(true);
  };
  return (
    <KeyboardAvoidingView
      behavior={'padding'}
      style={{backgroundColor: 'black', flex: 1}}>
      <Header
        onPress={()=>navigation.navigate('Signin')}
        back="Login"
        login="true"
        navigate={navigation}
      />
      <View style={{flex: 0.8}}>
        <View style={{margin: hp('3%')}}>
          <Text
            style={{
              color: 'white',
              fontSize: 24,
              lineHeight: 32,
              fontFamily: 'Poppins-Regular',
            }}>
            Set <Text style={{fontFamily: 'Poppins-Bold'}}>New Password</Text>
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
            fonts : {
              regular : 'Poppins-Regular',
            
            }
          }}
          onFocus={() => onFocusAction(setpasswordActive)}
          secureTextEntry={isClick}
          onChangeText={e => onChangeText(e)}
          label={'Set New Password'}
          fontFamily = 'Poppins-Regular'
          style={[
            styles.inputStyle,
            {borderColor: passwordActive ? '#117AF5' : '#1F232E'},
          ]}
          right={
            <TextInput.Icon
              name={isClick ? ImagePath.eye : ImagePath.eyeBlue}
              forceTextInputFocus={false}
              color={'#117AF5'}
              onPress={() => setIsclick(!isClick)}
            />
          }
        />
        <View
          style={{
            marginTop: -3,
            borderTopColor: passwordActive ? '#117AF5' : '#1F232E',
            borderTopWidth: 2,
            marginHorizontal: 26,
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
            fonts : {
              regular : 'Poppins-Regular',
            
            }
          }}
          onFocus={() => onFocusAction(setConfirmPasswordActive)}
          onChangeText={e => onChangeText1(e)}
          label={'Confirm New Password'}
          secureTextEntry={isClick1}
          fontFamily = 'Poppins-Regular'
          style={[
            styles.inputStyle,
            {
              borderColor: confirmPasswordActive
                ? '#117AF5'
                : errMsg
                ? '#D02B29'
                : '#1F232E',
            },
          ]}
          right={
            <TextInput.Icon
              name={isClick1 ? ImagePath.eye : ImagePath.eyeBlue}
              forceTextInputFocus={false}
              color={'#117AF5'}
              onPress={() => setIsclick1(!isClick1)}
            />
          }
        />
        <View
          style={{
            marginTop: -3,
            borderTopColor: confirmPasswordActive
              ? '#117AF5'
              : errMsg
              ? '#D02B29'
              : '#1F232E',
            borderTopWidth: 2,
            marginHorizontal: 26,
          }}
        />

        {errMsg ? (
          <Text style={styles.errText}>
            Passwords do not match please try again.
          </Text>
        ) : null}
      </View>
      <View style={{flex: 0.2, justifyContent: 'center', paddingBottom: '10%'}}>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            margin: hp('1%'),
            marginBottom: 10,
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
              borderBottomColor: '#117AF5',
              borderBottomWidth: 5,
              width: '12%',
              marginTop: 5,
              marginLeft: 5,
            }}
          />
        </View>
        <TouchableOpacity onPress={() => callsetUsernamePasswordAPi()}>
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
                fontSize: 13,
                lineHeight: 28,
                fontWeight: '700',
              }}>
              RESET PASSWORD
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};
export default SigninPassword;

const styles = StyleSheet.create({
  inputStyle: {
    marginHorizontal: 20,
    marginTop: 16,
    backgroundColor: '#1F232E',
    fontFamily: 'Poppins-Regular',
    borderRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderWidth: 1.5,
    overflow: 'hidden',
  },
  errText: {
    fontSize: 11,
    fontFamily: 'Poppins-Bold',
    color: '#D02B29',
    marginHorizontal: 28,
    marginTop: 9,
  },
});
