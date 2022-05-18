import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  FlatList
} from 'react-native';
import axios from 'axios';
import PhotoGrid from 'react-native-thumbnail-grid';
import ImagePicker from 'react-native-image-crop-picker';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../utility';
import * as Utility from '../../../utility/index';
import ImagePath from '../../../constants/Imagepath';
import ProfileHeader from '../../../components/profileHeader';
import WrapperContainer from '../../../components/WrapperContainer';
import ActionSheet from 'react-native-actions-sheet';
// import { ActivityIndicator } from 'react-native-paper';
const FollowProfile = ({navigation, route}) => {
  const [userImage, setUserImage] = useState();
  const {search_id}=route.params;
  console.log("search profile id is...",search_id);
  const [userName, setUserName] = useState();
  const [user_id, setUser_id] = useState();
  const [selectedTab, setSelectedTab] = useState('post');
  const [post,setPost]=useState([]);
  useEffect(() => {
    getUserData();
  }, []);
  const getUserData = async () => {
    var ProfileImage = await Utility.getFromLocalStorge('userProfile');
    setUserImage(ProfileImage);
    var UserName = await Utility.getFromLocalStorge('userName');
    var userId = await Utility.getFromLocalStorge('user_id');
    setUser_id(userId);
    console.log('user id is .././.', userId);
    setUserName(UserName);

    let body={
      "viewer_id":user_id,
      "user_id":search_id.customer_id
    }
    let response=await axios.post('http://13.233.246.19:9000/getProfileInfo',body);
    console.log("res...",response.data);
    if(response.data.code==200){
      console.log("Data mila.")
      setPost(response.data.posts)
    }


  };

  const bottomRef = useRef();
  const follow=async()=>{
    let body={
      "userId":search_id.customer_id,
      "entityId":user_id
    }
    console.log("user follow ",body);
    let response=await axios.post('http://13.233.246.19:9000/followUnfollowUser',body);
    
    console.log(response.data);
    if(response.data.code==200){
      // setFolloweMsg(response.data.msg);
    }
  }
  const reopsrtProfile=async()=>{
    let body={
      "userId":search_id.customer_id,
      "post_id":user_id,
      "report_for":"post"
    }
    let response=await axios.post('http://13.233.246.19:9000/report',body)
    console.log(response.data)
    if(response.data.code===200){
      bottomRef.current.setModalVisible(false)
    }
  }
  
  return (
    <WrapperContainer statusBarColor="#0D111C">
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#0D111C',
          paddingHorizontal: 25,
          paddingTop: 30,
          paddingBottom: 20,
        }}>
        <View
          style={{
            flex: 0.8,
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{flex: 0.1, justifyContent: 'center'}}
            onPress={() => navigation.goBack()}>
            <Image source={ImagePath.back} />
          </TouchableOpacity>
          <View style={{flex: 0.8, justifyContent: 'center'}}>
            <Text style={{color: 'white'}}>{search_id.name}</Text>
          </View>
        </View>
        <View
          style={{flex: 0.2, alignItems: 'flex-end', justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={() => bottomRef.current.setModalVisible(true)}>
            <Image source={ImagePath.menu} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={{backgroundColor: 'black', height: '100%'}}>
        <View
          style={{flexDirection: 'row', marginHorizontal: 20, marginTop: 25}}>
          {!userImage ? (
            <View>
              <Image
                source={ImagePath.userImage}
                style={{height: 100, width: 100, borderRadius: 50}}></Image>
            </View>
          ) : (
            <View>
              <Image
                source={{uri: userImage}}
                style={{height: 100, width: 100, borderRadius: 50}}></Image>
            </View>
          )}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              marginLeft: wp('10%'),
            }}>
            <TouchableOpacity>
              <View style={{alignItems: 'center'}}>
                <Text
                  style={{fontSize: 12, fontWeight: '400', color: '#9CA6B6'}}>
                  Collectibles
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: 'Poppins-Bold',
                    lineHeight: 24,
                    color: '#E9F0FA',
                  }}>
                  0
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Following')}>
              <View style={{alignItems: 'center', marginLeft: wp('3%')}}>
                <Text
                  style={{fontSize: 12, fontWeight: '400', color: '#9CA6B6'}}>
                  Followers
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: 'Poppins-Bold',
                    lineHeight: 24,
                    color: '#E9F0FA',
                  }}>
                  12
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Following')}>
              <View style={{alignItems: 'center', marginLeft: wp('3%')}}>
                <Text
                  style={{fontSize: 12, fontWeight: '400', color: '#9CA6B6'}}>
                  Following
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: 'Poppins-Bold',
                    lineHeight: 24,
                    color: '#E9F0FA',
                  }}>
                  47
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginHorizontal: 20, marginTop: 16}}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '500',
              color: '#E9F0FA',
              lineHeight: 28,
            }}>
            {search_id.name}
          </Text>
        </View>
        <View style={{marginHorizontal: 20, marginTop: 4}}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '100',
              color: '#9CA6B6',
              lineHeight: 20,
              fontFamily: 'Poppins-Regular',
            }}>
            Exceptions to the rule of face value b-eing higher than content
            value also content value also...more
          </Text>
        </View>
        <TouchableOpacity activeOpacity={0.8} onPress={()=>follow()}>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#117AF5',
              padding: 4,
              borderRadius: 10,
              marginHorizontal: 20,

              marginVertical: 20,
              backgroundColor: '#117AF5',
            }}>
            <Text
              style={{
                fontSize: 13,

                color: 'white',
                lineHeight: 28,
                alignSelf: 'center',
                fontFamily: 'Poppins-Bold',
              }}>
              FOLLOW
            </Text>
          </View>
        </TouchableOpacity>

        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <TouchableOpacity onPress={() => setSelectedTab('post')}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={ImagePath.Feed}
                style={{height: 18, width: 18}}></Image>
              <Text style={styles.mainText}>POSTS</Text>
            </View>
            {selectedTab == 'post' ? (
              <View>
                <View
                  style={{
                    borderBottomColor: 'white',
                    borderBottomWidth: 4,
                    borderRadius: 5,
                    width: '25%',
                    alignSelf: 'center',
                    marginTop: 5,
                  }}
                />
              </View>
            ) : null}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedTab('open')}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={ImagePath.Open}
                style={{height: 18, width: 18}}></Image>
              <Text style={styles.mainText}>OPEN</Text>
            </View>
            {selectedTab == 'open' ? (
              <View>
                <View
                  style={{
                    borderBottomColor: 'white',
                    borderBottomWidth: 4,
                    borderRadius: 5,
                    width: '25%',
                    alignSelf: 'center',
                    marginTop: 5,
                  }}
                />
              </View>
            ) : null}
          </TouchableOpacity>
        </View>
       
              <FlatList

data={post}
renderItem={({item,index}) => {

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
                    <TouchableOpacity>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'row',
                    }}>{item.user_image?
                    <Image source={{uri:item.user_image}}  style={{ height: 32, width: 32, borderRadius: 32 / 2 }}></Image>:<Image source={Path.userImage}  style={{ height: 32, width: 32, borderRadius: 32 / 2 }}></Image>}
                    <Text
                      style={{
                        color: '#E9F0FA',
                        marginLeft: '6%',
                        fontWeight: 'bold',
                        fontSize: 13,
                        lineHeight: 18,
                      }}>
                      {item.name}
                    </Text>
                  </View>
                  </TouchableOpacity>
                  <View
                    style={{
                      justifyContent: 'space-evenly',
                      alignItems: 'center',
                      flexDirection: 'row',
                      width: wp('21%'),
                    }}>
                      {item.isfollow=="0"?
                    <TouchableOpacity >
                      <Text
                        style={{
                          color: '#E9F0FA',
                          fontWeight: 'bold',
                          textDecorationLine: 'underline',
                          fontSize: 12,
                        }}>
                        UNFOLLOW
                      </Text>
                    </TouchableOpacity>:
                     <TouchableOpacity >
                     <Text
                       style={{
                         color: '#E9F0FA',
                         fontWeight: 'bold',
                         textDecorationLine: 'underline',
                         fontSize: 12,
                       }}>
                       FOLLOW
                     </Text>
                   </TouchableOpacity>}
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
                    {item.subcategory?
                  <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={['']}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={({item1, index}) => {
                      return (
                        <View style={styles.listStyle}>
                          <Text
                            style={{
                              color: '#E9F0FA',
                              fontWeight: '600',
                              fontSize: 11,
                            }}>
                            {item.subcategory}
                          </Text>
                        </View>
                      );
                    }}
                  />:null}
                </View>

                <View style={{marginHorizontal: 20}}>
                  <Text
                    style={{
                      color: '#E9F0FA',
                      fontSize: 16,
                      fontFamily: 'Poppins-Bold',
                    }}>
                   {item.title}
                  </Text>
                  <Text
                    style={{
                      color: '#E9F0FA',
                      fontSize: 16,
                      fontWeight: '300',
                      fontFamily: 'Poppins-Regular',
                    }}>
                    ${item.price}.0
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
                    {item.description}{' '}
                    {item.description && item.description.length >30?
                    <Text
                      style={{
                        textDecorationLine: 'underline',
                        color: 'white',
                        fontFamily: 'Poppins-Regular',
                      }}>
                      more
                    </Text>:null}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginHorizontal: 20,
                    justifyContent:'space-between',
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
                      <Text style={styles.innerBidderText}>{item.bids}</Text>
                    </View>
                  </View>
                  {/* <View style={{flex: 0.35, alignItems: 'center'}}>
                    <View>
                      <Text style={styles.bidingText}>Negotiating</Text>
                    </View>
                    <View style={styles.innerBider}>
                      <Image
                        source={Path.BidingMOney}
                        style={{height: 20, width: 20}}></Image>
                      <Text style={styles.innerBidderText}>5+</Text>
                    </View>
                  </View> */}
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
                    source={item.images}
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
                      <TouchableOpacity onPress={()=>likeDislikeApi(item)}>
                        {item.isliked=="1"?
                        <Image
                          source={Path.RedLike}
                          style={{height: 20, width: 22}}></Image>:
                          <Image
                          source={Path.like}
                          style={{height: 20, width: 22}}></Image>}
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
                          {item.likecount} Likes
                        </Text>
                      </View>
                    </View>

                    <View style={{marginLeft: 10}}>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('Comments', {itemId:item.post_id,login_user_id:login_user_id})}>
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
                          {item.commentcount} Comments
                        </Text>
                      </View>
                    </View>
                  </View>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('PostDetail',{item:item})}>
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
            )
          }}
          // onEndReached={getHomeListData(1,10,2)}
        // keyExtractor={(item, index) => index}
    />
       
         <View style={{alignSelf: 'center', marginTop: hp('15%')}}>
          <View>
            <Image source={ImagePath.Nopost}></Image>
          </View>
        </View>
        <View
          style={{alignSelf: 'center', alignItems: 'center', margin: hp('5%')}}>
          <Text
            style={{
              color: 'white',
              fontSize: 21,
              fontWeight: '700',
              lineHeight: 24,
            }}>
            No Collectible Posted
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 13,
              fontWeight: '400',
              lineHeight: 20,
              alignSelf: 'center',
            }}>
            Start posting to make your first trade possible!
          </Text>
        </View> 
        
      </ScrollView>

      <ActionSheet
        onClose={() => bottomRef.current.setModalVisible(false)}
        indicatorColor={'#4F5461'}
        statusBarTranslucent
        ref={bottomRef}>
        <View style={styles.bottomView}>
          <View style={styles.indicator} />
          <Text style={styles.settingText}>PROFILE SETTINGS</Text>
          <TouchableOpacity
            style={{
              marginTop: 25,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
            activeOpacity={0.8}
            onPress={() => reopsrtProfile()}>
            <Text style={styles.deleteText}>Report Profile</Text>
            <Image source={ImagePath.next} style={{height: 20, width: 20}} />
          </TouchableOpacity>
          {/* report post in case post is not of user */}
        </View>
      </ActionSheet>
    </WrapperContainer>
  );
};
export default FollowProfile;
const styles = StyleSheet.create({
  mainText: {
    fontSize: 13,
    fontFamily: 'Poppins-Bold',
    color: '#E9F0FA',
    marginLeft: '5%',
  },
  bottomView: {
    height: 120,
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
});
