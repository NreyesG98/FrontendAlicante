"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { 
  DefaultValues,
  useForm, 
  UseFormReturn 
} from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from "next/link";
import { FIELD_NAMES, FIELD_TYPES } from "@/constants";

// interface Props<T extends FieldValues> {
//   schema: ZodType<T>;
//   defaultValues: T;
//   onSubmit: (data: T) => Promise<{ success: boolean; error?: string }>;
//   type: "SIGN_IN" | "SIGN_UP";
// }

const AuthForm = ({ type, schema, defaultValues = {}, onSubmit }) => {
  const isLogged = type === "LOGIN";
  
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: defaultValues,
  })
 
  const handleSubmit = async (data) => {

    console.log(data)
  }

  // <div>AuthForm -- {type} </div>
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold text-white">
        {isLogged ? "Bienvenido a Colegio Alicante" : "Cree una cuenta"}
      </h1>
      <p className="text-light-100">
        {isLogged
          ? "Acceda a la amplia seleccion de recursos y manténgase actualizado"
          : "Complete todos los campos y cargue una identificación válida para obtener acceso."}
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          
        {Object.keys(defaultValues).map((field) => (
            <FormField
              key={field}
              control={form.control}
              name={field}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="capitalize">
                    {FIELD_NAMES[field.name]}
                  </FormLabel>
                  <FormControl>
                    {field.name === "nombreApo" ? (
                      <FileUpload
                        type="image"
                        accept="image/*"
                        placeholder="Upload your ID"
                        folder="ids"
                        variant="dark"
                        onFileChange={field.onChange}
                      />
                    ) : (
                      <Input
                        required
                        type={
                          FIELD_TYPES[field.name]
                        }
                        {...field}
                        className="form-input"
                      />
                    )}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          <Button type="submit" className="form-btn">
            {isLogged ? "Login" : "Register"}
          </Button>
        </form>
      </Form>

      <p className="text-center text-base font-medium">
        {isLogged ? "Nuevo en Colegio Alicante ? " : "¿Ya tienes una cuenta? "}

        <Link
          href={isLogged ? "/register" : "/login"}
          className="font-bold text-primary"
        >
          {isLogged ? "Crear una cuenta" : "Iniciar sesión"}
        </Link>
      </p>
    </div>
  )
}

export default AuthForm