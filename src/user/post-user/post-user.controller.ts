import { Controller, Body, Post,  } from "@nestjs/common";
import { UserEntity } from "src/entities/user_entity";
import { PostUserService } from "./post-user.service";
import { HttpException, HttpStatus } from "@nestjs/common";
import { PersonEntity } from "src/entities/person_entity";

@Controller('/users')
export class PostUserController {
    constructor(private readonly postUserService : PostUserService) { }

    @Post('/create')
    async createNewUser (
        @Body("username") recivedUsername:string,
        @Body("password") recivedPassword:string,
        @Body("name") recivedName:string,
        @Body("birthdate") recivedBdate:string,
        @Body("phone") recivedPhone:string,
        @Body("adress_neighborhood") recivedNeighboorhood:string,
        @Body("adress_street") recivedStreet:string,
        @Body("adress_zipCode") recivedZipCode:string,
        @Body("adress_number") recivedNumber:number,
        @Body("adress_complement") recivedComplement:string,
        
        newUser:UserEntity = {
            username:recivedUsername,
            password:recivedPassword,
            linkedTo:"toDefine"
        },

        personVinculatedToUser:PersonEntity = {
            name:recivedName,
            birthdate:recivedBdate,
            phone:recivedPhone,
            adress_neighborhood:recivedNeighboorhood,
            adress_street:recivedStreet,
            adress_zipCode:recivedZipCode,
            adress_number:recivedNumber,
            adress_complement:recivedComplement,
            family_id:"none yet",
            created_date:"willBeDefined",
            update_date:"none yet"
        }
    ) {
        const currentdate = new Date();
        const datetime = currentdate.toLocaleString();
        personVinculatedToUser.created_date = datetime
        const newUserCreated = await this.postUserService.create(newUser, personVinculatedToUser)
        if (newUserCreated == false) {
            throw new HttpException({
                error:"Um User com esse username já existe",
                status:HttpStatus.NOT_FOUND,
            },HttpStatus.NOT_FOUND,)
        }
        return newUserCreated
    }
}
