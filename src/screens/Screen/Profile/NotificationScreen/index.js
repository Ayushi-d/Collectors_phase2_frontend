import React, {useState} from 'react';
import {View, Text, ScrollView, Switch, StyleSheet} from 'react-native';
import Header from '../../../../components/Header';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../../utility';
const NotificationScreen = ({navigation}) => {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(false);
  const [toggle5, setToggle5] = useState(false);
  const [toggle6, setToggle6] = useState(false);
  const toggleStitch1 = () => {
    setToggle1(!toggle1);
  };
  const toggleStitch2 = () => {
    setToggle2(!toggle2);
  };
  const toggleStitch3 = () => {
    setToggle3(!toggle3);
  };
  const toggleStitch4 = () => {
    setToggle4(!toggle4);
  };
  const toggleStitch5 = () => {
    setToggle5(!toggle5);
  };
  const toggleStitch6 = () => {
    setToggle6(!toggle6);
  };

  return (
    <View>
      <Header login="true" navigate={navigation} hideLogo="true" />
      <ScrollView
        style={{
          width: wp('100%'),
          height: hp('100%'),
          backgroundColor: 'black',
        }}>
        <View style={{marginLeft: wp('5%'), margin: hp('2%')}}>
          <Text
            style={{
              color: '#E9F0FA',
              fontSize: 20,
              lineHeight: 29,
              fontWeight: '800',
            }}>
            Notifications
          </Text>
        </View>
        <View
          style={{
            margin: wp('5%'),
            justifyContent: 'space-evenly',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{width: wp('70%')}}>
            <Text style={styles.textView}>All Notifications</Text>
            <Text
              style={{
                color: '#9CA6B6',
                fontSize: 12,
                fontWeight: '400',
                lineHeight: 20,
              }}>
              Every notification of the app
            </Text>
          </View>
          <View>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={toggle1 ? '#f4f3f4' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleStitch1}
              value={toggle1}
            />
          </View>
        </View>
        <View style={{marginLeft: wp('6%')}}>
          <Text
            style={{
              color: '#9CA6B6',
              fontSize: 12,
              fontWeight: '400',
              lineHeight: 20,
            }}>
            GENERAL
          </Text>
        </View>
        <View
          style={{
            margin: wp('5%'),
            justifyContent: 'space-evenly',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{width: wp('70%')}}>
            <Text style={styles.textView}>Bid Notification</Text>
            <Text
              style={{
                color: '#9CA6B6',
                fontSize: 12,
                fontWeight: '400',
                lineHeight: 20,
              }}>
              Stay updated with posts you’ve bid
            </Text>
          </View>
          <View>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={toggle2 ? '#f4f3f4' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleStitch2}
              value={toggle2}
            />
          </View>
        </View>
        <View
          style={{
            margin: wp('5%'),
            justifyContent: 'space-evenly',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{width: wp('70%')}}>
            <Text style={styles.textView}>Post Notifications</Text>
            <Text
              style={{
                color: '#9CA6B6',
                fontSize: 12,
                fontWeight: '400',
                lineHeight: 20,
              }}>
              Likes, Comments and Bids
            </Text>
          </View>
          <View>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={toggle3 ? '#f4f3f4' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleStitch3}
              value={toggle3}
            />
          </View>
        </View>
        <View
          style={{
            margin: wp('5%'),
            justifyContent: 'space-evenly',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{width: wp('70%')}}>
            <Text style={styles.textView}>Message Notifications</Text>
            <Text
              style={{
                color: '#9CA6B6',
                fontSize: 12,
                fontWeight: '400',
                lineHeight: 20,
              }}>
              Likes, Comments and Bids
            </Text>
          </View>
          <View>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={toggle4 ? '#f4f3f4' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleStitch4}
              value={toggle4}
            />
          </View>
        </View>
        <View
          style={{
            margin: wp('5%'),
            justifyContent: 'space-evenly',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{width: wp('70%')}}>
            <Text style={styles.textView}>Quiz Reminder</Text>
            <Text
              style={{
                color: '#9CA6B6',
                fontSize: 12,
                fontWeight: '400',
                lineHeight: 20,
              }}>
              Know when the quiz is ready
            </Text>
          </View>
          <View>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={toggle5 ? '#f4f3f4' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleStitch5}
              value={toggle5}
            />
          </View>
        </View>
        <View
          style={{
            margin: wp('5%'),
            justifyContent: 'space-evenly',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{width: wp('70%')}}>
            <Text style={styles.textView}>Prime Billiing Notification</Text>
            <Text
              style={{
                color: '#9CA6B6',
                fontSize: 12,
                fontWeight: '400',
                lineHeight: 20,
              }}>
              Know when you are going to be billed
            </Text>
          </View>
          <View>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={toggle6 ? '#f4f3f4' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleStitch6}
              value={toggle6}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default NotificationScreen;

const styles = StyleSheet.create({
  textView: {
    color: '#E9F0FA',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
});
