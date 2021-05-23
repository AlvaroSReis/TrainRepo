import { AdminClient } from './Entities'
import { ListRenderItemInfo } from 'react-native'

export interface AdminPendingProps extends ListRenderItemInfo<AdminClient> {
  token: string
}
