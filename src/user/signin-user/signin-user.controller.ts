import { Controller, Body, Get, HttpException, HttpStatus, } from "@nestjs/common";
import { SignInUserService } from "./signin-user.use-case";
@Controller('/users')
export class SignInUserController {
    constructor(private readonly signUpService: SignInUserService) { }

    @Get('/signin')
    async signUp(
        @Body("username") recivedUsername: string,
        @Body("password") recivedPassword: string,

    ) {
        const newUserCreated = await this.signUpService.signin(recivedUsername, recivedPassword)
        if (newUserCreated == false) {
            throw new HttpException({
                error: "Um User com essas características não foi encontrado",
                status: HttpStatus.NOT_FOUND,
            }, HttpStatus.NOT_FOUND,)
        }
        const accessToken = generateAcessToken({recivedUsername} )
        const refreshToken = generateRefreshToken({recivedUsername })
        return {"accessToken":accessToken,"refreshToken":refreshToken, "linkedTo":newUserCreated.linkedTo}
    }

}


const jwtKey = require("jsonwebtoken")

let refreshTokens = []

function generateRefreshToken(user) {
    const refreshToken = jwtKey.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "20m" })
    refreshTokens.push(refreshToken)
    return refreshToken
}
function generateAcessToken(user) {
    const token = jwtKey.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15m" })
    
    return token
}