import { View, StyleSheet, Image , Text } from "react-native";
import { Button , Card} from 'react-native-paper';
import Stats from "./Components/Stats";
const TeacherData = ()=> {
 return (
<View style={style.container}>
     <View style={style.mainpic}> 
    <Text> Hello </Text>
    <Stats number={33} description={"Total teachers"}/>
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
        marginTop:50,
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
   
})

export default TeacherData;