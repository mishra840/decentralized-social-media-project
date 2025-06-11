import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  findByWallet(wallet: string) {
    return this.repo.findOneBy({ wallet_address: wallet });
  }

  async createOrUpdate(data: Partial<User>) {
    return this.repo.save(data);
  }
}

