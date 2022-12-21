import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PersonDocument, Persons } from 'src/schemas/person_schema';



Injectable()
    export class DeletePersonService {
        constructor(@InjectModel(Persons.name) private personEntity:Model<PersonDocument>) { }
        
        async delete(id:string) {

            const deletePerson = await this.personEntity.findByIdAndRemove(id)
            return
        }
    }
