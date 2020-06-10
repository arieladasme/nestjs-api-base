import { Dependencies, Injectable } from '@nestjs/common'
import { UsersService } from '../users/users.service'
import { AuthDto } from './auth.dto'
import { User } from '../users/users.schema'
import { InjectModel } from 'nestjs-typegoose'
import { ReturnModelType } from '@typegoose/typegoose'

@Dependencies(UsersService)
@Injectable()
export class AuthService {
  constructor(
    //@InjectModel(User) private readonly userModel: ReturnModelType<typeof User>,
    private usersService: UsersService,
  ) {
    this.usersService = usersService
  }

  // async signUp(authDto: AuthDto): Promise<User> {
  //   const { username, password } = authDto
  //
  //   const user = new this.userModel(authDto)
  //   user.username = username
  //   user.password = password
  //   await user.save()
  // }

  async validateUser(username, pass) {
    const user = await this.usersService.getUser(username)
    if (user && user.password === pass) {
      const { password, ...result } = user
      return result
    }
    return null
  }
}
