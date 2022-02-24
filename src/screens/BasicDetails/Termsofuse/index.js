import React from 'react'
import { View ,Text, ScrollView} from 'react-native'
import Headers from '../../../components/Header';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../../utility';
const Termsofuse= ({navigation}) => {
  return (
    <View style={{backgroundColor:'black',height:hp('100%'),width:wp('100%')}}>
      {/* <Headers/> */}
      <Headers  login="true" navigate={navigation}/>
      <ScrollView>
      <View style={{margin:wp('3%')}}>
        <Text style={{color:'#E9F0FA',fontFamily:'Poppins',fontWeight:'700',fontSize:20}}>Terms & Conditions</Text>
      </View>
      <View style={{marginLeft:wp('3%')}}>
        <Text style={{color:'#E9F0FA',fontFamily:'Poppins',fontWeight:'500',fontSize:16}}>Heading</Text>
      </View>
      <View style={{margin:wp('3%')}}>
        <Text style={{fontFamily:'Poppins',fontSize:14,fontWeight:'400',color:'#E9F0FA',lineHeight:24}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing purus dui id posuere semper. Elementum amet, donec a suspendisse sed. Ut orci donec quam aliquet senectus. Egestas enim eu enim, cras. Tortor, sagittis, sed vestibulum pharetra maecenas imperdiet nullam ut. Non non non et fermentum amet. Maecenas tempus tincidunt amet feugiat diam, pulvinar aliquet congue. Est consectetur consectetur nunc sem et, phasellus. Vestibulum porta eget a eget eget. Sit sit vulputate porta elementum proin consectetur nam. Adipiscing tellus consectetur risus tellus purus tortor, in vestibulum. Mattis ultrices lacus ut eu nunc. Hendrerit in integer mattis dictum tempor orci, pretium nisl ut
        </Text>
        </View>
        <View style={{marginLeft:wp('3%')}}>
        <Text style={{color:'#E9F0FA',fontFamily:'Poppins',fontWeight:'500',fontSize:16}}>Heading</Text>
      </View>
      <View style={{margin:wp('3%')}}>
        <Text style={{fontFamily:'Poppins',fontSize:14,fontWeight:'400',color:'#E9F0FA',lineHeight:24}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing purus dui id posuere semper. Elementum amet, donec a suspendisse sed. Ut orci donec quam aliquet senectus. Egestas enim eu enim, cras. Tortor, sagittis, sed vestibulum pharetra maecenas imperdiet nullam ut. Non non non et fermentum amet. Maecenas tempus tincidunt amet feugiat diam, pulvinar aliquet congue. Est consectetur consectetur nunc sem et, phasellus. Vestibulum porta eget a eget eget. Sit sit vulputate porta elementum proin consectetur nam. Adipiscing tellus consectetur risus tellus purus tortor, in vestibulum. Mattis ultrices lacus ut eu nunc. Hendrerit in integer mattis dictum tempor orci, pretium nisl ut
        </Text>
        </View>
        </ScrollView>
        </View>
  )
}

export default Termsofuse