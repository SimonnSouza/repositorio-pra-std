import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PersonEntity } from 'src/entities/person_entity';
import { PersonDocument, Persons } from 'src/schemas/Person_schema';



Injectable()
export class PostPersonService {
    constructor(@InjectModel(Persons.name) private personEntity: Model<PersonDocument>) { }

    async post(requisition: PersonEntity) {
        const existentPerson = await this.personEntity.findOne({ phone: requisition.phone })
        if (existentPerson == null) {
            const postedUser = await this.personEntity.create(requisition)
            return postedUser
        }
        return false
    }
}

