import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument, Users } from 'src/schemas/User_schema';



Injectable()
    export class GetUserService {
        constructor(@InjectModel(Users.name) private userEntity:Model<UserDocument>) { }

        async findOne(userId:string)
        { 
            const foundUser = await this.userEntity.findById(userId)
            if(foundUser == null) {
                return false
            }
            return foundUser
        }
    }