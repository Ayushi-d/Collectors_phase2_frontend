import React, { useState } from 'react';
import Header from '../../../components/Header';
import { View, Text, StyleSheet, ScrollView, FlatList, Image } from 'react-native';
import AllText from '../../../constants/Alltext';
import ImagePath from '../../../constants/Imagepath';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../../utility';
import { listenerCount } from 'npm';
const Notification = ({ navigation }) => {
  const [List, setList] = useState([{ id: 1, image: ImagePath.Profile, title: 'Prime Renews in 2 days!', subTitle: 'Your prime membership will automatically renewed in 2 days.' }, { id: 2, image: ImagePath.Profile, title: 'Prime Renews in 2 days!', subTitle: 'Your prime membership will automatically renewed in 2 days.' }, { id: 3, image: ImagePath.Profile, title: 'Prime Renews in 2 days!', subTitle: 'Your prime membership will automatically renewed in 2 days.' }, { id: 4, image: ImagePath.Profile, title: 'Prime Renews in 2 days!', subTitle: 'Your prime membership will automatically renewed in 2 days.' }, { id: 5, image: ImagePath.Profile, title: 'Prime Renews in 2 days!', subTitle: 'Your prime membership will automatically renewed in 2 days.' }]);

  return (
    <View>
      <Header login="true" hideLogo="true" />
      <View style={styles.NotificationHeadline}>
        <Text style={styles.NotificationHeadlineText}>{AllText.Notification_heading}</Text>
      </View>
      <ScrollView style={styles.NotificationScreenMain}>
        <View>
          <View>
            <Text>TODAY</Text>
          </View>
          <View>
            {/* <FlatList
            data={List}

            ></FlatList> */}
            {List.length > 0 && List.map((item, index) => (
              <View style={{marginBottom:'4%'}}> 
                <View style={{flexDirection:'row',width:wp('92%'),marginLeft:wp('5%'),justifyContent:'space-between',alignItems:'center'}}>
                  <View style={{width:wp('12%')}}>
                  <Image source={item.image}></Image>
                  </View>
                  <View style={{width:wp('70%')}}>
                    <Text style={styles.notiTitle}>{item.title}</Text>
                    <Text style={styles.notiSubTitle}>{item.subTitle}</Text>
                  </View>
                 <View style={{width:wp('12%')}}>
                 <Image source={item.image}></Image>
                   </View>
                </View>
              </View>
            ))}

          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default Notification;
const styles = StyleSheet.create({
  NotificationHeadline: {
    backgroundColor: '#0D111C',
    padding: 10,

  },
  NotificationHeadlineText: {
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 32,
    color: '#E9F0FA',
    marginLeft: wp('2%')

  },
  NotificationScreenMain: {
    backgroundColor: 'black',
    height: hp('100%'),
    width: wp('100%')
  },
  notiTitle: {
    fontSize: 13,
    color: '#E9F0FA',
    lineHeight:32,
    fontWeight:'600'
  },
  notiSubTitle: {
    fontSize: 12,
    color: '#9CA6B6',
    lineHeight:18,
    fontWeight:'300'
  }
})
