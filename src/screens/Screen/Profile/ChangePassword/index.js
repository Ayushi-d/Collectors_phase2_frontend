import React, { useState } from 'react';
import {View,Text} from 'react-native';
const ChangePassword=({navigation})=>{
    const [isOldpassword,setIsOldPassword]=useState();
    const [isPassword,setIspassword]=useState();
    const [isConfirmPassword,setIsConfirmPassword]=useState();
    const [oldpassword,setOldpassword]=useState();
    const [password,setPassword]=useState();
    const [confirmPassword,setConfirmPassword]=useState();
    const [check,setCheck]=useState();
    const [check1,setCheck1]=useState();
    const [check2,setCheck2]=useState();
    return(
        <View>
             <View style={{ marginTop: hp('2%'), backgroundColor: '#1F232E', borderRadius: 10, borderColor: '#117AF5', borderWidth: 1, padding: 6, marginLeft: '5%', marginRight: '5%', height: '10%' }} >
        <Text style={isCheckPassword1 ? { color: '#9CA6B6', top: 0, marginLeft: 10, fontSize: 12 } : { color: '#9CA6B6', top: 10, marginLeft: 10, fontSize: 12 }}>Password *</Text>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <TextInput value={password} secureTextEntry={resgisterPasswordeye} onTouchStart={() => setIsChcekPassword1(!isCheckPassword1)} onChangeText={(e) => setPassword(e)} style={{ color: '#E9F0FA', padding: 5, marginLeft: 5, marginBottom: hp('1.5%'), fontSize: 14 }} />
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
        </View>
    )
}
export default ChangePassword;