import { View , StyleSheet} from 'react-native';
import { TextInput ,Button} from 'react-native-paper';
const ChangePassword = () => {
    return (
        <View style={{padding:20, justifyContent:'center', alignItems:'center'}}>
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
     <TextInput
      label="Confirm Password"
      mode = 'outlined'
      selectionColor="black"
      value=""
      placeholder=""
      outlineColor="black"
      activeOutlineColor="black"
      style={style.text}
    />
    <Button mode="contained" textColor="black" style={style.bstyle}> Submit </Button>
        </View>
     );
}

const style = StyleSheet.create({
   text: {
    backgroundColor:'#ffd656',
    fontSize: 14,
    width: 300,
    padding: 0,
    height: 40,
    margin:10
   },
   bstyle: {
    backgroundColor: '#fffcf1',
    textColor: 'black',
    margin: 10
}
})
export default ChangePassword