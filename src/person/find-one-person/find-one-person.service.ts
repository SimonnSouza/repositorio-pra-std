import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PersonDocument, Persons } from 'src/schemas/Person_schema';



Injectable()
    export class GetPersonService {
        constructor(@InjectModel(Persons.name) private personEntity:Model<PersonDocument>) { }

        async findOne(personId:string)
        { 
            const foundPerson = await this.personEntity.findById(personId)
            if(foundPerson == null) {
                return false
            }
            return foundPerson
        }
    }