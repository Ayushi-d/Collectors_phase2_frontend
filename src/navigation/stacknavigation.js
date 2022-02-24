import React from 'react';
import Splash from '../screens/Auth/Splash';
import Signin from '../screens/Auth/Signin';
import Signup from '../screens/Auth/Signup';
import Authdetails from '../screens/Auth/Authdetails';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SigninForgot from '../screens/Auth/Signin/SigninForgot';
import SigninOTp from '../screens/Auth/Signin/SigninOTp';
import SigninPassword from '../screens/Auth/Signin/SigninPassword';
import SignupOtp from '../screens/Auth/Signup/SignupOtp';
import SignupUsername from '../screens/Auth/Signup/SignupUsername';
import BottomTab from './bottomtab';
import MainHome from '../screens/Screen/MainHome';
import EditProfile from '../screens/Screen/Profile/EditProfile';
import Termsofuse from '../screens/BasicDetails/Termsofuse';
const Stack = createNativeStackNavigator();
const StackNavigtaion=()=>{
    return(
    <Stack.Navigator>
    <Stack.Screen name="Splash" component={Splash}  options={{headerShown:false}}/>
    <Stack.Screen name="Signin" component={Signin}  options={{headerShown:false}}/>
    <Stack.Screen name="Signup" component={Signup}  options={{headerShown:false}}/>
    <Stack.Screen name="Authdetails" component={Authdetails} options={{headerShown:false}}/>
    <Stack.Screen name="SigninForgot" component={SigninForgot} options={{headerShown:false}}/>
    <Stack.Screen name="SigninOTp" component={SigninOTp} options={{headerShown:false}}/>
    <Stack.Screen name="SigninPassword" component={SigninPassword} options={{headerShown:false}}/>
    <Stack.Screen name="SignupUsername" component={SignupUsername} options={{headerShown:false}}/>
    <Stack.Screen name="SignupOtp" component={SignupOtp} options={{headerShown:false}}/>
    <Stack.Screen name="BottomTab" component={BottomTab} options={{headerShown:false}}/>
    <Stack.Screen name="EditProfile" component={EditProfile} options={{headerShown:false}}/>
    <Stack.Screen name="Termofuse" component={Termsofuse} options={{headerShown:false}}/>

  </Stack.Navigator>
    )
}
export default StackNavigtaion;