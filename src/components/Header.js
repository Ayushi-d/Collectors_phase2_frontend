import React from 'react';
import {View,Text,Image, TouchableOpacity} from 'react-native';
import Path from '../constants/Imagepath';
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from '../utility';
const Header=({login})=>{
    return(
        <View style={{flexDirection:'row',margin:'3%'}}>
         {login?
          <View style={{flexDirection:'row',margin:'3%',alignItems:'center'}}>
            <TouchableOpacity>
            <Image source={Path.back} style={{alignSelf:'center'}}></Image>
            </TouchableOpacity>
            <Text style={{color:'white',marginLeft:wp('5%')}}>Back</Text>
          </View>:null}
        
          <View style={login?{marginLeft:wp('15%')}:{marginLeft:wp('35%')}} >
          <Image source={Path.logo} style={{alignSelf:'center'}} resizeMode="center"></Image>
          </View>
        </View>

    )
}
export default Header;
