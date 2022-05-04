import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import ImagePath from '../../../constants/Imagepath';
import ChatList from '../../../components/ChatList';
import EmptyComp from '../../../components/EmptyComp';
import WrapperContainer from '../../../components/WrapperContainer';

const ChatScreen = ({navigation}) => {
  const [Authdata, setAuthData] = useState('sent');

  return (
    <WrapperContainer statusBarColor='#0D111C'>
      <View style={{backgroundColor: '#0D111C'}}>
        <View style={styles.inputStyle}>
          <Image source={ImagePath.Search} />
          <TextInput
            placeholder= 'Search bids here...' 
            placeholderTextColor={'#9CA6B6'}
            style={styles.input}
            selectionColor={'white'}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            paddingTop: 20,
          }}>
          <TouchableOpacity
            onPress={() => setAuthData('sent')}
            style={{alignItems: 'center'}}>
            <View>
              <Text
                style={
                  Authdata == 'sent'
                    ? {
                        color: 'white',
                        fontFamily: 'Poppins-SemiBold',
                        fontSize: 13,
                      }
                    : {
                        color: '#E9F0FA70',
                        fontSize: 13,
                        fontFamily: 'Poppins-Regular',
                      }
                }>
                SENT BIDS
              </Text>
            </View>

            {Authdata == 'sent' ? (
              <View
                style={{
                  borderBottomColor: 'white',
                  borderBottomWidth: 4,
                  width: wp('5%'),
                  borderRadius: 40,
                  marginTop: 5,
                }}
              />
            ) : null}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setAuthData('receive')}
            style={{alignItems: 'center'}}>
            <View>
              <Text
                style={
                  Authdata == 'receive'
                    ? {
                        color: 'white',
                        fontFamily: 'Poppins-SemiBold',
                        fontSize: 13,
                      }
                    : {
                        color: '#E9F0FA70',
                        fontFamily: 'Poppins-Regular',
                        fontSize: 13,
                      }
                }>
                RECIEVED BIDS
              </Text>
            </View>

            {Authdata == 'receive' ? (
              <View
                style={{
                  borderBottomColor: 'white',
                  borderBottomWidth: 4,
                  width: wp('5%'),
                  borderRadius: 40,
                  marginTop: 5,
                }}
              />
            ) : null}
          </TouchableOpacity>
        </View>
      </View>

      <View style={{flex: 1, paddingBottom: 20}}>
        {Authdata === 'sent' ? (
          <FlatList
            ListEmptyComponent={() => (
              <EmptyComp
                topText={'No Accepted Bids'}
                bottomText={
                  'Looks like no one has accepted your bid yet. Wait or start bidding on available posts!'
                }
              />
            )}
            data={[
              '',
              '',
              '',
              '',
              '',
              '',
              '',
              '',
              '',
              '',
              '',
              '',
              '',
              '',
              '',
              '',
              '',
              '',
              '',
              '',
            ]}
            renderItem={({item, index}) => {
              return <ChatList navigation={navigation} />;
            }}
          />
        ) : (
          <FlatList
            data={[]}
            ListEmptyComponent={() => (
              <EmptyComp
                topText={'No Recieved Bids'}
                bottomText={
                  'Looks like no one has sent you a bid yet.Wait or post more interesting stuff to receive bids. '
                }
              />
            )}
            renderItem={({item, index}) => {
              return <View></View>;
            }}
          />
        )}
      </View>
    </WrapperContainer>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  inputStyle: {
    flexDirection: 'row',
    height: 44,
    borderRadius: 10,
    backgroundColor: '#2F3545',
    marginHorizontal: 20,
    marginTop: 30,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  input: {
    height: 44,
    flex: 0.9,
    paddingLeft: 10,
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: 'white',
    marginTop: 5,
  },
});
