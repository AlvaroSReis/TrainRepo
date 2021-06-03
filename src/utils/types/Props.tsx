import { NavigationState, ParamListBase, PartialState, Route } from '@react-navigation/routers'
import {
  DashboardScreenRouteProp,
  DashboardScreenNavigationProp,
  HomeScreenNavigationProp,
  HomeScreenRouteProp,
  LoginScreenNavigationProp,
  ItemScreenRouteProp,
  ItemScreenNavigationProp,
  AdminScreenRouteProp,
  AdminScreenNavigationProp,
  TestScreenRouteProp,
  TestScreenNavigationProp
} from './Navigation'

export declare type NavigationRoute<ParamList extends ParamListBase, RouteName extends keyof ParamList> = Route<Extract<RouteName, string>, ParamList[RouteName]> & {
  state?: NavigationState | PartialState<NavigationState>;
}

export type PropsLogin = {
  navigation: LoginScreenNavigationProp
}

export type PropsHome = {
  route: HomeScreenRouteProp,
  navigation: HomeScreenNavigationProp
}

export type PropsDashboard = {
  route:DashboardScreenRouteProp,
  navigation: DashboardScreenNavigationProp
}

export type PropsItem = {
  route: ItemScreenRouteProp,
  navigation: ItemScreenNavigationProp
}

export type PropsAdmin = {
  route: AdminScreenRouteProp,
  navigation: AdminScreenNavigationProp
}

export type PropsTest = {
  route: TestScreenRouteProp,
  navigaiton: TestScreenNavigationProp
}


export type state = {
  "auth": 1,
  "users": {
    1: {"username": "mattiamanzati", "token": "resthttprequestsaccesstoken"},
    2: {"username": "another user"}
  }
}