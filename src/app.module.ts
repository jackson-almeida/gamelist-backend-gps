import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { GameController } from './controllers/game.controller';
import { UserController } from './controllers/user.controller';
import { GameService } from './services/game.service';
import { PrismaService } from './services/prisma.service';
import { UserService } from './services/user.service';

@Module({
  imports: [],
  controllers: [
    GameController,
    UserController
  ],
  providers: [
    AppService,
    GameService,
    UserService,
    PrismaService
  ],
})
export class AppModule {}
