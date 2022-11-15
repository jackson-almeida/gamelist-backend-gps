import { Controller, Get, Post } from "@nestjs/common";
import { GameDto } from "src/dto/game.dto";
import { Game } from "src/models/game.interface";
import { GameService } from "src/services/game.service";


@Controller('game')
export class GameController {

  constructor(
    private readonly gameService: GameService
  ) {}

  @Get(':id')
  async findOne(id: number): Promise<Game> {
    return await this.gameService.findOne(id)
  }

  @Get()
  findAll() {
    console.log("Teste")
    return this.gameService.findAll();
    // return {teste: 'teste'};
  }

  @Post()
  createGame(game: GameDto) {
    return this.gameService.create(game);
  }
}