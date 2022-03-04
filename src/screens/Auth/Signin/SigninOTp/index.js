import React,{useEffect, useState} from 'react';
import {View,Text,TouchableOpacity,StyleSheet, Alert} from 'react-native';
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
      color: 'white'

  },
  focusCell: {
      borderColor: '#117AF5',
      borderRadius: 6,
      color: '#484C76'
  },
});

const CELL_COUNT = 4;
const SigninOTp=({navigation})=>{
  const [value, setValue] = useState('');
  const [email,setEmail]=useState();
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    const callOtpVerifyAPi=async()=>{
    try{
      if (value && email) {
        let response = await axios.post(
          'http://3.138.124.101:9000/verifyOtp',
          {
          email:email,
          otp:value
          },
        );
        console.log('befire', response.data);
        console.log("email..",email)
        if (response.data.code ==200) {
          await Utility.setInLocalStorge("user_id",response.data.user_id);
          navigation.navigate('SigninPassword')
        }
        else {
          Alert.alert(response.data.msg);
        }
  
      }
      else{
        Alert.alert("Parameter is missing");
      }
    }catch(error){
      Alert.alert(error);
    }
    }
    useEffect(()=>{
      getEmail()
    })
    const getEmail=async()=>{
      var email=await Utility.getFromLocalStorge('user_email');
      console.log(":bb.....",email);
      setEmail(email);
    }
    return(
        <View style={{backgroundColor:'black',height:hp('100%'),width:wp('100%')}}>
            <Header  login="true" navigate={navigation}/>
            <View style={{margin:wp('3%')}}> 
            <Text style={{color:'white',fontWeight:'700',fontSize:32}}>OTP Verification</Text>
            </View>
            <View style={{margin:wp('3%'),width:wp('90%')}}>
                <Text style={{color:'white',fontFamily:'Poppins',fontSize:13,fontWeight:'400'}}>Enter the One Time Password sent to your contact number ending with 90 to verify.</Text>
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
              borderBottomColor: '#117AF5',
              borderBottomWidth: 5,
              width: '15%',
              marginTop: 5,
              marginLeft:5
            }}
          />
         <View
            style={{
              borderBottomColor: '#117AF520',
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
            <Text style={{color:'#9CA6B690',fontWeight:'400',fontSize:12}}>Haven’t recieved the OTP? </Text>
        </View>
        <View>
          <TouchableOpacity >
            <Text style={{fontSize:13,fontWeight:'800',color:'white',textDecorationLine:'underline'}}>RESEND</Text>
            </TouchableOpacity>
        </View>
    </View>
        </View>
    )
}
export default SigninOTp