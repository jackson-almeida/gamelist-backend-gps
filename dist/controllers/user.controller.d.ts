import { User } from "@prisma/client";
import { UserService } from "src/services/user.service";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findOne(id: number): Promise<User>;
    findAll(): Promise<User[]>;
    create(body: any): Promise<User | "Please either choose `select` or `include`" | (User & {}) | {}>;
}
