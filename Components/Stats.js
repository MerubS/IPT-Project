import { StyleSheet, Text } from "react-native";
import { Card , Title} from 'react-native-paper';
const Stats = (props) => {
 return (
    <Card style={style.card}>
    <Card.Content style={style.content}>
      <Title> {props.number} </Title>
      < Text> {props.description} </Text>
    </Card.Content>
  </Card>
 );
}

const style = StyleSheet.create({
    card:{
        height:200,
        width: 150
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center'
    }
   
})

export default Stats;