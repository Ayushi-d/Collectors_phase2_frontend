import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Alert,
  StyleSheet,
} from 'react-native';
import Header from '../../../../components/Header';
import Path from '../../../../constants/Imagepath';

import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios';
import * as Utility from '../../../../utility/index';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../../utility';
import {TextInput} from 'react-native-paper';
import WrapperContainer from '../../../../components/WrapperContainer';
const SignupUsername = ({navigation}) => {
  const [text, setText] = useState('');
  const [user_id, setUser_id] = useState();
  const onChangeText = text => setText(text);
  const [isClick, setIsclick] = useState(false);
  const [nameErr, setNameErr] = useState(false);
  const [image, setImage] = useState();
  const openGallary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setImage(image.path);
      console.log(image);
    });
  };
  const onUsernameApihit = async () => {
    setNameErr(false);
    if (text && image) {
      console.log(text);
      let body = JSON.stringify({
        email: text,
      });
      let headers = {
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
      };
      await Utility.setInLocalStorge('userProfile', image);
      await Utility.setInLocalStorge('userName', text);
      var data = new FormData();
      // data.append('pic6', {
      //   uri: image6,
      //   name: 'iamge.jpg',
      //   type: 'image/jpg',
      // });
      data.append('username', text);
      data.append('userId', user_id);
      data.append('recfile', {
        // uri: image,
        // name: 'userProfile.jpg',
        // type: 'image/jpg',
        uri: image,
      name: 'image.jpeg',
      type: 'image/jpeg',
      });

      // navigation.navigate('BottomTab');


      //  await axios.post(
      //   'http://13.233.246.19:9000/upload-images',
      //   data,
      //   headers,
      // );
      // if (response.data.code == 200) {
      //   console.log('out put come');
      //   navigation.navigate('BottomTab');
      // } else {
      //   setNameErr(true);
      // }
      console.log("body is..",body)
      await axios({
        url: 'http://13.233.246.19:9000/upload-images',
        method: 'POST',
        data: data,
        headers: {'Content-Type': 'multipart/form-data'},
      })
        .then(response => {
          console.log("All response ..",response)
          if (response.data.code === "200") {
            console.log("post created");
            navigation.navigate('BottomTab');
          }
        })
        .catch(error => {
          console.log(error, 'wfkjndsf');
          // Alert.alert("Issue from Server Side")
        });
    } else {
      Alert.alert('Something parameter is missing');
      // navigation.navigate('BottomTab')
    }
  };
  useEffect(() => {
    getUserData();
  }, []);
  const getUserData = async () => {
    var user_id = await Utility.getFromLocalStorge('user_id');
    setUser_id(user_id);
  };
  return (
    <WrapperContainer statusBarColor="black">
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView
          behavior={'padding'}
          style={{backgroundColor: 'black', flex: 1}}>
          <Header login="true" navigate={navigation} />
          <View style={{flex: 0.7, paddingTop: 50}}>
            <View style={{alignSelf: 'center', alignItems: 'flex-end'}}>
              {image ? (
                <Image
                  source={{uri: image}}
                  style={{height: 100, width: 100, borderRadius: 50}}></Image>
              ) : (
                <Image source={Path.userImage}></Image>
              )}
              <TouchableOpacity onPress={() => openGallary()}>
                <Image
                  source={Path.camera}
                  style={{marginTop: hp('-3%')}}></Image>
              </TouchableOpacity>
            </View>

            <TextInput
              mode="flat"
              theme={{
                colors: {
                  text: 'white',
                  primary: '#9CA6B6',
                  placeholder: '#9CA6B6',
                },
                fonts :{
                  regular : ''
                }
              }}
              label={'Username'}
              value={text}
              fontFamily = 'Poppins-Regular'
              onTouchStart={() => setIsclick(!isClick)}
              onChangeText={e => onChangeText(e)}
              style={[
                styles.inputStyle,
                {borderColor: nameErr ? '#D02B29' : '#117AF5'},
              ]}
            />

            {nameErr ? (
              <Text style={styles.errText}>
                Username already taken. Try another.
              </Text>
            ) : null}
          </View>
          <View
            style={{
              flex: 0.3,
              justifyContent: 'flex-end',
              marginBottom: '10%',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                margin: hp('1%'),
                marginTop: hp('5%'),
              }}>
              <View
                style={{
                  borderBottomColor: '#117AF5',
                  borderBottomWidth: 5,
                  width: '15%',
                  marginTop: 5,
                  marginLeft: 5,
                }}
              />
              <View
                style={{
                  borderBottomColor: '#117AF5',
                  borderBottomWidth: 5,
                  width: '15%',
                  marginTop: 5,
                  marginLeft: 5,
                }}
              />
            </View>
            <TouchableOpacity onPress={() => onUsernameApihit()}>
              <View
                style={{
                  backgroundColor: '#117AF5',
                  padding: 10,
                  borderRadius: 8,
                  width: wp('80%'),
                  alignSelf: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 14,
                    fontFamily: 'Poppins-Bold',
                    lineHeight: 28,
                  }}>
                  CONTINUE
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </WrapperContainer>
  );
};
export default SignupUsername;

const styles = StyleSheet.create({
  inputStyle: {
    marginHorizontal: 20,
    borderRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderWidth: 1.5,
    // borderColor: 'red',
    height: 56,
    fontSize: 14,
    marginTop: 30,
    backgroundColor: '#1F232E',
    overflow: 'hidden',
  },
  errText: {
    fontSize: 11,
    fontFamily: 'Poppins-Bold',
    marginTop: 8,
    marginHorizontal: 28,
    color: '#D02B29',
  },
});
