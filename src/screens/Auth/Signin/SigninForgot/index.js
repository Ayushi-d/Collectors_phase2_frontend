import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput,Alert,ActivityIndicator,StyleSheet} from 'react-native';
import Header from "../../../../components/Header";
import axios from "axios";
import * as Utility from '../../../../utility/index';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "../../../../utility";
const SigninForgot = ({ navigation }) => {
  const [text, setText] = useState();
  const [isClick, setIsclick] = useState(false);
  const [loading,setLoading]=useState(false);
  const [emailActive,setEmailACtive]=useState(false);
  const onChangeText = (text) => {
    setText(text);
  };
  const hasErrors = () => {
    return !text.includes('@');
  };
  const callForgotAPi = async () => {
    setLoading(false);
    try{
    if(!text){
      Alert.alert("Please Enter Email");
    }
    else {
      let response = await axios.post(
        'http://3.138.124.101:9000/forgotPassword',
        {
          email: text,
        },
      );
      console.log('befire', response.data);
      if (response.data.msg =="Otp sent successfully.") {
        await Utility.setInLocalStorge('user_email',text);
        setLoading(false);
        navigation.navigate('SigninOTp')
      }
      else {
        Alert.alert(response.data.msg)
    }
  }
  }catch(error){
    Alert.alert(error);
    setLoading(false);
  }
  }
  return (
    <View style={{ backgroundColor: 'black', height: hp('100%'), width: wp('100%') }}>
      <Header login="true" navigate={navigation} />
      <View style={{ margin: hp('3%') }}>
        <Text style={{ color: 'white', lineHeight: 32, fontSize: 24, fontWeight: '900' ,fontFamily:'Poppins'}}>Forgot Password?</Text>
      </View>
      <View style={{ marginLeft: hp('3%'), marginRight: hp('3%') }}>
        <Text style={{ color: 'white', lineHeight: 22, fontSize: 14, fontWeight: '200' ,fontFamily:'Poppins'}}>Don’t worry, we’ve got you covered! Enter your registered contact to reset your password.</Text>
      </View>
      <View style={emailActive?styles.textInputViewWithFocus:styles.textInputView} >
        <Text style={isClick ? { color: '#9CA6B6', top: 0, marginLeft: 10, fontSize: 12 } : { color: '#9CA6B6', top: 10, marginLeft: 10, fontSize: 12 }}>E-mail ID</Text>
        <TextInput onFocus={()=>setEmailACtive(true)} value={text} onTouchStart={() => setIsclick(!isClick)} onChangeText={(e) => onChangeText(e)} style={{ color: '#E9F0FA', padding: 5, marginLeft: 5, marginBottom: hp('1.5%'), fontSize: 14 }} />

      </View>
      <View style={{ flexDirection: 'row', alignSelf: 'center', margin: hp('1%'), marginTop: hp('10%') }}>
        <View
          style={{
            borderBottomColor: '#117AF5',
            borderBottomWidth: 5,
            width: '17%',
            marginTop: 5,

          }}
        />
        <View
          style={{
            borderBottomColor: '#117AF520',
            borderBottomWidth: 5,
            width: '15%',
            marginTop: 5,
            marginLeft: 5
          }}
        />
        <View
          style={{
            borderBottomColor: '#117AF520',
            borderBottomWidth: 5,
            width: '15%',
            marginTop: 5,
            marginLeft: 5
          }}
        />
      </View>
      <TouchableOpacity onPress={() => callForgotAPi()}>
        <View style={{ backgroundColor: '#117AF5', padding: 10, borderRadius: 8, width: wp('87%'), alignSelf: 'center', alignItems: 'center' }}>
          {!loading?
          <Text style={{ lineHeight: 28, color: 'white', fontSize: 13, fontWeight: '600',fontFamily:'Poppins' }}>VERIFY</Text>:
          <ActivityIndicator size="large" color="white"></ActivityIndicator>}
        </View>
      </TouchableOpacity>
    </View>
  )
}
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
    height: hp('9%')

},
textInputViewWithFocus: {
  marginTop: hp('5%'), 
  backgroundColor: '#1F232E', 
  borderRadius: 10, 
  // borderColor: '#117AF5', 
  borderColor:'#117AF5',
  borderWidth: 1, 
  padding: 6, 
  marginLeft: '5%', 
  marginRight: '5%', 
  height: hp('9%')
}
});