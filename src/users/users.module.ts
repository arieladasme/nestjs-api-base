import { Module } from '@nestjs/common'
import { UsersController } from './users.controller'
import { UsersService } from './users.service'
import { TypegooseModule } from 'nestjs-typegoose'
import { User } from './users.schema'

@Module({
  imports: [TypegooseModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
