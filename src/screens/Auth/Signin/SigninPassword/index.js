import React from "react";
import {View,Text,TouchableOpacity} from 'react-native';
import Header from "../../../../components/Header";
import { heightPercentageToDP  as hp, widthPercentageToDP as wp} from "../../../../utility";
import { HelperText, TextInput } from 'react-native-paper';
const SigninPassword=({navigation})=>{
    const [text, setText] = React.useState('');

    const onChangeText = text => setText(text);
 
   const hasErrors = () => {
     return !text.includes('@');
   };
    return(
        <View style={{backgroundColor:'black',height:hp('100%'),width:wp('100%')}}>
            <Header  login="true"/>
            <View style={{margin:hp('3%')}}>
            <Text style={{color:'white',fontSize:24,lineHeight:32,fontWeight:'400'}}>Set New Password</Text>
            </View>
            <View style={{margin:hp('3%')}}>
      <TextInput label="Set New Password" value={text} onChangeText={onChangeText} />
      {/* <HelperText type="error" visible={hasErrors()}>
          <Text>
        Email address is invalid!
        </Text>
      </HelperText> */}
    </View>
    <View style={{margin:hp('3%')}}>
      <TextInput label="Confirm New Password" value={text} onChangeText={onChangeText} />
      {/* <HelperText type="error" visible={hasErrors()}>
          <Text>
        Email address is invalid!
        </Text>
      </HelperText> */}
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
    <TouchableOpacity onPress={()=>navigation.navigate('Signin')}>
    <View style={{backgroundColor:'#117AF5',padding:10,borderRadius:8,width:wp('80%'),alignSelf:'center',alignItems:'center'}}>
        <Text style={{color:'white',fontSize:13,lineHeight:28,fontWeight:'700'}}>RESET PASSWORD</Text>
    </View>
    </TouchableOpacity>
        </View>
    )
}
export default SigninPassword;