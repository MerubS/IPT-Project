import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Profile from './Profile';
import Register from "./Register";
import Login from './Login';
import Home from './Home';
import TeacherData from './TeacherData';
import StudentData from './StudentData';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <StudentData/>
    // <Profile/>
    // <Login/>
    <>
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Signup" component={Register}/>
      <Stack.Screen name="TeacherHome" component={TeacherData}/>
      <Stack.Screen name="StudentHome" component={StudentData}/>
      <Stack.Screen name="Profile" component={Profile}/>
    </Stack.Navigator>
    </NavigationContainer>
  </>
    // <Register/>
    // <View style={styles.container}>
    //   <Text> HEHEHEHEHE </Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}
