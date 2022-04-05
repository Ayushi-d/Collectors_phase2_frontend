import React from 'react';
import {View,Text,ImageBackground,Image,  TouchableOpacity} from 'react-native';
import Path from '../../../constants/Imagepath';
import { widthPercentageToDP  as wp ,heightPercentageToDP as hp} from "../../../utility";
const Authdetails=({navigation})=>{
    const openPrivacyPolicy=()=>{
        navigation.navigate('PrivacyPolicy')
    }
    const openTermofuse=()=>{
        navigation.navigate('Termofuse')
    }
    return(
        <View style={{flex:1}}>
        <ImageBackground source={Path.backgroundImage} style={{height:hp('100%'),width:wp('100%')}}>
            <View style={{alignSelf:'center',marginTop:hp('10%')}}>
                <Image source={Path.logohd}  style={{height:40,width:110}}></Image>
            </View>
          
            <View style={{margin:hp('2%'),marginTop:hp('15%')}}>
                <Text style={{fontSize:32,color:'white',lineHeight:40,fontfamily:"Poppins-Medium"}}>A trusted market-place for buying and selling unique collectibles!</Text>
            </View>
            <View style={{margin:hp('2%')}}>
                <Text style={{fontSize:14,color:'white',lineHeight:22,fontfamily:'Poppins-Bold'}}>Make an offer, discuss over chat and trade, it’s that simple!</Text>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('Signin')}>
            <View style={{backgroundColor:'#117AF5',padding:12,width:wp('90%'),borderRadius:8,alignSelf:'center',alignItems:'center',marginTop:hp('14%')}}>
               
                <Text style={{fontSize:14,color:'white',lineHeight:28,fontFamily:'Poppins-Regular'}}>LOGIN/SIGNUP</Text>
                
            </View>
            </TouchableOpacity>
            <View style={{flexDirection:'row',width:wp('90%'),alignSelf:'center',justifyContent:'space-between',margin:'2%'}}>
                <TouchableOpacity>
                <View style={{backgroundColor:'#161F37',padding:5,width:wp('43%'),alignItems:'center',borderRadius:8}}>
                    <Image source={Path.Applelogohd} resizeMode="center"></Image>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View style={{backgroundColor:'#161F37',padding:5,width:wp('43%'),alignItems:'center',borderRadius:8}}>
                        <Image source={Path.googlehd} resizeMode="center"></Image>
                    </View>
                    </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row',margin:hp('2%')}}>
                <Text style={{fontWeight:'200',color:'white',lineHeight:24,fontFamily:'Poppins'}}>By joining you agree to our</Text>
                <TouchableOpacity onPress={()=>openTermofuse()}>
                <Text style={{fontSize:15,fontWeight:'600',textDecorationLine:'underline',color:'white',lineHeight:24}}> Privacy Policy</Text>
                </TouchableOpacity>
                <Text style={{fontWeight:'200',color:'white',lineHeight:24}} > and</Text>
                <TouchableOpacity onPress={()=>openTermofuse()}>
                <Text style={{fontSize:15,fontWeight:'600',textDecorationLine:'underline',color:'white',lineHeight:24}}> T&C</Text>
                </TouchableOpacity>
            </View>
            <View style={{alignSelf:'center'}}>
                
            </View>
           
        </ImageBackground>
    </View>
    )
}
export default Authdetails;
