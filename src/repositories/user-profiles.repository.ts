import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserProfile } from "src/entities/user-profiles.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserProfileRepository {
    constructor(
        @InjectRepository(UserProfile)
        private readonly userProfileRepository: Repository<UserProfile>
    ) {}

    async create(payload: any) {
        try {
            const data  = await this.userProfileRepository.create(payload);

            await this.userProfileRepository.insert(data);
            return data;
        } catch (err) { 
            throw err
        }
    }

    async deleteById(id: string): Promise<void> {
        const result = await this.userProfileRepository.delete(id);

        if (result.affected === 0) {
            throw new NotFoundException(`UserProfile with id ${id} not found`);
        }
  }
}