import { Bind, Controller, Get, Post, Req, UseGuards } from '@nestjs/common'
import { AppService } from './app.service'
import { AuthGuard } from '@nestjs/passport'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(AuthGuard('local'))
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
