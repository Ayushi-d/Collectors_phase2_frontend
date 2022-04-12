import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React, {useRef, useState} from 'react';
import ImagePath from '../../../constants/Imagepath';
import ActionSheet from 'react-native-actions-sheet';
import ChatAcceptModal from '../../../components/ChatAcceptModal';

const Chats = ({navigation}) => {
  const bottomRef = useRef();

  const [isModal, setIsModal] = useState(true);
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <View style={styles.topiew}>
        <View
          style={{
            flexDirection: 'row',
            flex: 0.2,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={ImagePath.back} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={ImagePath.userImage}
              style={{height: 32, width: 32, borderRadius: 32 / 2}}
            />
          </TouchableOpacity>
        </View>
        <View style={{flex: 0.7, paddingLeft: 20}}>
          <Text style={styles.nametext}>johntrex</Text>
          <Text style={styles.activetext}>
            Active: <Text style={styles.msgText}>Razor gaming mouse</Text>
          </Text>
        </View>
        <View
          style={{flex: 0.1, alignItems: 'flex-end', justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={() => bottomRef.current.setModalVisible(true)}>
            <Image source={ImagePath.menu} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: 'white', fontSize: 30}}>CHATS HERE</Text>
      </View>
      <View style={{paddingVertical: 20}}>
        <View style={styles.bottomview}>
          <TextInput
            placeholder="Type message..."
            placeholderTextColor={'#9CA6B6'}
            style={styles.inputStyle}
          />

          <View
            style={{
              flex: 0.2,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <TouchableOpacity>
              <Image source={ImagePath.Send} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={ImagePath.gallery} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ActionSheet
        indicatorColor={'#4F5461'}
        onClose={() => bottomRef.current.setModalVisible(false)}
      
        ref={bottomRef}>
        <View style={styles.bottomView}>
        <View style={styles.indicator} />
          <Text style={styles.settingText}>CHAT SETTINGS</Text>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 25,
            }}>
            <Text style={styles.deleteText}>
              Close Chat
              <Text style={{fontStyle: 'italic', color: '#9CA6B6'}}>
                {' '}
                to get feedback
              </Text>
            </Text>
            <Image source={ImagePath.next} style={{width: 20, height: 20}} />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 25,
            }}>
            <Text style={styles.deleteText}>Report Chat</Text>
            <Image source={ImagePath.next} style={{width: 20, height: 20}} />
          </TouchableOpacity>
        </View>
      </ActionSheet>
      {isModal ? (
        <ChatAcceptModal
          isVisible={isModal}
          onPressContinue={() => setIsModal(false)}
        />
      ) : null}
    </View>
  );
};

export default Chats;

const styles = StyleSheet.create({
  topiew: {
    flexDirection: 'row',
    backgroundColor: '#0D111C',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  nametext: {
    color: '#E9F0FA',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },
  msgText: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#9CA6B6',
  },
  activetext: {
    fontSize: 12,
    fontStyle: 'italic',
    fontFamily: 'Poppins-Light',
    color: '#9CA6B6',
  },
  bottomview: {
    flexDirection: 'row',
    height: 44,
    backgroundColor: '#1F232E',
    borderRadius: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
  },
  inputStyle: {
    flex: 0.8,
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    height: 44,
    color: 'white',
  },
  bottomView: {
    height: 180,
    backgroundColor: '#13161F',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  deleteText: {
    color: '#E9F0FA',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  settingText: {
    fontSize: 13,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    color: '#9CA6B6',
  },
  indicator: {
    height: 4,
    width: 40,
    backgroundColor: '#4F5461',
    alignSelf: 'center',
    marginBottom : 10,
    borderRadius : 100
  },
});
