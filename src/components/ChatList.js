import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import ImagePath from '../constants/Imagepath';

const ChatList = ({navigation}) => {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress ={()=>navigation.navigate('Chats')} style={{flexDirection: 'row', marginTop: 20, marginHorizontal: 20}}>
      <View
        style={{
          flex: 0.2,
          justifyContent: 'flex-start',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Image
          source={ImagePath.userImage}
          style={{height: 48, width: 48, borderRadius: 48 / 2}}
        />
        <View style={styles.dotView} />
      </View>
      <View style={{flex: 0.6}}>
        <Text style={styles.nametext}>johntrex</Text>
        <Text style={styles.activetext}>
          Active: <Text style={styles.msgText}>Razor gaming mouse</Text>
        </Text>
      </View>
      <View
        style={{
          flex: 0.2,
          justifyContent: 'flex-start',
          alignItems: 'flex-end',
        }}>
        <Text style={styles.timeText}>40 mins</Text>
      </View>
    </TouchableOpacity>
  );
};
export default ChatList;

const styles = StyleSheet.create({
  dotView: {
    height: 8,
    width: 8,
    borderRadius: 8 / 2,
    backgroundColor: 'red',
    alignSelf: 'flex-end',
    marginLeft: -14,
  },
  nametext: {
    color: '#E9F0FA',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  msgText: {
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    color: '#9CA6B6',
  },
  activetext: {
    fontSize: 13,
    fontStyle: 'italic',
    fontFamily: 'Poppins-Light',
    color: '#9CA6B6',
  },
  timeText: {
    color: '#9CA6B6',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },
});
