import { Controller, Get, Post as HttpPost, Param, Body } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get()
  getAll() {
    return this.postsService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: number) {
    return this.postsService.getById(id);
  }

  @HttpPost()
  create(@Body() body: { wallet_address: string; content: string }) {
    return this.postsService.create(body);
  }
}
