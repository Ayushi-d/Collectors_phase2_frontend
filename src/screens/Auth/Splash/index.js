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
        // navigation.navigate('Authdetails')
        navigation.navigate('Authdetails')
      
        
      };
    return(
        <View style={{flex:1}}>
            <ImageBackground source={Path.backgroundImage} style={{height:hp('100%'),width:wp('100%')}}>
                <View style={{alignSelf:'center',marginTop:hp('40%')}}>
                    <Image source={Path.logohd} style={{width:140,height:50}}></Image>
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