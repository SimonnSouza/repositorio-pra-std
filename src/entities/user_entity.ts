import { IEntity } from "./void_entity"

export class UserEntity implements IEntity {
    public username:string
    public password:string
    public linkedTo:string


    constructor () {}
}

