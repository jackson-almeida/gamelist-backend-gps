import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { Game } from "src/models/game.interface";
import { PrismaService } from "./prisma.service";

const games: Game[] = [
  { id: 1, name: 'GTA', description: 'Desc 1', authorId: 1 },
  { id: 2, name: 'ARK: Survival Evolved', description: 'Desc 2', authorId: 2 },
  { id: 3, name: 'Minecraft', description: 'Desc 3', authorId: 3 },
]

@Injectable()
export class GameService {

  constructor(
    private readonly prismaService: PrismaService,
  ) {}

  private readonly game: Game[] = games;

  async create(data: Prisma.GameCreateInput): Promise<Prisma.GameGetPayload<any>> {
    return await this.prismaService.game.create({
      data
    });
  }

  async findOne(id: number): Promise<Game> {
    return this.game.filter(elem => elem.id === id)[0];
  }

  async findAll(): Promise<Game[]> {
    return this.game;
  }
}