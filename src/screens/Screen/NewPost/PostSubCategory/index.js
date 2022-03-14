import React from 'react';
// import ';
import {View,Text, ScrollView, TextInput,Image,StyleSheet,TouchableOpacity} from 'react-native';
import Header from '../../../../components/Header';
import { widthPercentageToDP as wp ,heightPercentageToDP as hp } from '../../../../utility';
import Path from '../../../../constants/Imagepath';
const PostSubCategory = ({navigation}) => {
  return (
      <View>
        <Header login="true" navigate={navigation}/>
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
    <View style={{height:hp('10')}}>

    </View>
    <View style={{margin:'5%'}}>
      <Text style={styles.categoriesText}>SELECT A SUB CATEGORY</Text>
    </View>
    <View style={{height:hp('30%')}}>

    </View>
    <TouchableOpacity style={{marginTop:hp('1%'),marginLeft:wp('4%')}} onPress={()=>navigation.navigate('PostSubCategory')}>
    <View style={{backgroundColor:'#117AF5',width:wp('90%'),padding:10,borderRadius:10,alignItems:'center',padding:16}}>
      <Text style={styles.textColor}>NEXT</Text>
    </View>
    </TouchableOpacity>
    
        </ScrollView>
        {/* <Homeheader/> */}
      </View>
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
marginTop:hp('4%')
},
searchIcon:{
  marginLeft:wp('3%')
},
searchText:{
  fontSize:13,
  lineHeight:20,
  fontWeight:'400',
  color:'white'
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
}
})