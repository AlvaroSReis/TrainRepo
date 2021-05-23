import { RouteProp } from '@react-navigation/core'
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { RoutesStack, RoutesTab } from './Routes'

export type AdminScreenRouteProp = RouteProp<RoutesTab, 'Admin'>
export type AdminScreenNavigationProp = BottomTabNavigationProp<RoutesTab, 'Admin'>

export type DashboardScreenRouteProp = RouteProp<RoutesTab, 'Dashboard'>
export type DashboardScreenNavigationProp = BottomTabNavigationProp<RoutesTab, 'Dashboard'>

export type HomeScreenNavigationProp = StackNavigationProp<RoutesStack, 'Home'>
export type HomeScreenRouteProp = RouteProp<RoutesStack, 'Home'>

export type LoginScreenNavigationProp = StackNavigationProp<RoutesStack, 'Login'>

export type ItemScreenRouteProp = RouteProp<RoutesTab, 'Item'>
export type ItemScreenNavigationProp = BottomTabNavigationProp<RoutesTab, 'Item'>
