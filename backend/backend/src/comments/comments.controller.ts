import { Controller, Post, Param, Body, Get } from '@nestjs/common';
import { CommentsService } from './comments.service';

@Controller('posts/:id/comment')
export class CommentsController {
  constructor(private commentsService: CommentsService) {}

  @Post()
  create(@Param('id') post_id: number, @Body() body: { wallet_address: string; content: string }) {
    return this.commentsService.create({ ...body, post_id });
  }

  @Get()
  getByPost(@Param('id') post_id: number) {
    return this.commentsService.getByPost(post_id);
  }
}