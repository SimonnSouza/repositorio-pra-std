import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument, Users } from 'src/schemas/User_schema';



Injectable()
    export class DeleteUserService {
        constructor(@InjectModel(Users.name) private userEntity:Model<UserDocument>) { }
        async delete(id:string) {
            const deleteUser = await this.userEntity.findByIdAndRemove(id)
            return
        }
    }
