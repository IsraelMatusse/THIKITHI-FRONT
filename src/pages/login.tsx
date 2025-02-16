import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../@/components/ui/button";
import { Input } from "../../@/components/ui/input";
import { FcGoogle } from "react-icons/fc";
import "tailwindcss/tailwind.css";
import * as Yup from "yup";
import { useFormik } from "formik";
import { POST } from "../client/http-client";
import { API_ENDPOINTS } from "../client/Endpoints";
import {
  error_client_side,
  error_server_side,
  success_server_side,
} from "../util/Notifications";
import { ErrorHandle } from "../util/ErrorHandle";
import { setAuthCredentials } from "../util/authUtils";
import { atom, useAtom } from "jotai";

export const userLogged = atom(0);

export function Login() {
  const [isUserLogged, setIsUserLogged] = useAtom(userLogged);

  const navigate = useNavigate();
  const loginSchema = Yup.object().shape({
    email: Yup.string().email("Email inválido").required("Email obrigatório"),
    password: Yup.string().required("Senha obrigatória"),
  });

  const loginAdd = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values, { setSubmitting }) => {
      login(values, setSubmitting);
    },
  });

  const login = (values: any, setSubmitting: any) => {
    POST(API_ENDPOINTS.AUTH.LOGIN, values, false)
      .then((res) => {
        success_server_side("Login feito com sucesso");
        setSubmitting(false);
        const token: string = res.data.data.acessToken;
        localStorage.setItem("token", token);
        setAuthCredentials(token);
        setIsUserLogged(isUserLogged + 1);
        navigate("/home");
      })
      .catch((err) => {
        const errorType = ErrorHandle(err);
        if (errorType === "error_client_side") {
          error_client_side(err.response.data.message);
        } else if (errorType === "error_server_side") {
          error_server_side("Estamos a enfrentar um erro. Tente mais tarde");
        }

        setSubmitting(false);
      });
  };

  return (
    <>
      <main>
        <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px] bg-[#f9fcfe]">
          <div className="flex items-center justify-center py-12">
            <div className="mx-auto grid w-[350px] gap-6">
              <div className="grid gap-2 text-center">
                <h1 className="text-3xl font-bold">Login</h1>
              </div>
              <div className="grid gap-4">
                <form onSubmit={loginAdd.handleSubmit}>
                  <Button
                    className="flex items-center w-full gap-4 px-12 mb-4 bg-transparent rounded-full"
                    variant="outline"
                  >
                    <FcGoogle size="25" />
                    Faça Login com Google
                  </Button>
                  <div className="grid gap-2">
                    <Input
                      className="mt-2 mb-4 border border-gray-300 rounded-full px-4 py-2 focus:border-indigo-600 focus:outline-none"
                      type="email"
                      onChange={loginAdd.handleChange}
                      onBlur={loginAdd.handleBlur}
                      value={loginAdd.values.email}
                      required
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Input
                      className="mt-2 mb-4 border border-gray-300 rounded-full px-4 py-2 focus:border-indigo-600 focus:outline-none"
                      type="password"
                      onChange={loginAdd.handleChange}
                      onBlur={loginAdd.handleBlur}
                      value={loginAdd.values.password}
                      required
                      id="password"
                      placeholder="Password"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full mt-6 bg-indigo-600 rounded-full hover:bg-indigo-700 text-white"
                  >
                    Login
                  </Button>
                </form>
              </div>
              <div className="mt-4 text-center text-sm">
                Não possui conta?&nbsp;
                <Link to={"/signup"} className="underline">
                  Regista-se
                </Link>
                <p className="mt-4 text-xs text-gray-500 dark:text-gray-300">
                  ©2025 THIKITHI. Todos direitos reservados.
                </p>
              </div>
            </div>
          </div>

          <div className="hidden bg-muted lg:block">
            <img
              src="./ticket.jpg"
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
