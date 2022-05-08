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
} from 'react-native';
import axios from 'axios';
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
