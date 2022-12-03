import { View } from 'react-native';
import { List } from 'react-native-paper';
const ANavigation = () => {
    return (
        <View style={{padding:20}}>
        <List.Item
        title="Delete Student"
        left={props => <List.Icon {...props} icon={require('./Images/deletestudent.png')}
        onPress={null}
         />}
      />
      <List.Item
        title="Teacher Data"
        left={props => <List.Icon {...props} icon={require('./Images/details.png')}
        onPress={null}
         />}
      />
      <List.Item
        title="Change Password"
        left={props => <List.Icon {...props} icon={require('./Images/settings.png')}
        onPress={null}
         />}
      />
        </View>
     );
}

export default ANavigation;