import React, { FC } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins'

import { styles } from './styles/requestAccount'

const RequestAccount: FC = (): JSX.Element => {
  const navigation = useNavigation()
  const [fontsLoaded] = useFonts({
    Poppins_400Regular
  })

  if (!fontsLoaded) {
    return (
      <View><Text>Loading...</Text></View>
    )
  }

  const requestAccount = () => {
    navigation.navigate('Register')
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnRequestAccount} onPress={requestAccount}>
        <Text style={styles.requestAccountText}>SOLICITAR UMA CONTA</Text>
      </TouchableOpacity>
    </View>
  )
}

export { RequestAccount }
