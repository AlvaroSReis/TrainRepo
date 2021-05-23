import { api } from '../services/api'
import { ResponseClient } from '../utils/interfaces/Responses'

export class Item {
  public static async save (name: string, type: string, token: string): Promise<ResponseClient> {
    const url = 'itens/create'

    try {
      const response = await api.post(url, { name, type }, {
        headers: {
          'access-token': token
        }
      })

      const { code } = response.data

      return { code }
    } catch (error) {
      return { code: 460 }
    }
  }
}
