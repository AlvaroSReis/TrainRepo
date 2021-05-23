import React, { FunctionComponent, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { Header } from '../../components/HeaderTabNavigation'
import { PropsItem } from '../../utils/types/Props'
import { Register } from './Register'

import { styles } from './styles/item'

export const Item: FunctionComponent<PropsItem> = ({ route, navigation }: PropsItem): JSX.Element => {
  const { token } = route.params

  const [render, setRender] = useState<JSX.Element>()

  const register = () => {
    setRender(<Register token={token}/>)
  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.containerButtons}>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.btnText}>Todos os itens</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttons} onPress={register}>
          <Text style={styles.btnText}>Cadastrar item</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.components}>
        {render}
      </View>
    </View>
  )
}
