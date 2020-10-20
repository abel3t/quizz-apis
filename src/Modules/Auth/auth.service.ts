import { Model } from 'mongoose';

import { Injectable, Inject } from '@nestjs/common';
import { USER_MODEL } from 'Constants/database';

import { UserLogin, UserRegister } from 'Processors/DTOs/User';
import { User } from 'Processors/Schemas/User';
import { save } from 'Processors/Database/common';

@Injectable()
export class AuthService {
  constructor(
    @Inject(USER_MODEL)
    private readonly userModel: Model<User>) {
  }

  async register(user: UserRegister): Promise<User> {
    const existedUser = await this.userModel.findOne({ email: user.email });
    if (existedUser) {
      throw new Error('This email already exists');
    }

    return save<User>(new this.userModel(user));
  }

  async login(user: UserLogin): Promise<User> {
    const existedUser = await this.userModel.findOne({ email: user.email });
    if (!existedUser) {
      throw new Error('User is not found');
    }
    return existedUser;
  }
}