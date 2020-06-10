import { Injectable } from '@nestjs/common'
import { InjectModel } from 'nestjs-typegoose'
import { User } from './users.schema'
import { ReturnModelType } from '@typegoose/typegoose'

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private readonly userModel: ReturnModelType<typeof User>,
  ) {}

  async getUsers(): Promise<User[]> {
    const users = await this.userModel.find()
    return users
  }

  async getUser(email: string): Promise<User> {
    const user = await this.userModel.findOne({ email })
    return user
  }

  async createUser(createUser): Promise<User> {
    const newUser = new this.userModel(createUser)
    return await newUser.save()
  }
}
