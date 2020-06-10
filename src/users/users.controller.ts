import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common'
import { UsersService } from './users.service'
import { CreateUserDTO } from './users.dto'

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/')
  async getUsers(@Res() res) {
    const users = await this.usersService.getUsers()

    return res.status(HttpStatus.OK).json({
      users,
    })
  }

  @Post('/create')
  async createUser(@Res() res, @Body() createUserDto: CreateUserDTO) {
    const user = await this.usersService.createUser(createUserDto)
    return res.status(HttpStatus.OK).json({
      message: 'received',
      user,
    })
  }
}
