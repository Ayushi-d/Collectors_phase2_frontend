import React from 'react';
import {View,Text,Image, TouchableOpacity} from 'react-native';
import Path from '../constants/Imagepath';
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from '../utility';
const Homeheader=({})=>{
    return(
        <View style={{flexDirection:'row',backgroundColor:'#0D111C',padding:5,width:wp('100%'),justifyContent:'space-between'}}>
        <View>
            <Image source={Path.logohd} resizeMode="center"></Image>
        </View>
        <View style={{width:'30%'}}>
            <View style={{flexDirection:'row',justifyContent:'space-evenly',top:hp('2.5%')}}>
                <TouchableOpacity>
            <Image source={Path.Search}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={{marginRight:10}}>
            <Image source={Path.Notification} ></Image>
            </TouchableOpacity>
            </View>
        </View>
        </View>
    )
}
export default Homeheader;
