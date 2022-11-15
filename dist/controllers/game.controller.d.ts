import { GameDto } from "src/dto/game.dto";
import { Game } from "src/models/game.interface";
import { GameService } from "src/services/game.service";
export declare class GameController {
    private readonly gameService;
    constructor(gameService: GameService);
    findOne(id: number): Promise<Game>;
    findAll(): Promise<Game[]>;
    createGame(game: GameDto): Promise<"Please either choose `select` or `include`" | import(".prisma/client").Game | (import(".prisma/client").Game & {}) | {}>;
}
