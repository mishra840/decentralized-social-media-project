import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get(':wallet')
  getUser(@Param('wallet') wallet: string) {
    return this.userService.findByWallet(wallet);
  }

  @Post()
  createOrUpdate(@Body() data: Partial<User>) {
    return this.userService.createOrUpdate(data);
  }
}

