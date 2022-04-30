import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  TextInput,
  Dimensions,
} from 'react-native';
import React, {useState, useRef} from 'react';
import ImagePath from '../../../constants/Imagepath';
import {widthPercentageToDP as wp} from '../../../utility';
import CommentList from '../../../components/CommentList';
import OfferListComp from '../../../components/OfferListComp';
import ActionSheet from 'react-native-actions-sheet';
import CustomModal from '../../../components/CustomModal';
import WrapperContainer from '../../../components/WrapperContainer';

const PostDetail = ({navigation,routes}) => {
  const [Authdata, setAuthData] = useState('activity');

  const width = Dimensions.get('window').width;

  const [deleteModal, setDeleteModal] = useState(false);
  const [closeModal, setCloseModal] = useState(false);

  const bottomRef = useRef();

  const bottomRefOffer = useRef();

  const _footerComp = () => {
    return (
      <View style={{marginTop: 30, paddingBottom: 30}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            marginHorizontal: 50,
          }}>
          <View
            style={{
              height: 1,
              backgroundColor: '#465874',
              flex: 0.25,
            }}
          />
          <Text style={styles.endFooterText}>Yup, this ends here!</Text>

          <View
            style={{
              height: 1,
              backgroundColor: '#465874',
              flex: 0.25,
            }}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 20,
            marginTop: 40,
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.btnText}>EXCHANGE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.btnText}>BUY</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const combineHeader = () => {
    return (
      <View>
        {_listHeaderComp()}
        {_listHeader2()}
      </View>
    );
  };

  const _listHeaderComp = () => {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: 20,
          }}>
          <View style={{flex: 0.1}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={ImagePath.back} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              flex: 0.7,
            }}>
            <Image source={ImagePath.Profile}></Image>
            <Text
              style={{
                color: '#E9F0FA',
                marginLeft: '8%',
                fontWeight: 'bold',
                fontSize: 13,
                lineHeight: 18,
              }}>
              liamnorris
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',

              flex: 0.3,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  color: '#E9F0FA',
                  fontWeight: 'bold',
                  textDecorationLine: 'underline',
                  fontSize: 12,
                }}>
                FOLLOW
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => bottomRef.current.setModalVisible(true)}
              style={{marginLeft: wp('1%')}}>
              <Image source={ImagePath.menu}></Image>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginTop: 15}}>
          <View>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={['', '', '']}
              horizontal={true}
              pagingEnabled={true}
              renderItem={({item, index}) => {
                return (
                  <View>
                    <Image
                      source={ImagePath.bigImage}
                      style={{width: width, height: 375}}
                    />
                  </View>
                );
              }}
            />
          </View>

          <View
            style={{
              marginHorizontal: 20,
              marginTop: 25,
              marginBottom: 10,
            }}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={['', '']}
              keyExtractor={(_, index) => index.toString()}
              renderItem={({item, index}) => {
                return (
                  <View style={styles.listStyle}>
                    <Text
                      style={{
                        color: '#E9F0FA',
                        fontWeight: '600',
                        fontSize: 11,
                      }}>
                      Coinssss
                    </Text>
                  </View>
                );
              }}
            />
          </View>
        </View>
        <View style={styles.textStyle}>
          <View style={{flex: 0.8, justifyContent: 'center'}}>
            <Text style={styles.priceText}>Light Year Toy</Text>
          </View>

          <View
            style={{
              flex: 0.2,
              alignItems: 'flex-end',
              justifyContent: 'center',
            }}>
            <Text style={styles.priceText}>$500</Text>
          </View>
        </View>
        <Text style={styles.descriptionText}>
          Buzz Lightyear is a fictional character in the Toy Story franchise
          created by Disney and Pixar. He is a toy Space Ranger superhero
          according to the movies and an action...
          <Text style={styles.moreText}>more</Text>
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            paddingTop: 20,
          }}>
          <TouchableOpacity
            onPress={() => setAuthData('activity')}
            style={{alignItems: 'center'}}>
            <View>
              <Text
                style={
                  Authdata == 'activity'
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
                ACTIVITY
              </Text>
            </View>

            {Authdata == 'activity' ? (
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
            onPress={() => setAuthData('offers')}
            style={{alignItems: 'center'}}>
            <View>
              <Text
                style={
                  Authdata == 'offers'
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
                OFFERS
              </Text>
            </View>

            {Authdata == 'offers' ? (
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
        <View
          style={{
            height: 1,
            marginTop: -4,
            backgroundColor: 'rgba(233, 240, 250, 0.1)',
          }}
        />
      </View>
    );
  };

  const _listHeader2 = () => {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',

            flex: 0.5,
            marginHorizontal: 20,
            marginTop: 40,
          }}>
          <View>
            <TouchableOpacity>
              <Image
                source={ImagePath.like}
                style={{height: 20, width: 22}}></Image>
            </TouchableOpacity>
            <View>
              <Text
                style={{
                  color: '#9CA6B6',
                  fontWeight: 'bold',
                  fontSize: 12,
                  fontWeight: '400',
                  marginTop: 10,
                }}>
                324 Likes
              </Text>
            </View>
          </View>

          <View style={{marginLeft: 10}}>
            <TouchableOpacity>
              <Image
                source={ImagePath.Chat}
                style={{height: 20, width: 20}}></Image>
            </TouchableOpacity>
            <View>
              <Text
                style={{
                  color: '#9CA6B6',
                  fontWeight: 'bold',
                  fontSize: 12,
                  fontWeight: '400',
                  marginTop: 10,
                }}>
                96 Comments
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.inputView}>
          <TextInput
            selectionColor={'white'}
            style={styles.inputStyle}
            placeholderTextColor={'#9CA6B6'}
            placeholder={'Add a comment'}
          />

          <View
            style={{flex: 0.2, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity>
              <Image source={ImagePath.Send} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginTop: 30}}>
          <Text style={styles.commentText}>TOP COMMENTS</Text>
        </View>
      </View>
    );
  };

  const _listheadOffer = () => {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',

            marginHorizontal: 20,
            marginTop: 20,
            marginBottom: 20,
          }}>
          <View
            style={{
              flex: 0.35,
            }}>
            <View>
              <Text style={styles.bidingText}>Bidding</Text>
            </View>
            <View style={styles.innerBider}>
              <Image
                source={ImagePath.BidingMOney}
                style={{height: 20, width: 20}}
              />
              <Text style={styles.innerBidderText}>OPEN</Text>
            </View>
          </View>
          <View style={{flex: 0.35, alignItems: 'center'}}>
            <View>
              <Text style={styles.bidingText}>Negotiating</Text>
            </View>
            <View style={styles.innerBider}>
              <Image
                source={ImagePath.BidingMOney}
                style={{height: 20, width: 20}}></Image>
              <Text style={styles.innerBidderText}>5+</Text>
            </View>
          </View>
          <View style={{flex: 0.35, alignItems: 'flex-end'}}>
            <View>
              <Text style={styles.bidingText}>Bidders</Text>
            </View>
            <View style={styles.innerBider}>
              <Image
                source={ImagePath.BidingUsers}
                style={{height: 20, width: 20}}></Image>
              <Text style={styles.innerBidderText}>50+</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            onPress={() => bottomRefOffer?.current.setModalVisible(true)}
            style={styles.topBuyText}>
            TOP BUY BIDS
          </Text>
          <Image source={ImagePath.down} style={{marginLeft: 10}} />
        </View>
      </View>
    );
  };

  const listOfferCombine = () => {
    return (
      <View>
        {_listHeaderComp()}
        {_listheadOffer()}
      </View>
    );
  };

  const _listFooterOffer = () => {
    return (
      <View style={{paddingBottom: 30}}>
        <Text style={styles.loadtext}>LOAD MORE BIDS</Text>
        <TouchableOpacity style={styles.buttonView}>
          <Text style={styles.btnText}>EDIT YOUR BID</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <WrapperContainer>
      <ScrollView style={styles.containerStyle}>
        {Authdata === 'activity' ? (
          <FlatList
            data={['', '']}
            ListHeaderComponent={combineHeader}
            ListFooterComponent={_footerComp}
            renderItem={({item, index}) => {
              // return <CommentList />;
            }}
          />
        ) : (
          <FlatList
            data={['', '']}
            ListHeaderComponent={listOfferCombine}
            ListFooterComponent={_listFooterOffer}
            renderItem={() => {
              return <OfferListComp />;
            }}
          />
        )}
        <ActionSheet
          onClose={() => bottomRef.current.setModalVisible(false)}
          indicatorColor={'#4F5461'}
          statusBarTranslucent
          ref={bottomRef}>
          <View style={styles.bottomView}>
            <View style={styles.indicator} />
            <Text style={styles.settingText}>POST SETTINGS</Text>
            <TouchableOpacity
              style={{marginTop: 25}}
              onPress={() => {
                bottomRef.current.setModalVisible(false);
                setTimeout(() => {
                  setDeleteModal(true);
                }, 300);
              }}>
              <Text style={styles.deleteText}>Delete Post</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{marginTop: 25}}
              onPress={() => {
                bottomRef.current.setModalVisible(false);
                setTimeout(() => {
                  setCloseModal(true);
                }, 300);
              }}>
              <Text style={styles.deleteText}>Close Bidding for this post</Text>
            </TouchableOpacity>
            {/* report post in case post is not of user */}
          </View>
        </ActionSheet>

        <ActionSheet
          indicatorColor={'#4F5461'}
          onClose={() => bottomRefOffer.current.setModalVisible(false)}
          ref={bottomRefOffer}>
          <View style={styles.bottomView}>
            <View style={styles.indicator} />
            <Text style={styles.settingText}>SORT BIDS BY</Text>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 25,
              }}>
              <Text style={styles.deleteText}>Top Buy Bids</Text>
              <Image source={ImagePath.next} style={{width: 20, height: 20}} />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 25,
              }}>
              <Text style={styles.deleteText}>Top Exchange + Buy Bids</Text>
              <Image source={ImagePath.next} style={{width: 20, height: 20}} />
            </TouchableOpacity>
          </View>
        </ActionSheet>
        {deleteModal ? (
          <CustomModal
            mainText={'Delete'}
            mainText2={' this post?'}
            warningText={'This would be an irreversible action!'}
            leftButton={'NO'}
            rightButton={'YES, DELETE'}
            isVisible={deleteModal}
            onPressLeft={() => setDeleteModal(false)}
          />
        ) : null}

        {closeModal ? (
          <CustomModal
            mainText={'Close Bidding '}
            mainText2={'for this post?'}
            warningText={'Post will no longer be visible to others.'}
            leftButton={'NO'}
            rightButton={'CLOSE BIDDING'}
            isVisible={closeModal}
            onPressLeft={() => setCloseModal(false)}
            backgroundColor="#117AF5"
          />
        ) : null}
      </ScrollView>
    </WrapperContainer>
  );
};

export default PostDetail;

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#00040E',
    flex: 1,
  },
  listStyle: {
    height: 24,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#465874',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  textStyle: {
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  priceText: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    color: '#E9F0FA',
  },
  descriptionText: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#9CA6B6',
    marginHorizontal: 20,
    marginTop: 6,
  },
  moreText: {
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    color: 'white',
    textDecorationLine: 'underline',
  },
  inputView: {
    marginHorizontal: 20,
    height: 44,
    borderRadius: 10,
    backgroundColor: '#1F232E',
    flexDirection: 'row',
    marginTop: 17,
  },
  inputStyle: {
    flex: 0.8,
    paddingLeft: 20,
    color: 'white',
    fontFamily: 'Poppins-Regular',
    justifyContent: 'center',
    height: 48,
  },
  commentText: {
    fontSize: 13,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    color: '#9CA6B6',
  },
  endFooterText: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#E9F0FA',
    opacity: 0.7,
    textAlign: 'center',
    flex: 0.5,
  },
  button: {
    height: 40,
    backgroundColor: '#117AF5',
    flex: 0.48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 13,
    fontFamily: 'Poppins-SemiBold',
    color: 'white',
  },
  bidingText: {
    color: '#9CA6B6',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
  },
  innerBider: {
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: 5,
  },
  innerBidderText: {
    color: '#E9F0FA',
    fontSize: 12,
    fontWeight: '400',
    marginLeft: '10%',
  },
  loadtext: {
    fontSize: 13,
    fontFamily: 'Poppins-SemiBold',
    color: 'white',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  buttonView: {
    height: 40,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: '#465874',
    backgroundColor: '#00040E',
    marginHorizontal: 20,
    marginTop: 30,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomView: {
    height: 180,
    backgroundColor: '#13161F',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  deleteText: {
    color: '#E9F0FA',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  settingText: {
    fontSize: 13,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    color: '#9CA6B6',
  },
  topBuyText: {
    fontSize: 13,
    fontFamily: 'Poppins-SemiBold',
    color: 'white',
    textDecorationLine: 'underline',
  },
  indicator: {
    height: 4,
    width: 40,
    backgroundColor: '#4F5461',
    alignSelf: 'center',
    marginBottom: 10,
    borderRadius: 100,
  },
});
