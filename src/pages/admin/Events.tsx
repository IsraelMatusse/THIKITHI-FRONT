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
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "../../../@/components/ui/table";
import { Badge } from "../../../@/components/ui/badge";
import { SVGProps } from "react";
import { JSX } from "react/jsx-runtime";
import "tailwindcss/tailwind.css";
import SideBar from "../../components/SideBar";
import { PlusCircle } from "lucide-react";

export default function EventsPage() {
  return (
    <>
      <div className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr] ">
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
                Eventos do sistema
              </h1>
              <Link to={"/create-event"} className="ml-auto">
                <Button className="bg-indigo-600 text-white rounded-full  ">
                  <PlusCircle className="h-5 w-5 " />
                  Adicionar Evento
                </Button>
              </Link>
            </div>
            <div className="border  shadow-sm rounded-xl">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Evento</TableHead>
                    <TableHead className="hidden md:table-cell">
                      Data do evento
                    </TableHead>
                    <TableHead className="hidden md:table-cell">
                      Bilhetes vendidos
                    </TableHead>
                    <TableHead className="hidden md:table-cell">
                      Receita
                    </TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead className="text-right">Acções</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-3">
                        <img
                          alt="Event image"
                          className="aspect-square rounded-md object-cover"
                          height="64"
                          src="./conference.jpg"
                          width="64"
                        />
                        <div>
                          <h3 className="font-medium">Music Festival 2023</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Outdoor music event
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      June 15, 2023
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      5,200
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      $250,000
                    </TableCell>
                    <TableCell>
                      <Badge variant="default">Active</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button size="icon" variant="ghost">
                            <MoveHorizontalIcon className="w-4 h-4" />
                            <span className="sr-only">Actions</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View event</DropdownMenuItem>
                          <DropdownMenuItem>Edit event</DropdownMenuItem>
                          <DropdownMenuItem>Manage tickets</DropdownMenuItem>
                          <DropdownMenuItem>Promote event</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-3">
                        <img
                          alt="Event image"
                          className="aspect-square rounded-md object-cover"
                          height="64"
                          src="./Corporate-Events.jpg"
                          width="64"
                        />
                        <div>
                          <h3 className="font-medium">Comedy Show</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Stand-up comedy event
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      July 10, 2023
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      2,800
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      $85,000
                    </TableCell>
                    <TableCell>
                      <Badge variant="default">Active</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button size="icon" variant="ghost">
                            <MoveHorizontalIcon className="w-4 h-4" />
                            <span className="sr-only">Actions</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View event</DropdownMenuItem>
                          <DropdownMenuItem>Edit event</DropdownMenuItem>
                          <DropdownMenuItem>Manage tickets</DropdownMenuItem>
                          <DropdownMenuItem>Promote event</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-3">
                        <img
                          alt="Event image"
                          className="aspect-square rounded-md object-cover"
                          height="64"
                          src="./show.avif"
                          width="64"
                        />
                        <div>
                          <h3 className="font-medium">Tech Conference</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Annual technology conference
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      September 1, 2023
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      8,500
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      $450,000
                    </TableCell>
                    <TableCell>
                      <Badge variant="default">Active</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button size="icon" variant="ghost">
                            <MoveHorizontalIcon className="w-4 h-4" />
                            <span className="sr-only">Actions</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View event</DropdownMenuItem>
                          <DropdownMenuItem>Edit event</DropdownMenuItem>
                          <DropdownMenuItem>Manage tickets</DropdownMenuItem>
                          <DropdownMenuItem>Promote event</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-3">
                        <img
                          alt="Event image"
                          className="aspect-square rounded-md object-cover"
                          height="64"
                          src="./part2.jpg"
                          width="64"
                        />
                        <div>
                          <h3 className="font-medium">Art Exhibition</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Showcase of local artists
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      November 20, 2023
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      1,500
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      $45,000
                    </TableCell>
                    <TableCell>
                      <Badge variant="default">Active</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button size="icon" variant="ghost">
                            <MoveHorizontalIcon className="w-4 h-4" />
                            <span className="sr-only">Actions</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View event</DropdownMenuItem>
                          <DropdownMenuItem>Edit event</DropdownMenuItem>
                          <DropdownMenuItem>Manage tickets</DropdownMenuItem>
                          <DropdownMenuItem>Promote event</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

function MoveHorizontalIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
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
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
    </svg>
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
