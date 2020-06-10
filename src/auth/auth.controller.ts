import { Controller, Bind, Req, Post, UseGuards } from '@nestjs/common'
import { LocalAuthGuard } from './local-auth.guard'
import { AuthService } from './auth.service'

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  @Bind(Req())
  async login(req) {
    return this.authService.login(req.user)
  }
}
