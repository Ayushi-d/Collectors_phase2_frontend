import React,{useEffect} from "react";
import {View,Text, ImageBackground,Image} from 'react-native';
import Path from '../../../constants/Imagepath';
import { widthPercentageToDP  as wp ,heightPercentageToDP as hp} from "../../../utility";

const Splash=({navigation})=>{
    useEffect(() => {
        timeoutHandle = setTimeout(() => {
          retrieveData();
        }, 1000);
      }, []);
      const retrieveData = async () => {
        navigation.navigate('Authdetails')
        // let user_id = await Utility.getFromLocalStorge('user_id');
        // let is_profile_completed = await Utility.getFromLocalStorge('is_profile_completed');
        // let student_id = await Utility.getFromLocalStorge('student_id');
        // let Token = await Utility.getFromLocalStorge('Token');
    
        // let Type = await Utility.getFromLocalStorge('socialtype')
        // console.log("Type==>", Type)
    
        
        
        // console.log("is_profile_completed",is_profile_completed)
        // console.log("user_id",user_id)
    
        // console.log("Token",Token)
    
        // if(is_profile_completed==true){
        
       
        // return  navigation.navigate("BottomTab")
        // }
        // if(Token!==null && user_id!==null){
        //   return navigation.navigate('BottomTab');
        // }
        // else{
        //  return navigation.navigate('Login');
    
        // }
        
    
      };
    return(
        <View style={{flex:1}}>
            <ImageBackground source={Path.backgroundImage} style={{height:hp('100%'),width:wp('100%')}}>
                <View style={{alignSelf:'center',marginTop:hp('50%')}}>
                    <Image source={Path.logo}></Image>
                </View>
                <View style={{marginTop:hp('30%'),alignSelf:'center'}}>
                    <Image source={Path.logoTextlong} resizeMode="center" style={{height:hp('10%'),width:wp('80%')}}></Image>
                </View>
                <View style={{alignSelf:'center'}}>
                    <Text style={{fontSize:15,color:'#E9F0FA',fontFamily:'Poppins-Regular'}}>Version 0.2</Text>
                </View>
            </ImageBackground>
        </View>
    )
}
export default Splash;