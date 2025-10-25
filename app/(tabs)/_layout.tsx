import React, { useEffect, useRef, useState } from 'react';
import { BackHandler, useColorScheme, View } from 'react-native';
import { ActivityIndicator, Icon, MD3DarkTheme, MD3LightTheme, PaperProvider, Snackbar, Text } from 'react-native-paper';
import DrawerNavigator from '../(drawer)/DrawerNavigator';


const lightTheme = {
    ...MD3LightTheme,
    colors: {
      ...MD3LightTheme.colors,
      primary: '#111b72ff',
      accent: '#3498db',
      secondary: '#3498db',
      surface: '#ffffff',
      text: '#34495e',
      placeholder: '#7f8c8d',
      error: '#e74c3c',
    },
    roundness: 8,
  };

export default function TabsLayout() {
  

  return (
    <PaperProvider theme={lightTheme}>

      <DrawerNavigator />
    </PaperProvider>
  );
}