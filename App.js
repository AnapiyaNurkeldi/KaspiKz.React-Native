import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Main from './src/main';
import QR from './src/pages/QRpage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Nav from './src/components/nav';
import MyBank from './src/pages/MyBank';
import Message from './src/pages/message';
import Services from './src/pages/Services';
import Translate from './src/pages/Translate';
import ToKaspiClient from './src/pages/Translates/ToKaspiClient';
import Payments from './src/pages/Payments';

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
      <Stack.Screen
        name='Services'
        component={Services}
        options={{ headerShown: false }}
      />
        <Stack.Screen
        name='Translate'
        component={Translate}
        options={{ headerShown: false }}
      />
        <Stack.Screen
        name='Payments'
        component={Payments}
        options={{ headerShown: false }}
      />

        <Stack.Screen
        name='ToKaspiClient'
        component={ToKaspiClient}
        options={{ headerShown: false }}
      />
      </Stack.Navigator>
      <Nav/>
    </NavigationContainer>
  );
}


export default App;
