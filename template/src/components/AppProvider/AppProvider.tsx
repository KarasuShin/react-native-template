import React from 'react';
import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { StackNavigation } from './Navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';

const AppProvider: React.FC = () =>
  <ApplicationProvider {...eva} theme={eva.light}>
    <SafeAreaProvider>
      <StackNavigation />
      <StatusBar />
    </SafeAreaProvider>
  </ApplicationProvider>;

export default AppProvider;
