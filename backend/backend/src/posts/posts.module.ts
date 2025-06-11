import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './post.entity';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { LikesModule } from '../likes/likes.module';
import { CommentsModule } from '../comments/comments.module';

@Module({
  imports: [TypeOrmModule.forFeature([Post]), LikesModule, CommentsModule],
  providers: [PostsService],
  controllers: [PostsController],
})
export class PostsModule {}