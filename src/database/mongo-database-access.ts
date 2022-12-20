import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://SimonnSouza:H3nr!ck2004@sandbox.zqzqitm.mongodb.net/?retryWrites=true&w=majority')], //alterar
  controllers: [],
  providers: [],
})
export class DatabaseAccess {}