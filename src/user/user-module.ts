import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostUserController } from './post-user/post-user.controller';
import { PostUserService } from './post-user/post-user.service';
import { Users, UserSchema } from 'src/schemas/user_schema';
import { PatchUserController } from './patch-user/patch-user.controller';
import { PatchUserService } from './patch-user/patch-user.service';

@Module({
  imports: [MongooseModule.forFeature([{name:Users.name, schema:UserSchema}])],
  controllers: [PostUserController,PatchUserController],
  providers: [PostUserService,PatchUserService],
})
export class UserModule {}