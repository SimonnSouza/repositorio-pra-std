import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostPersonController } from './post-person/post-person.controller';
import { PostPersonService } from './post-person/post-person.service';
import { Persons, PersonSchema } from 'src/schemas/person_schema';
import { GetPersonController } from './find-one-person/find-one-person.controller';
import { GetPersonService } from './find-one-person/find-one-person.service';
import { GetAllPersonsController } from './find-all-persons/find-all-persons.controller';
import { GetAllPersonsService } from './find-all-persons/find-all-persons.service';
import { DeletePersonController } from './delete-person/delete-person.controller';
import { DeletePersonService } from './delete-person/delete-person.service';

@Module({
  imports: [MongooseModule.forFeature([{name:Persons.name, schema:PersonSchema}])],
  controllers: [PostPersonController,GetPersonController,GetAllPersonsController,DeletePersonController],
  providers: [PostPersonService,GetPersonService, GetAllPersonsService,DeletePersonService],
})
export class PersonModule {}