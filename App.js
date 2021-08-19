import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DailyPicScreen from './Screens/DailyPic';
import SpaceCraftsScreen from './Screens/SpaceCrafts';
import StarMapScreen from './Screens/StarMap';
function App(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions ={{
                headerShown:false
            }}>
             <Stack.Screen name="Home" component ={Homescreen}/>
             <Stack.Screen name="SpaceCrafts" component ={SpaceCraftsScreen}/>
             <Stack.Screen name="DailyPic" component ={DailyPicScreen}/>
             <Stack.Screen name="StarMap" component ={StarMapScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default App ;