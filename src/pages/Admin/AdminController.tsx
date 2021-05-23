import React, { FunctionComponent, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { PropsAdmin } from '../../utils/types/Props'

import { Header } from '../../components/HeaderTabNavigation'

import { styles } from './styles/admin'
import { Pending } from './Pending'

export const Admin: FunctionComponent<PropsAdmin> = ({ route, navigation }: PropsAdmin): JSX.Element => {
  const { token } = route.params

  const [render, setRender] = useState<JSX.Element>()

  const pending = () => {
    setRender(<Pending token={token} />)
  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.containerButtons}>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.btnText}>Todos os admins</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttons} onPress={pending}>
          <Text style={styles.btnText}>Admins pendentes</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.components}>
        {render}
      </View>
    </View>
  )
}
