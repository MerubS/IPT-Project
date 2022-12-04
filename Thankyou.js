import { View , StyleSheet , TouchableOpacity , Image , Text} from "react-native";

const Thankyou = ({navigation}) => {
    const homeHandler = () => {
        navigation.navigate('Home');
    }
 return (
    <View style={style.container}>
        <View style={{flexDirection:'row' , justifyContent:'space-between', marginTop:30 , padding:20}}>
        <TouchableOpacity
        onPress={homeHandler}
        style={style.roundButton1}>
        <Image 
  source={require('./Images/circleleft.png')}  
  style={{width: 50, height: 50 , margin: "auto"}} 
/>
</TouchableOpacity>
        </View>
        <View style={style.mainpic}>

        <Image 
 source={require('./Images/thankyou.png')}  
 style={{width: 300, height: 300 , margin: "auto"}} 
/>
        </View>
        <View style={style.mainpic}> 
        <Text style={{textAlign: "center" , marginTop: 20 , fontWeight: "bold" , fontSize: 25}}> Registered! </Text>
        <Text> Thank you for your time. </Text> 
            <Text> We will get back to you shortly. </Text>
        </View>
    </View>
 );
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fffcf1",
    },
    mainpic: {
        marginTop:80,
        justifyContent: 'center',
        alignItems: 'center',
    },

})

export default Thankyou;