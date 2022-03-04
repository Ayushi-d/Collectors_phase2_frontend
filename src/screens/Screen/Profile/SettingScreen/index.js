import React, { useState } from 'react';
import { View, Text, ScrollView, Switch, Image, TouchableOpacity } from 'react-native';
import Header from '../../../../components/Header';
import ProfileHeader from '../../../../components/profileHeader';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../../../utility';
import Path from '../../../../constants/Imagepath';
const SeetingScreen = ({ navigation }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View>
            <Header login="true" navigate={navigation} />
            <View style={{ backgroundColor: '#0D111C', padding: 5 }}>
                <Text style={{ color: '#E9F0FA', fontSize: 24, fontWeight: '800', marginLeft: wp('3%') }}>Settings</Text>
            </View>
            <ScrollView style={{ backgroundColor: 'black', height: hp('100%'), width: wp('100%') }}>
                <View style={{ flexDirection: 'row', width: wp('60%'), justifyContent: 'space-evenly',marginTop:hp('2%') }}>
                    <View >
                        <Text style={{ color: '#E9F0FA', fontSize: 13, fontWeight: '600' }}>ENGLISH</Text>
                    </View>
                    <View>
                        <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                    <View>
                        <Text style={{ color: '#E9F0FA70', fontSize: 13, fontWeight: '600' }}>ESPANOL</Text>
                    </View>
                </View>
                <View style={{ marginLeft: wp('3%'),marginTop:hp('2%') }}>
                    <Text style={{ color: '#E9F0FA70', fontSize: 13, fontWeight: '600' }}>GENERAL</Text>
                </View>
                <TouchableOpacity onPress={()=>navigation.navigate('Notification')}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ width: wp('20%') }}>
                            <Image source={Path.Snotification} resizeMode="center"></Image>
                        </View>
                        <View style={{ width: wp('50%') }}>
                            <Text style={{ color: '#E9F0FA', fontSize: 14, fontWeight: '600', lineHeight: 26 }}>Notifications</Text>
                            <Text style={{ color: '#E9F0FA70', fontSize: 13, fontWeight: '600' }}>Get a personalised experience</Text>
                        </View>
                        <View style={{ width: wp('10%') }}>
                            <Image source={Path.Sarrow} resizeMode="center"></Image>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('ChangePassword')}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ width: wp('20%') }}>
                            <Image source={Path.Slock} resizeMode="center"></Image>
                        </View>
                        <View style={{ width: wp('50%') }}>
                            <Text style={{ color: '#E9F0FA', fontSize: 14, fontWeight: '600', lineHeight: 26 }}>Change Password</Text>
                            <Text style={{ color: '#E9F0FA70', fontSize: 13, fontWeight: '600' }}>Security</Text>
                        </View>
                        <View style={{ width: wp('10%') }}>
                            <Image source={Path.Sarrow} resizeMode="center"></Image>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ width: wp('20%') }}>
                            <Image source={Path.Shelp} resizeMode="center"></Image>
                        </View>
                        <View style={{ width: wp('48%') }}>
                            <Text style={{ color: '#E9F0FA', fontSize: 14, fontWeight: '600', lineHeight: 26 }}>Help & Support</Text>
                            <Text style={{ color: '#E9F0FA70', fontSize: 13, fontWeight: '600' }}>Stuck? Write us!</Text>
                        </View>
                        <View style={{ width: wp('15%') }}>
                            <Image source={Path.Sedit} resizeMode="center"></Image>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ width: wp('20%') }}>
                            <Image source={Path.Sterm} resizeMode="center"></Image>
                        </View>
                        <View style={{ width: wp('50%') }}>
                            <Text style={{ color: '#E9F0FA', fontSize: 14, fontWeight: '600', lineHeight: 26 }}>Stuck? Write us!</Text>
                            <Text style={{ color: '#E9F0FA70', fontSize: 13, fontWeight: '600' }}>Agreed</Text>
                        </View>
                        <View style={{ width: wp('10%') }}>
                            <Image source={Path.Sarrow} resizeMode="center"></Image>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ width: wp('20%') }}>
                            <Image source={Path.Sabout} resizeMode="center"></Image>
                        </View>
                        <View style={{ width: wp('50%') }}>
                            <Text style={{ color: '#E9F0FA', fontSize: 14, fontWeight: '600', lineHeight: 26 }}>About Us</Text>
                            <Text style={{ color: '#E9F0FA70', fontSize: 13, fontWeight: '600' }}>Who are we?</Text>
                        </View>
                        <View style={{ width: wp('10%') }}>
                            <Image source={Path.Sarrow} resizeMode="center"></Image>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('Signin')}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ width: wp('20%') }}>
                            <Image source={Path.Logout} resizeMode="center"></Image>
                        </View>
                        <View style={{ width: wp('50%') }}>
                            <Text style={{ color: '#E9F0FA', fontSize: 14, fontWeight: '600', lineHeight: 26 }}>Logout</Text>
                            <Text style={{ color: '#E9F0FA70', fontSize: 13, fontWeight: '600' }}>Who are we?</Text>
                        </View>
                        <View style={{ width: wp('10%') }}>
                            {/* <Image source={Path.Sarrow} resizeMode="center"></Image> */}
                        </View>
                    </View>
                </TouchableOpacity>

            </ScrollView>

        </View>
    )
}
export default SeetingScreen;