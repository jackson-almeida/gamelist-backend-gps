import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { User } from "@prisma/client";
import { Game } from "src/models/game.interface";
import { GameService } from "src/services/game.service";
import { UserService } from "src/services/user.service";


@Controller('user')
export class UserController {

  constructor(
    private readonly userService: UserService
  ) {}

  @Get()
  findOne(@Query('id') id: number): Promise<User> {
    return this.userService.findOne(id)
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Post()
  create(@Body() body) {
    return this.userService.create(body)
  }
}