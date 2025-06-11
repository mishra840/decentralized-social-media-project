import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';

@Injectable()
export class PostsService {
  constructor(@InjectRepository(Post) private postRepo: Repository<Post>) {}

  getAll() {
    return this.postRepo.find({ order: { timestamp: 'DESC' } });
  }

  getById(id: number) {
    return this.postRepo.findOneBy({ id });
  }

  create(postData: Partial<Post>) {
    const post = this.postRepo.create(postData);
    return this.postRepo.save(post);
  }
}