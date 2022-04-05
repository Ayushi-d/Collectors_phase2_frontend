import React,{useEffect, useState} from "react";
import {View,Text,TouchableOpacity,TextInput, Alert,StyleSheet} from 'react-native';
import Header from "../../../../components/Header";
import * as Utility from '../../../../utility/index';
import axios from "axios";
import { getFromLocalStorge, heightPercentageToDP  as hp, widthPercentageToDP as wp} from "../../../../utility";

const SigninPassword=({navigation})=>{
    const [isClick,setIsclick]=useState();
    const [isClick1,setIsclick1]=useState();
    const [password,setPassword]=useState();
    const [passwordActive,setpasswordActive]=useState(false)
    const [confirmPasswordActive,setConfirmPasswordActive]=useState(false);
    const [confirmPassword,setConfirmPassword]=useState()
    const [user_id,setUser_id]=useState();
    const onChangeText = text => setPassword(text);
    const onChangeText1= text=> setConfirmPassword(text);
 
   const hasErrors = () => {
     return !text.includes('@');
   };
   useEffect(()=>{
    getUserId()
   },[])
   const getUserId=async()=>{
     var user_id=await Utility.getFromLocalStorge('user_id');
     setUser_id(user_id);
   }
   const callsetUsernamePasswordAPi = async () => {
    console.log("VIkassss");
   
    if (user_id && password && confirmPassword) {
     
      let headers = {
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
      };
  
      let response = await axios.post(
        'http://3.138.124.101:9000/newPassword',
        {
      
          user_id:user_id,
          password:password
        },
      );
      console.log('befire', response.data);
      if (response.data.msg =="Success! Password updated.") {
        console.log("out put come");
        navigation.navigate('Signin')
      }
      else {
        Alert.alert(response.data.msg);
      }
    }
    else{
      Alert.alert("Something is missing");
    }
  }
  const onFocusAction=(a)=>{
    setpasswordActive(false);
    setConfirmPasswordActive(false);
    a(true);

  }
    return(
        <View style={{backgroundColor:'black',height:hp('100%'),width:wp('100%')}}>
            <Header  login="true" navigate={navigation}/>
            <View style={{margin:hp('3%')}}>
            <Text style={{color:'white',fontSize:24,lineHeight:32,fontWeight:'400'}}>Set New Password</Text>
            </View>
            <View style={passwordActive?styles.textInputViewWithFocus:styles.textInputView} >
        <Text style={isClick ? { color: '#9CA6B6', top: 0, marginLeft: 10, fontSize: 12 } : { color: '#9CA6B6', top: 10, marginLeft: 10, fontSize: 12 }}>Set New Password</Text>
        <TextInput value={password} onFocus={()=>onFocusAction(setpasswordActive)} onTouchStart={() => setIsclick(!isClick)} onChangeText={(e) => onChangeText(e)} style={{ color: '#E9F0FA', padding: 5, marginLeft: 5, marginBottom: hp('1.5%'), fontSize: 14 }} />
      </View>
      <View style={confirmPasswordActive?styles.textInputViewWithFocus:styles.textInputView} >
        <Text style={isClick ? { color: '#9CA6B6', top: 0, marginLeft: 10, fontSize: 12 } : { color: '#9CA6B6', top: 10, marginLeft: 10, fontSize: 12 }}>Confirm New Password</Text>
        <TextInput value={confirmPassword} onFocus={()=>onFocusAction(setConfirmPasswordActive)} onTouchStart={() => setIsclick(!isClick)} onChangeText={(e) => onChangeText1(e)} style={{ color: '#E9F0FA', padding: 5, marginLeft: 5, marginBottom: hp('1.5%'), fontSize: 14 }} />

      </View>
    <View style={{flexDirection:'row',alignSelf:'center',margin:hp('1%')}}>
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
              borderBottomColor: '#117AF5',
              borderBottomWidth: 5,
              width: '15%',
              marginTop: 5,
              marginLeft:5
            }}
          />
         <View
            style={{
              borderBottomColor: '#117AF5',
              borderBottomWidth: 5,
              width: '15%',
              marginTop: 5,
              marginLeft:5
            }}
          />
    </View>
    <TouchableOpacity onPress={()=>callsetUsernamePasswordAPi()}>
    <View style={{backgroundColor:'#117AF5',padding:10,borderRadius:8,width:wp('80%'),alignSelf:'center',alignItems:'center'}}>
        <Text style={{color:'white',fontSize:13,lineHeight:28,fontWeight:'700'}}>RESET PASSWORD</Text>
    </View>
    </TouchableOpacity>
        </View>
    )
}
export default SigninPassword;

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