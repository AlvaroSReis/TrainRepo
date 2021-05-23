import React, { FC, useEffect, useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Platform, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { FontAwesome5 } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'

import { isValidInputsRequestAccount, isValidPassword } from '../../utils/functions/validation'

import { AdminController } from '../../controllers/AdminController'
import { styles } from './styles/inputs'

export const Inputs: FC = (): JSX.Element => {
  const navigation = useNavigation()
  const adminController = new AdminController()

  const [image, setImage] = useState<string | null>(null)
  const [baseImage, setBaseImage] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()

        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!')
        }
      }
    })()
  }, [])

  const selectImage = async () => {
    const getImage = await ImagePicker.launchImageLibraryAsync({
      base64: true,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      allowsEditing: true,
      aspect: [3, 4]
    })

    if (!getImage.cancelled) {
      setBaseImage(getImage.base64 as string)
      setImage(getImage.uri)
    }
  }

  const requestAccount = async () => {
    const validInputs = isValidInputsRequestAccount({ name, email, image, password, confirmPassword })

    if (!validInputs) return alert('Todos os campos são obrigatórios!')

    const validPassword = isValidPassword(password, confirmPassword)

    if (!validPassword) return alert('Senhas diferentes')

    const { status, message } = await adminController.register(name, email, password, baseImage)

    if (!status) return alert(message)

    navigation.goBack()
    return alert(message)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.image} onPress={selectImage}>
        {image
          ? <Image source={{ uri: image }} style={{ width: 180, height: 180 }} />
          : <FontAwesome5 name="image" size={40} color="#fff" />
        }
      </TouchableOpacity>

      <View style={styles.label}>
        <Text style={styles.labelText}>Nome completo</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Nome completo"
        autoCorrect={false}
        onChangeText={name => setName(name)}
        keyboardType="name-phone-pad"
      />

      <View style={styles.label}>
        <Text style={styles.labelText}>Email</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Email"
        autoCorrect={false}
        onChangeText={email => setEmail(email)}
        keyboardType="email-address"
      />

      <View style={styles.label}>
        <Text style={styles.labelText}>Senha</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Senha"
        autoCorrect={false}
        onChangeText={password => setPassword(password)}
        secureTextEntry={true}
      />

      <View style={styles.label}>
        <Text style={styles.labelText}>Confirmar senha</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Confirmar senha"
        autoCorrect={false}
        onChangeText={password => setConfirmPassword(password)}
        secureTextEntry={true}
      />

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.btnCancel} onPress={() => navigation.goBack() }>
          <Text style={styles.btnText}>Cancelar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSend} onPress={requestAccount}>
          <Text style={styles.btnText}>Enviar</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}
