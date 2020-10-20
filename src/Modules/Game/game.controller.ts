import { Controller, Get } from '@nestjs/common';

@Controller('Game')
export class GameController {
  @Get('/login')
  getHello(): any {
    return {
      status: 'OK'
    };
  }
}
