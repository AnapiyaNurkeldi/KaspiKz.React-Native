import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Main from './src/main';
import QR from './src/pages/QRpage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Nav from './src/components/nav';
import MyBank from './src/pages/MyBank';
import Message from './src/pages/message';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" >
        <Stack.Screen 
          name="Главная" 
          component={Main} 
          options={{ headerShown: true }} 
        />
        <Stack.Screen 
          name="QR" 
          component={QR} 
          options={{ headerShown: false }} 
        />
      <Stack.Screen
        name='MyBank'
        component={MyBank}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='message'
        component={Message}
        options={{ headerShown: false }}
      />
      </Stack.Navigator>
      <Nav/>
    </NavigationContainer>
  );
}


export default App;
