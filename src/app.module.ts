import { Module } from '@nestjs/common';
import { DatabaseAccess } from './database/mongo-database-access';
import { UserModule } from './user/user-module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [ConfigModule.forRoot(),DatabaseAccess,UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
