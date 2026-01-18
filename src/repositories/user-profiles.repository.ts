import { Injectable } from "@nestjs/common";
import { UserProfile } from "src/entities/user-profiles.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserProfilesRepository {
    constructor(private readonly userProfileRepository: Repository<UserProfile>) {}

    async create(payload: any) {
        try {
            const data  = await this.userProfileRepository.create(payload);

            await this.userProfileRepository.insert(data);
            return data;
        } catch (err) { 
            throw err
        }
    }
}