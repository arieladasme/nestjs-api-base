import { Dependencies, Injectable } from '@nestjs/common'
import { UsersService } from '../users/users.service'
import { JwtService } from '@nestjs/jwt'

@Dependencies(UsersService, JwtService)
@Injectable()
export class AuthService {
  constructor(
    //@InjectModel(User) private readonly userModel: ReturnModelType<typeof User>,
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {
    this.usersService = usersService
    this.jwtService = jwtService
  }

  // async signUp(authDto: AuthDto): Promise<User> {
  //   const { username, password } = authDto
  //
  //   const user = new this.userModel(authDto)
  //   user.username = username
  //   user.password = password
  //   await user.save()
  // }

  async validateUser(email, pass) {
    const user = await this.usersService.getUser(email)

    if (user && user.password === pass) {
      const { password, ...result } = user
      return result
    }
    return null
  }

  async login(user) {
    const payload = { username: user.username, sub: user.userId }

    return {
      access_token: this.jwtService.sign(payload),
    }
  }
}
