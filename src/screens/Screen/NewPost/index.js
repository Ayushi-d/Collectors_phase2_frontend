import React, { useState } from 'react';
// import Homeheader from '../../../components/Homeheader';
import Header from '../../../components/Header';
import {View,Text, ScrollView, TouchableOpacity,Image, TextInput,StyleSheet} from 'react-native';
import Path from '../../../constants/Imagepath';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../../utility';
import { BottomNavigation } from 'react-native-paper';
import ImagePicker from 'react-native-image-crop-picker';
// import { createHash } from 'crypto';
const NewPost = ({navigation}) => {
  const [imageCount,setImageCount]=useState(1);
  const [imageStatus1,setImageStatus1]=useState(false);
  const [imageStatus2,setImageStatus2]=useState(false);
  const [imageStatus3,setImageStatus3]=useState(false);
  const [imageStatus4,setImageStatus4]=useState(false);
  const [imageStatus5,setImageStatus5]=useState(false);
  const [imageStatus6,setImageStatus6]=useState(false);
  const [imageStatus7,setImageStatus7]=useState(false);
  const [imageStatus8,setImageStatus8]=useState(false);

  const[image1,setImage1]=useState();
  const [image2,setImage2]=useState();
  const [image3,setImage3]=useState();
  const [image4,setImage4]=useState();
  const [image5,setImage5]=useState();
  const [image6,setImage6]=useState();
  const [image7,setImage7]=useState();
  const [image8,setImage8]=useState();
  const [nextColor,setNextColor]=useState();
  const [checkBuy,setCheckBuy]=useState(false);
  const [checkExchage,setCheckExchage]=useState(false);

  const chooseImages=(setImage1)=>{
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      setImage1(image.path);
    });
  }
  const postCreateApi=()=>{
    if(image1 && image2 && image3 && image4 && image5 && image6 && image7 && image8 ){
      setNextColor()
    }
    navigation.navigate('PostCategory')
  }
  return (
      <View>
          <Header login="true"/>
                   <ScrollView style={{width:'100%',height:'100%',backgroundColor:'black',flexDirection:'row'}}>   
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
              borderBottomColor: '#117AF530',
              borderBottomWidth: 5,
              width: '15%',
              marginTop: 5,
              marginLeft:5
            }}
          />
    </View>
    <View style={styles.designleft}>
      <Text style={{color:'#9CA6B6'}}>ADD IMAGES {imageCount}/8 </Text>
    </View>
    <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:hp('2%')}}>
      <View style={{height:hp('9%'),borderWidth:1,borderColor:'#117AF5',width:wp('20%'),borderRadius:10,backgroundColor:'#161F37',flexDirection:'row'}}>
        {!image1?
        <TouchableOpacity style={{alignSelf:'center',marginLeft:wp('6%')}} onPress={()=>chooseImages(setImage1)}>
        <Image source={Path.Plus1} ></Image>
        </TouchableOpacity>:<Image source={{uri:image1}} style={{height:20,width:20}}> </Image>
}

      </View>
      <View style={{height:hp('9%'),borderWidth:1,borderColor:'#117AF5',width:wp('20%'),borderRadius:10,backgroundColor:'#161F37',flexDirection:'row'}}>
        <Image source={Path.Plus1}  style={{alignSelf:'center',marginLeft:wp('6%')}}></Image>

      </View>
      <View style={{height:hp('9%'),borderWidth:1,borderColor:'#117AF5',width:wp('20%'),borderRadius:10,backgroundColor:'#161F37',flexDirection:'row'}}>
        <Image source={Path.Plus1}  style={{alignSelf:'center',marginLeft:wp('6%')}}></Image>

      </View>
      <View style={{height:hp('9%'),borderWidth:1,borderColor:'#117AF5',width:wp('20%'),borderRadius:10,backgroundColor:'#161F37',flexDirection:'row'}}>
        <Image source={Path.Plus1}  style={{alignSelf:'center',marginLeft:wp('6%')}}></Image>

      </View>
    </View>
   
    <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:wp('5%')}}>
      <View style={{height:hp('9%'),borderWidth:1,borderColor:'#117AF5',width:wp('20%'),borderRadius:10,backgroundColor:'#161F37',flexDirection:'row'}}>
        <Image source={Path.Plus1}  style={{alignSelf:'center',marginLeft:wp('6%')}}></Image>

      </View>
      <View style={{height:hp('9%'),borderWidth:1,borderColor:'#117AF5',width:wp('20%'),borderRadius:10,backgroundColor:'#161F37',flexDirection:'row'}}>
        <Image source={Path.Plus1}  style={{alignSelf:'center',marginLeft:wp('6%')}}></Image>

      </View>
      <View style={{height:hp('9%'),borderWidth:1,borderColor:'#117AF5',width:wp('20%'),borderRadius:10,backgroundColor:'#161F37',flexDirection:'row'}}>
        <Image source={Path.Plus1}  style={{alignSelf:'center',marginLeft:wp('6%')}}></Image>

      </View>
      <View style={{height:hp('9%'),borderWidth:1,borderColor:'#117AF5',width:wp('20%'),borderRadius:10,backgroundColor:'#161F37',flexDirection:'row'}}>
        <Image source={Path.Plus1}  style={{alignSelf:'center',marginLeft:wp('6%')}}></Image>

      </View>
    </View>
    <View style={styles.designleft}>
      <TextInput placeholder='Collectible Name' placeholderTextColor="#9CA6B6" style={{borderBottomWidth:1,borderColor:'#9CA6B6',color:'white'}}>

      </TextInput>
    </View>
    <View style={styles.designleft}>
      <TextInput placeholder='Short Description' placeholderTextColor="#9CA6B6" style={{borderBottomWidth:1,borderColor:'#9CA6B6',color:'white'}}>

      </TextInput>
    </View>

    <View style={[styles.designleft,styles.designTop]}>
      <Text style={styles.textColor}>POST FOR;</Text>
    </View>
    <View style={{flexDirection:'row',justifyContent:'space-between',width:wp('70%'),alignSelf:'center'}}>
      <View style={styles.designTop}>
        <TouchableOpacity onPress={()=>setCheckBuy(!checkBuy)}>
          <View style={checkBuy==false?{height:20,width:20,borderWidth:1,borderColor:'#465874',borderRadius:4}:{height:20,width:20,borderWidth:1,borderColor:'#465874',backgroundColor:'#117AF5',borderRadius:4}}></View>
          </TouchableOpacity>
          <View style={{marginLeft:wp('2%')}}><Text style={styles.textColor}>Buy</Text></View>
      </View>
      <View style={styles.designTop}>
        <TouchableOpacity onPress={()=>setCheckExchage(!checkExchage)}>
      <View style={checkExchage==false?{height:20,width:20,borderWidth:1,borderColor:'#465874',borderRadius:5}:{height:20,width:20,borderWidth:1,borderColor:'#465874',backgroundColor:'#117AF5',borderRadius:5}}></View>
      </TouchableOpacity>
          <View style={{marginLeft:wp('2%')}}><Text style={styles.textColor}>Exchange</Text></View>
      </View>
    </View>

    <View style={{flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',marginTop:hp('4%'),marginLeft:wp('5%')}}>
      <View>
        <Text style={styles.textColor}>Set you price:</Text>
      </View>
      <View style={{backgroundColor:'#646E7A',width:wp('60%'),borderRadius:5,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <View style={{marginLeft:wp('3%')}}><Text style={styles.textColor}>$    |</Text></View>
        <View style={{marginRight:wp('3%')}}>
        <TextInput placeholder='00.00' placeholderTextColor="#9CA6B6" keyboardType='number-pad' style={{color:'white'}}></TextInput>
        </View>
      </View>
    </View>
 
    <TouchableOpacity style={{marginTop:hp('5%'),marginLeft:wp('4%')}} onPress={()=>postCreateApi()}>
    <View style={{backgroundColor:'#646E7A',width:wp('90%'),padding:10,borderRadius:10,alignItems:'center',padding:16}}>
      <Text style={styles.textColor}>NEXT</Text>
    </View>
    </TouchableOpacity>
    </ScrollView>

      </View>
  );
};

export default NewPost;

const styles=StyleSheet.create({
  textColor:{
    color:"#9CA6B6"
  },
  designleft:{
    marginLeft:wp('5%')
  },
  designTop:{
    flexDirection:'row',
    marginTop:hp('3%')
  },
  textInput:{
    color:'white'
  }
 
})
/*  */