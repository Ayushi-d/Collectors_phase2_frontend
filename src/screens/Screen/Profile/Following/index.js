import React,{useState} from 'react';
import {View,Text, TouchableOpacity, ScrollView,FlatList,Image} from 'react-native';
import Header from '../../../../components/Header';
import Path from '../../../../constants/Imagepath';
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from '../../../../utility';


const Followings=({navigation})=>{
    const [follow,setFollow]=useState('Follower');
    const [data,setData]=useState([
        {id:1,img:Path.FollowUser,title:'musicalgrey',subtitle:'Carlos Saizn'},
        {id:2,img:Path.FollowUser,title:'musicalgrey',subtitle:'Carlos Saizn'},
        {id:3,img:Path.FollowUser,title:'musicalgrey',subtitle:'Carlos Saizn'},
        {id:4,img:Path.FollowUser,title:'musicalgrey',subtitle:'Carlos Saizn'},
        {id:5,img:Path.FollowUser,title:'musicalgrey',subtitle:'Carlos Saizn'},
        {id:6,img:Path.FollowUser,title:'musicalgrey',subtitle:'Carlos Saizn'},
        {id:7,img:Path.FollowUser,title:'musicalgrey',subtitle:'Carlos Saizn'},
        {id:8,img:Path.FollowUser,title:'musicalgrey',subtitle:'Carlos Saizn'},
        {id:9,img:Path.FollowUser,title:'musicalgrey',subtitle:'Carlos Saizn'},
        {id:10,img:Path.FollowUser,title:'musicalgrey',subtitle:'Carlos Saizn'},
        {id:11,img:Path.FollowUser,title:'musicalgrey',subtitle:'Carlos Saizn'}
    ])
    const renderItem=({item,render})=>{
        return(
        <View style={{flexDirection:'row',margin:hp('2%')}}>
            <View>
                <Image source={item.img} style={{height:40,width:40}}></Image>
            </View>
            <View style={{marginLeft:wp('5%')}}>
                <Text style={{fontWeight:'500',fontSize:14,color:'#E9F0FA'}}>{item.title}</Text>
                <Text style={{fontWeight:'300',fontSize:12,color:'#9CA6B6'}}>{item.subtitle}</Text>
            </View>
        </View>
        )
    }
    return(
        <View>
            <Header back = {''} backgroundColor = {'#0D111C'}  login="true" navigate={navigation} hideLogo="true"/>
            <View style={{backgroundColor:'#0D111C',flexDirection:'row',justifyContent:'space-evenly'}}>
                <TouchableOpacity onPress={()=>setFollow('Follower')}>
                <View>
            <Text style={follow=='Follower'?{color:'#E9F0FA'}:{color:'#E9F0FA90'}}>FOLLOWERS</Text>
            {follow=='Follower'?
            <View
                  style={{
                    borderBottomColor: 'white',
                    borderBottomWidth: 3,
                    borderRadius: 5,
                    width: 20,
                    alignSelf:'center',
                    marginTop:hp('1%')
                  }}
                />:null}
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setFollow('Following')}>
            <View>
                <Text style={follow=='Following'?{color:'#E9F0FA'}:{color:'#E9F0FA90'}}>FOLLOWING</Text>
                {follow=='Following'?
            <View
                  style={{
                    borderBottomColor: 'white',
                    borderBottomWidth: 3,
                    borderRadius: 5,
                    width: 20,
                    alignSelf:'center',
                    marginTop:hp('1%')
                  }}
                />:null}
            </View>
            </TouchableOpacity>
            </View>
            <ScrollView style={{width:wp('100%'),height:hp('100%'),backgroundColor:'black'}}>
                <View style={{marginBottom:hp('5%')}}>
                    <FlatList 
                    data={data}
                    renderItem={renderItem}
                    />
                </View>
            </ScrollView>
        </View>
    )
}
export default Followings;