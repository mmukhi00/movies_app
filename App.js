import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Platform } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MoviesContainer from './src/components/container/MoviesContainer';
import { ThemeProvider,createTheme,darkColors,lightColors } from '@rneui/themed';
import AppStack from './src/components/stack/AppStack'
import SearchContainer from './src/components/container/SearchContainer';

import {  Button } from 'react-native';
import React, { useState } from 'react';
import Dropdown from './src/Dropdown';
const theme = createTheme({
    lightColors: {
      ...Platform.select({
        default: lightColors.platform.android,
        ios:lightColors.platform.ios
      })
    },
    darkColors: {
      ...Platform.select({
        default: darkColors.platform.android,
        ios:darkColors.platform.ios
      })
    },
    mode:'light'
  })
// drop
 


export default function App() {
   const [isVisible, setIsVisible] = useState(false);
  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    // Add more options as needed
  ];

  const handleSelect = option => {
    console.log('Selected option:', option);
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };
  return (
    <ThemeProvider theme={theme}>
    <SafeAreaProvider>
        <AppStack/>
   <StatusBar style='auto'/>
      </SafeAreaProvider>
      </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});