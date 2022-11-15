import { Injectable } from "@nestjs/common";
import { Prisma, User } from "@prisma/client";
import { Game } from "src/models/game.interface";
import { PrismaService } from "./prisma.service";

@Injectable()
export class UserService {

  constructor(
    private readonly prismaService: PrismaService,
  ) {}

  async create(data: Prisma.GameCreateInput): Promise<Prisma.GameGetPayload<any>> {
    return await this.prismaService.game.create({
      data
    });
  }

  async findOne(id: number): Promise<User> {
    return this.prismaService.user.findFirst({
      where: { id }
    });
  }

  async findAll(): Promise<User[]> {
    return this.prismaService.user.findMany();
  }
}