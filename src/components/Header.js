import React from 'react';
import {View,Text,Image, TouchableOpacity} from 'react-native';
import Path from '../constants/Imagepath';
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from '../utility';
const Header=({login,navigate,hideLogo,textData})=>{
    return(
        <View style={{flexDirection:'row',backgroundColor:'#0D111C'}}>
         {login?
          <TouchableOpacity onPress={()=>navigate.goBack()} style={{margin:'3%',alignItems:'center',top:'2.5%',paddingBottom:10}}>
          <View style={{flexDirection:'row',margin:'3%',alignItems:'center'}}>
           
            <Image source={Path.back} style={{alignSelf:'center'}}></Image>
            
            <Text style={{color:'white',marginLeft:wp('5%'),fontSize:13,fontWeight:'300'}}>Back</Text>
          </View>
          </TouchableOpacity>:null}
          {hideLogo?null:
          <View style={login?{alignSelf:'center'}:{marginTop:5,marginLeft:wp('28.5%')}} >
          <Image source={Path.logohd} style={{alignSelf:'center'}} resizeMode="center" ></Image>
          </View>
}
{textData?
<View style={{alignItems:'center',marginLeft:wp('15%'),padding:10}}>
<Text style={{color:'white',alignSelf:'center',fontSize:20,fontWeight:'700',lineHeight:28}}>{textData}</Text>
  </View>:null
}
        </View>

    )
}
export default Header;
