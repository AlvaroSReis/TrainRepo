import React, { FunctionComponent } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { PropsHome } from '../../utils/types/Props'
import { RoutesTab } from '../../utils/types/Routes'

import { TabBar } from '../../components/TabBar'

import { Admin } from '../Admin'
import { Dashboard } from '../Dashboard'
import { Item } from '../Item'

export const Tab = createBottomTabNavigator<RoutesTab>()

export const Home: FunctionComponent<PropsHome> = ({ route, navigation }: PropsHome): JSX.Element => {
  const { token } = route.params

  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />} >
      <Tab.Screen name="Dashboard" component={Dashboard} initialParams={{ token }} />
      <Tab.Screen name="Admin" component={Admin} initialParams={{ token }} />
      <Tab.Screen name="Endereço" component={Dashboard} initialParams={{ token }} />
      <Tab.Screen name="Feira" component={Dashboard} initialParams={{ token }} />
      <Tab.Screen name="Item" component={Item} initialParams={{ token }} />
      <Tab.Screen name="Produto" component={Dashboard} initialParams={{ token }} />
      <Tab.Screen name="Produtor" component={Dashboard} initialParams={{ token }} />
      <Tab.Screen name="Propriedade" component={Dashboard} initialParams={{ token }} />
      <Tab.Screen name="Reserva" component={Dashboard} initialParams={{ token }} />
      <Tab.Screen name="Usuário" component={Dashboard} initialParams={{ token }} />
    </Tab.Navigator>
  )
}
