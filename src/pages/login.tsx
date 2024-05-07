/**
 * v0 by Vercel.
 * @see https://v0.dev/t/LmXEpp5y5kT
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { Label } from "../../@/components/ui/label";
import { Input } from "../../@/components/ui/input";
import { Button } from "../../@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import "tailwindcss/tailwind.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="bg-[#f9fcfe] h-screen flex items-center justify-center p-10">
      <div className="grid w-full h-full grid-cols-1 bg-[#16202a]e box-anim md:grid-cols-2">
        <div className=" text-black flex items-center justify-center flex-col p-6">
          <div className="my-4">
            <h1 className="text-3xl font-semibold text-indigo-600">Login</h1>
          </div>
          <form>
            <Button
              className="flex items-center w-full gap-4 px-12 mb-4 bg-transparent rounded-full"
              variant="outline"
            >
              <FcGoogle size="25" />
              Sign In With Google
            </Button>
            <Input
              className="mt-2 mb-4 border border-gray-300 rounded-full px-4 py-2 focus:border-indigo-600 focus:outline-none"
              type="email"
              id="email"
              placeholder="Email"
            />
            <Input
              className="mt-2 border border-gray-300 rounded-full px-4 py-2 focus:border-indigo-600 focus:outline-none"
              type="password"
              id="password"
              placeholder="Password"
            />
            <Button
              type="submit"
              className="w-full mt-6 bg-indigo-600 rounded-full hover:bg-indigo-700"
            >
              Login
            </Button>

            <p className="text-sm text-gray-500 dark:text-gray-300 flex items-center w-full">
              Não possui conta?&nbsp;
              <Link
                className="text-primary-600 dark:text-primary-300"
                to={"/signup"}
              >
                Regista-se
              </Link>
            </p>
          </form>
          <p className="mt-4 text-xs text-gray-500 dark:text-gray-300">
            @2024 All rights reserved
          </p>
        </div>
        <div className="relative hidden md:block w-full h-full">
          <img
            src="src/assets/ticket.jpg"
            alt="login"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </main>
  );
}
