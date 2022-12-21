import { Controller, Get  } from "@nestjs/common";
import { GetAllUserService } from "./find-all-users.service";

@Controller('/users')
export class GetAllUserController {
    constructor(private readonly GetAllUserService : GetAllUserService) { }

    @Get('/')
    async findAllUser (){
        
        const userSearch = await this.GetAllUserService.findAll()
        
        return userSearch
        }
    }
