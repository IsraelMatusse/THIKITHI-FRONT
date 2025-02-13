import "tailwindcss/tailwind.css";
import { useFormik } from "formik";
import { POST } from "../client/http-client";
import { API_ENDPOINTS } from "../client/Endpoints";
import {
  error_client_side,
  error_server_side,
  success_server_side,
} from "../util/Notifications";
import { Link, useNavigate } from "react-router-dom";
import { ErrorHandle } from "../util/ErrorHandle";
import { Input } from "../../@/components/ui/input";
import { Button } from "../../@/components/ui/button";
import * as Yup from "yup";

export function SignUp() {
  const navigate = useNavigate();

  const customerAddSchema = Yup.object().shape({
    name: Yup.string().required("O nome do cliente não pode ser nulo!"),
    residence: Yup.string().required("A residencia não pode ser nula!"),
    email: Yup.string().required("O email não pode ser nulo!"),
    password: Yup.string().required("A sua senha não pode ser nula"),
    msisdn: Yup.string()
      .required("O contacto é obrigatório! ")
      .min(9, "O contacto deve ter 9 dígitos")
      .max(9, "O contacto deve ter 9 dígitos"),
  });
  const customerAdd = useFormik({
    initialValues: {
      name: "",
      residence: "",
      email: "",
      password: "",
      msisdn: "",
    },
    validationSchema: customerAddSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      createCustomer(values, setSubmitting, resetForm);
    },
  });

  const createCustomer = (
    values: any,
    setIsSubmitting: any,
    resetForm: any
  ) => {
    POST(API_ENDPOINTS.CUSTOMER.CREATE_CUSTOMER, values, false)
      .then(() => {
        success_server_side("Usuário adicionado com sucesso");
        setIsSubmitting(false);
        resetForm();
        navigate("/login");
      })

      .catch((err) => {
        const errorType = ErrorHandle(err);
        if (errorType === "error_client_side") {
          error_client_side(err.response.data.message);
        } else if (errorType === "error_server_side") {
          error_server_side("Estamos a enfrentar um erro. Tente mais tarde");
        } else {
          console.error("Erro desconhecido:", err);
        }
        setIsSubmitting(false);
      });
  };

  return (
    <>
      <main>
        <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px] bg-[#f9fcfe]">
          <div className="flex items-center justify-center py-12">
            <div className="mx-auto grid w-[350px] gap-6">
              <div className="grid gap-2 text-center">
                <h1 className="text-3xl font-bold">Sign Up</h1>
              </div>
              <div className="grid gap-4">
                <form
                  autoComplete="off"
                  onSubmit={customerAdd.handleSubmit}
                  className="flex w-full flex-col gap-5"
                >
                  <div className="grid gap-2">
                    <Input
                      className="mt-2 mb-4 border border-gray-300 rounded-full px-4 py-2 focus:border-indigo-600 focus:outline-none"
                      onChange={customerAdd.handleChange}
                      onBlur={customerAdd.handleBlur}
                      value={customerAdd.values.email}
                      required
                      name="email"
                      type="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Input
                      className="mt-2 mb-4 border border-gray-300 rounded-full px-4 py-2 focus:border-indigo-600 focus:outline-none"
                      onChange={customerAdd.handleChange}
                      onBlur={customerAdd.handleBlur}
                      value={customerAdd.values.name}
                      required
                      name="name"
                      type="text"
                      id="name"
                      placeholder="Nome"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Input
                      className="mt-2 mb-4 border border-gray-300 rounded-full px-4 py-2 focus:border-indigo-600 focus:outline-none"
                      onChange={customerAdd.handleChange}
                      onBlur={customerAdd.handleBlur}
                      name="msisdn"
                      size={9}
                      required
                      value={customerAdd.values.msisdn}
                      type="text"
                      id="msisdn"
                      placeholder="Contacto"
                    />
                  </div>
                  <div>
                    <Input
                      className="mt-2 mb-4 border border-gray-300 rounded-full px-4 py-2 focus:border-indigo-600 focus:outline-none"
                      type="text"
                      onChange={customerAdd.handleChange}
                      onBlur={customerAdd.handleBlur}
                      required
                      name="residence"
                      value={customerAdd.values.residence}
                      id="residence"
                      placeholder="Residência"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Input
                      className="mt-2 mb-4 border border-gray-300 rounded-full px-4 py-2 focus:border-indigo-600 focus:outline-none"
                      type="password"
                      onChange={customerAdd.handleChange}
                      onBlur={customerAdd.handleBlur}
                      required
                      name="password"
                      value={customerAdd.values.password}
                      id="password"
                      placeholder="Password"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full mt-6 bg-indigo-600 rounded-full hover:bg-indigo-700 text-white"
                  >
                    Cadastrar Conta
                  </Button>
                </form>
              </div>
              <div className="mt-4 text-center text-sm">
                Já possui conta?&nbsp;
                <Link to={"/login"} className="underline">
                  Faça Login
                </Link>
                <p className="mt-4 text-xs text-gray-500 dark:text-gray-300">
                  © 2025 THIKITHI. Todos direitos reservados.
                </p>
              </div>
            </div>
          </div>

          <div className="hidden bg-muted lg:block">
            <img
              src="/src/assets/ticket.jpg"
              alt="Image"
              width="1920"
              height="1080"
              className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </div>
      </main>
    </>
  );
}
