import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import Path from '../../../../constants/Imagepath';
import axios from 'axios';
import ImagePicker from 'react-native-image-crop-picker';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../../utility';
import Header from '../../../../components/Header';
import * as Utility from '../../../../utility/index';
import {TextInput} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import WrapperContainer from '../../../../components/WrapperContainer';

const EditProfile = ({navigation, route}) => {
  const {user_id} = route.params;
  console.log('edit pe id..', user_id);
  const [isClick, setIsclick] = useState(false);
  const [isClick1, setIsclick1] = useState(false);
  const [isClick2, setIsClick2] = useState(false);
  const [userId, setUserId] = useState(userId);
  const [userName, setUserName] = useState('');
  const [userImage, setUserImage] = useState();
  const [fullName, setFullName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userBio, setUserBio] = useState('');
  const [loader, setLoader] = useState(true);
  const openGallary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setUserImage(image.path);
      console.log(image);
    });
  };
  useEffect(() => {
    getUserId();
    getUserRecords();
  }, []);
  const getUserId = async () => {
    const user_id = await Utility.getFromLocalStorge('user_id');
    setUserId(user_id);
  };
  const getUserRecords = async () => {
    let response = await axios.post('https://collectorsapp.herokuapp.com/getUserInfo', {
      user_id: user_id,
    });
    console.log('Edit profile..', response.data.code);
    if (response.data.code == 200) {
      setFullName(response.data.userDetails.name);
      setUserEmail(response.data.userDetails.email);

      const userImage = await Utility.getFromLocalStorge('userProfile');
      setUserImage(userImage);
      setLoader(false);
    }
  };
  return (
    <WrapperContainer>
      <Header login="true" navigate={navigation} hideLogo="true" />
      {loader ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" color="white"></ActivityIndicator>
        </View>
      ) : (
        <KeyboardAwareScrollView style={{flexGrow: 1}} enableOnAndroid={true}>
          <View
            style={{
              alignSelf: 'center',
              alignItems: 'flex-end',
              marginTop: '10%',
            }}>
            {!userImage ? (
              <Image source={Path.userImage}></Image>
            ) : (
              <Image
                source={{uri: userImage}}
                style={{height: 100, width: 100, borderRadius: 50}}></Image>
            )}
            <TouchableOpacity onPress={() => openGallary()}>
              <Image
                source={Path.camera}
                style={{marginTop: hp('-3%')}}></Image>
            </TouchableOpacity>
          </View>
          <View style={{alignSelf: 'center', marginTop: 20, marginBottom: 12}}>
            <Text
              style={{
                fontSize: 14,

                color: '#9CA6B6',
                fontFamily: 'Poppins-Regular',
                fontStyle: 'italic',
              }}>
              {userEmail}
            </Text>
          </View>

          <TextInput
            mode="flat"
            theme={{
              colors: {
                text: 'white',
                primary: '#9CA6B6',
                placeholder: '#9CA6B6',
              },
              fonts : {
                regular : ''
              }
            }}
            label={'Username'}
            value={fullName}
            onTouchStart={() => setIsclick(!isClick)}
            onChangeText={e => setUserName(e)}
            style={styles.inputStyle}
            fontFamily = 'Poppins-Regular'
          />
          <View
            style={{
              marginTop: -4,
              borderTopColor: '#1F232E',
              borderTopWidth: 3,
              marginHorizontal: 21,
            }}
          />

          <TextInput
            mode="flat"
            theme={{
              colors: {
                text: 'white',
                primary: '#9CA6B6',
                placeholder: '#9CA6B6',
              },
              fonts : {
                regular : ''
              }
            }}
            value={fullName}
            fontFamily = 'Poppins-Regular'
            onTouchStart={() => setIsclick1(!isClick1)}
            onChangeText={e => setFullName(e)}
            label={'Full Name'}
            style={styles.inputStyle}
          />
          <View
            style={{
              marginTop: -4,
              borderTopColor: '#1F232E',
              borderTopWidth: 3,
              marginHorizontal: 21,
            }}
          />

          <TextInput
            mode="flat"
            multiline={true}
            theme={{
              colors: {
                text: 'white',
                primary: '#9CA6B6',
                placeholder: '#9CA6B6',
              },
              fonts : {
                regular : ''
              }
            }}
            value={userBio}
            fontFamily = 'Poppins-Regular'
            onTouchStart={() => setIsClick2(!isClick2)}
            onChangeText={e => setUserBio(e)}
            label={'Bio'}
            style={[
              styles.inputStyle,
              {height: userBio.length > 80 ? 100 : 56},
            ]}
            right={
              <TextInput.Affix
                text={`${userBio.length}/150`}
                textStyle={styles.affixText}
              />
            }
          />
          <View
            style={{
              marginTop: -4,
              borderTopColor: '#1F232E',
              borderTopWidth: 3,
              marginHorizontal: 21,
            }}
          />

          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#117AF5',
                borderRadius: 10,
                marginHorizontal: 20,
                marginTop: 50,
                height: 48,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 13,
                  fontFamily: 'Poppins-SemiBold',
                }}>
                SAVE CHANGES
              </Text>
            </View>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      )}
    </WrapperContainer>
  );
};
export default EditProfile;

const styles = StyleSheet.create({
  inputStyle: {
    marginTop: 16,
    marginHorizontal: 20,
    borderRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    height: 56,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: 'white',
    backgroundColor: '#1F232E',
    borderWidth: 1.5,
    borderColor: '#1F232E',
  },
  affixText: {
    color: 'white',
    fontFamily: 'Poppins-Bold',
  },
});
