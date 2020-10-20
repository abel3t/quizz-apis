import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserLogin, UserRegister } from '../../Processors/DTOs/User';
import { HttpBadRequestError } from 'Errors/badRequest';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {
  }

  @Post('register')
  async register(@Body() user: UserRegister) {
    try {
      return await this.authService.register(user);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Post('login')
  async login(@Body() user: UserLogin) {
    try {
      return await this.authService.login(user);
    } catch (error) {
      new HttpBadRequestError(error);
    }
  }
}