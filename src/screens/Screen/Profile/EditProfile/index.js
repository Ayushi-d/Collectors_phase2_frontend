import React,{useState} from 'react';
import {View,Text,Image,TouchableOpacity,TextInput} from 'react-native';
// import Homeheader from '../../../../components/Header';
import Path from '../../../../constants/Imagepath';

import ImagePicker from 'react-native-image-crop-picker';
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from '../../../../utility';
import Header from '../../../../components/Header';
const EditProfile=({navigation})=>{
  const [isClick,setIsclick]=useState(false);
  const [userName,setUserName]=useState('');
    const openGallary=()=>{
        ImagePicker.openPicker({
          width: 300,
          height: 400,
          cropping: true
        }).then(image => {
        //   setImage(image.path);
          console.log(image);
        });
      }
    return(
        <View style={{backgroundColor:'black',width:'100%',height:'100%'}}>
           <Header login="true" navigate={navigation}/>
           <View style={{alignSelf:'center',alignItems:'flex-end'}}>
                <Image source={Path.userImage}></Image>
                <TouchableOpacity onPress={()=>openGallary()}>
                <Image source={Path.camera} style={{marginTop:hp('-3%')}}></Image>
                </TouchableOpacity>
            </View>
            <View style={{alignSelf:'center'}}>
                <Text style={{fontSize:14,fontWeight:'400',color:'#9CA6B6'}}>liamnorris@gmail.com</Text>
            </View>
            <View style={{ marginTop: hp('5%'), backgroundColor: '#1F232E', borderRadius: 10, borderColor: '#117AF5', borderWidth: 1, padding: 6, marginLeft: '5%', marginRight: '5%', height: '8%' }} >
        <Text style={isClick ? { color: '#9CA6B6', top: 0, marginLeft: 10, fontSize: 12 } : { color: '#9CA6B6', top: 10, marginLeft: 10, fontSize: 12 }}>Username</Text>
        <TextInput value={userName} onTouchStart={() => setIsclick(!isClick)} onChangeText={(e) => setUserName(e)} style={{ color: '#E9F0FA', padding: 5, marginLeft: 5, marginBottom: hp('1.5%'), fontSize: 14 }} />
      </View>
      <View style={{ marginTop: hp('5%'), backgroundColor: '#1F232E', borderRadius: 10, borderColor: '#117AF5', borderWidth: 1, padding: 6, marginLeft: '5%', marginRight: '5%', height: '8%' }} >
        <Text style={isClick ? { color: '#9CA6B6', top: 0, marginLeft: 10, fontSize: 12 } : { color: '#9CA6B6', top: 10, marginLeft: 10, fontSize: 12 }}>Username</Text>
        <TextInput value={userName} onTouchStart={() => setIsclick(!isClick)} onChangeText={(e) => setUserName(e)} style={{ color: '#E9F0FA', padding: 5, marginLeft: 5, marginBottom: hp('1.5%'), fontSize: 14 }} />
      </View>
      <View style={{ marginTop: hp('5%'), backgroundColor: '#1F232E', borderRadius: 10, borderColor: '#117AF5', borderWidth: 1, padding: 6, marginLeft: '5%', marginRight: '5%', height: '8%' }} >
        <Text style={isClick ? { color: '#9CA6B6', top: 0, marginLeft: 10, fontSize: 12 } : { color: '#9CA6B6', top: 10, marginLeft: 10, fontSize: 12 }}>Username</Text>
        <TextInput value={userName} onTouchStart={() => setIsclick(!isClick)} onChangeText={(e) => setUserName(e)} style={{ color: '#E9F0FA', padding: 5, marginLeft: 5, marginBottom: hp('1.5%'), fontSize: 14 }} />
      </View>
      <View style={{ marginTop: hp('5%'), backgroundColor: '#1F232E', borderRadius: 10, borderColor: '#117AF5', borderWidth: 1, padding: 6, marginLeft: '5%', marginRight: '5%', height: '8%' }} >
        <Text style={isClick ? { color: '#9CA6B6', top: 0, marginLeft: 10, fontSize: 12 } : { color: '#9CA6B6', top: 10, marginLeft: 10, fontSize: 12 }}>Username</Text>
        <TextInput value={userName} onTouchStart={() => setIsclick(!isClick)} onChangeText={(e) => setUserName(e)} style={{ color: '#E9F0FA', padding: 5, marginLeft: 5, marginBottom: hp('1.5%'), fontSize: 14 }} />
      </View>
      <TouchableOpacity>
      <View style={{backgroundColor:'#117AF5',padding:10,width:wp('90%'),borderRadius:15,margin:'5%',alignItems:'center'}}>
        <Text style={{color:'white',fontSize:16,fontWeight:'700'}}>SAVE CHANGES</Text>
      </View>
      </TouchableOpacity>
        </View>
    )
}
export default EditProfile;