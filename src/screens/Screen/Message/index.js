import React from 'react';
import Homeheader from '../../../components/Homeheader';
import {View,Text} from 'react-native';
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from '../../../utility';
const Message = () => {
  return (
      <View>
          <Homeheader/>
          <View style={{marginTop:hp('30%'),alignSelf:'center'}}>
            <Text style={{fontSize:30,fontWeight:'800'}}> Comming  Soon </Text>
          </View>
      </View>
  );
};

export default Message;
