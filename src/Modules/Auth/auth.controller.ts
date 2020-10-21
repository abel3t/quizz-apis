import { Body, Controller, Get, HttpException, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Express } from 'express';

import { UserLogin, UserRegister } from 'Processors/DTOs/User';
import { HttpBadRequestError } from 'Errors/badRequest';

import { AuthService } from './auth.service';
import { JwtAuthGuard } from 'Guards/jwt.guard';

@ApiTags('Auth')
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

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async profile(@Request() req: Express) {
    try {
      console.log('Hello World', req.name);
    } catch (error) {
      new HttpBadRequestError(error);
    }
  }
}