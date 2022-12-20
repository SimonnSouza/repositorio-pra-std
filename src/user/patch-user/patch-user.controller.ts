import { Controller, Body, Patch,  } from "@nestjs/common";
import { UserEntity } from "src/entities/User_entity";
import { PatchUserService } from "./patch-user.service";
@Controller('/Users')
export class PatchUserController {
    constructor(private readonly patchUserService : PatchUserService) { }

    @Patch('/fix')
    async patchUser (
        
        @Body("id")recivedId,
        @Body("username")recivedBody1,
        @Body("password")recivedBody2,

        patchUser:UserEntity = {
            username:recivedBody1,
            password:recivedBody2
        }
        
    ) {
        const newUserCreated = await this.patchUserService.patch(recivedId,patchUser)
        return newUserCreated
    }
}