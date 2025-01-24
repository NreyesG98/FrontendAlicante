"use client";

import React from 'react'
import AuthForm from '@/components/AuthForm'
import { loginSchema } from '@/lib/validations'

const Page = () =>  (
  <AuthForm 
    type="LOGIN"
    schema={loginSchema}
    defaultsValues={{
      correoApo: '', // email
      contrasenaApo: '', // password
    }}
    onSubmit={() => {}}
  />
)

export default Page