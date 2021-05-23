import React, { FC } from 'react'
import { View, Text } from 'react-native'

import { styles } from './styles/header'
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins'

const Header: FC = (): JSX.Element => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular
  })

  if (!fontsLoaded) {
    return (
      <View><Text>Loading...</Text></View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>É ORGÂNICO?</Text>
      <Text style={styles.category}>ADMIN</Text>
    </View>
  )
}

export { Header }
