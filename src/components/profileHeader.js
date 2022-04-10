import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import * as Utility from '../utility/index';
import Path from '../constants/Imagepath';
import {BottomNavigation} from 'react-native-paper';
const ProfileHeader = ({name, navigate}) => {
  const [Loginusername, setLoginusername] = useState();
  useEffect(() => {
    getLoginName();
  }, []);
  const getLoginName = async () => {
    var loginname = await Utility.getFromLocalStorge('userName');
    setLoginusername(loginname);
  };
  return (
    <View
      style={{
        backgroundColor: '#0D111C',
        height: '8%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <View style={{margin: '3%'}}>
        <Text style={{color: 'white'}}>{Loginusername}</Text>
      </View>
      <View
        style={{marginRight: Utility.widthPercentageToDP('5%'), margin: '3%'}}>
        <TouchableOpacity onPress={navigate}>
          <Image source={Path.Setting}></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ProfileHeader;
