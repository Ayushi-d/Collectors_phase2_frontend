import React ,{useState,useEffect}from 'react';
// import ';
import {View,Text, ScrollView, TextInput,Image,StyleSheet,TouchableOpacity,FlatList} from 'react-native';
import Header from '../../../../components/Header';
import { widthPercentageToDP as wp ,heightPercentageToDP as hp } from '../../../../utility';
import Path from '../../../../constants/Imagepath';
import WrapperContainer from '../../../../components/WrapperContainer';
import axios from 'axios';
import { Alert } from 'native-base';

const PostSubCategory = ({navigation,route}) => {
  const { body1,Category } = route.params;
  console.log("Vikas final post data is.. body",body1);
  console.log("vikas final category..",Category);
  const [seubCategories,setSubCategories]=useState([])
  const [selectedId, setSelectedId] = useState(null);
  useEffect(()=>{
    getCategoriesApi()
    },[])
    const getCategoriesApi=async()=>{
      let body={
        "category_id":Category.id
      }
      let response=await axios.post('http://13.233.246.19:9000/getSubCategories',body);
      console.log(response.data);
      if(response.data.subcategories.length>0){
        setSubCategories(response.data.subcategories)
      }
    }
    const Item = ({ item, onPress, backgroundColor, textColor }) => (
      <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
        <Text style={[styles.title, textColor]}>{item.name}</Text>
      </TouchableOpacity>
    );
    const renderItem = ({ item }) => {
      const backgroundColor = item.id === selectedId ? "#117AF5" : "#646E7A";
      const color = item.id === selectedId ? 'white' : 'black';
  
      return (
        <Item
          item={item}
          onPress={() => setSelectedId(item.id)}
          backgroundColor={{ backgroundColor }}
          textColor={{ color }}
        />
      );
    };
    const CreateFinalPost=async()=>{
      // console.log("First time is working");

      // if((typeof body1.image1)!=='undefined'){
      //   console.log("Image  found")
      // }

         let data = new FormData();
    data.append('title', body1.title);
    data.append('userId', body1.login_user_id);
    data.append('description', body1.description);
    data.append('bid_status', body1.bid_status);
    data.append('price', body1.price);
    data.append('bid_exchange', 'both');
    data.append('subcat_id',selectedId);
    data.append('cat_id',Category.id)

     if((typeof body1.image1)!=='undefined'){
    data.append('pic1', {
      uri: body1.image1,
      name: 'image.jpeg',
      type: 'image/jpeg',
    });
  }
  if(!(typeof body1.image2)!=='undefined'){
    // console.log("vikas");
    data.append('pic2', {
      uri: body1.image2,
      name: 'image.jpg',
      type: 'image/jpg',
    });
  }
  if((typeof body1.image3)!=='undefined'){
    data.append('pic3', {
      uri: body1.image3,
    name: 'image.jpg',
      type: 'image/jpg',
    });
  }
  if((typeof body1.image4)!=='undefined'){
    data.append('pic4', {
      uri: body1.image4,
      name: 'image.jpg',
      type: 'image/jpg',
    });
  }
  if((typeof body1.image5)!=='undefined'){
    data.append('pic5', {
      uri: body1.image5,
      name: 'iamge.jpg',
      type: 'image/jpg',
    });
  }
  if((typeof body1.image6)!=='undefined'){
    data.append('pic6', {
      uri: body1.image6,
      name: 'image.jpg',
      type: 'image/jpg',
    });
  }
  if((typeof body1.image7)!=='undefined'){
    data.append('pic7', {
      uri: body1.image7,
      name: 'image.jpg',
      type: 'image/jpg',
    });
  }
  if((typeof body1.image8)!=='undefined'){
    data.append('pic8', {
      uri: body1.image8,
      name: 'image.jpg',
      type: 'image/jpg',
    });
  }
    console.log("body is.. subcate",data)
    await axios({
      url: 'http://13.233.246.19:9000/createPost',
      method: 'POST',
      data: data,
      headers: {'Content-Type': 'multipart/form-data'},
    })
      .then(response => {
        if (response.data.code === 200) {
          console.log("post created");
          navigation.navigate('BottomTab');
        }
      })
      .catch(error => {
        console.log(error, 'wfkjndsf');
        // Alert.alert("Issue from Server Side")
      });
  //  let data = new FormData();
  //   data.append('title', body1.title);
  //   data.append('userId', JSON.stringify(body1.login_user_id));
  //   data.append('description', body1.description);
  //   data.append('bid_status', body1.bid_status);
  //   data.append('price',body1.price);
  //   data.append('bid_exchange','open');
  //   if(body1.image1){
  //   data.append('pic1', {
  //     uri: body1.image1,
  //     name: 'image.jpeg',
  //     type: 'image/jpeg',
  //   });
  // }
  // // if(body1.image2){
  // //   data.append('pic2', {
  // //     uri: body1.image2,
  // //     name: 'iamge.jpg',
  // //     type: 'image/jpg',
  // //   });
  // // }
  // // if(body1.image3){
  // //   data.append('pic3', {
  // //     uri: body1.image3,
  // //   name: 'iamge.jpg',
  // //     type: 'image/jpg',
  // //   });
  // // }
  // // if(body1.image4){
  // //   data.append('pic4', {
  // //     uri: body1.image4,
  // //     name: 'iamge.jpg',
  // //     type: 'image/jpg',
  // //   });
  // // }
  // // if(body1.image5){
  // //   data.append('pic5', {
  // //     uri: body1.image5,
  // //     name: 'iamge.jpg',
  // //     type: 'image/jpg',
  // //   });
  // // }
  // // if(body1.image6){
  // //   data.append('pic6', {
  // //     uri: body1.image6,
  // //     name: 'iamge.jpg',
  // //     type: 'image/jpg',
  // //   });
  // // }
  // // if(body1.image7){
  // //   data.append('pic7', {
  // //     uri: body1.image7,
  // //     name: 'iamge.jpg',
  // //     type: 'image/jpg',
  // //   });
  // // }
  // // if(body1.image8){
  // //   data.append('pic8', {
  // //     uri: body1.image8,
  // //     name: 'iamge.jpg',
  // //     type: 'image/jpg',
  // //   });
  // // }

  //   console.log("data is....",data);
  //   await axios({
  //     url: 'http://13.233.246.19:9000/createPost',
  //     method: 'POST',
  //     data: data,
  //     headers: {'Content-Type': 'multipart/form-data'},
  //   })
  //     .then(response => {
  //       // console.log("ress",response.data)
  //       if (response.data.code === 200) {
  //         navigation.navigate('BottomTab');
  //       }
  //     })
  //     .catch(error => {
  //       console.log(error, 'wfkjndsf');
  //     });
    }
  return (
      <WrapperContainer>
        <Header login="true" navigate={navigation} hideLogo="true" textData="Post"/>
        <ScrollView style={{backgroundColor:'black',height:hp('100%'),width:wp('100%')}}>
        <View style={{flexDirection:'row',alignSelf:'center',margin:hp('1%')}}>
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
              marginLeft:5
            }}
          />
    </View>
    <View style={styles.serachView}>
      <View style={styles.searchIcon}><Image  source={Path.Search}></Image></View>
      <View style={styles.searchIcon}><TextInput placeholder='Search sub categories...' placeholderTextColor="#9CA6B6" style={styles.searchText}></TextInput></View>
    </View>
    <View style={{margin:'5%'}}>
      <Text style={styles.categoriesText}>CATEGORY</Text>
    </View>
    <View style={{height:hp('10'),marginLeft:wp('5%')}}>
      <View style={{backgroundColor:'#646E7A',padding:10,width:wp('40%'),borderRadius:20/2}}>
        <Text>{Category.name}</Text>
      </View>

    </View>
    <View style={{margin:'5%'}}>
      <Text style={styles.categoriesText}>SELECT A SUB CATEGORY</Text>
    </View>
    <View style={{height:hp('30%')}}>
    <FlatList
        data={seubCategories}
        renderItem={renderItem}
        numColumns={3}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />

    </View>
    <TouchableOpacity style={{marginTop:hp('1%'),marginLeft:wp('4%')}} onPress={()=>CreateFinalPost()}>
    <View style={{backgroundColor:'#117AF5',width:wp('90%'),padding:10,borderRadius:10,alignItems:'center',padding:16}}>
      <Text style={styles.textColor}>NEXT</Text>
    </View>
    </TouchableOpacity>
    
        </ScrollView>
        {/* <Homeheader/> */}
      </WrapperContainer>
  );
};

export default PostSubCategory;
const styles =StyleSheet.create({
serachView:{
backgroundColor:'#646E7A',
flexDirection:'row',
alignItems:'center',borderRadius:10,
width:wp('90%'),
alignSelf:'center',
marginTop:hp('4%'),
height : 48
},
searchIcon:{
  marginLeft:wp('3%')
},
searchText:{
  fontSize:13,
  lineHeight:20,
  fontWeight:'400',
  color:'white',
  height : 48
},
categoriesText:{
  fontSize:14,
  fontWeight:'600',
  lineHeight:22,
  color:'#9CA6B6'

},
textColor:{
  color:'white',
  fontSize:14,
  fontWeight:'700',
  lineHeight:22
},
item: {
  padding: 8,
  borderRadius:10,
  marginVertical: 8,
  marginHorizontal: 16,
},
title: {
  fontSize: 12,
},
})