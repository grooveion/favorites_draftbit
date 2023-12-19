import * as React from 'react';
import {
  I18nManager,
  Platform,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { systemWeights } from 'react-native-typography';
import { Icon, Touchable } from '@draftbit/ui';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import theme from './themes/Draftbit.js';
import LinkingConfiguration from './LinkingConfiguration.js';

import BlankScreen from './screens/BlankScreen';
import FavoritesListScreen from './screens/FavoritesListScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function RootAppNavigator() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <Stack.Navigator>
        <Stack.Screen
          name="BlankScreen"
          component={BlankScreen}
          options={{
            title: 'Blank',
          }}
        />
        <Stack.Screen
          name="FavoritesListScreen"
          component={FavoritesListScreen}
          options={{
            title: 'Favorites List',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
