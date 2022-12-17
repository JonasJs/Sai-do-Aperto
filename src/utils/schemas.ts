import * as Yup from "yup";
import { validatePhone } from "validations-br";

export const SCHEMA_SIGNIN = Yup.object().shape({
  email: Yup.string()
    .email('O campo deve conter um email válido')
    .required('E-mail Obrigatório!'),
  password: Yup.string()
    .min(6, 'Complete sua senha!')
    .required('Senha Obrigatório!'),
  });

  export const SCHEMA_SIGN_UP = Yup.object().shape({
    phone: Yup.string().required("Campo Obrigatório!").test(
      "is-phone",
      "Celular Inválido!",
      (value = "") => validatePhone(value)
    ),
    email: Yup.string().required("Campo Obrigatório!").email("E-mail inválido!"),
    name: Yup.string().required("Campo Obrigatório!"),
    password: Yup.string().min(6, "A senha deve conter pelo menos 6 caracteres.").required("Campo Obrigatório!"),
    confirmPassword: Yup.string().required("Campo Obrigatório!")
      .oneOf([Yup.ref('password'), null], 'As senhas não correspondem!'),
  });