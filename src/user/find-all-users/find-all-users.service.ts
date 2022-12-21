import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument, Users } from 'src/schemas/user_schema';



Injectable()
    export class GetAllUserService {
        constructor(@InjectModel(Users.name) private userEntity:Model<UserDocument>) { }

        async findAll()
        { 
  
            const foundUser = await this.userEntity.find()
            return foundUser
        }
    }