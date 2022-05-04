import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  ActivityIndicator,
  Alert,
  StyleSheet,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../../utility';
import Path from '../../../../constants/Imagepath';
import Header from '../../../../components/Header';
import axios from 'axios';
import * as Utility from '../../../../utility/index';
import {TextInput} from 'react-native-paper';
import WrapperContainer from '../../../../components/WrapperContainer';

const ChangePassword = ({navigation}) => {
  const [isOldpassword, setIsOldPassword] = useState(false);
  const [isPassword, setIspassword] = useState(false);
  const [isConfirmPassword, setIsConfirmPassword] = useState(false);
  const [oldpassword, setOldpassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [check, setCheck] = useState(false);
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [resgisterPasswordeye, setRegisterPasswordeye] = useState(false);
  const [resgisterPasswordeye1, setRegisterPasswordeye1] = useState(false);
  const [resgisterPasswordeye2, setRegisterPasswordeye2] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user_id, setUser_id] = useState();
  const [oldPasswordactive, setOldpasswordActive] = useState(false);
  const [notMatchErr, setNotMatchErr] = useState(false);
  useEffect(() => {
    getUserId();
  }, []);

  const getUserId = async () => {
    var user_id = await Utility.getFromLocalStorge('user_id');
    setUser_id(user_id);
  };
  const ChnagePassword = async () => {
    onFocusAction(setCheck);
    setNotMatchErr(false);
    if (password !== confirmPassword) {
      setNotMatchErr(true);
      return;
    }

    setLoading(true);
    try {
      if (!password && !confirmPassword) {
        Alert.alert('Parameters is missing');
        setLoading(false);
      } else if (password == !confirmPassword) {
        Alert.alert('Password mismatched');
        setLoading(false);
      } else {
        let response = await axios.post(
          'http://13.233.246.19:9000/changePassword',
          {
            oldPassword: oldpassword,
            newPassword: password,
            user_id: user_id,
          },
        );
        console.log(response.data);
        if (response.data.code == 200) {
          navigation.navigate('SettingScreen');
          setLoading(false);
        } else {
          setLoading(false);
          Alert.alert(response.data.msg);
        }
      }
    } catch (error) {
      Alert.alert(error);
      setLoading(false);
    }
  };

  const onFocusAction = a => {
    setIsOldPassword(false);
    setIspassword(false);
    setIsConfirmPassword(false);

    a(true);
  };

  return (
    <WrapperContainer>
      <Header login="true" navigate={navigation} hideLogo="true" />
      <ScrollView
        style={{
          backgroundColor: 'black',
          height: hp('100%'),
          width: wp('100%'),
        }}>
        <View style={{margin: hp('3%'), marginHorizontal: 20}}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'Poppins-Bold',
              lineHeight: 28,
              color: '#E9F0FA',
            }}>
            Change Password
          </Text>
        </View>

        <TextInput
          theme={{
            colors: {
              text: 'white',
              primary: '#9CA6B6',
              placeholder: '#9CA6B6',
            },
            fonts: {
              regular : ''
            }
          }}
          value={oldpassword}
          secureTextEntry={resgisterPasswordeye}
          onFocus={() => onFocusAction(setIsOldPassword)}
          onChangeText={e => setOldpassword(e)}
          label={'Old Password'}
          fontFamily = 'Poppins-Regular'
          style={[
            styles.inputStyle,
            {borderColor: isOldpassword ? '#117AF5' : '#1F232E'},
          ]}
          right={
            <TextInput.Icon
              forceTextInputFocus={false}
              color={'#117AF5'}
              onPress={() => setRegisterPasswordeye(!resgisterPasswordeye)}
              name={resgisterPasswordeye ? Path.eye : Path.eyeBlue}
            />
          }
        />
        <View
          style={{
            marginTop: -3,
            borderTopColor: isOldpassword ? '#117AF5' : '#1F232E',
            borderTopWidth: 3,
            marginHorizontal: 26,
            overflow: 'hidden',
          }}
        />
        <TextInput
          theme={{
            colors: {
              text: 'white',
              primary: '#9CA6B6',
              placeholder: '#9CA6B6',
            },
            fonts: {
              regular : ''
            }
          }}
          value={password}
          secureTextEntry={resgisterPasswordeye1}
          onFocus={() => onFocusAction(setIspassword)}
          onChangeText={e => setPassword(e)}
          fontFamily = 'Poppins-Regular'
          label={'Set New Password'}
          style={[
            styles.inputStyle,
            {borderColor: isPassword ? '#117AF5' : '#1F232E'},
          ]}
          right={
            <TextInput.Icon
              forceTextInputFocus={false}
              color={'#117AF5'}
              onPress={() => setRegisterPasswordeye1(!resgisterPasswordeye1)}
              name={resgisterPasswordeye1 ? Path.eye : Path.eyeBlue}
            />
          }
        />
        <View
          style={{
            marginTop: -3,
            borderTopColor: isPassword ? '#117AF5' : '#1F232E',
            borderTopWidth: 3,
            marginHorizontal: 26,
            overflow: 'hidden',
          }}
        />

        <TextInput
          theme={{
            colors: {
              text: 'white',
              primary: '#9CA6B6',
              placeholder: '#9CA6B6',
            },
            fonts: {
              regular : ''
            }
          }}
          value={confirmPassword}
          fontFamily = 'Poppins-Regular'
          secureTextEntry={resgisterPasswordeye2}
          onFocus={() => onFocusAction(setIsConfirmPassword)}
          onChangeText={e => setConfirmPassword(e)}
          label={'Confirm New Password'}
          style={[
            styles.inputStyle,
            {
              borderColor: isConfirmPassword
                ? '#117AF5'
                : notMatchErr
                ? '#D02B29'
                : '#1F232E',
            },
          ]}
          right={
            <TextInput.Icon
              forceTextInputFocus={false}
              color={'#117AF5'}
              onPress={() => setRegisterPasswordeye2(!resgisterPasswordeye2)}
              name={resgisterPasswordeye2 ? Path.eye : Path.eyeBlue}
            />
          }
        />

        <View
          style={{
            marginTop: -3,
            borderTopColor: isConfirmPassword
              ? '#117AF5'
              : notMatchErr
              ? '#D02B29'
              : '#1F232E',
            borderTopWidth: 3,
            marginHorizontal: 26,
            overflow: 'hidden',
          }}
        />
        {notMatchErr ? (
          <Text style={styles.errMsg}>
            Passwords do not match please try again.
          </Text>
        ) : null}
        <TouchableOpacity
          onPress={() => ChnagePassword()}
          style={{marginHorizontal: 20, marginTop: 60}}>
          <View
            style={{
              backgroundColor: '#117AF5',
              height: 48,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {!loading ? (
              <Text
                style={{
                  color: 'white',
                  lineHeight: 28,
                  fontFamily: 'Poppins-SemiBold',
                  fontSize: 13,
                }}>
                CHANGE PASSWORD
              </Text>
            ) : (
              <ActivityIndicator size="large" color="white"></ActivityIndicator>
            )}
          </View>
        </TouchableOpacity>
      </ScrollView>
    </WrapperContainer>
  );
};
export default ChangePassword;

const styles = StyleSheet.create({
  inputStyle: {
    marginHorizontal: 20,
    marginTop: 20,
    height: 56,
    borderRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    backgroundColor: '#1F232E',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    borderWidth: 1.5,
    overflow: 'hidden',
  },
  errMsg: {
    marginHorizontal: 28,
    color: '#D02B29',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 11,
    marginTop: 9,
  },
});
