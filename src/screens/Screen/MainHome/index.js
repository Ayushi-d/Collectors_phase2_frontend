import React, {useState, useRef, useEffect} from 'react';
import Homeheader from '../../../components/Homeheader';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  Alert,
  BackHandler,
  RefreshControl,
  Dimensions,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import Path from '../../../constants/Imagepath';
import ReadMore from '@fawazahmed/react-native-read-more';
import FbGrid from 'react-native-fb-image-grid';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  addAlpha,
} from '../../../utility';
import RBSheet from 'react-native-raw-bottom-sheet';
import PhotoGrid from 'react-native-thumbnail-grid';
import ActionSheet from 'react-native-actions-sheet';
const MainHome = ({navigation}) => {
  const [HomeData, setHomeData] = useState([{id: 1}, {id: 2}, {id: 3}]);
  const [modalVisible, setModalVisible] = useState(false);
  const refRBSheet = useRef();

  const [refresh, setRefresh] = useState(false);
  const onPress = (url, index, event) => {};
  // useEffect(() => {
  //   const backAction = () => {
  //     Alert.alert("Hold on!", "Are you sure you want to go back?", [
  //       {
  //         text: "Cancel",
  //         onPress: () => null,
  //         style: "cancel"
  //       },
  //       { text: "YES", onPress: () => BackHandler.exitApp() }
  //     ]);
  //     return true;
  //   };

  //   const backHandler = BackHandler.addEventListener(
  //     "hardwareBackPress",
  //     backAction
  //   );

  //   return () => backHandler.remove();
  // }, []);

  const bottomRef = useRef();

  const handleRefresh = () => {
    setRefresh(true);
    setTimeout(() => {
      setRefresh(false);
    }, 2000);
  };

  const images = [
    {
      uri: 'https://cdn.pixabay.com/photo/2017/06/09/09/39/adler-2386314_960_720.jpg',
    },
    {
      uri: 'https://cdn.pixabay.com/photo/2016/08/12/22/34/apple-1589869_960_720.jpg',
    },
    {
      uri: 'https://cdn.pixabay.com/photo/2016/08/12/22/34/apple-1589869_960_720.jpg',
    },
    {
      uri: 'https://cdn.pixabay.com/photo/2016/08/12/22/34/apple-1589869_960_720.jpg',
    },
    {
      uri: 'https://cdn.pixabay.com/photo/2016/08/12/22/34/apple-1589869_960_720.jpg',
    },
    {
      uri: 'https://cdn.pixabay.com/photo/2016/08/12/22/34/apple-1589869_960_720.jpg',
    },
    {
      uri: 'https://cdn.pixabay.com/photo/2016/08/12/22/34/apple-1589869_960_720.jpg',
    },
    {
      uri: 'https://cdn.pixabay.com/photo/2016/08/12/22/34/apple-1589869_960_720.jpg',
    },
    {
      uri: 'https://cdn.pixabay.com/photo/2016/08/12/22/34/apple-1589869_960_720.jpg',
    },
  ];

  const ShowImage = itm => {
    console.log(itm, 'sdlfnlsdj');
  };

  const width = Dimensions.get('window').width;
  return (
    <View style={styles.containerStyle}>
      <Homeheader
        showNotification={false}
        navigate={() => navigation.navigate('Search')}
        navigate1={() => navigation.navigate('Notification')}
      />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={handleRefresh} />
        }
        showsVerticalScrollIndicator={false}>
        <View style={{marginBottom: 20}}>
          {HomeData.length > 0
            ? HomeData.map((item, index) => {
                return (
                  <View key={index}>
                    <View
                      style={{
                        marginTop: 30,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginHorizontal: 20,
                      }}>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          flexDirection: 'row',
                        }}>
                        <Image source={Path.Profile}></Image>
                        <Text
                          style={{
                            color: '#E9F0FA',
                            marginLeft: '6%',
                            fontWeight: 'bold',
                            fontSize: 13,
                            lineHeight: 18,
                          }}>
                          liamnorris
                        </Text>
                      </View>
                      <View
                        style={{
                          justifyContent: 'space-evenly',
                          alignItems: 'center',
                          flexDirection: 'row',
                          width: wp('21%'),
                        }}>
                        <TouchableOpacity>
                          <Text
                            style={{
                              color: '#E9F0FA',
                              fontWeight: 'bold',
                              textDecorationLine: 'underline',
                              fontSize: 12,
                            }}>
                            FOLLOW
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => refRBSheet.current.open()}
                          style={{marginLeft: wp('1%')}}>
                          <Image source={Path.menu}></Image>
                        </TouchableOpacity>
                      </View>
                    </View>

                    <View
                      style={{
                        marginHorizontal: 20,
                        marginTop: 25,
                        marginBottom: 18,
                      }}>
                      <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={['', '']}
                        keyExtractor={(_, index) => index.toString()}
                        renderItem={({item, index}) => {
                          return (
                            <View style={styles.listStyle}>
                              <Text
                                style={{
                                  color: '#E9F0FA',
                                  fontWeight: '600',
                                  fontSize: 11,
                                }}>
                                Coinssss
                              </Text>
                            </View>
                          );
                        }}
                      />
                    </View>

                    <View style={{marginHorizontal: 20}}>
                      <Text
                        style={{
                          color: '#E9F0FA',
                          fontSize: 16,
                          fontFamily: 'Poppins-Bold',
                        }}>
                        Old Coin Collection
                      </Text>
                      <Text
                        style={{
                          color: '#E9F0FA',
                          fontSize: 16,
                          fontWeight: '300',
                          fontFamily: 'Poppins-Regular',
                        }}>
                        $1000
                      </Text>
                    </View>
                    <View style={{marginHorizontal: 20}}>
                      <Text
                        style={{
                          color: '#9CA6B6',
                          fontWeight: 'bold',
                          fontSize: 13,
                          fontWeight: '400',
                          lineHeight: 20,
                        }}>
                        Exceptions to the rule of face value b-eing higher than
                        content value also content value also...{' '}
                        <Text
                          style={{
                            textDecorationLine: 'underline',
                            color: 'white',
                            fontFamily: 'Poppins-Regular',
                          }}>
                          more
                        </Text>
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',

                        marginHorizontal: 20,
                        marginTop: 10,
                        marginBottom: 20,
                      }}>
                      <View
                        style={{
                          flex: 0.35,
                        }}>
                        <View>
                          <Text style={styles.bidingText}>Bidding</Text>
                        </View>
                        <View style={styles.innerBider}>
                          <Image
                            source={Path.BidingMOney}
                            style={{height: 20, width: 20}}
                          />
                          <Text style={styles.innerBidderText}>OPEN</Text>
                        </View>
                      </View>
                      <View style={{flex: 0.35, alignItems: 'center'}}>
                        <View>
                          <Text style={styles.bidingText}>Negotiating</Text>
                        </View>
                        <View style={styles.innerBider}>
                          <Image
                            source={Path.BidingMOney}
                            style={{height: 20, width: 20}}></Image>
                          <Text style={styles.innerBidderText}>5+</Text>
                        </View>
                      </View>
                      <View style={{flex: 0.35, alignItems: 'flex-end'}}>
                        <View>
                          <Text style={styles.bidingText}>Bidders</Text>
                        </View>
                        <View style={styles.innerBider}>
                          <Image
                            source={Path.BidingUsers}
                            style={{height: 20, width: 20}}></Image>
                          <Text style={styles.innerBidderText}>50+</Text>
                        </View>
                      </View>
                    </View>
                    <View
                      style={{
                        marginLeft: 10,
                        marginRight: 10,
                        borderWidth: 0.4,
                        borderColor: 'white',
                        borderRadius: 20,
                        overflow: 'hidden',
                      }}>
                      <PhotoGrid
                        height={300}
                        width={width}
                        source={images}
                        imageStyle={{overflow: 'hidden'}}
                        onPressImage={source => ShowImage(source.uri)}
                      />
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 20,
                        marginHorizontal: 20,
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',

                          flex: 0.5,
                        }}>
                        <View>
                          <TouchableOpacity>
                            <Image
                              source={Path.like}
                              style={{height: 20, width: 22}}></Image>
                          </TouchableOpacity>
                          <View>
                            <Text
                              style={{
                                color: '#9CA6B6',
                                fontWeight: 'bold',
                                fontSize: 12,
                                fontWeight: '400',
                                marginTop: 10,
                              }}>
                              324 Likes
                            </Text>
                          </View>
                        </View>

                        <View style={{marginLeft: 10}}>
                          <TouchableOpacity onPress={()=>navigation.navigate('Comments')} >
                            <Image
                              source={Path.Chat}
                              style={{height: 20, width: 20}}></Image>
                          </TouchableOpacity>
                          <View>
                            <Text
                              style={{
                                color: '#9CA6B6',
                                fontWeight: 'bold',
                                fontSize: 12,
                                fontWeight: '400',
                                marginTop: 10,
                              }}>
                              96 Comments
                            </Text>
                          </View>
                        </View>
                      </View>
                      <TouchableOpacity onPress={()=>navigation.navigate('PostDetail')} >
                        <View
                          style={{
                            borderWidth: 1,
                            borderColor: '#465874',
                            padding: 12,
                            borderRadius: 10,
                          }}>
                          <Text
                            style={{
                              color: '#E9F0FA',
                              fontWeight: 'bold',
                              fontSize: 12,
                              fontWeight: '400',
                              lineHeight: 18,
                            }}>
                            EXPAND BID
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              })
            : null}
        </View>
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={true}
          height={100}
          customStyles={{
            wrapper: {
              backgroundColor: 'transparent',
            },
            container: {
              backgroundColor: 'black',
            },
          }}>
          <View style={{backgroundColor: 'black'}}>
            <View>
              <Text
                style={{
                  fontSize: 13,
                  color: '#9CA6B6',
                  fontFamily: 'Poppins-Bold',
                  textAlign: 'center',
                }}>
                POST SETTINGS
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => setModalVisible(!modalVisible)}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: wp('90%'),
                alignSelf: 'center',
                marginTop: 10,
              }}>
              <Text
                style={{
                  color: '#E9F0FA',
                  fontSize: 14,
                  fontFamily: 'Poppins-Regular',
                  lineHeight: 22,
                }}>
                Report Post
              </Text>

              <Image source={Path.backReverse}></Image>
            </TouchableOpacity>
          </View>
        </RBSheet>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => console.log('dkfjbdk')}>
          <View style={{flex: 1}}>
            <View
              style={{
                alignSelf: 'center',
                marginTop: hp('50%'),
                borderRadius: 10,
              }}>
              <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                <View
                  style={{
                    width: wp('12%'),
                    backgroundColor: '#30B754',
                    alignItems: 'center',
                    borderTopLeftRadius: 20,
                    borderBottomLeftRadius: 20,
                    justifyContent: 'center',
                  }}>
                  <Image source={Path.CheckImage}></Image>
                </View>
                <View
                  style={{
                    width: wp('70%'),
                    padding: 5,
                    backgroundColor: 'black',
                    borderTopRightRadius: 20,
                    borderBottomEndRadius: 20,
                  }}>
                  <Text
                    style={{
                      color: '#9CA6B6',
                      fontSize: 12,
                      fontWeight: '400',
                      lineHeight: 22,
                    }}>
                    This post has been reported by you. We’ll verify and work on
                    it. Thanks!
                  </Text>
                  <TouchableOpacity
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text
                      style={{
                        color: 'white',
                        fontWeight: '600',
                        fontSize: 13,
                        lineHeight: 19,
                      }}>
                      UNDO
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>

    
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#00040E',
    flex: 1,
  },
  buttonStyle: {
    borderWidth: 0.5,
    borderColor: '#465874',
    borderRadius: 12,
    padding: 5,
  },
  root: {
    // flex: 1,
    padding: 16,
  },
  textStyle: {
    fontSize: 14,
    color: '#E9F0FA',
    // padding: 5
  },
  bidingText: {
    color: '#9CA6B6',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
  },
  innerBider: {
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: 5,
  },
  innerBidderText: {
    color: '#E9F0FA',
    fontSize: 12,
    fontWeight: '400',
    marginLeft: '10%',
  },
  listStyle: {
    height: 24,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#465874',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
});
export default MainHome;
