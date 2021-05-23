import React, { FC } from 'react'
import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Home } from './pages/Home'
import { RoutesStack, RoutesTab } from './utils/types/Routes'

export const RouteStack = createStackNavigator<RoutesStack>()
export const Tab = createBottomTabNavigator<RoutesTab>()

const EOrganico: FC = (): JSX.Element => {
  return (
    <NavigationContainer>
      <RouteStack.Navigator screenOptions={{ ...TransitionPresets.SlideFromRightIOS }} >

        <RouteStack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />

        <RouteStack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />

        <RouteStack.Screen
          name="Register"
          component={Register}
          options={{
            title: 'Cadastro',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#7BEC8D'
            }
          }}
        />

      </RouteStack.Navigator>
    </NavigationContainer>
  )
}

export default EOrganico
