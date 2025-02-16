import { Link } from "react-router-dom";
import { Button } from "../../../@/components/ui/button";
import { Input } from "../../../@/components/ui/input";
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "../../../@/components/ui/dropdown-menu";
import { Label } from "../../../@/components/ui/label";
import { Textarea } from "../../../@/components/ui/textarea";
import {
  CardTitle,
  CardHeader,
  CardContent,
  Card,
} from "../../../@/components/ui/card";
import { SVGProps } from "react";
import { JSX } from "react/jsx-runtime";
import SideBar from "../../components/SideBar";

export default function CreateEvent() {
  return (
    <div className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
      <SideBar />
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <Link className="lg:hidden" to="#">
            <TicketIcon className="h-6 w-6" />
            <span className="sr-only">Home</span>
          </Link>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  className="mt-2 border border-indigo-600  rounded-full px-10 py-2 focus:border-indigo-600 focus:outline-none pl-8 md:w-2/3 lg:w-1/3 "
                  placeholder="Search events, promotions, customers..."
                  type="search"
                />
              </div>
            </form>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
                size="icon"
                variant="ghost"
              >
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="./login-icon.png"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="flex items-center">
            <h1 className="font-semibold text-lg md:text-2xl">
              Cadastrar Evento
            </h1>
            <Link to={"/events"} className="ml-auto justify-end">
              <Button className="bg-indigo-600 text-white rounded-full ">
                Listar eventos
              </Button>
            </Link>
          </div>
          <div className="border shadow-sm rounded-lg p-6">
            <form className="grid gap-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome do evento</Label>
                  <Input id="name" placeholder="Introduza o nome do Evento" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="start-date">Data de inicio</Label>
                  <Input id="start-date" type="date" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="end-date">Data de fim</Label>
                  <Input id="end-date" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="venue">Local do evento</Label>
                  <Input id="venue" placeholder="Introduza o local do Evento" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="flyer">Planfleto do evento</Label>
                <Input id="flyer" type="file" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Descricção do Evento</Label>
                <Textarea
                  id="description"
                  placeholder="Introduza a descricção do Evento"
                />
              </div>
              <div className="space-y-2">
                <Label>Fases do evento</Label>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <CardTitle>Early Bird</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <Label htmlFor="early-bird-start">Data de Inicio</Label>
                        <Input id="early-bird-start" type="date" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="early-bird-end">Data de Fim</Label>
                        <Input id="early-bird-end" type="date" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="early-bird-price">Preço</Label>
                        <Input id="early-bird-price" type="number" />
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>General Admission</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <Label htmlFor="general-start">Data de Inicio</Label>
                        <Input id="general-start" type="date" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="general-end">Data de Fim</Label>
                        <Input id="general-end" type="date" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="general-price">Preço</Label>
                        <Input id="general-price" type="number" />
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>VIP</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <Label htmlFor="vip-start">Data de Inicio</Label>
                        <Input id="vip-start" type="date" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="vip-end">Data de Fim</Label>
                        <Input id="vip-end" type="date" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="vip-price">Preço</Label>
                        <Input id="vip-price" type="number" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className="flex justify-end">
                <Button
                  className="ml-auto bg-indigo-600 text-white rounded-full"
                  type="submit"
                >
                  Adicionar Evento
                </Button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}



function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
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




