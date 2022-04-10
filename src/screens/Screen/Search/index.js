// import { ScrollView } from 'native-base';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Header from '../../../components/Header';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../../utility';
import Path from '../../../constants/Imagepath';
const Search = ({navigation}) => {
  const [data, setData] = useState([
    {
      id: 1,
      img: Path.FollowUser,
      title: 'musicalgrey',
      subtitle: 'Carlos Saizn',
    },
    {
      id: 2,
      img: Path.FollowUser,
      title: 'musicalgrey',
      subtitle: 'Carlos Saizn',
    },
    {
      id: 3,
      img: Path.FollowUser,
      title: 'musicalgrey',
      subtitle: 'Carlos Saizn',
    },
    {
      id: 4,
      img: Path.FollowUser,
      title: 'musicalgrey',
      subtitle: 'Carlos Saizn',
    },
    {
      id: 5,
      img: Path.FollowUser,
      title: 'musicalgrey',
      subtitle: 'Carlos Saizn',
    },
    {
      id: 6,
      img: Path.FollowUser,
      title: 'musicalgrey',
      subtitle: 'Carlos Saizn',
    },
    {
      id: 7,
      img: Path.FollowUser,
      title: 'musicalgrey',
      subtitle: 'Carlos Saizn',
    },
    {
      id: 8,
      img: Path.FollowUser,
      title: 'musicalgrey',
      subtitle: 'Carlos Saizn',
    },
    {
      id: 9,
      img: Path.FollowUser,
      title: 'musicalgrey',
      subtitle: 'Carlos Saizn',
    },
    {
      id: 10,
      img: Path.FollowUser,
      title: 'musicalgrey',
      subtitle: 'Carlos Saizn',
    },
    {
      id: 11,
      img: Path.FollowUser,
      title: 'musicalgrey',
      subtitle: 'Carlos Saizn',
    },
  ]);
  const [search, setSearch] = useState('');
  const clearRecords = () => {
    setData([]);
  };
  const [active, setActive] = useState(false);
  return (
    <View>
      <Header
        backgroundColor="#0D111C"
        login="true"
        navigate={navigation}
        hideLogo="true"
      />
      <ScrollView style={styles.searchMain}>
        <View style={{backgroundColor: '#0D111C', paddingBottom: 20}}>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#2F3545',
              alignSelf: 'center',
              width: wp('90%'),
              borderRadius: 10,
              alignItems: 'center',
              marginTop: hp('2%'),
            }}>
            <Image
              source={Path.Search}
              style={{height: 15, width: 15, marginLeft: 15}}></Image>
            <TouchableOpacity onPress={() => Alert.alert('ggg')}>
              <TextInput
                onFocus={() => setActive(true)}
                pointerEvents="none"
                placeholderTextColor="white"
                style={{
                  marginLeft: wp('2%'),
                  fontSize: 12,
                  fontFamily: 'Poppins-Regular',
                  lineHeight: 20,
                  color: 'white',
                }}></TextInput>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.topView}>
          {/* <TouchableOpacity> */}
          <View>
            <Text
              style={{
                fontSize: 13,
                fontFamily: 'Poppins-SemiBold',
                lineHeight: 20,
                color: '#9CA6B6',
              }}>
              RECENT
            </Text>
          </View>
          {/* </TouchableOpacity> */}
          <TouchableOpacity onPress={() => clearRecords()}>
            <View>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: 'Poppins-SemiBold',
                  lineHeight: 20,
                  color: '#E9F0FA',
                  textDecorationLine: 'underline',
                }}>
                CLEAR ALL
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          {data.length > 0 &&
            data.map((item, index) => (
              <View key={index}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => navigation.navigate('FollowProfile')}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 25,
                    marginHorizontal: 20,
                  }}>
                  <View style={{width: wp('18%')}}>
                    <Image
                      source={item.img}
                      style={{
                        height: 48,
                        width: 48,
                        borderRadius: 48 / 2,
                      }}></Image>
                  </View>
                  <View>
                    <Text
                      style={{
                        color: '#E9F0FA',
                        fontSize: 14,
                        fontWeight: '400',
                        lineHeight: 20,
                      }}>
                      {item.title}
                    </Text>
                    <Text
                      style={{
                        color: '#9CA6B6',
                        fontSize: 13,
                        fontWeight: '400',
                        lineHeight: 20,
                      }}>
                      {item.subtitle}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            ))}
          {data.length == 0 ? (
            <View>
              <Text></Text>
            </View>
          ) : null}
        </View>
      </ScrollView>
    </View>
  );
};
export default Search;
const styles = StyleSheet.create({
  searchMain: {
    height: hp('100%'),
    width: wp('100%'),
    backgroundColor: 'black',
  },
  topView: {
    flexDirection: 'row',
    width: wp('90%'),
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: hp('5%'),
  },
});
