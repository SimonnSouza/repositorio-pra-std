import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PersonDocument, Persons } from 'src/schemas/Person_schema';



Injectable()
    export class GetAllPersonsService {
        constructor(@InjectModel(Persons.name) private personEntity:Model<PersonDocument>) { }

        async findAll()
        { 
  
            const foundPerson = await this.personEntity.find()
            return foundPerson
        }
    }