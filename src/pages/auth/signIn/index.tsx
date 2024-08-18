import { zodResolver } from "@hookform/resolvers/zod";
import { KeyRound, Mail } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { InputContainer } from "@/components/ui/inputContainer";

import { FORM_DEFAULT_VALUES } from "./signIn.constants";
import { SignInFormDataType, signInSchema } from "./signIn.schema";

export function SignIn() {
  const form = useForm<SignInFormDataType>({
    defaultValues: FORM_DEFAULT_VALUES,
    resolver: zodResolver(signInSchema),
  });

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = form;

  const handleSignIn = async (data: SignInFormDataType) => {
    console.log(data);
  };

  return (
    <div className="flex h-full flex-col">
      <Helmet title="Sign In" />

      <h1 className="mb-2 font-dm-sans text-2xl/tight font-bold text-gray-500">Acesse sua conta</h1>
      <p className="mb-12 font-poppins text-sm/tight text-gray-300">Informe seu e-mail e senha para entrar</p>

      <Form {...form}>
        <form onSubmit={handleSubmit(handleSignIn)}>
          <FormField
            control={control}
            name="email"
            render={({ field }) => (
              <FormItem className="mb-5">
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
              <FormItem className="mb-12">
                <FormLabel htmlFor="password">senha</FormLabel>
                <FormControl>
                  <InputContainer leftIcon={<KeyRound />} type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            Acessar
          </Button>
        </form>
      </Form>

      <p className="mb-5 mt-auto font-poppins text-base/tight text-gray-300">Ainda não tem uma conta?</p>

      <Link to="/sign-up">
        <Button variant="outline" className="w-full">
          Cadastrar
        </Button>
      </Link>
    </div>
  );
}
