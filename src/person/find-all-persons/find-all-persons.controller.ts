import { Controller, Get  } from "@nestjs/common";
import { GetAllPersonsService } from "./find-all-persons.service";

@Controller('/persons')
export class GetAllPersonsController {
    constructor(private readonly getAllPersonsService : GetAllPersonsService) { }

    @Get('/')
    async findAllPerson (){
        
        const personSearch = await this.getAllPersonsService.findAll()
        
        return personSearch
        }
    }
