import React, { FunctionComponent, useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'

import { RegisterItem } from '../../controllers/ItemController'
import { isValidInputsType } from '../../utils/functions/validation'
import { Admin } from '../../utils/interfaces/Entities'

import { styles } from './styles/register'

export const Register: FunctionComponent<Admin> = ({ token }: Admin): JSX.Element => {
  const registerItem = new RegisterItem()

  const [name, setName] = useState<string>('')
  const [type, setType] = useState<string>('')

  const register = async () => {
    const validInputs = isValidInputsType({ name, type })

    if (!validInputs) return alert('Todos os campos são obrigatórios')

    const { status, message } = await registerItem.create(name, type, token)
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputs}>

        <View style={styles.label}>
          <Text style={styles.labelText}>Nome</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Nome do item"
          autoCorrect={true}
          onChangeText={name => setName(name)}
        />

        <View style={styles.label}>
          <Text style={styles.labelText}>Tipo</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Tipo do item"
          autoCorrect={true}
          onChangeText={type => setType(type)}
        />

      </View>

      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.button} onPress={register}>
          <Text style={styles.btnText}>CADASTRAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
