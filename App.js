import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import HomeScreen from './src/screens/HomeScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import LocationScreen from './src/screens/LocationScreen';
import FarmTypeScreen from './src/screens/FarmTypeScreen';
import CropSelectionScreen from './src/screens/CropSelectionScreen';
import AIProcessingScreen from './src/screens/AIProcessingScreen';
import FarmAssistantScreen from './src/screens/FarmAssistantScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Location" component={LocationScreen} />
          <Stack.Screen name="FarmType" component={FarmTypeScreen} />
          <Stack.Screen name="CropSelection" component={CropSelectionScreen} />
          <Stack.Screen name="AIProcessing" component={AIProcessingScreen} />
          <Stack.Screen name="FarmAssistant" component={FarmAssistantScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
