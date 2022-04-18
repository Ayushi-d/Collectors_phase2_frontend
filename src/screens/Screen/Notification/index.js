import React, {useState} from 'react';
import Header from '../../../components/Header';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import AllText from '../../../constants/Alltext';
import ImagePath from '../../../constants/Imagepath';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../utility';
import {listenerCount} from 'npm';
import WrapperContainer from '../../../components/WrapperContainer';
const Notification = ({navigation}) => {
  const [List, setList] = useState([
    {
      id: 1,
      image: ImagePath.Profile,
      title: 'Prime Renews in 2 days!',
      subTitle: 'Your prime membership will automatically renewed in 2 days.',
      image2: ImagePath.constRect,
    },

    {
      id: 2,
      image: ImagePath.Profile,
      title: 'Prime Renews in 2 days!',
      subTitle: 'Your prime membership will automatically renewed in 2 days.',
    },
    {
      id: 3,
      image: ImagePath.Profile,
      title: 'Prime Renews in 2 days!',
      subTitle: 'Your prime membership will automatically renewed in 2 days.',
    },
    {
      id: 4,
      image: ImagePath.Profile,
      title: 'Prime Renews in 2 days!',
      subTitle: 'Your pys.',
    },
    {
      id: 5,
      image: ImagePath.Profile,
      title: 'Prime Renews in 2 days!',
      subTitle: 'Your prime membership will automatically renewed in 2 days.',
    },
    {
      id: 5,
      image: ImagePath.Profile,
      title: 'Prime Renews in 2 days!',
      subTitle: 'Your prime membership will automatically renewed in 2 days.',
    },
    {
      id: 5,
      image: ImagePath.Profile,
      title: 'Prime Renews in 2 days!',
      subTitle: 'Your prime membership will automatically renewed in 2 days.',
    },
    {
      id: 5,
      image: ImagePath.Profile,
      title: 'Prime Renews in 2 days!',
      subTitle: 'Your prime membership will automatically renewed in 2 days.',
    },
    {
      id: 5,
      image: ImagePath.Profile,
      title: 'Prime Renews in 2 days!',
      subTitle: 'Your prime membership will automatically renewed in 2 days.',
    },
    {
      id: 5,
      image: ImagePath.Profile,
      title: 'Prime Renews in 2 days!',
      subTitle: 'Your prime membership will automatically renewed in 2 days.',
    },
    {
      id: 5,
      image: ImagePath.Profile,
      title: 'Prime Renews in 2 days!',
      subTitle: 'Your prime membership will automatically renewed in 2 days.',
    },
  ]);

  return (
    <WrapperContainer  statusBarColor='#0D111C'>
      <Header login={false} hideLogo={true} />
      <View style={styles.NotificationHeadline}>
        <Text style={styles.NotificationHeadlineText}>
          {AllText.Notification_heading}
        </Text>
      </View>

      <View style={{flex: 1}}>
        <FlatList
          data={List}
          renderItem={({item, index}) => {
            return (
              <View style={{marginHorizontal: 20, marginBottom: 20}}>
                <View
                  style={{
                    flexDirection: 'row',

                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <View style={{flex: 0.15}}>
                    <Image source={item.image}></Image>
                  </View>
                  <View style={{flex: item.image2 ? 0.7 : 0.85}}>
                    <Text style={styles.notiTitle}>{item.title}</Text>
                    <Text numberOfLines={3} style={styles.notiSubTitle}>
                      {item.subTitle}
                    </Text>
                  </View>
                  {item.image2 ? (
                    <View style={{flex: 0.15, alignItems: 'flex-end'}}>
                      <Image
                        source={item.image2}
                        style={{
                          height: 40,
                          width: 40,
                          borderRadius: 5,
                        }}></Image>
                    </View>
                  ) : null}
                </View>
              </View>
            );
          }}
        />
      </View>
    </WrapperContainer>
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
    marginLeft: wp('2%'),
  },
  NotificationScreenMain: {
    backgroundColor: 'black',
    height: hp('100%'),
    width: wp('100%'),
  },
  notiTitle: {
    fontSize: 13,
    color: '#E9F0FA',
    lineHeight: 32,
    fontWeight: '600',
  },
  notiSubTitle: {
    fontSize: 12,
    color: '#9CA6B6',
    lineHeight: 18,
    fontWeight: '300',
  },
});
