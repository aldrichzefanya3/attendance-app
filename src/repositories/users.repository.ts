import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '../entities/users.entity';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findOne(email: string): Promise<User | null> {
    return this.userRepository.findOne({
      where: {
        email: email,
      },
    });
  }

  async create(payload: any) {
      try {
          const data  = await this.userRepository.create(payload);

          await this.userRepository.insert(data);
          return data;
      } catch (err) { 
          throw err
      }
  }
}
