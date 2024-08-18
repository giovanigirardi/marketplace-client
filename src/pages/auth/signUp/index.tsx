import { zodResolver } from "@hookform/resolvers/zod";
import { KeyRound, Mail, Phone, User } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { ImageUpload } from "@/components/imageUpload";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { InputContainer } from "@/components/ui/inputContainer";

import { FORM_DEFAULT_VALUES } from "./signUp.constants";
import { signUpFormDataType, signUpSchema } from "./signUp.schema";

export function SignUp() {
  const form = useForm<signUpFormDataType>({
    defaultValues: FORM_DEFAULT_VALUES,
    resolver: zodResolver(signUpSchema),
  });

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = form;

  const handleSignUp = async (data: signUpFormDataType) => {
    console.log(data);
  };

  return (
    <div className="flex h-full flex-col">
      <Helmet title="Sign Up" />
      <h1 className="mb-2 font-dm-sans text-2xl/tight font-bold text-gray-500">Crie sua conta</h1>
      <p className="mb-10 font-poppins text-sm/tight text-gray-300">informe os seus dados pessoais e de acesso</p>

      <Form {...form}>
        <form onSubmit={handleSubmit(handleSignUp)} className="flex flex-col gap-12">
          <div className="flex flex-col gap-5">
            <h2 className="font-dm-sans text-lg/tight font-bold text-gray-500">Perfil</h2>
            <FormField
              control={control}
              name="profilePicture"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <ImageUpload {...field} />
                  </FormControl>
                  <FormDescription>
                    {field.value
                      ? "Clique na imagem para alterar"
                      : "Clique na imagem para adicionar uma foto de perfil"}
                  </FormDescription>
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="name">Nome</FormLabel>
                  <FormControl>
                    <InputContainer leftIcon={<User />} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="phone">Telefone</FormLabel>
                  <FormControl>
                    <InputContainer leftIcon={<Phone />} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex flex-col gap-5">
            <h2 className="font-dm-sans text-lg/tight font-bold text-gray-500">Acesso</h2>
            <FormField
              control={control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="email">E-mail</FormLabel>
                  <FormControl>
                    <InputContainer leftIcon={<Mail />} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="password">Senha</FormLabel>
                  <FormControl>
                    <InputContainer leftIcon={<KeyRound />} type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="confirmPassword">Confirme a senha</FormLabel>
                  <FormControl>
                    <InputContainer leftIcon={<KeyRound />} type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" className="w-full">
            Cadastrar
          </Button>
        </form>

        <p className="mb-5 mt-20 mt-auto font-poppins text-base/tight text-gray-300">Já tem uma conta?</p>
        <Link to="/sign-in">
          <Button variant="outline" className="mb-[72px] w-full" disabled={isSubmitting}>
            Acessar
          </Button>
        </Link>
      </Form>
    </div>
  );
}
