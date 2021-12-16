import { NextApiRequest, NextApiResponse } from 'next'
import { createRequestContactController } from '@/services/mailer/useCases/Contacts'

export default async (request:NextApiRequest, response:NextApiResponse) => {

  try {
    await createRequestContactController.handle(request,response)
    return response.status(200).send({ok: true})
  } catch (error: any) {
    return response.status(500).json({error: error.message})
  }

  // try {
  //    await createRequestController.handle(request,response)
  //    response.json({ok: 'mensagem enviada'})
  // } catch (error) {
  //   response.status(500).json({error})
  // }
}
