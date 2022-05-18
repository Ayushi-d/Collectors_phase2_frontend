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
  ToastAndroid
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {TextInput as PaperTextInput} from 'react-native-paper';
import ImagePicker from 'react-native-image-crop-picker';
import Modal from 'react-native-modal';
import React, {useState, useRef,useEffect} from 'react';
import ImagePath from '../../../constants/Imagepath';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from '../../../utility';
import * as Utility from '../../../utility/index';
import CommentList from '../../../components/CommentList';
import OfferListComp from '../../../components/OfferListComp';
import ActionSheet from 'react-native-actions-sheet';
import CustomModal from '../../../components/CustomModal';
import WrapperContainer from '../../../components/WrapperContainer';
import axios from 'axios';
import Path from '../../../constants/Imagepath';
import { addComment, Login } from '../../../api/apiUrls';
// import { useEffect } from 'react/cjs/react.production.min';
const PostDetail = ({navigation,route}) => {
  const { item } = route.params;
  console.log("item detaikls...",item);
  console.log("image is ...",item.images[0].uri)
  const refRBSheet = useRef();
  const refRBSheetExchange = useRef();
  const [AllMessage,setAllMessage]=useState([]);
  const [Authdata, setAuthData] = useState('activity');
  const [isExchangeVisible,setIsExchangeVisible]=useState(false);
  const [isBuyVisible,setisBuyVisible]=useState(false)
  const width = Dimensions.get('window').width;
  const [image1, setImage1] = useState();
  const [image2, setImage2] = useState();
  const [image3, setImage3] = useState();
  const [image4, setImage4] = useState();
  const [isClick, setIsclick] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [closeModal, setCloseModal] = useState(false);
  const [message,setMessage]=useState('');
  const [login_user_id,setlogin_user_id]=useState();
  const [FollowStatus,setFollowStatus]=useState('');
  const [bidAmount,setBidAmount]=useState();
  const [bidMessage,setBidMessage]=useState();
  const [exchangeAmount,setExchnageAmount]=useState();
  const [exchnageMessage,setExchangeMessage]=useState();
  const bottomRef = useRef();
  const [emailActive, setEmailACtive] = useState(false);
  const [imageStatus2, setImageStatus2] = useState(false);
  const [imageStatus3, setImageStatus3] = useState(false);
  const [imageStatus4, setImageStatus4] = useState(false);
  const bottomRefOffer = useRef();
  useEffect(()=>{
    getUserRecords()
  },[])
  const getUserRecords=async()=>{
    let user_id = await Utility.getFromLocalStorge('user_id');
    setlogin_user_id(user_id);
    getAllComment()
  }
  const getAllComment=async()=>{
    let response=await axios.get(`http://13.233.246.19:9000/getComments?post_id=${item.post_id}`);
    console.log(response.data);
    if(response.data.postcomments.length>0){
      setAllMessage(response.data.postcomments)
    }
  }
  const AddExchnageBid=async(item)=>{
   let body= {
      "user_id":login_user_id,
      "post_id":item.post_id,
      "bid":exchangeAmount,
      "type":"2",
      "message":exchnageMessage
    }
    console.log("Exchnage bid Api...",body)
 let response=await axios.post('http://13.233.246.19:9000/addBid',body);
 console.log(response.data)
 refRBSheetExchange.current.close()
 showToastWithGravityAndOffset('Exchage Added Successfully')
  }
  const AddBuyBid=async(item)=>{
    let body= {
        "user_id":1,
        "post_id":1,
        "bid":bidAmount,
        "type":"1",
        "message":bidMessage
    }
 console.log("Add bid Api...",body)
 let response=await axios.post('http://13.233.246.19:9000/addBid',body);
 console.log(response.data)
 refRBSheet.current.close()
 showToastWithGravityAndOffset('You Bid Added Successfully')
  }
  const onChangeText = (text,setSate) => {
    setSate(text);
  };
  const chooseImages = (setImage1,setImageStatus) => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        console.log('image,,,', image.path);

        setImage1(image.path);
        setImageStatus(true);
      })
      .catch(err => {
        console.log('err', err);
      });
  };
  const showToastWithGravityAndOffset = (item) => {
    ToastAndroid.showWithGravityAndOffset(
      item,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  };

  const _footerComp = (item) => {
    // console.log("yup records")
    // useEffect(()=>{

    // },[])
    return (
      <View style={{marginTop: 30, paddingBottom: 30}}>
        {AllMessage.length>0?
         <FlatList
         data={AllMessage}
        //  ListHeaderComponent={_listHead}
         renderItem={({item, index}) => {
           return <CommentList  item={item} />;
         }}
       />:
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
        </View>}
{item.bid_status==="open"?
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 20,
            marginTop: 40,
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity onPress={()=>refRBSheetExchange.current.open()} style={styles.button}>
            <Text style={styles.btnText}>EXCHANGE</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>refRBSheet.current.open()} style={styles.button}>
            <Text style={styles.btnText}>BUY</Text>
          </TouchableOpacity>
        </View>:null}

        <RBSheet
          ref={refRBSheetExchange}
          closeOnDragDown={true}
          closeOnPressMask={true}
          height={500}
          customStyles={{
            wrapper: {
              backgroundColor: 'transparent',
            },
            container: {
              backgroundColor: 'black',
            },
          }}>
             <View style={{alignSelf:'center',margin:'1%'}}>
            <Text  style={{color:'#E9F0FA',fontSize:18,fontWeight:'600'}}>EXCHANGE</Text>
          </View>
              <View
        style={{
          height: 500,
          borderRadius: 10,
          paddingTop:10,
          backgroundColor: '#1F232E',
        }}>
         
        <View style={{flexDirection:'row'}}>
          <View style={{width:wp('40%')}}>
          <Image
            source={{uri:item.images[0].uri}}
            style={{height:70,width:100,alignSelf:'center',borderRadius:10}}
          />
          </View>
          <View >
            <View style={{borderWidth:1,borderColor:'#E9F0FA',borderRadius:20,alignItems:'center',width:wp('20%')}}>
            <Text style={{color:'#E9F0FA',fontSize:12,fontWeight:'600'}}> {item.subcategory}</Text>
            </View>
            <View>
              <Text style={{color:'#E9F0FA',fontSize:16,fontWeight:'600'}}>{item.title}</Text>
            </View>
            <View>
              <Text style={{color:'#E9F0FA',fontSize:16,fontWeight:'600'}}>${item.price}</Text>
            </View>
          </View>
        </View>
        <View>
          <PaperTextInput
            mode="flat"
            theme={{
              colors: {
                text: 'white',
                primary: '#9CA6B6',
                placeholder: '#9CA6B6',
              },
              fonts: {
                regular: '',
              },
            }}
            onFocus={() => setEmailACtive(true)}
            value={exchangeAmount}
            fontFamily="Poppins-Regular"
            onTouchStart={() => setIsclick(!isClick)}
            onChangeText={e => onChangeText(e,setExchnageAmount)}
            label={'Product Description & Bid Message'}
            style={[
              styles.inputStyleModal,
              {borderColor: emailActive ? '#117AF5' : '#1F232E'},
            ]}
          />
          </View>
          <View style={{margin:'5%'}}>
          <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: hp('2%'),
          }}>
          <View
            style={{
              height: hp('9%'),
              borderWidth: 1,
              borderColor: '#117AF5',
              width: wp('20%'),
              borderRadius: 10,
              backgroundColor: '#161F37',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {image1 ? (
              <Image
                source={{uri: image1}}
                style={{height: 66, width: 70, borderRadius: 10}}></Image>
            ) : (
              <TouchableOpacity
                onPress={() => chooseImages(setImage1, setImageStatus2)}>
                <Image source={Path.Plus1}></Image>
              </TouchableOpacity>
            )}
          </View>
          <View
            style={
              imageStatus2
                ? {
                    height: hp('9%'),
                    borderWidth: 1,
                    borderColor: '#117AF5',
                    width: wp('20%'),
                    borderRadius: 10,
                    backgroundColor: '#161F37',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }
                : {
                    height: hp('9%'),
                    borderWidth: 1,
                    borderColor: '#465874',
                    width: wp('20%'),
                    borderRadius: 10,
                    flexDirection: 'row',
                  }
            }>
            {imageStatus2 ? (
              <View>
                {image2 ? (
                  <Image
                    source={{uri: image2}}
                    style={{height: 66, width: 70, borderRadius: 10}}></Image>
                ) : (
                  <TouchableOpacity
                    onPress={() => chooseImages(setImage2, setImageStatus3)}>
                    <Image source={Path.Plus1}></Image>
                  </TouchableOpacity>
                )}
              </View>
            ) : null}
          </View>
          <View
            style={
              imageStatus3
                ? {
                    height: hp('9%'),
                    borderWidth: 1,
                    borderColor: '#117AF5',
                    width: wp('20%'),
                    borderRadius: 10,
                    backgroundColor: '#161F37',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }
                : {
                    height: hp('9%'),
                    borderWidth: 1,
                    borderColor: '#465874',
                    width: wp('20%'),
                    borderRadius: 10,
                    flexDirection: 'row',
                  }
            }>
            {imageStatus3 ? (
              <View>
                {image3 ? (
                  <Image
                    source={{uri: image3}}
                    style={{height: 66, width: 70, borderRadius: 10}}></Image>
                ) : (
                  <TouchableOpacity
                    onPress={() => chooseImages(setImage3, setImageStatus4)}>
                    <Image source={Path.Plus1}></Image>
                  </TouchableOpacity>
                )}
              </View>
            ) : null}
          </View>
          <View
            style={
              imageStatus4
                ? {
                    height: hp('9%'),
                    borderWidth: 1,
                    borderColor: '#117AF5',
                    width: wp('20%'),
                    borderRadius: 10,
                    backgroundColor: '#161F37',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }
                : {
                    height: hp('9%'),
                    borderWidth: 1,
                    borderColor: '#465874',
                    width: wp('20%'),
                    borderRadius: 10,
                    flexDirection: 'row',
                  }
            }>
            {imageStatus4 ? (
              <View>
                {image4 ? (
                  <Image
                    source={{uri: image4}}
                    style={{height: 66, width: 70, borderRadius: 10}}></Image>
                ) : (
                  <TouchableOpacity
                    onPress={() => chooseImages(setImage4, setImageStatus5)}>
                    <Image source={Path.Plus1}></Image>
                  </TouchableOpacity>
                )}
              </View>
            ) : null}
          </View>
        </View>
          </View>
          <View>
          <PaperTextInput
            mode="flat"
            keyboardType='number-pad'
            theme={{
              colors: {
                text: 'white',
                primary: '#9CA6B6',
                placeholder: '#9CA6B6',
              },
              fonts: {
                regular: '',
              },
            }}
            onFocus={() => setEmailACtive(true)}
            value={exchnageMessage}
            fontFamily="Poppins-Regular"
            onTouchStart={() => setIsclick(!isClick)}
            onChangeText={e => onChangeText(e,setExchangeMessage)}
            label={'Add your price (Optional)'}
            style={[
              styles.inputStyleModal,
              {borderColor: emailActive ? '#117AF5' : '#1F232E'},
            ]}
          />
          </View>
        <TouchableOpacity
        onPress={()=>AddExchnageBid(item)}
          style={{
            height: 44,
            width:wp('90%'),
            alignSelf:'center',
            backgroundColor: '#117AF5',
            borderRadius:15,
            marginTop:10,
            // borderBottomLeftRadius: 15,
            // borderBottomRightRadius: 15,
            justifyContent : 'center',
            alignItems : 'center'
          }}>
          <Text style ={styles.btnTextm}>PLACE A BID </Text>
          </TouchableOpacity>
      </View>
     
        </RBSheet>
    <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={true}
          height={400}
          customStyles={{
            wrapper: {
              backgroundColor: 'transparent',
            },
            container: {
              backgroundColor: 'black',
            },
          }}>
             <View style={{alignSelf:'center',margin:'1%'}}>
            <Text  style={{color:'#E9F0FA',fontSize:18,fontWeight:'600'}}>BUY</Text>
          </View>
              <View
        style={{
          height: 400,
          borderRadius: 10,
          paddingTop:10,
          backgroundColor: '#1F232E',
        }}>
         
        <View style={{flexDirection:'row'}}>
          <View style={{width:wp('40%')}}>
          <Image
            source={{uri:item.images[0].uri}}
            style={{height:70,width:100,alignSelf:'center',borderRadius:10}}
          />
          </View>
          <View >
            <View style={{borderWidth:1,borderColor:'#E9F0FA',borderRadius:20,alignItems:'center',width:wp('20%')}}>
            <Text style={{color:'#E9F0FA',fontSize:12,fontWeight:'600'}}>{item.subcategory}</Text>
            </View>
            <View>
              <Text style={{color:'#E9F0FA',fontSize:16,fontWeight:'600'}}>{item.title}</Text>
            </View>
            <View>
              <Text style={{color:'#E9F0FA',fontSize:16,fontWeight:'600'}}>${item.price}</Text>
            </View>
          </View>
        </View>
        <View>
          <PaperTextInput
            mode="flat"
            keyboardType='number-pad'
            theme={{
              colors: {
                text: 'white',
                primary: '#9CA6B6',
                placeholder: '#9CA6B6',
              },
              fonts: {
                regular: '',
              },
            }}
            onFocus={() => setEmailACtive(true)}
            value={bidAmount}
            fontFamily="Poppins-Regular"
            onTouchStart={() => setIsclick(!isClick)}
            onChangeText={e => onChangeText(e,setBidAmount)}
            label={'Add your price'}
            style={[
              styles.inputStyleModal,
              {borderColor: emailActive ? '#117AF5' : '#1F232E'},
            ]}
          />
          </View>
          <View>
          <PaperTextInput
            mode="flat"
            theme={{
              colors: {
                text: 'white',
                primary: '#9CA6B6',
                placeholder: '#9CA6B6',
              },
              fonts: {
                regular: '',
              },
            }}
            onFocus={() => setEmailACtive(true)}
            value={bidMessage}
            fontFamily="Poppins-Regular"
            onTouchStart={() => setIsclick(!isClick)}
            onChangeText={e => onChangeText(e,setBidMessage)}
            label={'Bid Message (Optional)'}
            style={[
              styles.inputStyleModal,
              {borderColor: emailActive ? '#117AF5' : '#1F232E'},
            ]}
          />
          </View>
        <TouchableOpacity
        onPress={()=>AddBuyBid(item)}
          style={{
            height: 44,
            width:wp('90%'),
            alignSelf:'center',
            backgroundColor: '#117AF5',
            borderRadius:15,
            marginTop:10,
            // borderBottomLeftRadius: 15,
            // borderBottomRightRadius: 15,
            justifyContent : 'center',
            alignItems : 'center'
          }}>
          <Text style ={styles.btnTextm}>PLACE A BID </Text>
          </TouchableOpacity>
      </View>
     
        </RBSheet>
    {/* <Modal isVisible={isBuyVisible}>
      <View
        style={{
          height: 320,
          borderRadius: 10,
          backgroundColor: '#1F232E',
        }}>
          <View style={{alignSelf:'center',margin:'1%'}}>
            <Text  style={{color:'#E9F0FA',fontSize:18,fontWeight:'600'}}>BUY</Text>
          </View>
        <View style={{flexDirection:'row'}}>
          <View style={{width:wp('40%')}}>
          <Image
            source={{uri:item.images[0].uri}}
            style={{height:70,width:100,alignSelf:'center'}}
          />
          </View>
          <View >
            <View style={{borderWidth:1,borderColor:'#E9F0FA',borderRadius:20,alignItems:'center',width:wp('20%')}}>
            <Text style={{color:'#E9F0FA',fontSize:12,fontWeight:'600'}}>Toys</Text>
            </View>
            <View>
              <Text style={{color:'#E9F0FA',fontSize:16,fontWeight:'600'}}>Light Year Toy</Text>
            </View>
            <View>
              <Text style={{color:'#E9F0FA',fontSize:16,fontWeight:'600'}}>$500</Text>
            </View>
          </View>
        </View>
        <View>
          <PaperTextInput
            mode="flat"
            theme={{
              colors: {
                text: 'white',
                primary: '#9CA6B6',
                placeholder: '#9CA6B6',
              },
              fonts: {
                regular: '',
              },
            }}
            onFocus={() => setEmailACtive(true)}
            value={bidAmount}
            fontFamily="Poppins-Regular"
            onTouchStart={() => setIsclick(!isClick)}
            onChangeText={e => onChangeText(e,setBidAmount)}
            label={'Add your price'}
            style={[
              styles.inputStyleModal,
              {borderColor: emailActive ? '#117AF5' : '#1F232E'},
            ]}
          />
          </View>
          <View>
          <PaperTextInput
            mode="flat"
            theme={{
              colors: {
                text: 'white',
                primary: '#9CA6B6',
                placeholder: '#9CA6B6',
              },
              fonts: {
                regular: '',
              },
            }}
            onFocus={() => setEmailACtive(true)}
            value={bidAmount}
            fontFamily="Poppins-Regular"
            onTouchStart={() => setIsclick(!isClick)}
            onChangeText={e => onChangeText(e,setBidMessage)}
            label={'Bid Message (Optional)'}
            style={[
              styles.inputStyleModal,
              {borderColor: emailActive ? '#117AF5' : '#1F232E'},
            ]}
          />
          </View>
        <TouchableOpacity
        onPress={()=>setisBuyVisible(false)}
          style={{
            height: 44,
            width:wp('80%'),
            alignSelf:'center',
            backgroundColor: '#117AF5',
            borderRadius:15,
            marginTop:10,
            // borderBottomLeftRadius: 15,
            // borderBottomRightRadius: 15,
            justifyContent : 'center',
            alignItems : 'center'
          }}>
          <Text style ={styles.btnTextm}>PLACE A BID </Text>
          </TouchableOpacity>
      </View>
    </Modal> */}
      </View>
    );
  };
  const AddCommentsApi= async()=>{
    if(!message){
      Alert.alert("Message is empty");
    }else{
    let body={
      "user_id":login_user_id,
      "post_id":item.post_id,
      "comment":message,
      "parent_id":""
    }
    let response=await axios.post('http://13.233.246.19:9000/addComment',body);
    console.log(response.data);
    if(response.data.code==200){
      setMessage('')
      getAllComment()
    }
  }
  }
  const followUnfollowApi =async()=>{
    let body={
      "userId":item.user_id,
      "entityId":login_user_id
    }
    console.log("user follow ",body);
    let response=await axios.post('http://13.233.246.19:9000/followUnfollowUser',body);
    
    console.log(response.data);
    if(response.data.code==200){
      if(response.data.msg==="Success! followed."){
 item['isfollow']=1
      }
      else{
        item['isfollow']=0
      }
      // setFollowStatus(response.data.msg);
      // setFolloweMsg(response.data.msg);
    }
  }
  const likeUnlikeApi=async()=>{
    // const likeDislikeApi=async(post_id)=>{
      let body={
        "userId":login_user_id,
        "post_id":item.post_id
      }
      let response=await axios.post('http://13.233.246.19:9000/likeDislikePost',body);
      console.log(response.data);
      if(response.data.code==200){
        if(response.data.msg==="Success! liked."){
          console.log("like cliked");
          item["isliked"]="1";
        }
        else{
          item["isliked"]="0";
        }
      }
    // }
  }

  const combineHeader = (item) => {
    console.log("check section..??",item);
    return (
      <View>
        {_listHeaderComp(item)}
        {_listHeader2(item)}
      </View>
    );
  };
  const _listHeaderComp = (item) => {
    console.log("list header",item)
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
          {/* <TouchableOpacity> */}
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              flex: 0.7,
            }}>
            <Image source={{uri:item.user_image}} style={{height:30,width:30,borderRadius:30}}></Image>
            <Text
              style={{
                color: '#E9F0FA',
                marginLeft: '8%',
                fontWeight: 'bold',
                fontSize: 13,
                lineHeight: 18,
              }}>
              {item.name}
            </Text>
          </View>
          {/* </TouchableOpacity> */}
          <View
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',

              flex: 0.3,
            }}>
            <TouchableOpacity onPress={()=>followUnfollowApi()}>
              {item.isfollow==="0"?
              <Text
                style={{
                  color: '#E9F0FA',
                  fontWeight: 'bold',
                  textDecorationLine: 'underline',
                  fontSize: 12,
                }}>
                UNFOLLOW
              </Text>:
               <Text
               style={{
                 color: '#E9F0FA',
                 fontWeight: 'bold',
                 textDecorationLine: 'underline',
                 fontSize: 12,
               }}>
               FOLLOW
             </Text>}
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
              data={item.images}
              horizontal={true}
              pagingEnabled={true}
              renderItem={({item, index}) => {
                return (
                  <View>
                    <Image
                      source={{uri:item.uri}}
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
              data={['']}
              keyExtractor={(_, index) => index.toString()}
              renderItem={({items, index}) => {
                return (
                  <View style={styles.listStyle}>
                    <Text
                      style={{
                        color: '#E9F0FA',
                        fontWeight: '600',
                        fontSize: 11,
                      }}>
                     {item.subcategory}
                    </Text>
                  </View>
                );
              }}
            />
          </View>
        </View>
        <View style={styles.textStyle}>
          <View style={{flex: 0.8, justifyContent: 'center'}}>
            <Text style={styles.priceText}>{item.title}</Text>
          </View>

          <View
            style={{
              flex: 0.2,
              alignItems: 'flex-end',
              justifyContent: 'center',
            }}>
            <Text style={styles.priceText}>${item.price}</Text>
          </View>
        </View>
        <Text style={styles.descriptionText}>
          {item.description}
          {/* Buzz Lightyear is a fictional character in the Toy Story franchise
          created by Disney and Pixar. He is a toy Space Ranger superhero
          according to the movies and an action... */}
          {/* <Text style={styles.moreText}>more</Text> */}
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
  const _listHeader2 = (item) => {
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
            <TouchableOpacity onPress={()=>likeUnlikeApi()}>
              {item.isliked==="0"?
              <Image
                source={ImagePath.like}
                style={{height: 20, width: 22}}></Image>:
                <Image
                source={ImagePath.RedLike}
                style={{height: 20, width: 22}}></Image>}
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
               {item.likecount} Likes
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
               {item.commentcount} Comments
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.inputView}>
          <TextInput
            selectionColor={'white'}
            value={message}
            style={styles.inputStyle}
            placeholderTextColor={'#9CA6B6'}
            placeholder={'Add a comment'}
            onChangeText={(e)=>setMessage(e)}
          />

          <View
            style={{flex: 0.2, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity onPress={()=>AddCommentsApi()}>
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
  const _listheadOffer = (item) => {
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
              <Text style={styles.innerBidderText}>{item.bid_status}</Text>
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
              <Text style={styles.innerBidderText}>{item.bids}+</Text>
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
  const listOfferCombine = (item) => {
    return (
      <View>
        {_listHeaderComp(item)}
        {_listheadOffer(item)}
      </View>
    );
  };
  const _listFooterOffer = () => {
    return (
      <View style={{paddingBottom: 30}}>
        {/* <Text style={styles.loadtext}>LOAD MORE BIDS</Text> */}
        <TouchableOpacity style={styles.buttonView}>
          <Text style={styles.btnText}>EDIT YOUR BID</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const deletePost=async()=>{
    console.log("delete sucessfully");
    let body={
      "user_id":login_user_id,
	"post_id":item.post_id
    }
    let response=await axios.post('http://13.233.246.19:9000/deletePost',body)
    console.log(response.data);
    if(response.data.code===200){
      navigation.navigate("BottomTab")
    }
  }
  const cloeBidApi=async()=>{
    let body={
      "user_id":login_user_id,
      "post_id":item.post_id
    }
    let response=await axios.post('http://13.233.246.19:9000/closeBid',body)
    console.log(response.data)
    if(response.data.code===200){
      navigation.navigate("BottomTab")
    }
  }
  return (
    <WrapperContainer>
      <ScrollView style={styles.containerStyle}>
        {Authdata === 'activity' ? (
          <FlatList
            data={['', '']}
            ListHeaderComponent={combineHeader(item)}
            ListFooterComponent={_footerComp(item)}
            renderItem={({item, index}) => {
              // return <CommentList />;
            }}
          />
        ) : (
          <FlatList
            data={['']}
            ListHeaderComponent={listOfferCombine(item)}
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
            onPressRight={()=>deletePost()}
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
            onPressRight={()=>cloeBidApi()}
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
  topView: {
    height: 232,
    paddingHorizontal: 15,
  },
  acceptText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
    color: '#E9F0FA',
    textAlign: 'center',
    marginTop : 24
  },
  mainText: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#9CA6B6',
    textAlign: 'center',
    marginTop : 8
  },
  btnTextm : {
      fontSize : 13 ,
      fontFamily : 'Poppins-SemiBold',
      color : 'white',
      textAlign : 'center'
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
  inputStyleModal: {
    marginHorizontal: 20,
    marginTop: 10,
    height: 56,
    fontSize: 14,
    backgroundColor: '#1F232E',
    borderRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
    borderWidth: 1.5,
    borderColor: 'red',
  },
});
