import React,{useState,useEffect} from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Alert} from 'react-native';
import Header from '../../../../components/Header';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import * as Utility from '../../../../utility/index';
import axios from 'axios';
import { heightPercentageToDP as  hp, widthPercentageToDP as wp } from '../../../../utility';
const styles = StyleSheet.create({
  root: { flex: 1, padding: 10 },
  title: { textAlign: 'center', fontSize: 18, fontWeight: '500', color: '#484C76' },
  codeFieldRoot: { marginTop: 20 },
  cell: {
      width: 40,
      height: 40,
      lineHeight: 38,
      fontSize: 24,
      borderWidth: 2,
      borderColor: '#00000030',
      textAlign: 'center',
      borderRadius: 6,
      color: 'white'

  },
  focusCell: {
      borderColor: '#117AF5',
      borderRadius: 6,
      color: '#484C76'
  },
});

const CELL_COUNT = 4;
const SignupOTp=({navigation})=>{
   
    const [email,setEmail]=useState('');
  const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    const callSignUpOtpVerifyAPi=async()=>{
        console.log("VIkassss");
        // console.log(text);
        if (value && email) {
          // console.log(text);
          let body = JSON.stringify({
            // email: text,
            email:email,
            otp:value
          })
          let headers = {
            'Content-Type': 'multipart/form-data',
            Accept: 'application/json',
          };
          console.log("user body is..", body);
          let response = await axios.post(
            'http://3.138.124.101:9000/verifyOtp',
            {
            "email":email,
            "otp":value
            },
          );
          console.log('befire.SIgnup OTP', response.data.user_id);
          if (response.data.code == 200) {
            await Utility.setInLocalStorge("user_id",response.data.user_id);
            console.log("out put come");
            navigation.navigate('SignupUsername')
          }
          else {
            Alert.alert(response.data.msg);
          }
    
        }
        else{
          Alert.alert("Otp is missing");
        }
      }
      useEffect(()=>{
        getEmail()
      },[])
      const getEmail=async()=>{
        var email=await Utility.getFromLocalStorge('user_email');
        setEmail(email);
      }
      const resendOtpAPi=async()=>{
        let response = await axios.post(
          'http://3.138.124.101:9000/forgotPassword',
          {
            email: email,
          },
        );
        // console.log('befire', response.data);
        if (response.data.code == "200") {
          await Utility.setInLocalStorge('user_email',email);
          setLoading(false);
          navigation.navigate('SigninOTp')
        }
        else {
          Alert.alert(response.data.msg)
      }
      }
    return(
        <View style={{backgroundColor:'black',height:hp('100%'),width:wp('100%')}}>
            <Header  login="true" navigate={navigation}/>
            <View style={{margin:wp('3%')}}> 
            <Text style={{color:'white',fontWeight:'700',fontSize:32}}>OTP Verification</Text>
            </View>
            <View style={{margin:wp('3%')}}>
                <Text style={{color:'white'}}>Don’t worry, we’ve got you covered! Enter your registered contact to reset your password.</Text>
            </View>
            <View style={{marginLeft:wp('22%'),marginRight:wp('22%'),margin:hp('5%')}}>

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
                    renderCell={({ index, symbol, isFocused }) => (
                        <View style={{alignSelf:'center',borderWidth:1,backgroundColor:'#1F232E',borderRadius:10}} key={index}>
                            <Text
                                style={[styles.cell, isFocused && styles.focusCell]}
                                onLayout={getCellOnLayoutHandler(index)}>
                                {symbol || (isFocused ? <Cursor /> : null)}
                            </Text>
                        </View>
                    )}
                />
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
              borderBottomColor: '#117AF530',
              borderBottomWidth: 5,
              width: '15%',
              marginTop: 5,
              marginLeft:5
            }}
          />
    </View>
    <TouchableOpacity onPress={()=>callSignUpOtpVerifyAPi()}>
    <View style={{backgroundColor:'#117AF5',padding:10,borderRadius:8,width:wp('80%'),alignSelf:'center',alignItems:'center'}}>
        <Text style={{color:'white',fontWeight:'600',fontSize:13,lineHeight:28}}>VERIFY OTP</Text>
    </View>
    </TouchableOpacity>
    <View style={{flexDirection:'row',alignSelf:'center',margin:hp('3%')}}>
        <View>
            <Text style={{color:'#9CA6B690',fontWeight:'400',fontSize:12}}>Haven’t recieved the OTP? </Text>
        </View>
        <View>
          <TouchableOpacity onPress={()=>resendOtpAPi()}>
            <Text style={{fontSize:13,fontWeight:'800',color:'white',textDecorationLine:'underline'}}>RESEND</Text>
            </TouchableOpacity>
        </View>
    </View>
        </View>
    )
}
export default SignupOTp