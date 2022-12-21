import { Controller, Body, Get, HttpException, HttpStatus,  } from "@nestjs/common";
import { GetUserService } from "./find-one-user.service";

@Controller('/users')
export class GetUserController {
    constructor(private readonly GetUserService : GetUserService) { }

    @Get('/findOne')
    async findOneUser (
        @Body("id")recivedId:string
    ){
        
        const userSearch = await this.GetUserService.findOne(recivedId)
        
        if (userSearch == false) {
            throw new HttpException({
                error:"Um User com esse ID não foi encontrado",
                status:HttpStatus.NOT_FOUND,
            },HttpStatus.NOT_FOUND,)

        }
        return userSearch
    }
}