import { View, StyleSheet, TouchableOpacity, Text, Image, SafeAreaView } from 'react-native';
import {  Button } from 'react-native-paper';
import ChangePassword from './ChangePassword';
import Navigation from './TNavigation';
import ANavigation from './ANavigation';
const Profile = () => {
 return (
    <View style={style.container}>
     <View style={{flexDirection:'row', justifyContent:'flex-start', marginTop:30 , padding:20}}>
            <TouchableOpacity
        // onPress={buttonClickedHandler}
        style={style.roundButton1}>
        <Image 
  source={require('./Images/circleleft.png')}  
  style={{width: 50, height: 50 , margin: "auto"}} 
/>
      </TouchableOpacity>
      </View>
    <View style={style.content} >
        <View style={{  justifyContent: 'center',alignItems: 'center'}}>
        <Text style={{textAlign: "center" , marginTop: 20 , fontWeight: "bold" , fontSize: 25 , marginBottom:20}}> Profile </Text>
        <Image source={require('./Images/maleteacher.png')}  style={{width: 100, height: 120 , margin: "auto" , backgroundColor:'orange', borderRadius:5}} />
        <Text style={{textAlign: "center" , marginTop: 10 , fontWeight: "bold" , fontSize: 20 }}> John Doe </Text>
        <Text style={{margin:2}}> teachersomething@gmail.com </Text>
        <Button mode='contained' textColor="black" style={style.bstyle}> Log out  </Button>
          </View>
          <SafeAreaView>
    {/* <TNavigation/> */}
    {/* <ChangePassword/> */}
    {/* <ANavigation/> */}
    </SafeAreaView>
    </View>
    </View>
 );
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffd656",
        justifyContent: "space-evenly"
    },
    roundButton1: {
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: '#fffcf1',
      },
    content: {
        flex:1,
    },
    bstyle: {
        backgroundColor: '#fffcf1',
        margin: 10
    }
})
export default Profile;