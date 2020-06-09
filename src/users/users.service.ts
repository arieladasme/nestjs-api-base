import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { User } from './users.schema';
import { ReturnModelType } from '@typegoose/typegoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private readonly userModel: ReturnModelType<typeof User>
  ){}



  async getUsers(): Promise<User[]>{
    const users = await this.userModel.find();
    return users;
  }




}
