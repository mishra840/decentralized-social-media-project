import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './comment.entity';

@Injectable()
export class CommentsService {
  constructor(@InjectRepository(Comment) private repo: Repository<Comment>) {}

  create(data: Partial<Comment>) {
    return this.repo.save(data);
  }

  getByPost(post_id: number) {
    return this.repo.find({ where: { post_id } });
  }
}
