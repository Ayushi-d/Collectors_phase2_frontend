import React from 'react';
import {View,Text,Image, TouchableOpacity} from 'react-native';
import Path from '../constants/Imagepath';
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from '../utility';
const Header=({login,navigate})=>{
    return(
        <View style={{flexDirection:'row',backgroundColor:'#0D111C'}}>
         {login?
          <TouchableOpacity onPress={()=>navigate.goBack()} style={{margin:'3%',alignItems:'center',top:'2.5%'}}>
          <View style={{flexDirection:'row',margin:'3%',alignItems:'center'}}>
           
            <Image source={Path.back} style={{alignSelf:'center'}}></Image>
            
            <Text style={{color:'white',marginLeft:wp('5%'),fontSize:13,fontWeight:'300'}}>Back</Text>
          </View>
          </TouchableOpacity>:null}
        
          <View style={login?{alignSelf:'center'}:{marginTop:5,marginLeft:wp('28.5%')}} >
          <Image source={Path.logohd} style={{alignSelf:'center'}} resizeMode="center" ></Image>
          </View>
        </View>

    )
}
export default Header;
