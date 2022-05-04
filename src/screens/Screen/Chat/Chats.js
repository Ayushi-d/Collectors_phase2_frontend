import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, {useRef, useState} from 'react';
import ImagePath from '../../../constants/Imagepath';
import ActionSheet from 'react-native-actions-sheet';
import ChatAcceptModal from '../../../components/ChatAcceptModal';
import WrapperContainer from '../../../components/WrapperContainer';
import CustomModal from '../../../components/CustomModal';
import {Rating, AirbnbRating} from 'react-native-ratings';

const Chats = ({navigation}) => {
  const bottomRef = useRef();

  const [closeChatModal, setCloseChatModal] = useState(false);
  const [isModal, setIsModal] = useState(true);
  const [showFeedbackForm, setFeedBackForm] = useState(false);

  const onCloseChat = () => {
    bottomRef.current.setModalVisible(false);
    setTimeout(() => {
      setCloseChatModal(true);
    }, 300);
  };

  const onFeedBack = () => {
    setCloseChatModal(false);
    setTimeout(() => {
      setFeedBackForm(true);
    }, 200);
  };

  const onPressSubmitFeedback = () => {
    setFeedBackForm(false);
  };

  const footerComp = () => {
    return (
      <View>
        {showFeedbackForm ? (
          <View>
            <View style={styles.box}>
              <Text style={styles.requestText}>FEEDBACK REQUEST</Text>

              <Text style={styles.howTrade}>How was the trade?!</Text>

              <Text style={styles.helpText}>
                Please help us to make Collectors Edition a safer place by
                submitting your valuable feedback about{' '}
                <Text style={{color: 'white'}}>Alexa.</Text>
              </Text>
              <View style={{marginVertical: 16}}>
                <Rating
                  type="custom"
                  ratingCount={5}
                  imageSize={30}
                  ratingColor={'#117AF5'}
                  ratingBackgroundColor={'white'}
                  tintColor={'#15203A'}
                  startingValue={5 / 5}
                />
              </View>

              <Text style={styles.goodText}>Good Beheviour</Text>
            </View>
            <TextInput
              style={styles.textInputStyle}
              placeholder={'How was your experience?'}
              placeholderTextColor={'#9CA6B6'}
            />

            <TouchableOpacity
              onPress={onPressSubmitFeedback}
              style={styles.button}>
              <Text
                style={{
                  fontSize: 13,
                  fontFamily: 'Poppins-SemiBold',
                  color: 'white',
                }}>
                SUBMIT FEEDBACK
              </Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
    );
  };

  return (
    <WrapperContainer statusBarColor="#0D111C">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'height' : ''}
        keyboardVerticalOffset={50}
        style={{flex: 1}}>
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
            style={{
              flex: 0.1,
              alignItems: 'flex-end',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => bottomRef.current.setModalVisible(true)}>
              <Image source={ImagePath.menu} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex: 1}}>
          <FlatList
            data={[]}
            renderItem={() => <View></View>}
            contentContainerStyle={{flexGrow: 1}}
            ListFooterComponent={footerComp}
            ListEmptyComponent={() => {
              return (
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      fontFamily: 'Poppins-Bold',
                      fontSize: 20,
                    }}>
                    CHATS HERE
                  </Text>
                </View>
              );
            }}
          />
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
              onPress={onCloseChat}
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

        {closeChatModal ? (
          <CustomModal
            image={ImagePath.handShake}
            mainText={'Close '}
            mainText2={'this chat?'}
            warningText={
              'Done with the trade? Close this chat to send a feedback request to Alexa! The chat will be deleted in 40 days permanantly.'
            }
            isVisible={closeChatModal}
            backgroundColor={'#117AF5'}
            leftButton={'NOT NOW'}
            rightButton={'CLOSE CHAT'}
            onPressLeft={() => setCloseChatModal(false)}
            onPressRight={onFeedBack}
          />
        ) : null}
      </KeyboardAvoidingView>
    </WrapperContainer>
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
    marginBottom: 10,
    borderRadius: 100,
  },
  box: {
    height: 250,
    backgroundColor: '#15203A',
    borderRadius: 10,
    marginHorizontal: 20,
    paddingHorizontal: 16,
    alignItems: 'center',
    paddingVertical: 20,
  },
  textInputStyle: {
    height: 44,
    backgroundColor: '#1F232E',
    paddingHorizontal: 10,
    borderRadius: 10,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    marginHorizontal: 20,
    marginTop: 10,
    color: 'white',
  },
  button: {
    backgroundColor: '#117AF5',
    height: 40,
    borderRadius: 8,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16,
  },
  requestText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 13,
    color: '#9CA6B6',
  },
  howTrade: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: 'white',
    marginTop: 10,
  },
  helpText: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#9CA6B6',
    textAlign: 'center',
    marginTop: 10,
  },
  goodText: {
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    fontStyle: 'italic',
    color: '#E9F0FA',
  },
});
