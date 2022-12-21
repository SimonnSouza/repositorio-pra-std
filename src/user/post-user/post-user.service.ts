import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PersonEntity } from 'src/entities/Person_entity';
import { UserEntity } from 'src/entities/user_entity';
import { PersonDocument, Persons } from 'src/schemas/Person_schema';
import { UserDocument, Users } from 'src/schemas/user_schema';



Injectable()
export class PostUserService {
    constructor(@InjectModel(Users.name) private userEntity: Model<UserDocument>,
                @InjectModel(Persons.name) private personEntity: Model<PersonDocument>) { }

    async create(userToDatabase: UserEntity, vinculatedPerson: PersonEntity) {
        const existentUser = await this.userEntity.findOne({ username: userToDatabase.username })
        const existentPerson = await this.personEntity.findOne({ phone: vinculatedPerson.phone })
        if (existentUser == null && existentPerson == null) {
            const createdPerson = await this.personEntity.create(vinculatedPerson)
            const idToLink = createdPerson._id
            userToDatabase.linkedTo = idToLink
            const createUser = await this.userEntity.create(userToDatabase)
            return createUser
        }
        return false
    }
}