import { NextApiRequest, NextApiResponse } from "next";
import { CreateContactUseCase } from "./createRequestContactUseCase";

export class CreateRequestContactController{
    constructor(
        private createContactUseCase: CreateContactUseCase
    ){}
    async handle(request:NextApiRequest, _:NextApiResponse):Promise<void>{
        const { name, email, phone, subject, message } = request.body

        try{
            await this.createContactUseCase.execute({ name, email, phone, subject, message})
        }catch(err: any){
             throw new Error(err.message)
        }
    }
}
