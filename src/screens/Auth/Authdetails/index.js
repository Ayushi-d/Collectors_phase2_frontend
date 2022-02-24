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
                <Image source={Path.logohd} resizeMode='center'></Image>
            </View>
            <View style={{margin:hp('2%'),marginTop:hp('15%')}}>
                <Text style={{fontSize:32,fontWeight:'500',color:'white',lineHeight:40,fontFamily:'Poppins'}}>A trusted market-place for buying and selling unique collectibles!</Text>
            </View>
            <View style={{margin:hp('2%')}}>
                <Text style={{fontSize:14,fontWeight:'300',color:'white',lineHeight:22,fontFamily:'Poppins'}}>Make an offer, discuss over chat and trade, it’s that simple!</Text>
            </View>
            <View style={{backgroundColor:'#117AF5',padding:12,width:wp('90%'),borderRadius:8,alignSelf:'center',alignItems:'center',marginTop:hp('14%')}}>
                <TouchableOpacity onPress={()=>navigation.navigate('Signin')}>
                <Text style={{fontSize:14,fontWeight:'600',color:'white',lineHeight:28,fontFamily:'Poppins'}}>LOGIN/SIGNUP</Text>
                </TouchableOpacity>
            </View>
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
            <View style={{flexDirection:'row',marginLeft:hp('5%')}}>
                <Text style={{fontWeight:'200',color:'white',lineHeight:24,fontFamily:'Poppins'}}>By joining you agree to our</Text>
                <TouchableOpacity onPress={()=>openTermofuse()}>
                <Text style={{fontSize:15,fontWeight:'600',textDecorationLine:'underline',color:'white',lineHeight:24}}> Privacy Policy</Text>
                </TouchableOpacity>
                <Text style={{fontWeight:'200',color:'white',lineHeight:24}} > and</Text>
            </View>
            <View style={{alignSelf:'center'}}>
                <TouchableOpacity onPress={()=>openTermofuse()}>
                <Text style={{fontSize:15,fontWeight:'600',textDecorationLine:'underline',color:'white',lineHeight:24}}>T&C</Text>
                </TouchableOpacity>
            </View>
           
        </ImageBackground>
    </View>
    )
}
export default Authdetails;
