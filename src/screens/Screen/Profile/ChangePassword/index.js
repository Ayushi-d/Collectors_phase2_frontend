import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, ActivityIndicator, Alert } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../../../utility';
import Path from '../../../../constants/Imagepath';
import Header from '../../../../components/Header';
import axios from 'axios';
import * as Utility from '../../../../utility/index';
const ChangePassword = ({ navigation }) => {
  const [isOldpassword, setIsOldPassword] = useState(false);
  const [isPassword, setIspassword] = useState(false);
  const [isConfirmPassword, setIsConfirmPassword] = useState(false);
  const [oldpassword, setOldpassword] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [check, setCheck] = useState(false);
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [resgisterPasswordeye, setRegisterPasswordeye] = useState(false);
  const [resgisterPasswordeye1, setRegisterPasswordeye1] = useState(false);
  const [resgisterPasswordeye2, setRegisterPasswordeye2] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user_id,setUser_id]=useState();
  const [oldPasswordactive,setOldpasswordActive]=useState(false);
  useEffect(()=>{
    getUserId()
  },[])

  const getUserId=async()=>{
    var user_id=await Utility.getFromLocalStorge('user_id');
    setUser_id(user_id);

  }
  const ChnagePassword = async () => {
    setLoading(true)
    try {
      if (!password && !confirmPassword) {
        Alert.alert("Parameters is missing");
        setLoading(false);
      }
      else if (password == !confirmPassword) {
        Alert.alert("Password mismatched")
        setLoading(false);
      }
      else {
        let response = await axios.post(
          'http://3.138.124.101:9000/changePassword',
          {

            "oldPassword": oldpassword,
            "newPassword": password,
            "user_id": user_id
          },
        );
        console.log(response.data);
        if(response.data.code==200){
          navigation.navigate('SettingScreen')
        setLoading(false);
        }
        else{
          Alert.alert(response.data.msg)
        }

      }
    } catch (error) {
      Alert.alert(error);
      setLoading(false);
    }
  }

  return (
    <View>
      <Header login="true" navigate={navigation} hideLogo="true"/>
      <ScrollView style={{ backgroundColor: 'black', height: hp('100%'), width: wp('100%') }}>
        <View style={{ margin: hp('3%'), marginLeft: wp('5%') }}>
          <Text style={{ fontSize: 20, fontWeight: '700', lineHeight: 28, color: '#E9F0FA' }}>Change Password</Text>
        </View>
        <View style={{ marginTop: hp('2%'), backgroundColor: '#1F232E', borderRadius: 10, borderColor: '#117AF5', borderWidth: 1, padding: 6, marginLeft: '5%', marginRight: '5%', height: hp('9%') }} >
          <Text style={isOldpassword ? { color: '#9CA6B6', top: 0, marginLeft: 10, fontSize: 12 } : { color: '#9CA6B6', top: 10, marginLeft: 10, fontSize: 12 }}>Old Password *</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ width: wp('70%') }}>
              <TextInput value={oldpassword} secureTextEntry={resgisterPasswordeye} onTouchStart={() => setIsOldPassword(!isOldpassword)} onChangeText={(e) => setOldpassword(e)} style={{ color: '#E9F0FA', padding: 5, marginLeft: 5, marginBottom: hp('1.5%'), fontSize: 14 }} />
            </View>
            <View style={{ width: wp('10%') }}>
              {resgisterPasswordeye ?
                <TouchableOpacity onPress={() => setRegisterPasswordeye(!resgisterPasswordeye)} style={{ top: hp('-1.5%') }}>
                  <Image source={Path.eyeClose} resizeMode="center"></Image>
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={() => setRegisterPasswordeye(!resgisterPasswordeye)} style={{ top: hp('-1.5%') }}>
                  <Image source={Path.eyeOpen} resizeMode="center"></Image>
                </TouchableOpacity>
              }
            </View>
          </View>
        </View>
        <View style={{ marginTop: hp('2%'), backgroundColor: '#1F232E', borderRadius: 10, borderColor: '#117AF5', borderWidth: 1, padding: 6, marginLeft: '5%', marginRight: '5%', height: hp('9%') }} >
          <Text style={isPassword ? { color: '#9CA6B6', top: 0, marginLeft: 10, fontSize: 12 } : { color: '#9CA6B6', top: 10, marginLeft: 10, fontSize: 12 }}>Set New Password *</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ width: wp('70%') }}>
              <TextInput value={password} secureTextEntry={resgisterPasswordeye} onTouchStart={() => setIsOldPassword(!isOldpassword)} onChangeText={(e) => setPassword(e)} style={{ color: '#E9F0FA', padding: 5, marginLeft: 5, marginBottom: hp('1.5%'), fontSize: 14 }} />
            </View>
            <View style={{ width: wp('10%') }}>
              {resgisterPasswordeye1 ?

                <TouchableOpacity onPress={() => setRegisterPasswordeye1(!resgisterPasswordeye1)} style={{ top: hp('-1.5%') }}>
                  <Image source={Path.eyeClose} resizeMode="center"></Image>
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={() => setRegisterPasswordeye1(!resgisterPasswordeye1)} style={{ top: hp('-1.5%') }}>
                  <Image source={Path.eyeOpen} resizeMode="center"></Image>
                </TouchableOpacity>

              }
            </View>

          </View>
        </View>
        <View style={{ marginTop: hp('2%'), backgroundColor: '#1F232E', borderRadius: 10, borderColor: '#117AF5', borderWidth: 1, padding: 6, marginLeft: '5%', marginRight: '5%', height: hp('9%') }} >
          <Text style={isConfirmPassword ? { color: '#9CA6B6', top: 0, marginLeft: 10, fontSize: 12 } : { color: '#9CA6B6', top: 10, marginLeft: 10, fontSize: 12 }}>Confirm New Password *</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ width: wp('70%') }}>
              <TextInput value={confirmPassword} secureTextEntry={resgisterPasswordeye2} onTouchStart={() => setIsOldPassword(!isConfirmPassword)} onChangeText={(e) => setConfirmPassword(e)} style={{ color: '#E9F0FA', padding: 5, marginLeft: 5, marginBottom: hp('1.5%'), fontSize: 14 }} />
            </View>
            <View style={{ width: wp('10%') }}>
              {resgisterPasswordeye2 ?
                <TouchableOpacity onPress={() => setRegisterPasswordeye2(!resgisterPasswordeye2)} style={{ top: hp('-1.5%'), }}>
                  <Image source={Path.eyeClose} resizeMode="center"></Image>
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={() => setRegisterPasswordeye2(!resgisterPasswordeye2)} style={{ top: hp('-1.5%') }}>
                  <Image source={Path.eyeOpen} resizeMode="center"></Image>
                </TouchableOpacity>
              }
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={() => ChnagePassword()} style={{ margin: hp('5%') }}>
          <View style={{ backgroundColor: '#117AF5', padding: 10, borderRadius: 8, width: wp('90%'), alignSelf: 'center', alignItems: 'center' }}>
            {!loading ?
              <Text style={{ color: 'white', lineHeight: 28, fontWeight: '600', fontSize: 13 }}>CHANGE PASSWORD</Text> :
              <ActivityIndicator size="large" color="white"></ActivityIndicator>}
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}
export default ChangePassword;