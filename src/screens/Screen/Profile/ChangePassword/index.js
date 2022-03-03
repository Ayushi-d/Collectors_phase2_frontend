import React, { useState } from 'react';
import {View,Text,TextInput,TouchableOpacity,Image, ScrollView,ActivityIndicator} from 'react-native';
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from '../../../../utility';
import Path from '../../../../constants/Imagepath';
import Header from '../../../../components/Header';
const ChangePassword=({navigation})=>{
    const [isOldpassword,setIsOldPassword]=useState(false);
    const [isPassword,setIspassword]=useState(false);
    const [isConfirmPassword,setIsConfirmPassword]=useState(false);
    const [oldpassword,setOldpassword]=useState();
    const [password,setPassword]=useState();
    const [confirmPassword,setConfirmPassword]=useState();
    const [check,setCheck]=useState(false);
    const [check1,setCheck1]=useState(false);
    const [check2,setCheck2]=useState(false);
    const [resgisterPasswordeye,setRegisterPasswordeye]=useState(false);
    const [resgisterPasswordeye1,setRegisterPasswordeye1]=useState(false);
    const [resgisterPasswordeye2,setRegisterPasswordeye2]=useState(false);
    const [loading,setLoading]=useState(false);


    const ChnagePassword=()=>{
      setLoading(true)
    }

    return(
        <View>
          <Header login="true" navigate={navigation}/>
          <ScrollView style={{backgroundColor:'black',height:hp('100%'),width:wp('100%')}}>
             <View style={{ marginTop: hp('2%'), backgroundColor: '#1F232E', borderRadius: 10, borderColor: '#117AF5', borderWidth: 1, padding: 6, marginLeft: '5%', marginRight: '5%', height: hp('9%') }} >
        <Text style={isOldpassword ? { color: '#9CA6B6', top: 0, marginLeft: 10, fontSize: 12 } : { color: '#9CA6B6', top: 10, marginLeft: 10, fontSize: 12 }}>Password *</Text>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <TextInput value={oldpassword} secureTextEntry={resgisterPasswordeye} onTouchStart={() => setIsOldPassword(!isOldpassword)} onChangeText={(e) => setOldpassword(e)} style={{ color: '#E9F0FA', padding: 5, marginLeft: 5, marginBottom: hp('1.5%'), fontSize: 14 }} />
        {resgisterPasswordeye?
        <TouchableOpacity onPress={()=>setRegisterPasswordeye(!resgisterPasswordeye)} style={{top:'-5%'}}> 
        <Image source={Path.eyeClose} resizeMode="center"></Image>
        </TouchableOpacity>
        :
        <TouchableOpacity onPress={()=>setRegisterPasswordeye(!resgisterPasswordeye)} style={{top:'-5%'}}>
        <Image source={Path.eyeOpen} resizeMode="center"></Image>
        </TouchableOpacity>
        }
        </View>
      </View>
      <View style={{ marginTop: hp('2%'), backgroundColor: '#1F232E', borderRadius: 10, borderColor: '#117AF5', borderWidth: 1, padding: 6, marginLeft: '5%', marginRight: '5%', height: hp('9%') }} >
        <Text style={isPassword ? { color: '#9CA6B6', top: 0, marginLeft: 10, fontSize: 12 } : { color: '#9CA6B6', top: 10, marginLeft: 10, fontSize: 12 }}>Password *</Text>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <TextInput value={password} secureTextEntry={resgisterPasswordeye} onTouchStart={() => setIsOldPassword(!isOldpassword)} onChangeText={(e) => setPassword(e)} style={{ color: '#E9F0FA', padding: 5, marginLeft: 5, marginBottom: hp('1.5%'), fontSize: 14 }} />
        {resgisterPasswordeye1?
        <TouchableOpacity onPress={()=>setRegisterPasswordeye1(!resgisterPasswordeye1)} style={{top:'-5%'}}> 
        <Image source={Path.eyeClose} resizeMode="center"></Image>
        </TouchableOpacity>
        :
        <TouchableOpacity onPress={()=>setRegisterPasswordeye1(!resgisterPasswordeye1)} style={{top:'-5%'}}>
        <Image source={Path.eyeOpen} resizeMode="center"></Image>
        </TouchableOpacity>
        }
        </View>
      </View>
      <View style={{ marginTop: hp('2%'), backgroundColor: '#1F232E', borderRadius: 10, borderColor: '#117AF5', borderWidth: 1, padding: 6, marginLeft: '5%', marginRight: '5%', height: hp('9%') }} >
        <Text style={isOldpassword ? { color: '#9CA6B6', top: 0, marginLeft: 10, fontSize: 12 } : { color: '#9CA6B6', top: 10, marginLeft: 10, fontSize: 12 }}>Password *</Text>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <TextInput value={password} secureTextEntry={resgisterPasswordeye} onTouchStart={() => setIsOldPassword(!isOldpassword)} onChangeText={(e) => setPassword(e)} style={{ color: '#E9F0FA', padding: 5, marginLeft: 5, marginBottom: hp('1.5%'), fontSize: 14 }} />
        {resgisterPasswordeye?
        <TouchableOpacity onPress={()=>setRegisterPasswordeye(!resgisterPasswordeye)} style={{top:'-5%'}}> 
        <Image source={Path.eyeClose} resizeMode="center"></Image>
        </TouchableOpacity>
        :
        <TouchableOpacity onPress={()=>setRegisterPasswordeye(!resgisterPasswordeye)} style={{top:'-5%'}}>
        <Image source={Path.eyeOpen} resizeMode="center"></Image>
        </TouchableOpacity>
        }
        </View>
      </View>
      <TouchableOpacity onPress={()=>ChnagePassword()} style={{margin:hp('5%')}}>
    <View style={{backgroundColor:'#117AF5',padding:10,borderRadius:8,width:wp('90%'),alignSelf:'center',alignItems:'center'}}>
      {!loading?
        <Text style={{color:'white',lineHeight:28,fontWeight:'600',fontSize:13}}>CREATE ACCOUNT</Text>:
        <ActivityIndicator size="large" color="white"></ActivityIndicator>}
    </View>
    </TouchableOpacity>
      </ScrollView>
        </View>
    )
}
export default ChangePassword;