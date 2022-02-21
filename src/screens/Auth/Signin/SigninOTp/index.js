import React,{useEffect, useState} from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';
import Header from '../../../../components/Header';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import axios from 'axios';
import * as Utility from '../../../../utility/index'
import { getFromLocalStorge, heightPercentageToDP as  hp, setInLocalStorge, widthPercentageToDP as wp } from '../../../../utility';
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
      color: '#484C76'

  },
  focusCell: {
      borderColor: '#000',
      borderRadius: 6,
      color: '#484C76'
  },
});

const CELL_COUNT = 4;
const SigninOTp=({navigation})=>{
  const [value, setValue] = useState('');
  const [email,setEmail]=useState('tvikas6523@gmail.com');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    const callOtpVerifyAPi=async()=>{
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
          email:email,
          otp:value
          },
        );
        console.log('befire', response.data);
        if (response.data.code == "200") {
          await Utility.setInLocalStorge("user_id",response.data.user_id);
          console.log("out put come");
          navigation.navigate('SigninPassword')
        }
        else {
          Alert.alert("Something wrong into server side");
        }
  
      }
      else{
        Alert.alert("Otp is missing");
      }
    }
    useEffect(()=>{
      getEmail()
    })
    const getEmail=async()=>{
      var email=await Utility.getFromLocalStorge('user_email');
      setEmail(email);
    }
    return(
        <View style={{backgroundColor:'black',height:hp('100%'),width:wp('100%')}}>
            <Header  login="true" navigate={navigation}/>
            <View style={{margin:wp('3%')}}> 
            <Text style={{color:'white',fontWeight:'700',fontSize:32}}>OTP Verification</Text>
            </View>
            <View style={{margin:wp('3%')}}>
                <Text style={{color:'white'}}>Enter the One Time Password sent to your contact number ending with 90 to verify.</Text>
            </View>
            <View style={{margin:wp('10%')}}>

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
                        <View style={{margin:wp('2%'),alignSelf:'center',borderWidth:1,backgroundColor:'#1F232E',borderRadius:10}} key={index}>
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
              borderBottomColor: '#117AF5',
              borderBottomWidth: 5,
              width: '15%',
              marginTop: 5,
              marginLeft:5
            }}
          />
         <View
            style={{
              borderBottomColor: 'white',
              borderBottomWidth: 5,
              width: '15%',
              marginTop: 5,
              marginLeft:5
            }}
          />
    </View>
    <TouchableOpacity onPress={()=>callOtpVerifyAPi()}>
    <View style={{backgroundColor:'#117AF5',padding:10,borderRadius:8,width:wp('80%'),alignSelf:'center',alignItems:'center'}}>
        <Text style={{color:'white',fontWeight:'600',fontSize:13,lineHeight:28}}>VERIFY OTP</Text>
    </View>
    </TouchableOpacity>
    <View style={{flexDirection:'row',alignSelf:'center',margin:hp('3%')}}>
        <View>
            <Text style={{color:'white',fontWeight:'400',fontSize:12}}>Haven’t recieved the OTP? </Text>
        </View>
        <View>
          <TouchableOpacity >
            <Text style={{fontSize:13,fontWeight:'800',color:'white'}}>RESEND</Text>
            </TouchableOpacity>
        </View>
    </View>
        </View>
    )
}
export default SigninOTp