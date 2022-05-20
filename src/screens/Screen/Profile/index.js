import React, {useEffect, useState} from 'react';
// import Homeheader from '../../../components/Homeheader';
import ProfileHeader from '../../../components/profileHeader';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions

} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../../utility';
import PhotoGrid from 'react-native-thumbnail-grid';
import Path from '../../../constants/Imagepath';
import * as Utility from '../../../utility/index';
import { useIsFocused } from '@react-navigation/native';
import {addAlpha} from '../../../utility/index';
import WrapperContainer from '../../../components/WrapperContainer';
import axios from 'axios';
const Profile = ({navigation}) => {
  const [userImage, setUserImage] = useState();
  const isFocused = useIsFocused();
  const [userName, setUserName] = useState();
  const [user_id, setUser_id] = useState();
  const [userBio,setUserBio]=useState();
  const [selectedTab, setSelectedTab] = useState('post');
  const [loader,setLoader]=useState(false);
  const [userFollow,setuserFollow]=useState();
  const [userFollowing,setUserFollowing]=useState();
  const [userCollectives,setUserCollectives]=useState();
  const [post,setPosts]=useState([]);
  const width = Dimensions.get('window').width;
  useEffect(() => {
    getUserData();
  }, [isFocused]);
  const getUserData = async () => {
    setLoader(true);
    var ProfileImage = await Utility.getFromLocalStorge('userProfile');
    setUserImage(ProfileImage);
    var UserName = await Utility.getFromLocalStorge('userName');
    var userId = await Utility.getFromLocalStorge('user_id');
    let body={
      "user_id":userId
    }
    console.log("profile user id is ..",body)
    let response=await axios.post('http://13.233.246.19:9000/getUserInfo',body);
    console.log(response);
    if(response.data.code=="200"){
      setUserName(response.data.userDetails.name);
      setUserBio(response.data.userDetails.bio)
      setUser_id(response.data.userDetails.customer_id)
      setUserFollowing(response.data.userDetails.following);
      setuserFollow(response.data.userDetails.followers);
      setUserCollectives('2')
      setUserCollectives(response.data.userDetails.posts.length);
      if(response.data.userDetails.posts.length>0){
        setPosts(response.data.userDetails.posts)
      }
    }
    // setUser_id(userId);
    // console.log('user id is .././.', userId);
    // setUserName(UserName);

  };
  return (
    <WrapperContainer statusBarColor='#0D111C'>
      <ProfileHeader navigate={() => navigation.navigate('SettingScreen')} name={userName} />
      <ScrollView style={{backgroundColor: 'black', height: '100%'}}>
        <View
          style={{flexDirection: 'row', marginHorizontal: 20, marginTop: 25}}>
          <View style={{flex: 0.35}}>
            {!userImage ? (
              <View>
                <Image
                  source={Path.userImage}
                  style={{height: 100, width: 100, borderRadius: 50}}></Image>
              </View>
            ) : (
              <View>
                <Image
                  source={{uri: userImage}}
                  style={{height: 100, width: 100, borderRadius: 50}}></Image>
              </View>
            )}
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',

              flex: 0.65,
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
                  {userCollectives}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Following')}>
              <View style={{alignItems: 'center'}}>
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
                 {userFollow}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Following')}>
              <View style={{alignItems: 'center'}}>
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
                  {userFollowing}
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
            {userName}
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
           {userBio}
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() =>
            navigation.navigate('EditProfile', {user_id:user_id })
          }>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#465874',
              padding: 4,
              borderRadius: 10,
              marginHorizontal: 20,
              // marginTop: 20,
              marginVertical: 20,
            }}>
            <Text
              style={{
                fontSize: 13,
                fontWeight: '600',
                color: 'white',
                lineHeight: 28,
                alignSelf: 'center',
              }}>
              EDIT PROFILE
            </Text>
          </View>
        </TouchableOpacity>

        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <TouchableOpacity onPress={() => setSelectedTab('post')}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={Path.Feed}
                style={{
                  height: 18,
                  width: 18,
                  tintColor:
                    selectedTab === 'post' ? 'white' : addAlpha('#E9F0FA', 0.5),
                }}></Image>
              <Text
                style={
                  selectedTab === 'post'
                    ? styles.mainText
                    : styles.selectedMainText
                }>
                POSTS
              </Text>
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
                source={Path.Open}
                style={{
                  height: 18,
                  width: 18,
                  tintColor:
                    selectedTab === 'open' ? 'white' : addAlpha('#E9F0FA', 0.5),
                }}
              />
              <Text
                style={
                  selectedTab === 'open'
                    ? styles.mainText
                    : styles.selectedMainText
                }>
                OPEN
              </Text>
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
          <TouchableOpacity onPress={() => setSelectedTab('bids')}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={Path.Bids}
                style={{
                  height: 18,
                  width: 18,
                  tintColor:
                    selectedTab === 'bids' ? 'white' : addAlpha('#E9F0FA', 0.5),
                }}
              />
              <Text
                style={
                  selectedTab === 'bids'
                    ? styles.mainText
                    : styles.selectedMainText
                }>
                BIDS
              </Text>
            </View>
            {selectedTab == 'bids' ? (
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
        {
          post.length>0?
          post.map((item,index)=>{
            return (
              <View key={index}>
                {/* <View
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
                      }}>{item.user_image ?
                        <Image source={{ uri: item.user_image }} style={{ height: 32, width: 32, borderRadius: 32 / 2 }}></Image> : <Image source={Path.userImage} style={{ height: 32, width: 32, borderRadius: 32 / 2 }}></Image>}
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
                    {item.isfollow == "0" ?
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
                      </TouchableOpacity> :
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
                      style={{ marginLeft: wp('1%') }}>
                      <Image source={Path.menu}></Image>
                    </TouchableOpacity>
                  </View>
                </View> */}

                <View
                  style={{
                    marginHorizontal: 20,
                    marginTop: 25,
                    marginBottom: 18,
                    borderWidth:1,
                    borderColor:'white',
                    width:wp('30%'),
                    alignItems:'center',
                    borderRadius:8,
                    padding:5
                  }}>
                  {item.subcategory ?
                    <FlatList
                      showsHorizontalScrollIndicator={false}
                      horizontal={true}
                      data={['']}
                      keyExtractor={(_, index) => index.toString()}
                      renderItem={({ item1, index }) => {
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
                    /> : null}
                </View>

                <View style={{ marginHorizontal: 20 }}>
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
                <View style={{ marginHorizontal: 20 }}>
                  <Text
                    style={{
                      color: '#9CA6B6',
                      fontWeight: 'bold',
                      fontSize: 13,
                      fontWeight: '400',
                      lineHeight: 20,
                    }}>
                    {item.description}{' '}
                    {item.description && item.description.length > 30 ?
                      <Text
                        style={{
                          textDecorationLine: 'underline',
                          color: 'white',
                          fontFamily: 'Poppins-Regular',
                        }}>
                        more
                      </Text> : null}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginHorizontal: 20,
                    justifyContent: 'space-between',
                    marginTop: 10,
                    marginBottom: 20,
                  }}>
                  <View
                    style={{
                      flex: 0.35,
                    }}>
                    {/* <View>
                      <Text style={styles.bidingText}>Bidding</Text>
                    </View>
                    <View style={styles.innerBider}>
                      <Image
                        source={Path.BidingMOney}
                        style={{ height: 20, width: 20 }}
                      />
                      <Text style={styles.innerBidderText}>{item.bids}</Text>
                    </View> */}
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
                  {/* <View style={{ flex: 0.35, alignItems: 'flex-end' }}>
                    <View>
                      <Text style={styles.bidingText}>Bidders</Text>
                    </View>
                    <View style={styles.innerBider}>
                      <Image
                        source={Path.BidingUsers}
                        style={{ height: 20, width: 20 }}></Image>
                      <Text style={styles.innerBidderText}>50+</Text>
                    </View>
                  </View> */}
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
                    imageStyle={{ overflow: 'hidden' }}
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
                        {item.isliked == "1" ?
                          <Image
                            source={Path.RedLike}
                            style={{ height: 20, width: 22 }}></Image> :
                          <Image
                            source={Path.like}
                            style={{ height: 20, width: 22 }}></Image>}
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

                    <View style={{ marginLeft: 10 }}>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('Comments', { itemId: item.post_id, login_user_id: user_id })}>
                        <Image
                          source={Path.Chat}
                          style={{ height: 20, width: 20 }}></Image>
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
                    onPress={() => navigation.navigate('PostDetail', { item: item })}>
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
        }):
          <>
        <View style={{alignSelf: 'center', marginTop: hp('15%')}}>
          <View>
            <Image source={Path.Nopost}></Image>
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
      </>}
      </ScrollView>
    </WrapperContainer>
  );
};

export default Profile;

const styles = StyleSheet.create({
  mainText: {
    fontSize: 13,
    fontFamily: 'Poppins-Bold',
    color: '#E9F0FA',
    marginLeft: '5%',
  },
  selectedMainText: {
    fontSize: 13,
    fontFamily: 'Poppins-Bold',
    color: '#E9F0FA',
    marginLeft: '5%',
    opacity: 0.7,
  },
});
