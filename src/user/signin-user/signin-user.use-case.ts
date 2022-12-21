import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserEntity } from 'src/entities/User_entity';
import { UserDocument, Users } from 'src/schemas/User_schema';



Injectable()
    export class SignInUserService {
        constructor(@InjectModel(Users.name) private userEntity:Model<UserDocument>) { }

        async signin(recivedUsername:string,recivedPassword:string) {
            const signedUser = await this.userEntity.findOne({username:recivedUsername,password:recivedPassword})
            

            if (signedUser == null) {
                return false
            }
            return signedUser
        }
    }