import React, {useState, useEffect} from 'react';
import Header from '../../../components/Header';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
  Button,
  BackHandler,
} from 'react-native';
import * as Utility from '../../../utility/index';
import Path from '../../../constants/Imagepath';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../utility';
// import { BottomNavigation } from 'react-native-paper';
import ImagePicker from 'react-native-image-crop-picker';
import Modal from 'react-native-modal';
import {useFocusEffect} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import WrapperContainer from '../../../components/WrapperContainer';
import axios from 'axios';
const NewPost = ({navigation}) => {
  const [imageCount, setImageCount] = useState(0);
  const [imageStatus1, setImageStatus1] = useState(false);
  const [imageStatus2, setImageStatus2] = useState(false);
  const [imageStatus3, setImageStatus3] = useState(false);
  const [login_user_id, setlogin_user_id] = useState();
  const [imageStatus4, setImageStatus4] = useState(false);
  const [imageStatus5, setImageStatus5] = useState(false);
  const [imageStatus6, setImageStatus6] = useState(false);
  const [imageStatus7, setImageStatus7] = useState(false);
  const [imageStatus8, setImageStatus8] = useState(false);
  const [image1, setImage1] = useState();
  const [image2, setImage2] = useState();
  const [image3, setImage3] = useState();
  const [image4, setImage4] = useState();
  const [image5, setImage5] = useState();
  const [image6, setImage6] = useState();
  const [image7, setImage7] = useState();
  const [image8, setImage8] = useState();
  const [nextColor, setNextColor] = useState();
  const [checkBuy, setCheckBuy] = useState(false);
  const [checkExchage, setCheckExchage] = useState(false);
  const [allDonse, setAllDone] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [bid_status, setBid_status] = useState('open');
  const [bid, setBid] = useState();
  const [excahange, setExchange] = useState();
  const [bothbid, setBothBid] = useState();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const chooseImages = (setImage1, setImageStatus) => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        console.log('image,,,', image.path);

        setImage1(image.path);
        setImageStatus(true);
      })
      .catch(err => {
        console.log('err', err);
      });
  };
  const postCreateApi = async () => {
    // if (
    //   image1 &&
    //   image2 &&
    //   image3 &&
    //   image4
    //   // image5 &&
    //   // image6 &&
    //   // image7 &&
    //   // image8
    // ) {
    //   setNextColor();
    // }
    // let body = {
    //   pic1: image1,
    //   pic2: image2,
    //   pic3: image3,
    //   pic4: image4,
    //   pic5: image5,
    //   pic6: image6,
    //   pic7: image7,
    //   pic8: image8,
    //   title: title,
    //   userId: login_user_id,
    //   description: description,
    //   bid_status: bid_status,
    //   price: price,
    // };
    let data = new FormData();
    data.append('title', 'title');
    data.append('userId', '6');
    data.append('description', 'vikkkkkas post');
    data.append('bid_status', 'open');
    data.append('price', '100');
    data.append('bid_exchange', 'both');

    data.append('pic1', {
      uri: image1,
      name: 'image.jpeg',
      type: 'image/jpeg',
    });
    // data.append('pic2', {
    //   uri: image2,
    //   name: 'iamge.jpg',
    //   type: 'image/jpg',
    // });
    // data.append('pic3', {
    //   uri: image3,
    // name: 'iamge.jpg',
    //   type: 'image/jpg',
    // });
    // data.append('pic4', {
    //   uri: image4,
    //   name: 'iamge.jpg',
    //   type: 'image/jpg',
    // });
    // data.append('pic5', {
    //   uri: image5,
    //   name: 'iamge.jpg',
    //   type: 'image/jpg',
    // });
    // data.append('pic6', {
    //   uri: image6,
    //   name: 'iamge.jpg',
    //   type: 'image/jpg',
    // });
    // data.append('pic7', {
    //   uri: image7,
    //   name: 'iamge.jpg',
    //   type: 'image/jpg',
    // });
    // data.append('pic8', {
    //   uri: image8,
    //   name: 'iamge.jpg',
    //   type: 'image/jpg',
    // });

    await axios({
      url: 'http://13.233.246.19:9000/createPost',
      method: 'POST',
      data: data,
      headers: {'Content-Type': 'multipart/form-data'},
    })
      .then(response => {
        if (response.data.code === 200) {
          navigation.navigate('PostCategory');
        }
      })
      .catch(error => {
        console.log(error, 'wfkjndsf');
      });
  };
  const backAction = () => {
    console.log('Back button pressed');
    setModalVisible(!isModalVisible);
  };
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        setModalVisible(!isModalVisible);
        // navigation.navigate({'BottomTab'});
        // Return true to stop default back navigaton
        // Return false to keep default back navigaton
        return true;
      };

      // Add Event Listener for hardwareBackPress
      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => {
        // Once the Screen gets blur Remove Event Listener
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
      };
    }, []),
  );
  useEffect(() => {}, [isModalVisible]);
  const DiscardPost = () => {
    // setImageStatus1()
    setImage1('');
    setImage2('');
    setImage3('');
    setImage4('');
    setImage4('');
    setImage5('');
    setImage6('');
    setImage7('');
    setImage8('');
    setImageStatus2(false);
    setImageStatus3(false);
    setImageStatus4(false);
    setImageStatus5(false);
    setImageStatus6(false);
    setImageStatus7(false);
    setImageStatus8(false);

    setModalVisible(!isModalVisible);
  };
  useEffect(() => {
    getuserIdfromStorage();
  }, []);
  const getuserIdfromStorage = async () => {
    let user_id = await Utility.getFromLocalStorge('user_id');
    setlogin_user_id(user_id);
  };
  return (
    <WrapperContainer statusBarColor="#0D111C">
      <Header
        login="true"
        hideLogo="true"
        textData=" Post"
        navigate={navigation}
        backgroundColor="#0D111C"
      />

      <ScrollView
        style={{height: '100%', width: '100%', backgroundColor: 'black'}}>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            margin: hp('1%'),
          }}>
          <View
            style={{
              borderBottomColor: '#117AF5',
              borderBottomWidth: 5,
              width: '17%',
              marginTop: 5,
            }}
          />

          <View
            style={{
              borderBottomColor: '#117AF530',
              borderBottomWidth: 5,
              width: '15%',
              marginTop: 5,
              marginLeft: 5,
            }}
          />
        </View>

        <View style={styles.designleft}>
          <Text style={{color: '#9CA6B6', fontFamily: 'Poppins-SemiBold'}}>
            ADD IMAGES{' '}
            <Text style={{fontFamily: 'Poppins-Regular'}}>{imageCount}/8</Text>{' '}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: hp('2%'),
          }}>
          <View
            style={{
              height: hp('9%'),
              borderWidth: 1,
              borderColor: '#117AF5',
              width: wp('20%'),
              borderRadius: 10,
              backgroundColor: '#161F37',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {image1 ? (
              <Image
                source={{uri: image1}}
                style={{height: 66, width: 70, borderRadius: 10}}></Image>
            ) : (
              <TouchableOpacity
                onPress={() => chooseImages(setImage1, setImageStatus2)}>
                <Image source={Path.Plus1}></Image>
              </TouchableOpacity>
            )}
          </View>
          <View
            style={
              imageStatus2
                ? {
                    height: hp('9%'),
                    borderWidth: 1,
                    borderColor: '#117AF5',
                    width: wp('20%'),
                    borderRadius: 10,
                    backgroundColor: '#161F37',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }
                : {
                    height: hp('9%'),
                    borderWidth: 1,
                    borderColor: '#465874',
                    width: wp('20%'),
                    borderRadius: 10,
                    flexDirection: 'row',
                  }
            }>
            {imageStatus2 ? (
              <View>
                {image2 ? (
                  <Image
                    source={{uri: image2}}
                    style={{height: 66, width: 70, borderRadius: 10}}></Image>
                ) : (
                  <TouchableOpacity
                    onPress={() => chooseImages(setImage2, setImageStatus3)}>
                    <Image source={Path.Plus1}></Image>
                  </TouchableOpacity>
                )}
              </View>
            ) : null}
          </View>
          <View
            style={
              imageStatus3
                ? {
                    height: hp('9%'),
                    borderWidth: 1,
                    borderColor: '#117AF5',
                    width: wp('20%'),
                    borderRadius: 10,
                    backgroundColor: '#161F37',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }
                : {
                    height: hp('9%'),
                    borderWidth: 1,
                    borderColor: '#465874',
                    width: wp('20%'),
                    borderRadius: 10,
                    flexDirection: 'row',
                  }
            }>
            {imageStatus3 ? (
              <View>
                {image3 ? (
                  <Image
                    source={{uri: image3}}
                    style={{height: 66, width: 70, borderRadius: 10}}></Image>
                ) : (
                  <TouchableOpacity
                    onPress={() => chooseImages(setImage3, setImageStatus4)}>
                    <Image source={Path.Plus1}></Image>
                  </TouchableOpacity>
                )}
              </View>
            ) : null}
          </View>
          <View
            style={
              imageStatus4
                ? {
                    height: hp('9%'),
                    borderWidth: 1,
                    borderColor: '#117AF5',
                    width: wp('20%'),
                    borderRadius: 10,
                    backgroundColor: '#161F37',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }
                : {
                    height: hp('9%'),
                    borderWidth: 1,
                    borderColor: '#465874',
                    width: wp('20%'),
                    borderRadius: 10,
                    flexDirection: 'row',
                  }
            }>
            {imageStatus4 ? (
              <View>
                {image4 ? (
                  <Image
                    source={{uri: image4}}
                    style={{height: 66, width: 70, borderRadius: 10}}></Image>
                ) : (
                  <TouchableOpacity
                    onPress={() => chooseImages(setImage4, setImageStatus5)}>
                    <Image source={Path.Plus1}></Image>
                  </TouchableOpacity>
                )}
              </View>
            ) : null}
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: wp('5%'),
          }}>
          <View
            style={
              imageStatus5
                ? {
                    height: hp('9%'),
                    borderWidth: 1,
                    borderColor: '#117AF5',
                    width: wp('20%'),
                    borderRadius: 10,
                    backgroundColor: '#161F37',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }
                : {
                    height: hp('9%'),
                    borderWidth: 1,
                    borderColor: '#465874',
                    width: wp('20%'),
                    borderRadius: 10,
                    flexDirection: 'row',
                  }
            }>
            {imageStatus5 ? (
              <View>
                {image5 ? (
                  <Image
                    source={{uri: image5}}
                    style={{height: 66, width: 70, borderRadius: 10}}></Image>
                ) : (
                  <TouchableOpacity
                    onPress={() => chooseImages(setImage5, setImageStatus6)}>
                    <Image source={Path.Plus1}></Image>
                  </TouchableOpacity>
                )}
              </View>
            ) : null}
          </View>
          <View
            style={
              imageStatus6
                ? {
                    height: hp('9%'),
                    borderWidth: 1,
                    borderColor: '#117AF5',
                    width: wp('20%'),
                    borderRadius: 10,
                    backgroundColor: '#161F37',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }
                : {
                    height: hp('9%'),
                    borderWidth: 1,
                    borderColor: '#465874',
                    width: wp('20%'),
                    borderRadius: 10,
                    flexDirection: 'row',
                  }
            }>
            {imageStatus6 ? (
              <View>
                {image6 ? (
                  <Image
                    source={{uri: image6}}
                    style={{height: 66, width: 70, borderRadius: 10}}></Image>
                ) : (
                  <TouchableOpacity
                    onPress={() => chooseImages(setImage6, setImageStatus7)}>
                    <Image source={Path.Plus1}></Image>
                  </TouchableOpacity>
                )}
              </View>
            ) : null}
          </View>
          <View
            style={
              imageStatus7
                ? {
                    height: hp('9%'),
                    borderWidth: 1,
                    borderColor: '#117AF5',
                    width: wp('20%'),
                    borderRadius: 10,
                    backgroundColor: '#161F37',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }
                : {
                    height: hp('9%'),
                    borderWidth: 1,
                    borderColor: '#465874',
                    width: wp('20%'),
                    borderRadius: 10,
                    flexDirection: 'row',
                  }
            }>
            {imageStatus7 ? (
              <View>
                {image7 ? (
                  <Image
                    source={{uri: image7}}
                    style={{height: 66, width: 70, borderRadius: 10}}></Image>
                ) : (
                  <TouchableOpacity
                    onPress={() => chooseImages(setImage7, setImageStatus8)}>
                    <Image source={Path.Plus1}></Image>
                  </TouchableOpacity>
                )}
              </View>
            ) : null}
          </View>
          <View
            style={
              imageStatus8
                ? {
                    height: hp('9%'),
                    borderWidth: 1,
                    borderColor: '#117AF5',
                    width: wp('20%'),
                    borderRadius: 10,
                    backgroundColor: '#161F37',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }
                : {
                    height: hp('9%'),
                    borderWidth: 1,
                    borderColor: '#465874',
                    width: wp('20%'),
                    borderRadius: 10,
                    flexDirection: 'row',
                  }
            }>
            {imageStatus8 ? (
              <View>
                {image8 ? (
                  <Image
                    source={{uri: image8}}
                    style={{height: 66, width: 70, borderRadius: 10}}></Image>
                ) : (
                  <TouchableOpacity
                    onPress={() => chooseImages(setImage8, setAllDone)}>
                    <Image source={Path.Plus1}></Image>
                  </TouchableOpacity>
                )}
              </View>
            ) : null}
          </View>
        </View>
        <View style={styles.designleft}>
          <TextInput
            placeholder="Collectible Name"
            placeholderTextColor="#9CA6B6"
            onChangeText={e => setTitle(e)}
            style={{
              borderBottomWidth: 1,
              borderColor: '#9CA6B6',
              color: '#9CA6B6',
              width: wp('90%'),
              height: 44,
              marginTop: 10,
            }}></TextInput>
        </View>
        <View style={styles.designleft}>
          <TextInput
            placeholder="Short Description"
            placeholderTextColor="#9CA6B6"
            onChangeText={text => setDescription(text)}
            style={{
              borderBottomWidth: 1,
              borderColor: '#9CA6B6',
              color: '#9CA6B6',
              width: wp('90%'),
              height: 44,
              marginTop: 10,
            }}></TextInput>
        </View>

        <View style={[styles.designleft, styles.designTop]}>
          <Text style={[styles.textColor, {fontFamily: 'Poppins-SemiBold'}]}>
            POST FOR :
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: wp('80%'),
            marginTop: hp('2%'),
          }}>
          <View style={styles.designTop}>
            <TouchableOpacity onPress={() => setCheckBuy(!checkBuy)}>
              <View
                style={
                  checkBuy == false
                    ? {
                        height: 20,
                        width: 20,
                        borderWidth: 1,
                        borderColor: '#465874',
                        borderRadius: 4,
                      }
                    : {
                        height: 20,
                        width: 20,
                        borderWidth: 1,
                        borderColor: '#465874',
                        backgroundColor: '#117AF5',
                        borderRadius: 4,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }
                }>
                {checkBuy ? (
                  <Image
                    source={Path.Tick}
                    style={{
                      marginLeft: wp('-1%'),
                      height: 7,
                      width: 10,
                    }}></Image>
                ) : null}
              </View>
            </TouchableOpacity>
            <View style={{marginLeft: wp('2%')}}>
              <Text
                style={
                  checkBuy == false
                    ? styles.textColor
                    : {
                        color: 'white',
                        fontSize: 14,
                        fontFamily: 'Poppins-Regular',
                        lineHeight: 24,
                      }
                }>
                Sell
              </Text>
            </View>
          </View>
          <View style={styles.designTop}>
            <TouchableOpacity onPress={() => setCheckExchage(!checkExchage)}>
              <View
                style={
                  checkExchage == false
                    ? {
                        height: 20,
                        width: 20,
                        borderWidth: 1,
                        borderColor: '#465874',
                        borderRadius: 5,
                      }
                    : {
                        height: 20,
                        width: 20,
                        borderWidth: 1,
                        borderColor: '#465874',
                        backgroundColor: '#117AF5',
                        borderRadius: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }
                }>
                {checkExchage ? (
                  <Image
                    source={Path.Tick}
                    style={{
                      marginLeft: wp('-1%'),
                      height: 7,
                      width: 10,
                    }}></Image>
                ) : null}
              </View>
            </TouchableOpacity>
            <View style={{marginLeft: wp('2%')}}>
              <Text
                style={
                  checkExchage == false
                    ? styles.textColor
                    : {
                        color: 'white',
                        fontSize: 14,
                        fontFamily: 'Poppins-Regular',
                        lineHeight: 24,
                      }
                }>
                Exchange
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: hp('4%'),
            width: wp('90%'),
          }}>
          <View style={{width: wp('30%'), marginLeft: wp('5%')}}>
            <Text onPress={() => toggleModal()} style={styles.textColor}>
              Set you price:
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#1F232E',
              width: wp('60%'),
              borderRadius: 5,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: 44,
            }}>
            <View style={{marginLeft: wp('3%'), width: wp('10%')}}>
              <Text style={styles.textColor}>$ |</Text>
            </View>
            <View style={{marginRight: wp('3%')}}>
              <TextInput
                placeholder="00.00"
                placeholderTextColor="#9CA6B6"
                keyboardType="number-pad"
                onChangeText={e => setPrice(e)}
                style={{color: 'white'}}></TextInput>
            </View>
          </View>
        </View>

        <TouchableOpacity onPress={() => postCreateApi()}>
          <View
            style={{
              backgroundColor: '#2D313B',
              borderRadius: 10,
              alignItems: 'center',
              height: 48,
              marginHorizontal: 20,
              justifyContent: 'center',
              marginTop: 50,
              marginBottom: 20,
            }}>
            <Text style={styles.textColor}>NEXT</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>

      <Modal isVisible={isModalVisible} transparent={true}>
        <View
          style={{
            backgroundColor: '#1F232E',
            height: hp('23%'),
            width: wp('70%'),
            borderRadius: 10,
            alignSelf: 'center',
          }}>
          <View style={{alignSelf: 'center'}}>
            <Image
              source={Path.ModalImage}
              style={{height: 40, width: 40}}></Image>
          </View>
          <View style={{alignSelf: 'center'}}>
            <Text
              style={{
                color: '#E9F0FA',
                fontSize: 20,
                fontWeight: '700',
                lineHeight: 28,
              }}>
              Discard post?
            </Text>
          </View>
          <View style={{alignSelf: 'center'}}>
            <Text style={{color: '#9CA6B6', fontSize: 14, fontWeight: '300'}}>
              You’ll have to start all over again
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: hp('2%')}}>
            <TouchableOpacity onPress={() => toggleModal()}>
              <View
                style={{
                  backgroundColor: '#2E3853',
                  padding: 10,
                  width: wp('35%'),
                  alignItems: 'center',
                  borderBottomLeftRadius: 10,
                }}>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: '600',
                    lineHeight: 20,
                    color: '#E9F0FA',
                  }}>
                  NO
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => DiscardPost()}>
              <View
                style={{
                  backgroundColor: '#D02B29',
                  padding: 10,
                  width: wp('35%'),
                  alignItems: 'center',
                  borderBottomRightRadius: 10,
                }}>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: '600',
                    lineHeight: 20,
                    color: '#E9F0FA',
                  }}>
                  DISCARD
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </WrapperContainer>
  );
};

export default NewPost;

const styles = StyleSheet.create({
  textColor: {
    color: '#646E7A',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    lineHeight: 24,
  },
  designleft: {
    marginLeft: wp('5%'),
    marginTop: hp('2%'),
  },
  designTop: {
    flexDirection: 'row',
    marginLeft: hp('3%'),
  },
  textInput: {
    color: 'white',
  },
});
/*  */
