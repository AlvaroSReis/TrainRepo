import React, { FunctionComponent } from 'react'
import { Text, View } from 'react-native'
import { EvilIcons } from '@expo/vector-icons'
import { styles } from './styles/header'

export const Header: FunctionComponent = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <EvilIcons style={styles.icon} name="navicon" size={24} color="#7bec8d" />
      <Text style={styles.title}>É Orgânico Dashboard</Text>
    </View>
  )
}
