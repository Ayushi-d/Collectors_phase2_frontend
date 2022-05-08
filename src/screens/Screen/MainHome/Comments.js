import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import React, {useRef,useState,useEffect} from 'react';
import CommentList from '../../../components/CommentList';
import ImagePath from '../../../constants/Imagepath';
import ActionSheet from 'react-native-actions-sheet';
import WrapperContainer from '../../../components/WrapperContainer';
import axios from 'axios';
// import { useState } from 'react/cjs/react.production.min';
import { Alert } from 'native-base';
// import { useEffect } from 'react/cjs/react.production.min';

const Comments = ({navigation,route}) => {
  const [message,setMessage]=useState();
  const { itemId,login_user_id } = route.params;
  console.log("item id is...",itemId)
  console.log("logi user id..",login_user_id)
  const [AllMessage,setAllMessage]=useState([]);
  const [loader,setLoading]=useState([]);
  const onOpen = () => {
    //   alert('n')
    bottomRef?.current?.setModalVisible(true);
  };

  const onDelete = async() => {
    let body={
      "user_id":login_user_id,
      "comment_id":1
    }
    let response=await axios.post('http://13.233.246.19:9000/deleteComment',body)
    console.log(response.data);
    if(response.data.code===200){
      getAllMessage()
      bottomRef?.current?.setModalVisible(false);
    }
    bottomRef?.current?.setModalVisible(false);
  };

  const bottomRef = useRef();

  const onClose = () => {
    bottomRef?.current?.setModalVisible(false);
  };

useEffect(()=>{
  getAllMessage()
  
},[])

const getAllMessage=async()=>{
  let response=await axios.get(`http://13.233.246.19:9000/getComments?post_id=${itemId}`);
  console.log(response.data);
  if(response.data.postcomments.length>0){
    setAllMessage(response.data.postcomments)
  }
}
  const AddCommentsApi= async()=>{
    if(!message){
      Alert.alert("Message is empty");
    }else{
    let body={
      "user_id":login_user_id,
      "post_id":itemId,
      "comment":message,
      "parent_id":""
    }
    let response=await axios.post('http://13.233.246.19:9000/addComment',body);
    console.log(response.data);
    if(response.data.code==200){
      setMessage('')
      getAllMessage()
    }
  }
  }
  const _listHead = () => {
    return (
      <View>
        <View style={{marginHorizontal: 20,justifyContent : 'center', marginTop : 10}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={ImagePath.back} />
          </TouchableOpacity>
        </View>
        <Text style={styles.commentText}>TOP COMMENTS</Text>
      </View>
    );
  };

  return (
    <WrapperContainer>
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'height' : ''}
    keyboardVerticalOffset={50}
    style={{flex: 1}}>
      <FlatList
        data={AllMessage}
        ListHeaderComponent={_listHead}
        renderItem={({item, index}) => {
          return <CommentList onOpenSheet={onOpen} item={item} />;
        }}
      />
      <View>
        <View style={styles.inputView}>
          <TextInput
            selectionColor={'white'}
            value={message}
            style={styles.inputStyle}
            placeholderTextColor={'#9CA6B6'}
            placeholder={'Add a comment'}
            onChangeText={(e)=>setMessage(e)}
          />

          <View
            style={{flex: 0.2, justifyContent: 'center', alignItems: 'center'}}>
              <TouchableOpacity onPress={()=>AddCommentsApi()}>
            <Image source={ImagePath.Send} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ActionSheet closable ref={bottomRef} onClose={onClose}>
        <View style={styles.mainView}>
          <View style={styles.indicator} />
          <Text style={styles.options}>COMMENT OPTIONS</Text>
          <TouchableOpacity
            onPress={onDelete}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 20,
              marginHorizontal : 20
            }}>
            <Text style={styles.deleteText}>Delete Comment</Text>
            <Image source={ImagePath.right} style={{height: 24, width: 24}} />
          </TouchableOpacity>
        </View>
      </ActionSheet>
      </KeyboardAvoidingView>
    </WrapperContainer>
  );
};

export default Comments;

const styles = StyleSheet.create({
  commentText: {
    fontSize: 13,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    color: '#9CA6B6',
  },
  inputView: {
    marginHorizontal: 20,
    height: 44,
    borderRadius: 10,
    backgroundColor: '#1F232E',
    flexDirection: 'row',
    marginTop: 17,
    marginBottom: 20,
  },
  inputStyle: {
    flex: 0.8,
    paddingLeft: 20,
    color: 'white',
    fontFamily: 'Poppins-Regular',
    justifyContent: 'center',
    height: 48,
  },
  mainView: {
    height: 120,
    backgroundColor: '#13161F',
    padding: 8,
  },
  options: {
    color: '#9CA6B6',
    fontSize: 13,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
  },
  deleteText: {
    color: '#E9F0FA',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  headerStyle: {
    height: 4,
    width: 40,
    borderRadius: 100,
    backgroundColor: '#4F5461',
  },
  indicator: {
    height: 4,
    width: 40,
    backgroundColor: '#4F5461',
    alignSelf: 'center',
    marginBottom : 10,
    borderRadius : 100
  },
});
