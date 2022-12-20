import { Module } from '@nestjs/common';
import { DatabaseAccess } from './database/mongo-database-access';
import { UserModule } from './user/user-module';
@Module({
  imports: [DatabaseAccess,UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
