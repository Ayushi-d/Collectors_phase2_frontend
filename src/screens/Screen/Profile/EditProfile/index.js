import React,{useEffect, useState} from 'react';
import {View,Text,Image,TouchableOpacity,TextInput, ScrollView,ActivityIndicator} from 'react-native';
// import Homeheader from '../../../../components/Header';
import Path from '../../../../constants/Imagepath';
import axios from 'axios';
import ImagePicker from 'react-native-image-crop-picker';
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from '../../../../utility';
import Header from '../../../../components/Header';
import * as Utility from '../../../../utility/index';
// import { ActivityIndicator } from 'react-native-paper';
const EditProfile=({navigation})=>{
  const [isClick,setIsclick]=useState(false);
  const [isClick1,setIsclick1]=useState(false);
  const [isClick2,setIsClick2]=useState(false);
  const [userId,setUserId]=useState('1033');
  const [userName,setUserName]=useState('');
  const [userImage,setUserImage]=useState();
  const [fullName,setFullName]=useState();
  const [userEmail,setUserEmail]=useState();
  const [userBio,setUserBio]=useState()
  const [loader,setLoader]=useState(true);
    const openGallary=()=>{
        ImagePicker.openPicker({
          width: 300,
          height: 400,
          cropping: true
        }).then(image => {
          setUserImage(image.path);
          console.log(image);
        });
      }
      useEffect(()=>{
        getUserId()
        getUserRecords()
      },[])
      const getUserId= async()=>{
      const user_id=await Utility.getFromLocalStorge("user_id");
      setUserId(user_id);
      }
      const getUserRecords=async()=>{
        let response = await axios.post(
          'http://3.138.124.101:9000/getUserInfo',
          {
         
            "user_id":userId
          },
        );
        console.log("Edit profile..",response.data.code);
        if(response.data.code==200){
          // console.log("Imagehgfgghf",response.data.userDetails)
          setFullName(response.data.userDetails.name)
          setUserEmail(response.data.userDetails.email)
          // setUserImage(response.data.userDetails.profile_image)
          // setUserName(response.data.userDetails.username)
          const userImage=await Utility.getFromLocalStorge('userProfile')
          setUserImage(userImage);
          setLoader(false);
        }
      }
    return(
        <View style={{backgroundColor:'black',width:'100%',height:'100%'}}>
           <Header login="true" navigate={navigation}/>
           {loader?
           <ActivityIndicator size="large" color="white"></ActivityIndicator>:null}
           <ScrollView>
           <View style={{alignSelf:'center',alignItems:'flex-end',marginTop:'3%'}}>
             {!userImage?
                <Image source={Path.userImage}></Image>:
                <Image source={{uri:userImage}} style={{height:100,width:100,borderRadius:50}}></Image>
                }
                <TouchableOpacity onPress={()=>openGallary()}>
                <Image source={Path.camera} style={{marginTop:hp('-3%')}}></Image>
                </TouchableOpacity>
            </View>
            <View style={{alignSelf:'center'}}>
                <Text style={{fontSize:14,fontWeight:'400',color:'#9CA6B6'}}>{userEmail}</Text>
            </View>
            <View style={{ marginTop: hp('5%'), backgroundColor: '#1F232E', borderRadius: 10, borderColor: '#117AF5', borderWidth: 1, padding: 6, marginLeft: '5%', marginRight: '5%', height: '10%' }} >
        <Text style={isClick ? { color: '#9CA6B6', top: 0, marginLeft: 10, fontSize: 12 } : { color: '#9CA6B6', top: 10, marginLeft: 10, fontSize: 12 }}>Username</Text>
        <TextInput value={fullName} onTouchStart={() => setIsclick(!isClick)} onChangeText={(e) => setUserName(e)} style={{ color: '#E9F0FA', padding: 5, marginLeft: 5, marginBottom: hp('1.5%'), fontSize: 14 }} />
      </View>
      <View style={{ marginTop: hp('5%'), backgroundColor: '#1F232E', borderRadius: 10, borderColor: '#117AF5', borderWidth: 1, padding: 6, marginLeft: '5%', marginRight: '5%', height: '10%' }} >
        <Text style={isClick1 ? { color: '#9CA6B6', top: 0, marginLeft: 10, fontSize: 12 } : { color: '#9CA6B6', top: 10, marginLeft: 10, fontSize: 12 }}>Full Name </Text>
        <TextInput value={fullName} onTouchStart={() => setIsclick1(!isClick1)} onChangeText={(e) => setUserName(e)} style={{ color: '#E9F0FA', padding: 5, marginLeft: 5, marginBottom: hp('1.5%'), fontSize: 14 }} />
      </View>
      <View style={{ marginTop: hp('5%'), backgroundColor: '#1F232E', borderRadius: 10, borderColor: '#117AF5', borderWidth: 1, padding: 6, marginLeft: '5%', marginRight: '5%', height: '10%' }} >
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={isClick2 ? { color: '#9CA6B6', top: 0, marginLeft: 10, fontSize: 12 } : { color: '#9CA6B6', top: 10, marginLeft: 10, fontSize: 12 }}>Bio</Text>
        <Text style={{color: '#9CA6B6', top: 10, marginLeft: 10, fontSize: 12}}>120/150</Text>
        </View>
        <TextInput value={userBio} onTouchStart={() => setIsClick2(!isClick2)} onChangeText={(e) => setUserName(e)} style={{ color: '#E9F0FA', padding: 5, marginLeft: 5, marginBottom: hp('1.5%'), fontSize: 14 }} />
      </View>
    
      <TouchableOpacity>
      <View style={{backgroundColor:'#117AF5',padding:10,width:wp('90%'),borderRadius:15,margin:'5%',alignItems:'center'}}>
        <Text style={{color:'white',fontSize:16,fontWeight:'700'}}>SAVE CHANGES</Text>
      </View>
      </TouchableOpacity>
      </ScrollView>
        </View>
    )
}
export default EditProfile;