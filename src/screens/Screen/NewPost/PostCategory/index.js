import React, {useEffect, useState} from 'react';
// import ';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
  BackHandler,
  // TouchableOpacity
} from 'react-native';
import Header from '../../../../components/Header';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../../utility';
import Path from '../../../../constants/Imagepath';
import {useFocusEffect} from '@react-navigation/native';
import WrapperContainer from '../../../../components/WrapperContainer';
import axios from 'axios';
import { FlatList } from 'native-base';
// import { useState } from 'react/cjs/react.production.min';
const PostCategory = ({navigation,route}) => {
  const { body } = route.params;
  const [category, setCategory] = useState(['','','','']);
  const [loader, setLoader] = useState(false);
  const [PostCategoryChoose,setPostCategoryChoose]=useState()
  const [selectedId, setSelectedId] = useState(null);
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        // setModalVisible(!isModalVisible);
        navigation.navigate('BottomTab');
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
  useEffect(() => {
    getCategoriesApi();
  }, []);
  const getCategoriesApi = async () => {
    setLoader(true);
    let response = await axios.post('http://13.233.246.19:9000/getCategories');
    console.log(response.data.categories);
    if(response.data.categories.length>0){
      setCategory(response.data.categories)
    }
  };
  const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <Text style={[styles.title, textColor]}>{item.name}</Text>
    </TouchableOpacity>
  );
  const selectedCategory=(item)=>{
    setPostCategoryChoose(item);
    setSelectedId(item.id)

  }
  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ?  "#117AF5" : "#646E7A";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        
        onPress={() =>selectedCategory(item)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };
  return (
    <WrapperContainer>
      <Header
        login="true"
        navigate={navigation}
        hideLogo="true"
        textData="Post"
      />
      <ScrollView
        style={{
          backgroundColor: 'black',
          height: hp('100%'),
          width: wp('100%'),
        }}>
        <View
          style={{flexDirection: 'row', alignSelf: 'center', margin: hp('1%')}}>
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
              borderBottomColor: '#117AF5',
              borderBottomWidth: 5,
              width: '15%',
              marginTop: 5,
              marginLeft: 5,
            }}
          />
        </View>
        <View style={styles.serachView}>
          <View style={styles.searchIcon}>
            <Image source={Path.Search}></Image>
          </View>
          <View style={styles.searchIcon}>
            <TextInput
              placeholder="Search categories..."
              placeholderTextColor="#9CA6B6"
              style={styles.searchText}></TextInput>
          </View>
        </View>
        <View style={{margin: '5%'}}>
          <Text style={styles.categoriesText}>SELECT A CATEGORY</Text>
        </View>
        <View style={{height: hp('50%')}}>
          {/* <ScrollView> */}
          <FlatList
        data={category}
        renderItem={renderItem}
        numColumns={3}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />

            
          {/* {category.map((item,index)=>(
              <View key={index} style={{padding:10,borderWidth:1,borderRadius:50,borderColor:'#117AF5'}}>
              <Text style={{color:'red'}}>{item.name}</Text>
            </View>
          ))} */}
          {/* </ScrollView> */}
      
        </View>
        <TouchableOpacity
          style={{marginTop: hp('1%'), marginLeft: wp('4%')}}
          onPress={() => navigation.navigate('PostSubCategory',{body1:body,Category:PostCategoryChoose})}>
          <View
            style={{
              backgroundColor: '#646E7A',
              width: wp('90%'),
              padding: 10,
              borderRadius: 10,
              alignItems: 'center',
              padding: 16,
            }}>
            <Text style={styles.textColor}>NEXT</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
      {/* <Homeheader/> */}
    </WrapperContainer>
  );
};

export default PostCategory;
const styles = StyleSheet.create({
  serachView: {
    backgroundColor: '#646E7A',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    width: wp('90%'),
    alignSelf: 'center',
    marginTop: hp('4%'),
  },
  searchIcon: {
    marginLeft: wp('3%'),
  },
  searchText: {
    fontSize: 13,
    lineHeight: 20,
    fontWeight: '400',
    color: 'white',
    height: 48,
  },
  categoriesText: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 22,
    color: '#9CA6B6',
  },
  item: {
    padding: 10,
    borderRadius:10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 12,
  },
});
