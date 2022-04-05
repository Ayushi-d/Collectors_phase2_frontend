import React from "react";
import { StyleSheet, TouchableOpacity, View, Image, Text } from "react-native";
import MainHome from "../screens/Screen/MainHome";
import Message from "../screens/Screen/Message";
import Notification from "../screens/Screen/Notification";
import Profile from "../screens/Screen/Profile";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NewPost from '../screens/Screen/NewPost';
import Path from '../constants/Imagepath';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "../utility";
const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="MainHome"
      tabBarOptions={{
        activeBackgroundColor: 'black',
        inactiveBackgroundColor: 'black',
        activeTintColor: 'white',
        ActiveXObject: 'red',
        style: {
          backgroundColor: 'red',
        }
      }}
    >
      <Tab.Screen
        name=" "
        component={MainHome}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <View >
                <View
                  style={{
                    borderBottomColor: 'white',
                    borderBottomWidth: 5,
                    top: hp('.3%'),
                    borderRadius: 5
                  }}
                />
                <Image source={Path.Hometab} resizeMode="center"></Image>
              </View>
            ) : (
              <View >
                <Image source={Path.HometabG} resizeMode="center"></Image>
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
        component={Message}
        options={{
          tabBarLabel: 'Message',
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <View >
                <View
                  style={{
                    borderBottomColor: 'white',
                    borderBottomWidth: 5,
                    top: hp('.2%'),
                    borderRadius: 5
                  }}
                />
                <Image source={Path.ChattabG} resizeMode="center" ></Image>
              </View>
            ) : (
              <View >
                <Image source={Path.Chattab} resizeMode="center"></Image>
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
        component={NewPost}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <View style={{ backgroundColor: '#117AF5', padding: 5, borderRadius: 30, top: -20, height: 50, width: 50, alignItems: 'center' }}>
              <MaterialCommunityIcons name="plus" color="white" size={size} style={{ marginTop: 5 }} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarLabel: 'Notification',
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <View >
                <View
                  style={{
                    borderBottomColor: 'white',
                    borderBottomWidth: 5,
                    top: hp('.4%'),
                    borderRadius: 5
                  }}
                />
                <Image source={Path.NotificationTab} resizeMode="center"></Image>
              </View>
            ) : (
              <View >
                <Image source={Path.NotificationTabG} resizeMode="center"></Image>
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
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <View>
                <View
                  style={{
                    borderBottomColor: 'white',
                    borderBottomWidth: 5,
                    top: hp('.3%'),
                    borderRadius: 5
                  }}
                />
                <Image source={Path.ProfileTab} resizeMode="contain" resizeMode="center"></Image>
              </View>
            ) : (
              <View >
                <Image source={Path.ProfileTabG} resizeMode="contain" resizeMode="center"></Image>
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


