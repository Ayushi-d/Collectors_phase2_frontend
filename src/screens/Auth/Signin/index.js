import React,{useState} from "react";
import {View,Text, TouchableOpacity,Image} from 'react-native';
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from "../../../utility";
import Header from "../../../components/Header";
import {Box,FormControl,Input,ScrollView,WarningOutlineIcon} from 'native-base';
import { HelperText, TextInput } from 'react-native-paper';
import Path from '../../../constants/Imagepath';
const Signin=({navigation})=>{
    const [Authdata,setAuthData]=useState("");
    const [text, setText] = React.useState('');

    const onChangeText = text => setText(text);
 
   const hasErrors = () => {
     return !text.includes('@');
   };
    return(
        <View style={{backgroundColor:'black',height:hp('100%'),width:wp('100%')}}>
            <Header/>
            <ScrollView>
            <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                <TouchableOpacity onPress={()=>setAuthData('Login')} style={{alignItems:'center'}}>
                <View><Text style={{color:'white'}}>LOGIN</Text></View>
                <View
            style={{
              borderBottomColor: '#117AF5',
              borderBottomWidth: .25,
              width: wp('50%'),
              marginTop: 5,
              // marginLeft:5
            }}
          />
          {Authdata=="Login"?
                <View
            style={{
              borderBottomColor: 'white',
              borderBottomWidth: 5,
              width: wp('10%'),
              borderRadius:30
              // marginTop: 5,
              // marginLeft:5
            }}
          />:null}
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>setAuthData('Signup')} style={{alignItems:'center'}}>
                <View><Text style={{color:'white'}}>SIGNUP</Text></View>
                <View
            style={{
              borderBottomColor: '#117AF5',
              borderBottomWidth: .25,
              width: wp('50%'),
              marginTop: 5,
              // marginLeft:5
            }}
          />
          {Authdata=="Signup"?
                <View
            style={{
              borderBottomColor: 'white',
              borderBottomWidth: 5,
              width: wp('10%'),
              borderRadius:30
              // marginTop: 5,
              // marginLeft:5
            }}
          />:null}
                </TouchableOpacity>
            </View>
            {Authdata=="Login"?
            <View>
            <View style={{width:wp('90%'),alignSelf:'center',marginTop:hp('5%')}} >
      <TextInput label="Username or E-mail ID" value={text} onChangeText={onChangeText} placeholderTextColor="#9CA6B6" style={{backgroundColor:'#1F232E',borderRadius:10,borderColor:'#117AF5',borderWidth:1,color:'white'}}/>
      {/* <HelperText type="error" visible={hasErrors()}>
          <Text>
        Email address is invalid!
        </Text>
      </HelperText> */}
    </View>
    <View style={{width:wp('90%'),alignSelf:'center',marginTop:hp('5%')}}>
      <TextInput label="Password" value={text} onChangeText={onChangeText} style={{backgroundColor:'#1F232E',borderRadius:10,borderColor:'red',borderWidth:1}}  right={<TextInput.Icon name="eye" />}/>
      {/* <HelperText type="error" visible={hasErrors()}>
          <Text>
        Email address is invalid!
        </Text>
      </HelperText> */}
    </View>
    <TouchableOpacity  style={{margin:hp('2%')}}>
    <View style={{backgroundColor:'#117AF5',padding:10,borderRadius:8,width:wp('90%'),alignSelf:'center',alignItems:'center'}}>
        <Text style={{color:'white',lineHeight:28}}>LOGIN</Text>
    </View>
    </TouchableOpacity>
    <View style={{flexDirection:'row',alignSelf:'center'}}>
        <View>
            <Text style={{color:'white',fontWeight:'200'}}>Forgot your password ?</Text>
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
                <View style={{backgroundColor:'#161F37',padding:12,width:wp('38%'),alignItems:'center',borderRadius:8}}>
                    <Image source={Path.Applelogo}></Image>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View style={{backgroundColor:'#161F37',padding:12,width:wp('38%'),alignItems:'center',borderRadius:8}}>
                        <Image source={Path.Googlelogo}></Image>
                    </View>
                    </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row',marginLeft:hp('5%')}}>
                <Text style={{fontWeight:'200',color:'white'}}>By joining you agree to our</Text>
                <TouchableOpacity>
                <Text style={{fontSize:15,fontWeight:'600',textDecorationLine:'underline',color:'white'}}> Privacy Policy</Text>
                </TouchableOpacity>
                <Text style={{fontWeight:'200',color:'white'}} > and</Text>
            </View>
            <View style={{alignSelf:'center'}}>
                <TouchableOpacity>
                <Text style={{fontSize:15,fontWeight:'600',textDecorationLine:'underline',color:'white'}}>T&C</Text>
                </TouchableOpacity>
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
                <View style={{backgroundColor:'#161F37',padding:12,width:wp('43%'),alignItems:'center',borderRadius:8}}>
                    <Image source={Path.Applelogo}></Image>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View style={{backgroundColor:'#161F37',padding:12,width:wp('43%'),alignItems:'center',borderRadius:8}}>
                        <Image source={Path.Googlelogo}></Image>
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
    <View style={{width:wp('90%'),margin:'2%'}}>
      <TextInput label="Full Name" value={text} onChangeText={onChangeText}/>
      {/* <HelperText type="error" visible={hasErrors()}>
          <Text>
        Email address is invalid!
        </Text>
      </HelperText> */}
    </View>
    <View style={{width:wp('90%'),margin:'2%'}}>
      <TextInput label="Email ID" value={text} onChangeText={onChangeText}/>
      {/* <HelperText type="error" visible={hasErrors()}>
          <Text>
        Email address is invalid!
        </Text>
      </HelperText> */}
    </View>

    <View style={{flexDirection:'row',margin:'2%'}}>
    <View style={{width:wp('25%')}}>
      <TextInput label="Code" value={text} onChangeText={onChangeText}/>
      {/* <HelperText type="error" visible={hasErrors()}>
          <Text>
        Email address is invalid!
        </Text>
      </HelperText> */}
    </View>
    <View style={{width:wp('60%'),marginLeft:10}}>
      <TextInput label="Contact Number (Optional)" value={text} onChangeText={onChangeText} />
      {/* <HelperText type="error" visible={hasErrors()}>
          <Text>
        Email address is invalid!
        </Text>
      </HelperText> */}
    </View>
        </View>

        <View style={{width:wp('90%'),margin:'2%'}}>
      <TextInput label="Password" value={text} onChangeText={onChangeText}  right={<TextInput.Icon name="eye" />}/>
      {/* <HelperText type="error" visible={hasErrors()}>
          <Text>
        Email address is invalid!
        </Text>
      </HelperText> */}
    </View>
      <TouchableOpacity onPress={()=>navigation.navigate('SignupOtp')} style={{margin:hp('5%')}}>
    <View style={{backgroundColor:'#117AF5',padding:10,borderRadius:8,width:wp('90%'),alignSelf:'center',alignItems:'center'}}>
        <Text style={{color:'white',lineHeight:28,fontWeight:'600',fontSize:13}}>CREATE ACCOUNT</Text>
    </View>
    </TouchableOpacity>
            <View style={{flexDirection:'row',marginLeft:hp('5%'),marginTop:hp('10%')}}>
                <Text style={{fontWeight:'200',color:'white'}}>By joining you agree to our</Text>
                <TouchableOpacity>
                <Text style={{fontSize:15,fontWeight:'600',textDecorationLine:'underline',color:'white'}}> Privacy Policy</Text>
                </TouchableOpacity>
                <Text style={{fontWeight:'200',color:'white'}} > and</Text>
            </View>
            <Text style={{fontWeight:'600',color:'white',alignSelf:'center',textDecorationLine:'underline'}}>T&C</Text>
            </View>}
            </ScrollView>
        </View>
    )
}
export default Signin;