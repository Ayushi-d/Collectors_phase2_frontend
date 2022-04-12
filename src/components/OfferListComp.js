import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import ImagePath from '../constants/Imagepath';

const OfferListComp = () => {
  return (
    <View style={styles.mainView}>
      <View style={{flex: 0.1}}>
        <Image
          source={ImagePath.userImage}
          style={{height: 32, width: 32, borderRadius: 32 / 2}}
        />
      </View>

      <View style={{flex: 0.5, marginHorizontal: 10}}>
        <Text style={styles.nameText}>You</Text>
        <Text style={styles.timeText}>20 mins ago</Text>
      </View>
      <View
        style={{
          flex: 0.4,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
        <Text style={styles.buyText}>buy for</Text>
        <Text style={styles.priceText}>$10k</Text>
      </View>
    </View>
  );
};

export default OfferListComp;
const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    paddingVertical: 5,

    marginBottom: 15,
  },
  nameText: {
    color: 'white',
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
  },
  timeText: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#9CA6B6',
  },
  priceText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: 'white',
  },
  buyText: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#9CA6B6',
    paddingRight: 10,
  },
});
