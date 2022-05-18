// import { ScrollView } from 'native-base';
import React, {useState,useEffect} from 'react';
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
import WrapperContainer from '../../../components/WrapperContainer';
import axios from 'axios';
import Loader from '../../../components/loader';
const Search = ({navigation}) => {
  const [value, setValue] =useState()
  const [loader,setLoader]=useState(false);
  const [data, setData] = useState([
    {
      id: 1,
      img: Path.FollowUser,
      username: 'musicalgrey',
      email: 'Carlos Saizn',
    },
    {
      id: 2,
      img: Path.FollowUser,
      username: 'musicalgrey',
      email: 'Carlos Saizn',
    },
    {
      id: 3,
      img: Path.FollowUser,
      username: 'musicalgrey',
      email: 'Carlos Saizn',
    },
    {
      id: 4,
      img: Path.FollowUser,
      username: 'musicalgrey',
      email: 'Carlos Saizn',
    },
    {
      id: 5,
      img: Path.FollowUser,
      username: 'musicalgrey',
      email: 'Carlos Saizn',
    },
    {
      id: 6,
      img: Path.FollowUser,
      username: 'musicalgrey',
      email: 'Carlos Saizn',
    },
    {
      id: 7,
      img: Path.FollowUser,
      username: 'musicalgrey',
      email: 'Carlos Saizn',
    },
    {
      id: 8,
      img: Path.FollowUser,
      username: 'musicalgrey',
      email: 'Carlos Saizn',
    },
    {
      id: 9,
      img: Path.FollowUser,
      username: 'musicalgrey',
      email: 'Carlos Saizn',
    },
    {
      id: 10,
      img: Path.FollowUser,
      title: 'musicalgrey',
      email: 'Carlos Saizn',
    },
    {
      id: 11,
      img: Path.FollowUser,
      username: 'musicalgrey',
      email: 'Carlos Saizn',
    },
  ]);
  const [search, setSearch] = useState('');
  const clearRecords = () => {
    setData([]);
  };
  const [active, setActive] = useState(false);
  
  const SearchApi=async()=>{
    setLoader(true);
    let response=await axios.get(`http://13.233.246.19:9000/search?search=${value}`);
    console.log("search data",response.data);
    if(response.data.users){
      setData(response.data.users);
      setLoader(false);
    }
    setLoader(false)
  }
  const chnageText=(text)=>{
    setValue(text.toLowerCase())
    if(value){
      SearchApi()
    }
  }
  useEffect(() => {
   AllUser()
  }, [])
  const AllUser=async()=>{
    setLoader(true);
    let response=await axios.get(`http://13.233.246.19:9000/search`);
    console.log("search data",response.data);
    if(response.data.users){
      setData(response.data.users);
      setLoader(false);
    }
    setLoader(false)
  }
  return (
    <WrapperContainer statusBarColor="#0D111C">
        <Loader isLoading={loader} />
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
              height: 48,
            }}>
            <Image
              source={Path.Search}
              style={{height: 15, width: 15, marginLeft: 15}}></Image>
            <TouchableOpacity onPress={() => Alert.alert('ggg')}>
              <TextInput
                onFocus={() => setActive(true)}
                pointerEvents="none"
                placeholderTextColor="white"
                onChangeText={(text)=>chnageText(text)}
                style={{
                  marginLeft: wp('2%'),
                  width:wp('65%'),
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
                  onPress={() => navigation.navigate('FollowProfile',{search_id:item})}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 25,
                    marginHorizontal: 20,
                  }}>
                  <View style={{width: wp('18%')}}>
                    {item.profile_image?
                    <Image
                      source={data[index].img}
                      style={{
                        height: 48,
                        width: 48,
                        borderRadius: 48 / 2,
                      }}></Image>:
                      <Image
                      source={Path.userImage}
                      style={{
                        height: 48,
                        width: 48,
                        borderRadius: 48 / 2,
                      }}></Image>}
                  </View>
                  <View>
                    <Text
                      style={{
                        color: '#E9F0FA',
                        fontSize: 14,
                        fontWeight: '400',
                        lineHeight: 20,
                      }}>
                      {item.username}
                    </Text>
                    <Text
                      style={{
                        color: '#9CA6B6',
                        fontSize: 13,
                        fontWeight: '400',
                        lineHeight: 20,
                      }}>
                      {item.email}
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
    </WrapperContainer>
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
