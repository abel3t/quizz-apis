import { Module } from '@nestjs/common';

import { AppController } from 'app.controller';
import { AppService } from 'app.service';
import { GameModule } from 'Modules/Game/game.module';
import { GameGateway } from 'Modules/Game/game.gateway';
import { DatabaseModule } from './Processors/Database/database.module';
import { AuthModule } from './Modules/Auth/auth.module';

@Module({
  imports: [
    DatabaseModule,
    GameModule,
    AuthModule
  ],
  controllers: [ AppController ],
  providers: [ AppService, GameGateway ],
})

export class AppModule {
}
