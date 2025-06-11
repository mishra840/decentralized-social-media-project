import { Controller, Post, Param, Body } from '@nestjs/common';
import { LikesService } from './likes.service';

@Controller('posts/:id/like')
export class LikesController {
  constructor(private likesService: LikesService) {}

  @Post()
  like(@Param('id') post_id: number, @Body() body: { wallet_address: string }) {
    return this.likesService.likePost(post_id, body.wallet_address);
  }
}