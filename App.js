import React,{useEffect} from 'react';
import {View,Text,StatusBar,Platform} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/navigation/stacknavigation';
// import Toast from 'react-native-toast-message';
import { NativeBaseProvider } from 'native-base';
const App=()=>{
  useEffect(()=>{
    if (Platform.OS === 'android') {
      // StatusBar.setBackgroundColor('#ffffff');
      // StatusBar.setBarStyle('dark-content');
      // StatusBar.setTranslucent(true);
    }
  },[])
return(
  <NavigationContainer>
    <NativeBaseProvider>
    <MainStack />
    {/* <Toast /> */}
    </NativeBaseProvider>
  
  </NavigationContainer>
)
}
export default App;