import React, { FC, useState } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

import { PropsLogin } from '../../utils/types/Props'
import { isValidInputsLogin } from '../../utils/functions/validation'
import { AdminController } from '../../controllers/AdminController'
import { styles } from './styles/inputs'
import { RequestAccount } from './RequestAccount'

const Inputs: FC<PropsLogin> = ({ navigation }: PropsLogin): JSX.Element => {
  const adminController = new AdminController()

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const login = async () => {
    const validInputs = isValidInputsLogin({ email, password })

    if (!validInputs) return alert('Todos os campos são obrigatórios')

    const { status, message, token } = await adminController.login(email, password)

    if (!status) return alert(message)

    navigation.navigate('Home', { token: token as string })
  }

  return (
    <View style={styles.container}>

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

      <TouchableOpacity style={styles.btnLogin} onPress={login}>
        <Text style={styles.loginText}>ENTRAR</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnForgetPassword}>
        <Text style={styles.forgetPasswordText}>Esqueci minha senha</Text>
      </TouchableOpacity>

      <View style={styles.social}>
        <TouchableOpacity style={styles.btnSocial}>
          <FontAwesome name="facebook-f" size={25} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSocial}>
          <FontAwesome name="twitter" size={25} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSocial}>
          <FontAwesome name="google" size={25} color="#fff" />
        </TouchableOpacity>
      </View>

      <RequestAccount />
    </View>
  )
}

export { Inputs }
