import { Prisma, User } from "@prisma/client";
import { PrismaService } from "./prisma.service";
export declare class UserService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(data: Prisma.UserCreateInput): Promise<Prisma.UserGetPayload<any>>;
    findOne(idParam: number): Promise<User>;
    findAll(): Promise<User[]>;
}
