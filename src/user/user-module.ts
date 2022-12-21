import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostUserController } from './post-user/post-user.controller';
import { PostUserService } from './post-user/post-user.service';
import { Users, UserSchema } from 'src/schemas/user_schema';
import { PatchUserController } from './patch-user/patch-user.controller';
import { PatchUserService } from './patch-user/patch-user.service';
import { GetAllUserController } from './find-all-users/find-all-users.controller';
import { GetUserController } from './find-one-user/find-one-user.controller';
import { GetAllUserService } from './find-all-users/find-all-users.service';
import { DeleteUserController } from './delete-user/delete-user.controller';
import { DeleteUserService } from './delete-user/delete-user.service';
import { GetUserService } from './find-one-user/find-one-user.service';
import { SignInUserController } from './signin-user/signin-user.controller';
import { SignInUserService } from './signin-user/signin-user.use-case';
import { Persons, PersonSchema } from 'src/schemas/person_schema';


@Module({
  imports: [MongooseModule.forFeature([{name:Users.name, schema:UserSchema}]),MongooseModule.forFeature([{name:Persons.name, schema:PersonSchema}])],
  controllers: [PostUserController,PatchUserController,GetAllUserController,GetUserController,DeleteUserController,SignInUserController],
  providers: [PostUserService,PatchUserService,GetAllUserService,GetUserService,DeleteUserService,SignInUserService],
})
export class UserModule {}