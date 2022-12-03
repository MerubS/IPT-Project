import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Profile from './Profile';
import Register from "./Register";
import Login from './Login';
import Home from './Home';
import TeacherData from './TeacherData';

export default function App() {
  return (
    <TeacherData/>
    // <Profile/>
    // <Login/>
    // <Home/>
    // <Register/>
    // <View style={styles.container}>
    //   <Text> HEHEHEHEHE </Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}
