import { Model } from 'mongoose';

import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { USER_MODEL } from 'Constants/database';

import { UserLogin, UserRegister } from 'Processors/DTOs/User';
import { User } from 'Processors/Schemas/User';
import { save } from 'Processors/Database/common';
import { JwtService } from '@nestjs/jwt';

interface IJwtPayload {
  email: string
}

@Injectable()
export class AuthService {
  constructor(
    @Inject(USER_MODEL)
    private readonly userModel: Model<User>,
    private readonly jwtService: JwtService
  ) {
  }

  async register(user: UserRegister): Promise<User> {
    const existedUser = await this.userModel.findOne({ email: user.email });
    if (existedUser) {
      throw new Error('This email already exists');
    }

    return save<User>(new this.userModel(user));
  }

  async login(user: UserLogin): Promise<IToken> {
    const existedUser = await this.userModel.findOne({ email: user.email });
    if (!existedUser) {
      throw new Error('User is not found');
    }
    const token = this._createToken({ email: user.email });

    return {
      token,
      expiresIn: 124
    };
  }

  async validateUser(payload: IJwtPayload): Promise<User> {
    console.log(payload, 'HEHE');
    const user = await this.userModel.findOne({ email: payload.email });
    if (!user) {
      throw new HttpException('Invalid token', HttpStatus.FORBIDDEN);
    }
    return user;
  }

  private _createToken({ email }: any): string {
    console.log(email);
    return this.jwtService.sign({ email });
  }
}