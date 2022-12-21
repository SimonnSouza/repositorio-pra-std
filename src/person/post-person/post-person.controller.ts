import { Controller, Body, Post, } from "@nestjs/common";
import { PersonEntity } from "src/entities/Person_entity";
import { PostPersonService } from "./post-person.service";
import { HttpException, HttpStatus } from "@nestjs/common";

@Controller('/persons')
export class PostPersonController {
    constructor(private readonly PostPersonService: PostPersonService) { }

    @Post('/create')
    async PostPerson(
        @Body("name") recivedBody2: string,
        @Body("birthdate") recivedBody3: string,
        @Body("phone") recivedBody4: string,
        @Body("adress_neighborhood") recivedBody5: string,
        @Body("adress_street") recivedBody6: string,
        @Body("adress_zipCode") recivedBody7: string,
        @Body("adress_number") recivedBody8: number,
        @Body("adress_complement") recivedBody9: string,

        newPerson: PersonEntity = {
            family_id: "none yet",
            name: recivedBody2,
            birthdate: recivedBody3,
            phone: recivedBody4,
            adress_neighborhood: recivedBody5,
            adress_street: recivedBody6,
            adress_zipCode: recivedBody7,
            adress_number: recivedBody8,
            adress_complement: recivedBody9,
            created_date: "toDefine",
            update_date: "none yet"
        },


    ) {
        const currentdate = new Date();
        const datetime = currentdate.toLocaleString();
        newPerson.created_date = datetime
        const newPersonCreated = await this.PostPersonService.post(newPerson)

        if (newPersonCreated == false) {
            throw new HttpException({
                error: "Uma pessoa com esse número de telefone já existe",
                status: HttpStatus.NOT_FOUND,
            }, HttpStatus.NOT_FOUND,)
        }
        return newPersonCreated
    }



}