import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';
import React from 'react';
import ImagePath from '../constants/Imagepath';

const CommentList = ({onOpenSheet,item}) => {

  const _footerCompReply = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: 16,
          marginTop: 10,
        }}>
        <TouchableOpacity>
          <Text style={styles.replyFootText}>Hide Replies</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.replyFootText}>Show More</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{marginHorizontal: 20, marginTop: 20}}>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 0.9, flexDirection: 'row', alignItems: 'center'}}>
          
          <Image
            source={ImagePath.FollowUser}
            style={{height: 24, width: 24}}
          />
          <Text style={styles.nametext}>{item.user_name}</Text>
          <Text style={styles.timeText}>5 mins ago</Text>
        </View>
        <View
          style={{
            flex: 0.1,
            justifyContent: 'flex-start',
            alignItems: 'flex-end',
          }}>
          <TouchableOpacity onPress={onOpenSheet}>
            <Image source={ImagePath.Opt} />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text style={[styles.timeText, {marginTop: 5, marginBottom: 5}]}>
          {item.comment}
        </Text>
      </View>
      <View style={styles.bottom}>
        <View
          style={{
            flex: 0.7,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
          <TouchableOpacity>
            <Text style={styles.replyBtnText}>Reply</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.space}>
            <Text style={styles.replyBtnText}>Show 2 Replies</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 15,
            }}>
            <Image source={ImagePath.Heart} />
            <Text style={styles.numberText}>
              32<Text style={styles.replyBtnText}>Like</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={item.replies}
        ListFooterComponent={_footerCompReply}
        renderItem={({item, index}) => {
          return (
            <View style={styles.replyView}>
            <View style = {styles.verticleLine} />
              <View style={{marginTop: 20, marginLeft: 19 , flex : 1}}>
                <View style={{flexDirection: 'row'}}>
                  <View
                    style={{
                      flex: 0.9,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={ImagePath.FollowUser}
                      style={{height: 24, width: 24}}
                    />
                    <Text style={styles.nametext}>creatorx</Text>
                    <Text style={styles.timeText}>5 mins ago</Text>
                  </View>
                  <View
                    style={{
                      flex: 0.1,
                      justifyContent: 'flex-start',
                      alignItems: 'flex-end',
                    }}>
                    <TouchableOpacity>
                      <Image source={ImagePath.Opt} />
                    </TouchableOpacity>
                  </View>
                </View>
                <View>
                  <Text
                    style={[styles.timeText, {marginTop: 5, marginBottom: 5}]}>
                   {item.comment}
                  </Text>
                </View>
                <View style={styles.bottom}>
                  <View
                    style={{
                      flex: 0.7,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                    }}>
                    <TouchableOpacity>
                      <Text style={styles.replyBtnText}>Reply</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginLeft: 15,
                      }}>
                      <Image source={ImagePath.Heart} />
                      <Text style={[styles.replyBtnText, {marginLeft: 5}]}>
                        Like
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default CommentList;

const styles = StyleSheet.create({
  nametext: {
    fontSize: 12,
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
    marginHorizontal: 10,
  },
  timeText: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#9CA6B6',
  },
  bottom: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  space: {
    marginLeft: 20,
  },
  replyBtnText: {
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
    color: '#737F90',
  },
  numberText: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#737F90',
    marginLeft: 8,
    marginTop: 2,
  },
  replyView: {
    marginLeft: 12,
    flexDirection : 'row'
  },
  replyFootText: {
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
    color: '#737F90',
    marginLeft: 15,
  },
  verticleLine:{
    width: 1,
    backgroundColor: '#526086',
  },
});
