import React from 'react'
import {
  MaterialIcons,
  Entypo,
  FontAwesome5,
  MaterialCommunityIcons,
  Ionicons,
  Fontisto
} from '@expo/vector-icons'

export const selectIcon = (name: string) => {
  const COLOR = '#FFF'
  const SIZE = 24

  switch (name) {
    case 'Admin':
      return <FontAwesome5 name="user-tie" size={SIZE} color={COLOR} />

    case 'Dashboard':
      return <MaterialIcons name="dashboard" size={SIZE} color={COLOR} />

    case 'Endereço':
      return <Entypo name="location" size={SIZE} color={COLOR} />

    case 'Feira':
      return <FontAwesome5 name="building" size={SIZE} color={COLOR} />

    case 'Item':
      return <MaterialCommunityIcons name="food-apple-outline" size={SIZE} color={COLOR} />

    case 'Mercado':
      return <FontAwesome5 name="store" size={SIZE} color={COLOR} />

    case 'Produto':
      return <MaterialCommunityIcons name="format-list-bulleted-type" size={SIZE} color={COLOR} />

    case 'Produtor':
      return <Entypo name="v-card" size={SIZE} color={COLOR} />

    case 'Propriedade':
      return <Ionicons name="md-home" size={SIZE} color={COLOR} />

    case 'Reserva':
      return <Fontisto name="shopping-bag-1" size={SIZE} color={COLOR} />

    case 'Usuário':
      return <FontAwesome5 name="users" size={SIZE} color={COLOR} />
  }
}
