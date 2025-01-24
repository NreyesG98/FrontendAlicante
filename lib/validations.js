import { z } from 'zod';

export const registerSchema = z.object({
  // idApoderado: z.string().min(10),
  // idApoderado: z.coerce().number(),
  idApoderado: z.preprocess((val) => Number(val), z.number().nonnegative({
    message: "Rut invalido!",
  })),
  nombreApo: z.string().min(2),
  apellidoApo: z.string().min(2),
  telefonoApo: z.string(),
  correoApo: z.string({
    required_error: "Seleccione un correo electrónico para mostrar.",
  }).email(),
  contrasenaApo: z.string().min(6),
  direccionApo: z.string(),
  tipoApo: z.string(),
});


export const loginSchema = z.object({
  correoApo: z.string().email(),
  contrasenaApo: z.string().min(6),
});