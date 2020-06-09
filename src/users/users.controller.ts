import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersservice: UsersService){}

  @Get('/')
  async getUsers(@Res() res){
    const users = await this.usersservice.getUsers()

    return res.status(HttpStatus.OK).json({
      users
    })
  }
}
