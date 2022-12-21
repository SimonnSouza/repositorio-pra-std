import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PersonDocument = Persons & Document

@Schema()
export class Persons {
    @Prop({required: true })
    family_id:string
    @Prop({required: true })
    name:string
    @Prop({required: true })
    birthdate:string
    @Prop({required: true })
    phone:string
    @Prop({required: true })
    adress_neighborhood:string
    @Prop({required: true })
    adress_street:string
    @Prop({required: true })
    adress_zipCode:string
    @Prop({required: true })
    adress_number:string
    @Prop({required: true })
    adress_complement:string
    @Prop({required: true })
    created_date:string
    @Prop({required: true })
    update_date:string
    
}

export const PersonSchema = SchemaFactory.createForClass(Persons)





 