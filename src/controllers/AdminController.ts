import { Admin } from '../client/Admin'
import { LocalServices } from '../services/Local'
import { loginResponses, registerResponses } from '../utils/functions/responses/admin'
import { AdminClient } from '../utils/interfaces/Entities'
import { ResponseForUser } from '../utils/interfaces/Responses'

export class AdminController {
  private adminClient: Admin
  private localServices: LocalServices

  constructor () {
    this.localServices = new LocalServices()
    this.adminClient = new Admin()
  }

  public async login (email: string, password: string): Promise<ResponseForUser> {
    const { code, token } = await this.adminClient.login(email, password)

    if (code !== 200) return { status: false, message: loginResponses(code) }

    return { status: true, token }
  }

  public async register (
    name: string,
    email: string,
    password: string,
    image: string
  ): Promise<ResponseForUser> {
    const saveImage = await this.localServices.saveImage(image)
    const { code, token } = await this.adminClient.saveAdmin(name, email, password)

    if (code !== 201) return { status: false, message: registerResponses(code) }

    return { status: true }
  }

  public async validate (email: string, token: string): Promise<ResponseForUser> {
    return { status: true }
  }
}
