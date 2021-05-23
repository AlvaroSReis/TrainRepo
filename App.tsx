import React from 'react'
import 'react-native-gesture-handler'

import { StatusBar } from 'react-native'

import EOrganico from './src'

export default function App () {
  return (
    <>
      <StatusBar hidden={true} />
      <EOrganico />
    </>
  )
}
