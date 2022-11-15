import { Prisma } from "@prisma/client";
import { Game } from "src/models/game.interface";
import { PrismaService } from "./prisma.service";
export declare class GameService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    private readonly game;
    create(data: Prisma.GameCreateInput): Promise<Prisma.GameGetPayload<any>>;
    findOne(id: number): Promise<Game>;
    findAll(): Promise<Game[]>;
}
