import React from 'react';
import {View,Text,Image, TouchableOpacity} from 'react-native';
import Path from '../constants/Imagepath';
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from '../utility';
const Header=({login,navigate})=>{
    return(
        <View style={{flexDirection:'row',margin:'3%'}}>
         {login?
          <View style={{flexDirection:'row',margin:'3%',alignItems:'center'}}>
            <TouchableOpacity onPress={()=>navigate.goBack()}>
            <Image source={Path.back} style={{alignSelf:'center'}}></Image>
            </TouchableOpacity>
            <Text style={{color:'white',marginLeft:wp('5%'),fontSize:13,fontWeight:'300'}}>Back</Text>
          </View>:null}
        
          <View style={login?{marginLeft:wp('10%')}:{marginLeft:wp('25%'),marginTop:5}} >
          <Image source={Path.logohd} style={{alignSelf:'center'}} resizeMode="center" ></Image>
          </View>
        </View>

    )
}
export default Header;
