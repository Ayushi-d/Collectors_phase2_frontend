import React, { useEffect } from 'react';
import { View, Text, Alert } from 'react-native';
const BottomPost = ({ navigation }) => {
    useEffect(() => {
        // Alert.alert("VIkas")
        navigation.navigate('NewPost')
        // gonextPage()
    }, [])
    // const gonextPage = () => {
    console.log('hommmme')
        
    // }
    return (
        <>
        </>
    )
}
export default BottomPost;