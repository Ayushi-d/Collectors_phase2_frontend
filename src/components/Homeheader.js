import React from 'react';
import {View,Text,Image, TouchableOpacity} from 'react-native';
import Path from '../constants/Imagepath';
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from '../utility';
const Homeheader=({navigate,navigate1})=>{
    return(
        <View style={{flexDirection:'row',backgroundColor:'#0D111C',padding:15,width:wp('100%'),justifyContent:'space-between'}}>
        <View>
            <Image source={Path.logohd}  style={{height:22,width:85,marginLeft:wp('-4.5%')}} resizeMode="center"></Image>
        </View>
        <View style={{width:'22%'}}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <TouchableOpacity  onPress={navigate}>
            <Image source={Path.Search}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={{marginRight:8}}  onPress={navigate1}>
            <Image source={Path.Notification} ></Image>
            </TouchableOpacity>
            </View>
        </View>
        </View>
    )
}
export default Homeheader;
