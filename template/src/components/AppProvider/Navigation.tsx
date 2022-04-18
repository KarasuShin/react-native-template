import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { tabRoutes, stackRoutes } from '@/config/router';
import appConfig from '@/config/app';
import React from 'react';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Navigation } from '@/utils';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export const TabNavigation:React.FC = () => (
  <Tab.Navigator initialRouteName={tabRoutes?.[0]?.key}>
    {
      tabRoutes.map(item => <Tab.Screen
        key={item.key}
        name={item.key}
        component={item.component}
        options={{
          tabBarLabel: item.name,
          headerShown: !!(appConfig.tabBar.headerShown || item.headerShown),
          tabBarIcon: ({ color }) => item.icon ? <Icon name={item.icon} size={appConfig.tabBar.iconSize} color={color} /> : <></>,
        }}
      />)
    }
  </Tab.Navigator>
);


export const StackNavigation:React.FC = () => {
  const navigationRef = useNavigationContainerRef();
  Navigation.init(navigationRef);
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName={appConfig.home}>
        {
          stackRoutes.map(item => (
            <Stack.Screen
              key={item.key}
              name={item.key}
              component={item.component}
              options={
                item.headerShown ? {
                  title: item.name,
                  headerStyle: {
                    backgroundColor: appConfig.navBar.backgroundColor,
                  },
                  headerTitleStyle: {
                    color: appConfig.navBar.textColor,
                  },
                  headerTitleAlign: appConfig.navBar.titleAlign,
                  headerShadowVisible: appConfig.navBar.shadow,
                  headerTintColor: appConfig.navBar.textColor,
                } : {
                  headerShown: false,
                }
              }
            />
          ))
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
};
