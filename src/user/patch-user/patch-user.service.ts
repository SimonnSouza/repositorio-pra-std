import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserEntity } from 'src/entities/User_entity';
import { UserDocument, Users } from 'src/schemas/User_schema';



Injectable()
    export class PatchUserService {
        constructor(@InjectModel(Users.name) private userEntity:Model<UserDocument>) { }

        async patch(userToPatch:string,newData:UserEntity): Promise<Users> {
            const selectedUser = await this.userEntity.findById(userToPatch)

            const id = selectedUser.id
            if(newData.username == '' || null) {
                selectedUser.password = newData.password
                await this.userEntity.findByIdAndUpdate(id,selectedUser).exec()
            }
            if(newData.password == '' || null){
            selectedUser.username = newData.username
            await this.userEntity.findByIdAndUpdate(id,selectedUser).exec()
            }

            selectedUser.username = newData.username
            selectedUser.password = newData.password
            console.log(selectedUser)
            await this.userEntity.findByIdAndUpdate(id,selectedUser).exec()

            return selectedUser
        }

    }
