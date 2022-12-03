import { View, StyleSheet, Image , Text, SafeAreaView , TouchableOpacity } from "react-native";
import { Button,    TextInput} from 'react-native-paper';
const Login = () => {
return (
    <View style={style.container}>
         <View style={{flexDirection:'row' , justifyContent:'flex-end', marginTop:30 , padding:10}}>
         <TouchableOpacity
        // onPress={buttonClickedHandler}
        style={style.roundButton1}>
        <Image 
  source={require('./Images/circleright.png')}  
  style={{width: 50, height: 50 , margin: "auto"}} 
/>
      </TouchableOpacity>
      </View>
     <View style = {style.mainpic}>
       
       <Image 
 source={require('./Images/teacher.png')}  
 style={{width: 300, height: 300 , margin: "auto"}} 
/>
         </View>
         <View style={style.content}>
              <View>
                <Text style={{textAlign: "center" , marginTop: 20 , fontWeight: "bold" , fontSize: 25}}> Welcome Aboard! </Text>
                <Text style={{textAlign: "center"}}> Ready to dessiminate knowledge? </Text>
                 </View>
                <View style={{justifyContent:'center', alignItems:'center', flex: 1}}>
                    <SafeAreaView>
                    <TextInput
      label="Username"
      mode = 'outlined'
      selectionColor="black"
      value=""
      placeholder=""
      outlineColor="black"
      activeOutlineColor="black"
      style={style.text}
    />
    <TextInput
      label="Password"
      mode = 'outlined'
      selectionColor="black"
      value=""
      placeholder=""
      outlineColor="black"
      activeOutlineColor="black"
      style={style.text}
    />
    <Button mode="contained" textColor="black" style={style.bstyle}> Submit </Button>
                    </SafeAreaView>
                </View>
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
        marginTop:10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        flex:1,
        backgroundColor: '#ffd656',
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        marginLeft: 15,
        marginRight: 15,
    },
    text: {
        backgroundColor:'#ffd656',
        fontSize: 14,
        width: 300,
        padding: 0,
        height: 40,
        margin: 10
       },
       bstyle: {
        backgroundColor: '#fffcf1',
        textColor: 'black',
        margin: 10
    }
})

export default Login;