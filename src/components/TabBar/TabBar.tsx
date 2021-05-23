import React, { FunctionComponent } from 'react'
import { View, Text, TouchableOpacity, FlatList, ListRenderItemInfo } from 'react-native'
import { BottomTabBarOptions, BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { ParamListBase } from '@react-navigation/routers'

import { NavigationRoute } from '../../utils/types/Props'
import { styles } from './styles/tabBar'
import { selectIcon } from '../../utils/functions/icons'
import { Admin } from '../../utils/interfaces/Entities'

export const TabBar: FunctionComponent<BottomTabBarProps<BottomTabBarOptions>> = (
  {
    state,
    navigation
  }: BottomTabBarProps<BottomTabBarOptions>
): JSX.Element => {
  const { routes } = state

  const renderItem = (route: ListRenderItemInfo<NavigationRoute<ParamListBase, string>>) => {
    const { name } = route.item

    const icon = selectIcon(name)

    return (
      <TouchableOpacity onPress={() => navigation.navigate(name)} style={styles.button}>
        {icon}
        <Text style={styles.label}>{name}</Text>
      </TouchableOpacity >
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={routes}
        renderItem={route => renderItem(route)}
        keyExtractor={route => route.key}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}
