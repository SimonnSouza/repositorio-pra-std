import { Controller, Body, Delete,  } from "@nestjs/common";
import { DeletePersonService } from "./delete-person.service";

@Controller('/persons')
export class DeletePersonController {
    constructor(private readonly deletePersonService : DeletePersonService) { }

    @Delete('/delete')
    async deletePerson (
        @Body("id")recivedId
    ) {

        const newPersonCreated = this.deletePersonService.delete(recivedId)
        return
    }
}