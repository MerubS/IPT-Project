import { StyleSheet , View , Text , Image , ScrollView , SafeAreaView , TouchableOpacity} from "react-native";
import { TextInput , RadioButton , Button} from 'react-native-paper';
import { useState } from "react";
import CheckBox from "./Components/CheckBox";

const Register = () => {
    const [checked, setChecked] = useState(false);
    return (
        <View style = {style.container}>
            <View style={{flexDirection:'row' , justifyContent:'space-between', marginTop:30 , padding:20}}>
            <TouchableOpacity
        // onPress={buttonClickedHandler}
        style={style.roundButton1}>
        <Image 
  source={require('./Images/circleleft.png')}  
  style={{width: 50, height: 50 , margin: "auto"}} 
/>
      </TouchableOpacity>
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
  source={require('./Images/happyguy.png')}  
  style={{width: 300, height: 300 , margin: "auto"}} 
/>
          </View>
          <View style={style.rform}>
            <Text style={{textAlign: "center" , marginTop: 20 , fontWeight: "bold" , fontSize: 25}}> Welcome Students! </Text>
            <Text style={{textAlign: "center"}}> Ready to ace all your subjects? </Text>
            
            <ScrollView style={{backgroundColor:'#ffd656', marginTop:10 , padding:10}}>
                <SafeAreaView>
                <Text style={{fontWeight: "bold" , fontSize: 15}}> Personal Info </Text>
                <View style={{padding:20}}>
                <TextInput
      label="Name"
      mode = 'outlined'
      selectionColor="black"
      value=""
      placeholder=""
      outlineColor="black"
      activeOutlineColor="black"
      style={style.text}
    />
    <TextInput
      label="Email"
      mode = 'outlined'
      selectionColor="black"
      value=""
      placeholder=""
      outlineColor="black"
      activeOutlineColor="black"
      style={style.text}
    />
    <TextInput
      label="Contact"
      mode = 'outlined'
      selectionColor="black"
      value=""
      placeholder=""
      outlineColor="black"
      activeOutlineColor="black"
      style={style.text}
    />
    <Text> Gender: </Text>
    <RadioButton.Group>
        <View style={{flexDirection:"row"}}>
            <RadioButton value="female"/>
            <Text style={{padding:7}}> Female </Text>
        </View>
        <View style={{flexDirection:"row"}}>
            <RadioButton value="male"/>
            <Text style={{padding:7}}> Male </Text>
        </View>
        <View style={{flexDirection:"row"}}>
            <RadioButton value="other"/>
            <Text style={{padding:7}}> Other </Text>
        </View>
    </RadioButton.Group>

    </View>
                <Text style={{fontWeight: "bold" , fontSize: 15}}> Tuition Details </Text>
                <View style={{padding:20}}>
                <Text style={{fontWeight: "bold"}}> Mode: </Text>
    <RadioButton.Group>
        <View style={{flexDirection:"row"}}>
            <RadioButton value="home tuition"/>
            <Text style={{padding:7}}> Home Tuition </Text>
        </View>
        <View style={{flexDirection:"row"}}>
            <RadioButton value="coaching center"/>
            <Text style={{padding:7}}> Coaching center </Text>
        </View>
        <View style={{flexDirection:"row"}}>
            <RadioButton value="online"/>
            <Text style={{padding:7}}> Online </Text>
        </View>
    </RadioButton.Group>


    <Text style={{fontWeight: "bold"}}> Hours per day: </Text>
    <RadioButton.Group>
        <View style={{flexDirection:"row"}}>
            <RadioButton value="1"/>
            <Text style={{padding:7}}> 1 </Text>
        </View>
        <View style={{flexDirection:"row"}}>
            <RadioButton value="2"/>
            <Text style={{padding:7}}> 2 </Text>
        </View>
        <View style={{flexDirection:"row"}}>
            <RadioButton value="3"/>
            <Text style={{padding:7}}> 3 </Text>
        </View>
        <View style={{flexDirection:"row"}}>
            <RadioButton value="4"/>
            <Text style={{padding:7}}> 4 </Text>
        </View>
    </RadioButton.Group>
                </View>
                <Text style={{fontWeight: "bold" , fontSize: 15}}> Subjects </Text>
                <View style={{padding:20}}>
                <CheckBox label="Maths" status="unchecked" onPress={null} />
                <CheckBox label="Add Maths" status="unchecked" onPress={null} />
                <CheckBox label="Business Studies" status="unchecked" onPress={null} />
                <CheckBox label="Biology" status="unchecked" onPress={null} />
                <CheckBox label="Science" status="unchecked" onPress={null} />
                <CheckBox label="Physics" status="unchecked" onPress={null} />
                <CheckBox label="Urdu" status="unchecked" onPress={null} />
                <CheckBox label="Computer Science" status="unchecked" onPress={null} />
                <CheckBox label="History" status="unchecked" onPress={null} />
                <CheckBox label="Chemistry" status="unchecked" onPress={null} />
                <CheckBox label="English Literature" status="unchecked" onPress={null} />
                <CheckBox label="ECAT" status="unchecked" onPress={null} />
                <CheckBox label="Geography" status="unchecked" onPress={null} />
                <CheckBox label="Accounts" status="unchecked" onPress={null} />
                <CheckBox label="English Language" status="unchecked" onPress={null} />
                <CheckBox label="MCAT" status="unchecked" onPress={null} />
  
                </View>

                <Text style={{fontWeight: "bold" , fontSize: 15}}> Your Budget </Text>
                <View style={{padding:20}}>
                <TextInput
      label="Budget"
      mode = 'outlined'
      selectionColor="black"
      value=""
      placeholder=""
      outlineColor="black"
      activeOutlineColor="black"
      style={style.ltext}
    />
    </View>
   
                </SafeAreaView>
         
            </ScrollView>
            
            <View>

            </View>
          </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fffcf1",
    },
    mainpic : {
        backgroundColor: "#fffcf1",
        justifyContent: 'center',
        alignItems: 'center',
    },
    rform : {
        backgroundColor: "#ffd656",
        flex: 1,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        marginLeft: 15,
        marginRight: 15,
        textAlign: "center"
    },
    title: {
      fontSize: 12,
      color: "#000",
      height: "300px",
      width: "300px"
   },
   text: {
    backgroundColor:'#ffd656',
    fontSize: 14,
    width: 300,
    padding: 0,
    height: 40
   },
   ltext: {
    backgroundColor:'#ffd656',
    fontSize: 14,
    width: 300,
    padding: 0,
    height: 40,
    marginBottom:30,
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
})


export default Register;