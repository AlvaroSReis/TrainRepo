import { ResponseClient } from '../utils/interfaces/Responses'
import { api } from '../services/api'

export class Admin {
  public async saveAdmin (name: string, email: string, password: string): Promise<ResponseClient> {
    try {
      const response = await api.post('admin/create', {
        name,
        email,
        password
      })

      const { code, token } = response.data

      return { code, token }
    } catch (error) {
      return { code: 460 }
    }
  }

  public async login (email: string, password: string): Promise<ResponseClient> {
    const url = `admin/login?email=${email}&password=${password}`
    try {
      const response = await api.get(url)

      const { code, token } = response.data

      return { code, token }
    } catch (error) {
      return { code: 460 }
    }
  }
}
