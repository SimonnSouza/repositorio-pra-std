import { Controller, Body, Get, HttpException, HttpStatus,  } from "@nestjs/common";
import { GetPersonService } from "./find-one-person.service";

@Controller('/persons')
export class GetPersonController {
    constructor(private readonly GetPersonService : GetPersonService) { }

    @Get('/findOne')
    async findOnePerson (
        @Body("id")recivedId:string
    ){
        
        const personSearch = await this.GetPersonService.findOne(recivedId)
        
        if (personSearch == false) {
            throw new HttpException({
                error:"Uma pessoa com esse ID não foi encontrada",
                status:HttpStatus.NOT_FOUND,
            },HttpStatus.NOT_FOUND,)

        }
        return personSearch
    }
}