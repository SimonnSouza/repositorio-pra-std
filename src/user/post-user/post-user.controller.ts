import { Controller, Body, Post,  } from "@nestjs/common";
import { UserEntity } from "src/entities/user_entity";
import { PostUserService } from "./post-user.service";

@Controller('/users')
export class PostUserController {
    constructor(private readonly postUserService : PostUserService) { }

    @Post('/create')
    async createNewUser (
        @Body("username") recivedUsername:string,
        @Body("password") recivedPassword:string,

        newUser:UserEntity = {
            username:recivedUsername,
            password:recivedPassword
        }
    ) {
        const newUserCreated = await this.postUserService.create(newUser)
        return newUserCreated
    }
}
