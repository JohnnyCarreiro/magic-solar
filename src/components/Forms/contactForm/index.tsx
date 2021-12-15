import { Dispatch, SetStateAction, useCallback, useRef, useState } from 'react'
import { FaEnvelope, FaScroll, FaUser, FaWhatsapp } from 'react-icons/fa'
import * as Yup from 'yup'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import axios from 'axios'
import { useRouter } from 'next/router'

import { TextArea } from '@/components/Forms/TextArea'
import { Input } from '@/components/Forms/Input'
import Button  from '@/components/Forms/Button'
import getValidationErrors from 'utils/getValidationErrors'



import {
  FormTitle,
  MessageField,
  ModalBackground,
  RegistrationContacts,
  RegistrationInputs,
  RegistrationName
} from './styles'

import { useToast } from '@/Hooks/Toast'

interface RequestFormModalProps {
  closeModal?: Dispatch<SetStateAction<boolean>>
  title?: string
  informations?: string
  isPackage?: boolean
  requestSource?: string
  reservation?: string
}

interface RequestFormData {
  name: string
  surname: string
  email:string
  phone:string
  observations:string
  requestSource: string
}

export const ContactForm: React.FC<RequestFormModalProps> = ({ closeModal, title, isPackage, requestSource, reservation }) => {
  const formRef = useRef<FormHandles>(null)
  const history = useRouter()

  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [observations, setObservations] = useState('')

  const { addToast } = useToast()

  const handleSubmit = useCallback( async (data: RequestFormData) =>{
  // const { addToast } = useToast()
    try {
      formRef.current?.setErrors({})

      const schema = Yup.object().shape({
        name:Yup.string()
          .min(3, String('O Nome deve ter mais que 3 caracteres.'))
          .required(String('Nome obrigatório')),
        surname:Yup.string()
          .min(3, String('O Sobrenome deve ter mais que 3 caracteres.'))
          .required(String('Sobrenome obrigatório')),
        email:Yup.string()
          .required(String('E-mail obrigatório'))
          .email(String('Insira um e-mail válido')),
        phone:Yup.string()
          .required(String('Telefone obrigatório')),
        observations:Yup.string()
          .required(String('Messagem obrigatório')),

      })
      await schema.validate(data, {
        abortEarly:false
      })
      const newData = {...data, destination:title, requestSource}

      addToast({
        type:'info',
        title:'Aguarde! 🤩 ',
        description: ' 📦 estamos enviando sua mensagem '
      })

      const response = await axios.post('/api/submit', newData)
      if(response.status === 200 ){
        setName('')
        setSurname('')
        setEmail('')
        setPhone('')
        // history.push('/')
        addToast({
          type:'success',
          title:'Uhull!! 🛫',
          description: ' 🤗 Aguarde que entraremos em contato'
        })
      }

    } catch (err){
      if(err instanceof Yup.ValidationError){
        const errors = getValidationErrors(err)
        formRef.current?.setErrors(errors)

        return
      }
      addToast({
        type:'error',
        title: ' 😱 Não foi possível enviar sua mensagem',
        description: 'Verifique seu e-mail ou tente mais tarde'
      })
    }
  },[addToast])

  return (
    <ModalBackground >
        <Form ref={formRef} onSubmit={handleSubmit} >
          <FormTitle>Solicite uma visita ou tire suas dúvidas com um de nosos consultores</FormTitle>
          <RegistrationInputs>
            <RegistrationName>
              <Input
                name="name"
                type="text"
                icon={FaUser}
                label={"Nome"}
                placeholder={"Nome"}
                onChange={(event:React.ChangeEvent<HTMLInputElement>) => {setName(event.target.value)}}
                value={name}
              />
              <Input
                name="surname"
                type="text"
                icon={FaUser}
                label={"Sobrenome"}
                placeholder={"Sobrenome"}
                onChange={(event:React.ChangeEvent<HTMLInputElement>) => {setSurname(event.target.value)}}
                value={surname}
              />
            </RegistrationName>
            <RegistrationContacts>
              <Input
                name="phone"
                type="text"
                icon={FaWhatsapp}
                label={"Telefone"}
                placeholder={"Telefone"}
                onChange={(event:React.ChangeEvent<HTMLInputElement>) => {setPhone(event.target.value)}}
                value={phone}
              />
              <Input
                name="email"
                type="text"
                icon={FaEnvelope}
                label={"E-mail"}
                placeholder={"E-mail"}
                onChange={(event:React.ChangeEvent<HTMLInputElement>) => {setEmail(event.target.value)}}
                value={email}
              />
            </RegistrationContacts>
            <MessageField>
              <TextArea
                name="observations"
                type="text"
                icon={FaScroll}
                label={"Message"}
                placeholder={"Descreva quais experiências você gostaria de incluir no seu pacote"}
                onChange={(event:React.ChangeEvent<HTMLInputElement>) => {setObservations(event.target.value)}}
                value={observations}
              />
            </MessageField>
          </RegistrationInputs>
          <Button text="Solicitar" isPrimary primaryColor type="submit" />
        </Form>
      </ModalBackground>
  )
}
