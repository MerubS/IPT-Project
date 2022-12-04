import { View, StyleSheet, Image , Text, ScrollView } from "react-native";
import { Button , Card, List , IconButton , ToggleButton} from 'react-native-paper';
import Stats from "./Components/Stats";
const StudentData = ({navigation})=> {
    const onButtonToggle = () => {
        navigation.navigate('Profile')
    }
    const actions = () => {
        return (
            <View style={{flexDirection:'row'}}>
                <IconButton
    icon={require('./Images/trash.png')}
    size={20}
    mode="default"
    onPress={null}
  />
  <IconButton
  icon={require('./Images/edit.png')}
  size={20}
  mode="default"
  onPress={null}
/>
</View>
        );
    }
 return (
<View style={style.container}>
<View style={{marginTop:30, flexDirection:'row-reverse'}}>
    <ToggleButton
      icon={require('./Images/menu.png')}
      value="bluetooth"
      onPress={onButtonToggle}
    />

    </View>
     <View style={style.mainpic}> 
    <Stats number={133} description={"Total students"}/>
    <Stats number={7} description={"Total subjects"}/>
     </View>
     <View style={style.data}>
       <View> 
       <Text style={{textAlign: "center" , marginTop: 20 , fontWeight: "bold" , fontSize: 25}}> Students </Text>
         </View>
        <ScrollView style={{padding:10}}>
        <List.Section>
            <List.Item style={style.list} title="Student Name" description="Subjects" right={actions}> </List.Item>
        </List.Section>
        </ScrollView>
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
        flexDirection: 'row'
    },
    content: {
        flex:1,
        backgroundColor: '#ffd656',
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        marginLeft: 15,
        marginRight: 15,
    },
    data: {
        flex:1,
        backgroundColor: '#ffd656',
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 10
    },
    list: {
        backgroundColor:'#fffcf1' ,
        borderRadius:15
    }
   
})

export default StudentData;