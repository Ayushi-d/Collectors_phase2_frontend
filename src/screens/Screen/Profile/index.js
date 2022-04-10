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
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../../utility';
import Path from '../../../constants/Imagepath';
import * as Utility from '../../../utility/index';
import {addAlpha} from '../../../utility/index';
const Profile = ({navigation}) => {
  const [userImage, setUserImage] = useState();
  const [userName, setUserName] = useState('');
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
  return (
    <View>
      <ProfileHeader navigate={() => navigation.navigate('SettingScreen')} />
      <ScrollView style={{backgroundColor: 'black', height: '100%'}}>
        <View
          style={{flexDirection: 'row', marginHorizontal: 20, marginTop: 25}}>
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
            Take CE Quiz and start trading to get a rank, activate leaderboard
            gain reviews!
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() =>
            navigation.navigate('EditProfile', {user_id: user_id})
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
      </ScrollView>
    </View>
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
