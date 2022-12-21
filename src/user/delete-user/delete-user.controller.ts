import { Controller, Body, Delete,  } from "@nestjs/common";
import { DeleteUserService } from "./delete-user.service";

@Controller('/users')
export class DeleteUserController {
    constructor(private readonly DeleteUserService : DeleteUserService) { }

    @Delete('/delete')
    async deleteUser (
        @Body("id")recivedId
    ) {

        const newUserCreated = this.DeleteUserService.delete(recivedId)
        return
    }
}