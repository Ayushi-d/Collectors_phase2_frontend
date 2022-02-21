import React, { useEffect, useState } from "react";
import {View,Text, Image,TouchableOpacity,TextInput, Alert} from 'react-native';
import Header from "../../../../components/Header";
import Path from '../../../../constants/Imagepath';

import ImagePicker from 'react-native-image-crop-picker';
// import * as Utility from '../../../../utility/index';
import axios from "axios";
import * as Utility from '../../../../utility/index';
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from "../../../../utility";
const SignupUsername=({navigation})=>{
  const [text,setText]=useState("");
  const [user_id,setUser_id]=useState();
  const onChangeText = text => setText(text);
  const [isClick,setIsclick]=useState(false);
  const [image,setImage]=useState();
  const openGallary=()=>{
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      setImage(image.path);
      console.log(image);
    });
  }
  const onUsernameApihit=async()=>{
   
    if (text && image) {
      console.log(text);
      let body = JSON.stringify({
        email: text,
      })
      let headers = {
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
      };
      await Utility.setInLocalStorge('userProfile',image);
      await Utility.setInLocalStorge('userName',text)
      var data = new FormData();
    data.append('username',text);
    data.append('user_id',user_id);
    data.append('recfile',
      {
         uri:image,
         name:'userProfile.jpg',
         type:'image/jpg'
      });
      console.log("user body is..", data);
      navigation.navigate('BottomTab')
      let response = await axios.post(
        'http://3.138.124.101:9000/upload-images',{data
      }       
      );
      console.log("bbgg",response);
      console.log('befire', response.data);
      if (response.data.code == "200") {
        console.log("out put come");
        
      }
      else {
        navigation.navigate('BottomTab')
      }

    }
    else{
      Alert.alert("Something parameter is missing");
      // navigation.navigate('BottomTab')
    }
    
  }
  useEffect(()=>{
    getUserData()
  },[])
  const getUserData=async()=>{
      var user_id=await Utility.getFromLocalStorge('user_id');
      setUser_id(user_id);
  }
    return(
        <View style={{backgroundColor:'black',height:hp('100%'),width:wp('100%')}}>
            <Header login="true" navigate={navigation}/>
            <View style={{alignSelf:'center',alignItems:'flex-end'}}>
              {image?<Image source={{uri:image}} style={{height:150,width:150,borderRadius:70}}></Image>:
                <Image source={Path.userImage}></Image>}
                <TouchableOpacity onPress={()=>openGallary()}>
                <Image source={Path.camera} style={{marginTop:hp('-3%')}}></Image>
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: hp('5%'), backgroundColor: '#1F232E', borderRadius: 10, borderColor: '#117AF5', borderWidth: 1, padding: 6, marginLeft: '5%', marginRight: '5%', height: '8%' }} >
        <Text style={isClick ? { color: '#9CA6B6', top: 0, marginLeft: 10, fontSize: 12 } : { color: '#9CA6B6', top: 10, marginLeft: 10, fontSize: 12 }}>Username</Text>
        <TextInput value={text} onTouchStart={() => setIsclick(!isClick)} onChangeText={(e) => onChangeText(e)} style={{ color: '#E9F0FA', padding: 5, marginLeft: 5, marginBottom: hp('1.5%'), fontSize: 14 }} />
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
    <TouchableOpacity onPress={()=>onUsernameApihit()}>
    <View style={{backgroundColor:'#117AF5',padding:10,borderRadius:8,width:wp('80%'),alignSelf:'center',alignItems:'center'}}>
        <Text style={{color:'white',fontSize:14,fontWeight:'600',lineHeight:28}}>CONTINUE</Text>
    </View>
    </TouchableOpacity>
        </View>
    )
}
export default SignupUsername;