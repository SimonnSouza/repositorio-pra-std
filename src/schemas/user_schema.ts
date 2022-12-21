import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = Users & Document

@Schema()
export class Users {
    @Prop({required: true })
    username:string
    @Prop({required: true })
    password:string
    @Prop({required: true })
    linkedTo:string
}

export const UserSchema = SchemaFactory.createForClass(Users)