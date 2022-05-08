import React from 'react';
import {StyleSheet, TouchableOpacity, View, Image, Text} from 'react-native';
import MainHome from '../screens/Screen/MainHome';
import Message from '../screens/Screen/Message';
import Notification from '../screens/Screen/Notification';
import Profile from '../screens/Screen/Profile';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomPost from '../screens/Screen/BottomPost';
import Path from '../constants/Imagepath';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../utility';
import ChatScreen from '../screens/Screen/Chat/ChatScreen';
const Tab = createBottomTabNavigator();
const BottomTabNavigator = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="MainHome"
      tabBarOptions={{
        activeBackgroundColor: 'black',
        inactiveBackgroundColor: 'black',
        activeTintColor: 'white',
        ActiveXObject: 'red',
        style: {
          backgroundColor: 'red',
        },
      }}>
      <Tab.Screen
        name=" "
        component={MainHome}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => {
            return focused ? (
              <View>
                <View
                  style={{
                    borderBottomColor: 'white',
                    borderBottomWidth: 5,
                    borderRadius: 5,
                    bottom: 8,
                  }}
                />
                <Image
                  source={Path.Hometab}
                  style={{height: 16, width: 16}}></Image>
              </View>
            ) : (
              <View>
                <Image
                  source={Path.HometabG}
                  style={{height: 16, width: 16}}></Image>
              </View>
            );
          },
        }}
        // options={{
        //   tabBarLabel: 'Home',
        //   tabBarIcon: ({ color, size }) => (
        //     // <MaterialCommunityIcons name="home" color={color} size={size} />
        //     <Image source={Path.Hometab} resizeMode="center"></Image>
        //   ),
        // }}
      />
      <Tab.Screen
        name="Message"
        component={ChatScreen}
        options={{
          tabBarLabel: 'Message',
          tabBarIcon: ({focused}) => {
            return focused ? (
              <View>
                <View
                  style={{
                    borderBottomColor: 'white',
                    borderBottomWidth: 5,
                    bottom: 8,
                    borderRadius: 5,
                  }}
                />
                <Image
                  source={Path.ChattabG}
                  style={{height: 16, width: 16}}></Image>
              </View>
            ) : (
              <View>
                <Image
                  source={Path.Chattab}
                  style={{height: 16, width: 16}}></Image>
              </View>
            );
          },
        }}
        // options={{
        //   tabBarLabel: 'Messages',
        //   tabBarIcon: ({ color, size }) => (
        //     // <MaterialCommunityIcons name="message" color={color} size={size} />
        //     <Image source={Path.Chattab} resizeMode="center"></Image>
        //   ),
        // }}
      />
      <Tab.Screen
        name="NewPost"
        component={BottomPost}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <TouchableOpacity onPress={() => navigation.navigate('NewPost')}>
              <View
                style={{
                  backgroundColor: '#117AF5',
                  padding: 5,
                  borderRadius: 30,
                  top: -20,
                  height: 50,
                  width: 50,
                  alignItems: 'center',
                }}>
                <MaterialCommunityIcons
                  name="plus"
                  color="white"
                  size={size}
                  style={{marginTop: 5}}
                />
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarLabel: 'Notification',
          tabBarIcon: ({focused}) => {
            return focused ? (
              <View>
                <View
                  style={{
                    borderBottomColor: 'white',
                    borderBottomWidth: 5,
                   bottom: 8,
                    borderRadius: 5,
                  }}
                />
                <Image
                  source={Path.NotificationTab}
                  style={{height: 16, width: 16}}></Image>
              </View>
            ) : (
              <View>
                <Image
                  source={Path.NotificationTabG}
                  style={{height: 16, width: 16}}></Image>
              </View>
            );
          },
        }}
        // options={{
        //   tabBarLabel: 'Stores',
        //   tabBarIcon: ({ color, size }) => (
        //     // <MaterialCommunityIcons name="notification-clear-all" color={color} size={size} />
        //     <Image source={Path.NotificationTab} resizeMode="center"></Image>
        //   ),
        // }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused}) => {
            return focused ? (
              <View>
                <View
                  style={{
                    borderBottomColor: 'white',
                    borderBottomWidth: 5,
                   bottom: 8,
                    borderRadius: 5,
                  }}
                />
                <Image
                  source={Path.ProfileTab}
                  style={{height: 16, width: 16}}></Image>
              </View>
            ) : (
              <View>
                <Image
                  source={Path.ProfileTabG}
                  style={{height: 16, width: 16}}></Image>
              </View>
            );
          },
        }}
        // options={{
        //   tabBarLabel: 'Profile',
        //   tabBarIcon: ({ color, size }) => (
        //     // <MaterialCommunityIcons name="account" color={color} size={size} />
        //     <Image source={Path.ProfileTab} resizeMode="contain" resizeMode="center"></Image>
        //   ),
        // }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
const styles = StyleSheet.create({
  // tabImg: {
  //   width: 30,
  //   height: 30,
  //   alignSelf: 'center',
  //   tintColor: 'grey',
  // },
  // selectedTabImg: {
  //   width: 30,
  //   height: 30,
  //   alignSelf: 'center',
  //   tintColor: 'skyblue',
  // },
});
