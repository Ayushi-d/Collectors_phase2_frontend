import React from 'react';
import {View, StatusBar, Platform} from 'react-native';

import {useSafeAreaInsets} from 'react-native-safe-area-context';

const WrapperContainer = ({
  children,
  isLoading,
  statusBarColor = 'black',
  bodyColor = 'black',
  barStyle = 'light-content',
  removeTopInset = false,
  removeBottomInset = false,
}) => {
  const insets = useSafeAreaInsets();
  return Platform.OS.toUpperCase() === 'IOS' ? (
    <View
      style={{
        flex: 1,
        backgroundColor: statusBarColor,
        paddingTop: removeBottomInset ? 0 : insets.top,
        paddingBottom: 0,
      }}>
      <StatusBar backgroundColor={statusBarColor} barStyle={barStyle} />
      <View
        style={{
          backgroundColor: bodyColor,
          flex: 1,
        }}>
        {children}
      </View>
    </View>
  ) : (
    <View
      style={{
        flex: 1,
        backgroundColor: statusBarColor,
        paddingTop: removeBottomInset ? 0 : insets.top,
        paddingBottom: removeBottomInset ? 0 : insets.bottom,
      }}>
      <StatusBar backgroundColor={statusBarColor} barStyle={barStyle} />
      <View
        style={{
          backgroundColor: bodyColor,
          flex: 1,
        }}>
        {children}
      </View>
    </View>
  );
};

export default WrapperContainer;
