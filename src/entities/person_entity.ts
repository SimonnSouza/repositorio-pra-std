import { IEntity } from "./void_entity";

export class PersonEntity implements IEntity {

    public family_id: string
    public name: string
    public birthdate: string
    public phone: string
    public adress_neighborhood: string
    public adress_street: string
    public adress_zipCode: string
    public adress_number: number
    public adress_complement?: string
    public created_date: string
    public update_date:string

    constructor() { }
} 