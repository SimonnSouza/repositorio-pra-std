import { Module } from '@nestjs/common';
import { DatabaseAccess } from './database/mongo-database-access';
import { UserModule } from './user/user-module';
import { ConfigModule } from '@nestjs/config';
import { PersonModule } from './person/person.module';
@Module({
  imports: [ConfigModule.forRoot(),
    DatabaseAccess,
    UserModule,
    PersonModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
