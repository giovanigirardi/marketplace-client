import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email("E-mail inválido").min(1, "Campo obrigatório"),
  password: z.string().min(1, "Campo obrigatório"),
});

export type SignInFormDataType = z.infer<typeof signInSchema>;
