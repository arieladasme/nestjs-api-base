import { Bind, Controller, Get, Post, Req, UseGuards } from '@nestjs/common'
import { AppService } from './app.service'
import { LocalAuthGuard } from './auth/local-auth.guard'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  @Bind(Req())
  async login(req) {
    return req.user
  }

  @Get()
  getHello(): string {
    return this.appService.getHello()
  }
}
