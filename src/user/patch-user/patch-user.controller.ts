import { Controller, Body, Patch,  } from "@nestjs/common";
import { UserEntity } from "src/entities/user_entity";
import { PatchUserService } from "./patch-user.service";
@Controller('/users')
export class PatchUserController {
    constructor(private readonly patchUserService : PatchUserService) { }

    @Patch('/fix')
    async patchUser (

        @Body("id")recivedId,
        @Body("username")recivedBody1,
        @Body("password")recivedBody2,

        patchUser:UserEntity = {
            username:recivedBody1,
            password:recivedBody2,
            linkedTo:"willStayTheSame"
        }
        
    ) {

        const newUserCreated = await this.patchUserService.patch(recivedId,patchUser)
        return newUserCreated
    }
}