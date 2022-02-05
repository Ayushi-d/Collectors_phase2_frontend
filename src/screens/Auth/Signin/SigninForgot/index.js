import React ,{useState}from "react";
import {View,Text, TouchableOpacity} from 'react-native';
import Header from "../../../../components/Header";
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from "../../../../utility";
import { HelperText, TextInput } from 'react-native-paper';
const SigninForgot=({navigation})=>{
    const [text, setText] = React.useState('');
    const onChangeText = text => setText(text);
   const hasErrors = () => {
     return !text.includes('@');
   };
    return(
        <View style={{backgroundColor:'black',height:hp('100%'),width:wp('100%')}}>
            <Header login="true"/>
            <View style={{margin:hp('3%')}}>
            <Text style={{color:'white',lineHeight:32,fontSize:24}}>Forgot Password?</Text>
            </View>
            <View style={{marginLeft:hp('3%'),marginRight:hp('3%')}}>
                <Text style={{color:'white',lineHeight:22,fontSize:14}}>Don’t worry, we’ve got you covered! Enter your registered contact to reset your password.</Text>
            </View>
            <View style={{margin:hp('3%'),marginTop:hp('10%')}}>
      <TextInput label="Username" value={text} onChangeText={onChangeText}/>
      
    </View>
    <View style={{flexDirection:'row',alignSelf:'center',margin:hp('1%'),marginTop:hp('10%')}}>
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
              borderBottomColor: 'white',
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
    <TouchableOpacity onPress={()=>navigation.navigate('SigninOTp')}>
    <View style={{backgroundColor:'#117AF5',padding:10,borderRadius:8,width:wp('87%'),alignSelf:'center',alignItems:'center'}}>
        <Text style={{lineHeight:28,color:'white',fontSize:13,fontWeight:'600'}}>VERIFY</Text>
    </View>
    </TouchableOpacity>
        </View>
    )
}
export default SigninForgot;