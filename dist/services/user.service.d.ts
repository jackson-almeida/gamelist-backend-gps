import { Prisma, User } from "@prisma/client";
import { PrismaService } from "./prisma.service";
export declare class UserService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(data: Prisma.GameCreateInput): Promise<Prisma.GameGetPayload<any>>;
    findOne(id: number): Promise<User>;
    findAll(): Promise<User[]>;
}
