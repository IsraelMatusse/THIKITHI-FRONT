/**
 * v0 by Vercel.
 * @see https://v0.dev/t/LmXEpp5y5kT
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "../../@/components/ui/card";
import { Label } from "../../@/components/ui/label";
import { Input } from "../../@/components/ui/input";
import { Button } from "../../@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import "tailwindcss/tailwind.css";

export default function Home() {
  return (
    <main className="bg-[#26313c] h-screen flex items-center justify-center p-10">
      <div className="grid w-full h-full grid-cols-1 bg-white box-anim md:grid-cols-2">
        <div className="bg-[#16202a] text-white flex items-center justify-center flex-col p-6">
          <div className="my-4">
            <h1 className="text-3xl font-semibold">Login</h1>
            <p className="mt-2 text-xs text-slate-400">
              See Your Growth and get consulting growth
            </p>
          </div>
          <form>
            <Button
              className="flex items-center w-full gap-4 px-12 mb-4 bg-transparent rounded-full"
              variant="outline"
            >
              <FcGoogle size="25" />
              Sign In With Google
            </Button>
            <Label htmlFor="email">Email*</Label>
            <Input
              className="mt-2 mb-4 border border-gray-300 rounded-full px-4 py-2 focus:border-indigo-600 focus:outline-none"
              type="email"
              id="email"
              placeholder="Email"
            />
            <Label htmlFor="password">Password*</Label>
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

            <a className="mt-4 text-xs text-slate-200">Create account</a>
          </form>
          <p className="mt-4 text-xs text-slate-200">
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
