import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Like } from './like.entity';

@Injectable()
export class LikesService {
  constructor(@InjectRepository(Like) private repo: Repository<Like>) {}

  async likePost(post_id: number, wallet_address: string) {
    const like = this.repo.create({ post_id, wallet_address });
    return this.repo.save(like);
  }

  async getLikesByPost(post_id: number) {
    return this.repo.find({ where: { post_id } });
  }
}
