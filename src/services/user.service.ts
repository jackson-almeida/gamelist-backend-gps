import { Injectable } from "@nestjs/common";
import { Prisma, User } from "@prisma/client";
import { Game } from "src/models/game.interface";
import { PrismaService } from "./prisma.service";

@Injectable()
export class UserService {

  constructor(
    private readonly prismaService: PrismaService,
  ) {}

  async create(data: Prisma.UserCreateInput): Promise<Prisma.UserGetPayload<any>> {
    return await this.prismaService.user.create({
      data
    });
  }

  async findOne(idParam: number): Promise<User> {
    const id = +idParam;
    return this.prismaService.user.findFirst({
      where: { id }
    });
  }

  async findAll(): Promise<User[]> {
    return this.prismaService.user.findMany();
  }
}