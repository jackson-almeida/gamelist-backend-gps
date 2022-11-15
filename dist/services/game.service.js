"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("./prisma.service");
const games = [
    { id: 1, name: 'GTA', description: 'Desc 1', authorId: 1 },
    { id: 2, name: 'ARK: Survival Evolved', description: 'Desc 2', authorId: 2 },
    { id: 3, name: 'Minecraft', description: 'Desc 3', authorId: 3 },
];
let GameService = class GameService {
    constructor(prismaService) {
        this.prismaService = prismaService;
        this.game = games;
    }
    async create(data) {
        return await this.prismaService.game.create({
            data
        });
    }
    async findOne(id) {
        return this.game.filter(elem => elem.id === id)[0];
    }
    async findAll() {
        return this.game;
    }
};
GameService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], GameService);
exports.GameService = GameService;
//# sourceMappingURL=game.service.js.map