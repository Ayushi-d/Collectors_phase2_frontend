import React,{useState} from "react";
import {View,Text, TouchableOpacity,Image,ActivityIndicator, Alert,TextInput} from 'react-native';
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from "../../../utility";
import Header from "../../../components/Header";
import {Box,FormControl,Input,KeyboardAvoidingView,ScrollView,WarningOutlineIcon} from 'native-base';
// import { HelperText, TextInput } from 'react-native-paper';
import Path from '../../../constants/Imagepath';
import Loader from "../../../components/loader";
import axios from 'axios';
import * as Utility from '../../../utility/index';
const Signin=({navigation})=>{
    const [Authdata,setAuthData]=useState("Login");
    const [loading, setLoading] = useState(false);
    const [loadingRegister,setLoadingRegister]=useState(false);
    const [text, setText] = React.useState('');
    const [fullName,setFullname]=useState('');
    const [emailid,setEmailid]=useState('');
    const [mobile,setMobile]=useState('');
    const [password,setPassword]=useState('');
    const [code,setCode]=useState('');
    const [loginuserName,setLoginuserName]=useState('');
    const [loginPassword,setLoginPassword]=useState('');
    const [loginIsClick1,setLoginIsCLick]=useState(false);
    const [loginIsClick12,setLoginIsCLick2]=useState(false);
    const [isCheckfullName,setIsCheckfullName]=useState(false);
    const [isCheckEmail,setIsCheckEMail]=useState(false);
    const [isCheckCode,setIsCheckCode]=useState(false);
    const [isCheckMobile,setIsCheckMobile]=useState(false);
    const [isCheckPassword1,setIsChcekPassword1]=useState(false);
    const [loginpasswordEye,setLoginPasswordEye]=useState(false);
    const [resgisterPasswordeye,setRegisterPasswordeye]=useState(false);
    const onChangeText = text => setText(text);
   const hasErrors = () => {
     return !text.includes('@');
   };
   const loginApi=async()=>{
    // navigation.navigate('BottomTab')
    setLoading(!loading)
    try{
    if(loginuserName && loginPassword){
      let body=JSON.stringify({
        name:fullName,
        email:emailid,
        phone_number:mobile,
        password:password
       })
        let headers = {
          'Content-Type': 'multipart/form-data',
          Accept: 'application/json',
      };
       console.log("user body is..",body);
      let response=await axios.post(
        'http://3.138.124.101:9000/login', 
        {
          logintype:"email",
          emailOrUserName:loginuserName,
          password:loginPassword
        },
    );
      console.log('befire', response.data);
      if(response.data.code=="200"){
        setLoading(!loading)
        navigation.navigate('BottomTab')
        // setAuthData("Login");
      }
      else{
        Alert.alert("Something wrong into server side");
      }
    }
  
  }catch(error){
    console.log(error);
  }
  
   }
   const registerApi=async()=>{
    axios.post('http://3.138.124.101:9000/register',
    {
      "name":"amit",
      "email":"amgg",
      "phone_number":"",
      "password":"123456"
  }
  ).then((res)=>{
  console.log("AMit sir??...../////jkdjgjhgdhkjhhj.....",res.data);
  })
   }
   const openTermofuse=()=>{
    navigation.navigate('Termofuse')
}
    return(
        <View style={{backgroundColor:'black',height:hp('100%'),width:wp('100%')}}>
            <Header/>
            <ScrollView>
              <KeyboardAvoidingView>
            <View style={{flexDirection:'row',justifyContent:'space-evenly',backgroundColor:'#0D111C',padding:5}}>
                <TouchableOpacity onPress={()=>setAuthData('Login')} style={{alignItems:'center'}}>
                <View ><Text style={Authdata=="Login"?{color:'white',fontFamily:'Poppins'}:{color:'#E9F0FA70',fontWeight:'400',fontSize:14,fontFamily:'Poppins'}}>LOGIN</Text></View>
            
          {Authdata=="Login"?
                <View
            style={{
              borderBottomColor: 'white',
              borderBottomWidth: 5,
              width: wp('10%'),
              borderRadius:30
             
            }}
          />:null}
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>setAuthData('Signup')} style={{alignItems:'center'}}>
                <View><Text style={Authdata=="Signup"?{color:'white'}:{color:'#E9F0FA70',fontWeight:'400',fontSize:14}}>SIGNUP</Text></View>
               
          {Authdata=="Signup"?
                <View
            style={{
              borderBottomColor: 'white',
              borderBottomWidth: 5,
              width: wp('10%'),
              borderRadius:30
         
            }}
          />:null}
                </TouchableOpacity>
            </View>
            {Authdata=="Login"?
            <View>
            <View style={{ marginTop: hp('5%'), backgroundColor: '#1F232E', borderRadius: 10, borderColor: '#117AF5', borderWidth: 1, padding: 6, marginLeft: '5%', marginRight: '5%', height: hp('8%') }} >
        <Text style={loginIsClick1 ? { color: '#9CA6B6', top: 0, marginLeft: 10, fontSize: 12 } : { color: '#9CA6B6', top: 10, marginLeft: 10, fontSize: 12 }}>Username</Text>
        <TextInput selectionColor="black" value={loginuserName} onTouchStart={() => setLoginIsCLick(!loginIsClick1)} onChangeText={(e) => setLoginuserName(e)} style={{ color: '#E9F0FA', padding: 5, marginLeft: 5, marginBottom: hp('1.5%'), fontSize: 14 }} />
      </View>
      <View style={{ marginTop: hp('5%'), backgroundColor: '#1F232E', borderRadius: 10, borderColor: '#117AF5', borderWidth: 1, padding: 6, marginLeft: '5%', marginRight: '5%', height: hp('8%') }} >
        <Text style={loginIsClick12 ? { color: '#9CA6B6', top: 0, marginLeft: 10, fontSize: 12 } : { color: '#9CA6B6', top: 10, marginLeft: 10, fontSize: 12 }}>Password</Text>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <TextInput value={loginPassword} secureTextEntry={loginpasswordEye} onTouchStart={() => setLoginIsCLick2(!loginIsClick12)} onChangeText={(e) => setLoginPassword(e)} style={{ color: '#E9F0FA', padding: 5, marginLeft: 5, marginBottom: hp('1.5%'), fontSize: 14 }} />
 
        {loginpasswordEye?
        <TouchableOpacity onPress={()=>setLoginPasswordEye(!loginpasswordEye)} style={{top:'-5%'}}>
        <Image source={Path.eyeClose} resizeMode="center"></Image>
        </TouchableOpacity>
        :
        <TouchableOpacity onPress={()=>setLoginPasswordEye(!loginpasswordEye)} style={{top:'-5%'}}>
          <Image source={Path.eyeOpen} resizeMode="center"></Image>
          </TouchableOpacity>
        }
        </View>
       
      </View>
    <TouchableOpacity  style={{margin:hp('2%')}} onPress={()=>loginApi()}>
    <View style={{backgroundColor:'#117AF5',padding:12,borderRadius:8,width:wp('90%'),alignSelf:'center',alignItems:'center'}}>

      {!loading?
        <Text style={{color:'white',lineHeight:28}}>LOGIN</Text>:
        <ActivityIndicator size="large" color="white" />}

    </View>
    </TouchableOpacity>
    <View style={{flexDirection:'row',alignSelf:'center'}}>
        <View>
            <Text style={{color:'white',fontWeight:'200',fontFamily:'Poppins'}}>Forgot your password ?</Text>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('SigninForgot')}>
        <View>
        <Text style={{fontWeight:'600',fontSize:14,color:'white',textDecorationLine:'underline',marginLeft:5}} >GET HELP</Text>
        </View>
        </TouchableOpacity>
    </View>
    <View style={{flexDirection:'row',alignSelf:'center',marginTop:hp('30%')}}>
        <View style={{
              borderBottomColor: '#526086',
              borderBottomWidth: 1,
              width: wp('20%'),
              alignSelf:'center',
              marginTop: 5}}>

        </View>
        <View style={{alignItems:'center'}}>
    <Text style={{color:'white',alignSelf:'center',marginLeft:'5%',marginRight:'5%'}}>sign up using</Text>
        </View>
        <View style={{
              borderBottomColor: '#526086',
              borderBottomWidth: 1,
              alignSelf:'center',
              width: wp('20%'),
              marginTop: 5,}}>

        </View>
    </View>
    <View style={{flexDirection:'row',width:wp('80%'),alignSelf:'center',justifyContent:'space-between',margin:'2%'}}>
                <TouchableOpacity>
                <View style={{backgroundColor:'#161F37',padding:5,width:wp('38%'),alignItems:'center',borderRadius:8}}>
                    <Image source={Path.Applelogohd} resizeMode="center"></Image>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View style={{backgroundColor:'#161F37',padding:5,width:wp('38%'),alignItems:'center',borderRadius:8}}>
                        <Image source={Path.googlehd} resizeMode="center"></Image>
                    </View>
                    </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row',marginLeft:hp('2%')}}>
                <Text style={{fontWeight:'200',color:'white'}}>By joining you agree to our</Text>
                <TouchableOpacity onPress={()=>openTermofuse()}>
                <Text style={{fontSize:15,fontWeight:'600',textDecorationLine:'underline',color:'white'}}> Privacy Policy</Text>
                </TouchableOpacity>
                <Text style={{fontWeight:'200',color:'white'}} > and </Text>
                <TouchableOpacity onPress={()=>openTermofuse()}>
                <Text style={{fontSize:15,fontWeight:'600',textDecorationLine:'underline',color:'white'}}>T&C</Text>
                </TouchableOpacity>
            </View>
            <View style={{alignSelf:'center'}}>
               
            </View>
            </View>
            :
            <View>
            <View style={{flexDirection:'row',alignSelf:'center',margin:hp('2%')}}>
        <View style={{
              borderBottomColor: '#526086',
              borderBottomWidth: 1,
              width: wp('20%'),
              alignSelf:'center',
              marginTop: 5}}>

        </View>
        <View>
    <Text style={{color:'white',marginLeft:10,marginRight:10}}>sign up using</Text>
        </View>
        <View style={{
              borderBottomColor: '#526086',
              borderBottomWidth: 1,
              width: wp('20%'),
              alignSelf:'center',
              marginTop: 5}}>

        </View>
    </View>
    <View style={{flexDirection:'row',width:wp('90%'),alignSelf:'center',justifyContent:'space-between',margin:'2%'}}>
                <TouchableOpacity>
                <View style={{backgroundColor:'#161F37',padding:5,width:wp('43%'),alignItems:'center',borderRadius:8}}>
                    <Image source={Path.Applelogohd} resizeMode="center"></Image>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View style={{backgroundColor:'#161F37',padding:5,width:wp('43%'),alignItems:'center',borderRadius:8}}>
                        <Image source={Path.googlehd} resizeMode="center"></Image>
                    </View>
                    </TouchableOpacity>
            </View>


            <View style={{flexDirection:'row',alignSelf:'center',margin:'2%'}}>
        <View style={{
              borderBottomColor: '#526086',
              borderBottomWidth: 1,
              width: wp('20%'),
              alignSelf:'center',
              marginTop: 5}}>
        </View>
        <View>
    <Text style={{color:'white',marginLeft:'5%'}}>or sign up using</Text>
        </View>
        <View style={{
              borderBottomColor: '#526086',
              borderBottomWidth: 1,
              width: wp('20%'),
              alignSelf:'center',
              marginTop: 5}}>

        </View>
    </View>
    
     <View style={{ marginTop: hp('2%'), backgroundColor: '#1F232E', borderRadius: 10, borderColor: '#117AF5', borderWidth: 1, padding: 6, marginLeft: '5%', marginRight: '5%', height: '10%' }} >
        <Text style={isCheckfullName ? { color: '#9CA6B6', top: 0, marginLeft: 10, fontSize: 12 } : { color: '#9CA6B6', top: 10, marginLeft: 10, fontSize: 12 }}>Full Name *</Text>
        <TextInput value={fullName} onTouchStart={() => setIsCheckfullName(!isCheckfullName)} onChangeText={(e) => setFullname(e)} style={{ color: '#E9F0FA', padding: 5, marginLeft: 5, marginBottom: hp('1.5%'), fontSize: 14 }} />
      </View>
  
     <View style={{ marginTop: hp('2%'), backgroundColor: '#1F232E', borderRadius: 10, borderColor: '#117AF5', borderWidth: 1, padding: 6, marginLeft: '5%', marginRight: '5%', height: '10%' }} >
        <Text style={isCheckEmail ? { color: '#9CA6B6', top: 0, marginLeft: 10, fontSize: 12 } : { color: '#9CA6B6', top: 10, marginLeft: 10, fontSize: 12 }}>Email ID *</Text>
        <TextInput value={emailid} onTouchStart={() => setIsCheckEMail(!isCheckEmail)} onChangeText={(e) => setEmailid(e)} style={{ color: '#E9F0FA', padding: 5, marginLeft: 5, marginBottom: hp('1.5%'), fontSize: 14 }} />
      </View>

    {/* <View style={{flexDirection:'row'}}>
    
     <View style={{ marginTop: hp('2%'), backgroundColor: '#1F232E', borderRadius: 10, borderColor: '#117AF5', borderWidth: 1, padding: 6, marginLeft: '5%',height:hp('7%') }} >
        <Text style={isCheckCode ? { color: '#9CA6B6', top: 0, marginLeft: 10, fontSize: 12 } : { color: '#9CA6B6', top: 10, marginLeft: 10, fontSize: 12 }}>Code</Text>
        <TextInput value={code} keyboardType="number-pad"  onTouchStart={() => setIsCheckCode(!isCheckCode)} onChangeText={(e) => setCode(e)} style={{ color: '#E9F0FA', padding: 5, marginLeft: 5, marginBottom: hp('1.5%'), fontSize: 14 }} />
      </View>
  
     <View style={{ marginTop: hp('2%'), backgroundColor: '#1F232E', borderRadius: 10, borderColor: '#117AF5', borderWidth: 1, padding: 6, marginLeft: '2%', marginRight: '5%',height:hp('7%'),width:wp('75%')}} >
        <Text style={isCheckMobile ? { color: '#9CA6B6', top: 0, marginLeft: 10, fontSize: 12 } : { color: '#9CA6B6', top: 10, marginLeft: 10, fontSize: 12 }}>Contact Number (Optional)</Text>
        <TextInput value={mobile} onTouchStart={() => setIsCheckMobile(!isCheckMobile)} onChangeText={(e) => setMobile(e)} keyboardType="number-pad"  style={{ color: '#E9F0FA', padding: 5, marginLeft: 5, marginBottom: hp('1.5%'), fontSize: 14 }} />
      </View>
        </View> */}
     <View style={{ marginTop: hp('2%'), backgroundColor: '#1F232E', borderRadius: 10, borderColor: '#117AF5', borderWidth: 1, padding: 6, marginLeft: '5%', marginRight: '5%', height: '10%' }} >
        <Text style={isCheckPassword1 ? { color: '#9CA6B6', top: 0, marginLeft: 10, fontSize: 12 } : { color: '#9CA6B6', top: 10, marginLeft: 10, fontSize: 12 }}>Password *</Text>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <TextInput value={password} secureTextEntry={resgisterPasswordeye} onTouchStart={() => setIsChcekPassword1(!isCheckPassword1)} onChangeText={(e) => setPassword(e)} style={{ color: '#E9F0FA', padding: 5, marginLeft: 5, marginBottom: hp('1.5%'), fontSize: 14 }} />
        {resgisterPasswordeye?
        <TouchableOpacity onPress={()=>setRegisterPasswordeye(!resgisterPasswordeye)} style={{top:'-5%'}}> 
        <Image source={Path.eyeClose} resizeMode="center"></Image>
        </TouchableOpacity>
        :
        <TouchableOpacity onPress={()=>setRegisterPasswordeye(!resgisterPasswordeye)} style={{top:'-5%'}}>
        <Image source={Path.eyeOpen} resizeMode="center"></Image>
        </TouchableOpacity>
        }
        </View>
      </View>
      <TouchableOpacity onPress={()=>registerApi()} style={{margin:hp('5%')}}>
    <View style={{backgroundColor:'#117AF5',padding:10,borderRadius:8,width:wp('90%'),alignSelf:'center',alignItems:'center'}}>
      {!loadingRegister?
        <Text style={{color:'white',lineHeight:28,fontWeight:'600',fontSize:13}}>CREATE ACCOUNT</Text>:
        <ActivityIndicator size="large" color="white"></ActivityIndicator>}
    </View>
    </TouchableOpacity>
            <View style={{flexDirection:'row',marginLeft:hp('2%'),marginTop:hp('7%')}}>
                <Text style={{fontWeight:'200',color:'white'}}>By joining you agree to our</Text>
                <TouchableOpacity onPress={()=>openTermofuse()}>
                <Text style={{fontSize:15,fontWeight:'600',textDecorationLine:'underline',color:'white'}}> Privacy Policy</Text>
                </TouchableOpacity>
                <Text style={{fontWeight:'200',color:'white'}} > and </Text>
                <TouchableOpacity onPress={()=>openTermofuse()}>
            <Text style={{fontWeight:'600',color:'white',alignSelf:'center',textDecorationLine:'underline'}}> T&C</Text>
            </TouchableOpacity>
            </View>
            
            </View>}
            </KeyboardAvoidingView>
            </ScrollView>
        </View>
    )
}
export default Signin;