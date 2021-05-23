import React, { FC } from 'react'
import { View, ScrollView, KeyboardAvoidingView, Text } from 'react-native'

import { Inputs } from './Inputs'
import { styles } from './styles/register'

const Register: FC = (): JSX.Element => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView>
        <Inputs />
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default Register
