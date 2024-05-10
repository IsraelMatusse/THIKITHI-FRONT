import { Image } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "../../@/components/ui/button";
import { Input } from "../../@/components/ui/input";
import { FcGoogle } from "react-icons/fc";

import { Label } from "../../@/components/ui/label";
import "tailwindcss/tailwind.css";
import { SVGProps } from "react";

export function Login() {
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
                <form action="">
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
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Input
                      className="mt-2 mb-4 border border-gray-300 rounded-full px-4 py-2 focus:border-indigo-600 focus:outline-none"
                      type="password"
                      id="password"
                      placeholder="Password"
                    />
                  </div>
                  <Link to={"/"}>
                    <Button
                      type="submit"
                      className="w-full mt-6 bg-indigo-600 rounded-full hover:bg-indigo-700 text-white"
                    >
                      Login
                    </Button>
                  </Link>
                </form>
              </div>
              <div className="mt-4 text-center text-sm">
                Não possui conta?&nbsp;
                <Link to={"/signup"} className="underline">
                  Regista-se
                </Link>
                <p className="mt-4 text-xs text-gray-500 dark:text-gray-300">
                  © 2024 THIKITHI. Todos direitos reservados.
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
function TicketIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M13 5v2" />
      <path d="M13 17v2" />
      <path d="M13 11v2" />
    </svg>
  );
}
