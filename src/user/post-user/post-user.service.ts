import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserEntity } from 'src/entities/user_entity';
import { UserDocument, Users } from 'src/schemas/user_schema';



Injectable()
    export class PostUserService {
        constructor(@InjectModel(Users.name) private userEntity:Model<UserDocument>) { }

        async create(userToDatabase:UserEntity): Promise<Users> {
            const createUser = new this.userEntity(userToDatabase)
            return createUser.save()
        }
    }