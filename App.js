import React from 'react';
import {View,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/navigation/stacknavigation';
// import Toast from 'react-native-toast-message';
import { NativeBaseProvider } from 'native-base';
const App=()=>{
return(
  <NavigationContainer>
    <NativeBaseProvider>
    <MainStack></MainStack>
    {/* <Toast /> */}
    </NativeBaseProvider>
  
  </NavigationContainer>
)
}
export default App;