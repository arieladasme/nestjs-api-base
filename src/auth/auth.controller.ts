import { Controller, Request, Post, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

@Controller('auth')
export class AppController {
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    console.log(req.user)
    return req.user
  }
}
