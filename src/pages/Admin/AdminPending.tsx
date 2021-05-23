import React, { FunctionComponent } from 'react'
import { View, Text, TouchableOpacity, ListRenderItemInfo } from 'react-native'
import { AdminController } from '../../controllers/AdminController'
import { Admin, AdminClient } from '../../utils/interfaces/Entities'
import { AdminPendingProps } from '../../utils/interfaces/Props'
import { styles } from './styles/adminPending'

export const AdminPending: FunctionComponent<AdminPendingProps> = (
  admin: AdminPendingProps
): JSX.Element => {
  const adminController = new AdminController()

  const { token } = admin
  const { createdAt, email, name } = admin.item

  const validate = async () => {
    const { status, message } = await adminController.validate(email, token)
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerButtons}>
        <TouchableOpacity style={styles.btnName}>
          <Text style={styles.name}>{name}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerButtons}>
        <TouchableOpacity style={styles.btnInvalidar}>
          <Text style={styles.btnText}>Invalidar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnValidar} onPress={validate}>
          <Text style={styles.btnText}>Validar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
