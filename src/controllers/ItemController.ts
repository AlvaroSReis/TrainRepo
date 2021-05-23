import { ResponseForUser } from '../utils/interfaces/Responses'

export class RegisterItem {
  public async create (name: string, type: string, token: string): Promise<ResponseForUser> {
    return { status: true }
  }
}
