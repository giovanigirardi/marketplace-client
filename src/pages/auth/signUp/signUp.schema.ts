import { z } from "zod";

export const signUpSchema = z
  .object({
    profilePicture: z.string().optional(),
    name: z.string().min(3, "O nome deve ter no mínimo 3 caracteres"),
    phone: z.string().min(11, "O telefone deve ter no mínimo 11 caracteres"),
    email: z.string().email("E-mail inválido").min(1, "O e-mail é obrigatório"),
    password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
    confirmPassword: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
  });

export type signUpFormDataType = z.infer<typeof signUpSchema>;
