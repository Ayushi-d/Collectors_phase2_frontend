import React, { useState } from "react";
import {View,Text, Image,TouchableOpacity} from 'react-native';
import Header from "../../../../components/Header";
import Path from '../../../../constants/Imagepath';
import { HelperText, TextInput } from 'react-native-paper';
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from "../../../../utility";
const SignupUsername=({navigation})=>{
  const [text,setText]=useState("");
  const onChangeText = text => setText(text);
  const openGallary=()=>{

  }
    return(
        <View style={{backgroundColor:'black',height:hp('100%'),width:wp('100%')}}>
            <Header login="true"/>
            <View style={{alignSelf:'center',alignItems:'flex-end'}}>
                <Image source={Path.userImage}></Image>
                <TouchableOpacity onPress={()=>openGallary}>
                <Image source={Path.camera} style={{marginTop:hp('-3%')}}></Image>
                </TouchableOpacity>
            </View>
            <View style={{margin:hp('4%')}}>
      <TextInput label="Username" value={text} onChangeText={onChangeText}/>
      {/* <HelperText type="error" visible={hasErrors()}>
          <Text>
        Email address is invalid!
        </Text>
      </HelperText> */}
    </View>
    <View style={{flexDirection:'row',alignSelf:'center',margin:hp('1%'),marginTop:hp('5%')}}>
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
    <TouchableOpacity onPress={()=>navigation.navigate('MainHome')}>
    <View style={{backgroundColor:'#117AF5',padding:10,borderRadius:8,width:wp('80%'),alignSelf:'center',alignItems:'center'}}>
        <Text style={{color:'white',fontSize:14,fontWeight:'600',lineHeight:28}}>CONTINUE</Text>
    </View>
    </TouchableOpacity>
        </View>
    )
}
export default SignupUsername;