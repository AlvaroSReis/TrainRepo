import React, { FunctionComponent } from 'react'
import { KeyboardAvoidingView, ScrollView } from 'react-native'

import { Header } from '../../components/Header'
import { PropsLogin } from '../../utils/types/Props'
import { Inputs } from './Inputs'
import { styles } from './styles/login'

const Login: FunctionComponent<PropsLogin> = ({ navigation }: PropsLogin): JSX.Element => {
  return (
    <KeyboardAvoidingView style={styles.background}>
      <ScrollView >
        <Header />

        <Inputs navigation={navigation}/>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export { Login }
