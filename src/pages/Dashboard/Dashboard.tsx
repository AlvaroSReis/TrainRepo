import React, { FC } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'

import { styles } from './styles/dashboard'
import { PropsDashboard } from '../../utils/types/Props'
import { Header } from '../../components/HeaderTabNavigation'

export const Dashboard: FC<PropsDashboard> = ({ route, navigation }: PropsDashboard): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <View style={styles.containerButtons}>
        <View style={styles.rowButtons}>
          <TouchableOpacity style={styles.button}></TouchableOpacity>
          <TouchableOpacity style={styles.button}></TouchableOpacity>
          <TouchableOpacity style={styles.button}></TouchableOpacity>
        </View>

        <View style={styles.rowButtons}>
          <TouchableOpacity style={styles.button}></TouchableOpacity>
          <TouchableOpacity style={styles.button}></TouchableOpacity>
          <TouchableOpacity style={styles.button}></TouchableOpacity>
        </View>
      </View>

      <View style={styles.components}>
        <Text>Components</Text>
      </View>

    </SafeAreaView>
  )
}
