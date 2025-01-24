"use client";

import React from 'react'
import AuthForm from '@/components/AuthForm'
import { registerSchema } from '@/lib/validations'

const Page = () => (
  <AuthForm 
    type="REGISTER"
    schema={registerSchema}
    defaultsValues={{
      idApoderado: '', // rut
      correoApo: '', // email
      contrasenaApo: '', // password
      nombreApo: '',
      apellidoApo: '',
      telefonoApo: '',
      direccionApo: '',
      tipoApo: '',
    }}
    onSubmit={() => {}}
  />
)

export default Page