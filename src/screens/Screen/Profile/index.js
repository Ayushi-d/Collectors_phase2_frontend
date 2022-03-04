import React, { useEffect,useState } from 'react';
// import Homeheader from '../../../components/Homeheader';
import ProfileHeader from '../../../components/profileHeader';
import {View,Text,Image, ScrollView, TouchableOpacity} from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from '../../../utility';
import Path from '../../../constants/Imagepath';
import * as Utility from '../../../utility/index';
const Profile = ({navigation}) => {
  const [userImage,setUserImage]=useState();
  const [userName,setUserName]=useState();
  useEffect(()=>{
    getUserData()
  },[])
  const getUserData=async()=>{
    var ProfileImage=await Utility.getFromLocalStorge('userProfile');
    setUserImage(ProfileImage);
    var UserName=await Utility.getFromLocalStorge('userName')
    setUserName(UserName);
  }
  return (
      <View>
          <ProfileHeader navigate={()=>navigation.navigate('SettingScreen')}/>
          <ScrollView style={{backgroundColor:'black',height:'100%'}}>
          <View style={{flexDirection:'row',justifyContent:'space-evenly',margin:heightPercentageToDP('2%')}}>
            <View>
                <Image source={{uri:userImage}} style={{height:100,width:100,borderRadius:50}}></Image>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:heightPercentageToDP('3%')}}>
              <TouchableOpacity>
              <View style={{alignItems:'center'}}>
                    <Text style={{fontSize:12,fontWeight:'400',color:'#9CA6B6'}}>Collectibles</Text>
                    <Text style={{fontSize:16,fontWeight:'600',lineHeight:24,color:'#E9F0FA'}}>0</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>navigation.navigate('Following')}>
              <View style={{alignItems:'center',marginLeft:widthPercentageToDP('3%')}}>
                <Text style={{fontSize:12,fontWeight:'400',color:'#9CA6B6'}}>Followers</Text>
                <Text style={{fontSize:16,fontWeight:'600',lineHeight:24,color:'#E9F0FA'}}>12</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('Following')}>
                <View style={{alignItems:'center',marginLeft:widthPercentageToDP('3%')}}>
                    <Text style={{fontSize:12,fontWeight:'400',color:'#9CA6B6'}}>Following</Text>
                    <Text style={{fontSize:16,fontWeight:'600',lineHeight:24,color:'#E9F0FA'}}>47</Text>
                </View>
                </TouchableOpacity>
            </View>
            </View>
            <View style={{marginLeft:'5%'}}>
              <Text style={{fontSize:18,fontWeight:'500',color:'#E9F0FA',lineHeight:28}} >{userName}</Text>
            </View>
            <View style={{marginLeft:'5%'}}>
              <Text style={{fontSize:12,fontWeight:'300',color:'#E9F0FA',lineHeight:24,width:widthPercentageToDP('80%')}}>Take CE Quiz and start trading to get a rank, activate leaderboard gain reviews!</Text>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('EditProfile')}>
            <View style={{borderWidth:1,borderColor:'#E9F0FA',padding:4,borderRadius:10,width:widthPercentageToDP('90%'),alignSelf:'center',margin:'5%'}}>
              <Text style={{fontSize:13,fontWeight:'600',color:'white',lineHeight:28,alignSelf:'center'}}>EDIT PROFILE</Text>
            </View>
            </TouchableOpacity>

            <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
              <TouchableOpacity>
              <View style={{flexDirection:'row'}}>
                <Image source={Path.Feed}></Image>
              <Text style={{color:'white',marginLeft:5}}>POSTS</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity>
              <View style={{flexDirection:'row'}}>
              <Image source={Path.Open}></Image>
              <Text style={{color:'white',marginLeft:5}}>OPEN</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity>
              <View style={{flexDirection:'row'}}>
              <Image source={Path.Bids}></Image>
              <Text style={{color:'white',marginLeft:5}}>BIDS</Text>
              </View>
              </TouchableOpacity>
            </View>
            <View style={{alignSelf:'center',marginTop:heightPercentageToDP('15%')}}>
              <View>
                <Image source={Path.Nopost}></Image>
              </View>
            </View>
            <View style={{alignSelf:'center',alignItems:'center',margin:heightPercentageToDP('5%')}}>
                <Text style={{color:'white',fontSize:21,fontWeight:'700',lineHeight:24}}>No Collectible Posted</Text>
                <Text style={{color:'white',fontSize:13,fontWeight:'400',lineHeight:20,alignSelf:'center'}}>Start posting to make your first trade possible!</Text>
            </View>
            </ScrollView>

      </View>
  );
};

export default Profile;
