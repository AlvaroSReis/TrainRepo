import React, { FunctionComponent } from 'react'
import { FlatList, View, TouchableOpacity, Text } from 'react-native'
import { Admin, AdminClient } from '../../utils/interfaces/Entities'
import { AdminPending } from './AdminPending'

import { styles } from './styles/pending'

const DATA: AdminClient[] = [
  {
    idAdmin: 'f15816c1-35fb-4d69-acfc-01754677b2ee',
    name: 'iago',
    email: 'iagof@iago.com',
    password: '$2b$10$Qv2/8XbreUPDKeAKlP0BRemFRA0tD7gM9QRl.SxVYYEbpIUsXaTmS',
    validatedBy: null,
    evaluated: false,
    granted: false,
    createdAt: new Date('2021-05-11T16:34:30.510Z'),
    updatedAt: new Date('2021-05-11T16:34:30.510Z')
  },
  {
    idAdmin: 'f15816c1-35fb-4d69-acfc-01754677b2ea',
    name: 'pedro',
    email: 'iagof@iago.com',
    password: '$2b$10$Qv2/8XbreUPDKeAKlP0BRemFRA0tD7gM9QRl.SxVYYEbpIUsXaTmS',
    validatedBy: null,
    evaluated: false,
    granted: false,
    createdAt: new Date('2021-05-11T16:34:30.510Z'),
    updatedAt: new Date('2021-05-11T16:34:30.510Z')
  },
  {
    idAdmin: 'f15816c1-35fb-4d69-acfc-01754677b2eb',
    name: 'maria',
    email: 'iagof@iago.com',
    password: '$2b$10$Qv2/8XbreUPDKeAKlP0BRemFRA0tD7gM9QRl.SxVYYEbpIUsXaTmS',
    validatedBy: null,
    evaluated: false,
    granted: false,
    createdAt: new Date('2021-05-11T16:34:30.510Z'),
    updatedAt: new Date('2021-05-11T16:34:30.510Z')
  },
  {
    idAdmin: 'f15816c1-35fb-4d69-acfc-01754677b2ec',
    name: 'paulo',
    email: 'iagof@iago.com',
    password: '$2b$10$Qv2/8XbreUPDKeAKlP0BRemFRA0tD7gM9QRl.SxVYYEbpIUsXaTmS',
    validatedBy: null,
    evaluated: false,
    granted: false,
    createdAt: new Date('2021-05-11T16:34:30.510Z'),
    updatedAt: new Date('2021-05-11T16:34:30.510Z')
  },
  {
    idAdmin: 'f15816c1-35fb-4d69-acfc-01754677b2ec',
    name: 'joao',
    email: 'iagof@iago.com',
    password: 'hujmin',
    validatedBy: null,
    evaluated: false,
    granted: false,
    createdAt: new Date('2021-05-11T16:34:30.510Z'),
    updatedAt: new Date('2021-05-11T16:34:30.510Z')
  }
]

export const Pending: FunctionComponent<Admin> = ({ token }: Admin): JSX.Element => {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={admin => <AdminPending {...{ ...admin, token } } /> }
        keyExtractor={admin => admin.idAdmin}
      />
    </View>
  )
}
