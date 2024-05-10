/**
 * v0 by Vercel.
 * @see https://v0.dev/t/VHK3HqblITJ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Link } from "react-router-dom";
import { Input } from "../../@/components/ui/input";
import { Button } from "../../@/components/ui/button";
import { JSX } from "react/jsx-runtime";
import { SVGProps } from "react";
import "tailwindcss/tailwind.css";
import { MusicIcon, ClubIcon, LaughIcon, ConeIcon } from "lucide-react";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <header className="flex items-center justify-between px-4 py-3 bg-white shadow-sm dark:bg-gray-950 dark:text-gray-50 sm:px-6 lg:px-8">
        <Link
          className="flex items-center gap-2 text-lg font-semibold"
          to={"/"}
        >
          <TicketIcon className="w-6 h-6" />
          <span>THIKITHI</span>
        </Link>
        <nav className="hidden md:flex items-center gap-4">
          <Link className="text-sm font-medium hover:underline" to={"/contact"}>
            Contacte-nos
          </Link>
          <Link className="text-sm font-medium hover:underline" to={"/about"}>
            Sobre nós
          </Link>
          <Link className="text-sm font-medium hover:underline" to={"/news"}>
            Novidades
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link to={"/login"}>
            <Button className="rounded-full" size="icon" variant="outline">
              <UserIcon className="w-5 h-5" />
            </Button>
          </Link>
          <span className="text-sm font-medium hover:underline">Login</span>
        </div>
      </header>
      <main className="py-12 bg-gray-100 dark:bg-gray-900 sm:py-16 lg:py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-3xl">
                Próximos eventos em destaque
              </h2>

              <div className="mt-6 flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Link to={"/music"}>
                    <span className="text-sm font-medium hover:underline">
                      Musica
                    </span>
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <Link to={"/sports"}>
                    <span className="text-sm font-medium hover:underline"></span>{" "}
                    Desporto
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <Link to={"/comedy"}>
                    <span className="text-sm font-medium hover:underline">
                      Comédia
                    </span>
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <Link to={"/conferences"}>
                    <span className="text-sm font-medium hover:underline">
                      Conferências
                    </span>
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <Link to={"/cinema"}>
                    <span className="text-sm font-medium hover:underline">
                      Cinema
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative flex-1 max-w-md">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400" />
              <Input
                className="mt-2 border border-gray-300 rounded-full px-10 py-2 focus:border-indigo-600 focus:outline-none"
                placeholder="Pesquise aqui"
                type="search"
              />
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <Link className="absolute inset-0 z-10" to={"/:id"}>
                <span className="sr-only">View Event</span>
              </Link>
              <img
                alt="Event Image"
                className="object-cover w-full h-56"
                height={300}
                src="/src/assets/part2.jpg"
                style={{
                  aspectRatio: "500/300",
                  objectFit: "cover",
                }}
                width={500}
              />
              <div className="bg-white dark:bg-gray-950 p-4">
                <h3 className="font-bold text-lg">Music Festival</h3>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <CalendarIcon className="w-4 h-4" />
                  <span>June 15, 2023</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <LocateIcon className="w-4 h-4" />
                  <span>New York City</span>
                </div>
                <div className="mt-4">
                  <Button className=" bg-indigo-600 text-white rounded-full">
                    Buy Tickets
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <Link className="absolute inset-0 z-10" to={"/:id"}>
                <span className="sr-only">View Event</span>
              </Link>
              <img
                alt="Event Image"
                className="object-cover w-full h-56"
                height={300}
                src="/src/assets/show.avif"
                style={{
                  aspectRatio: "500/300",
                  objectFit: "cover",
                }}
                width={500}
              />
              <div className="bg-white dark:bg-gray-950 p-4">
                <h3 className="font-bold text-lg">Comedy Show</h3>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <CalendarIcon className="w-4 h-4" />
                  <span>July 10, 2023</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <LocateIcon className="w-4 h-4" />
                  <span>Los Angeles</span>
                </div>
                <div className="mt-4">
                  <Button className="bg-indigo-600 text-white rounded-full">
                    Buy Tickets
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <Link className="absolute inset-0 z-10" to={"/:id"}>
                <span className="sr-only">View Event</span>
              </Link>
              <img
                alt="Event Image"
                className="object-cover w-full h-56"
                height={300}
                src="/src/assets/conference.jpg"
                style={{
                  aspectRatio: "500/300",
                  objectFit: "cover",
                }}
                width={500}
              />
              <div className="bg-white dark:bg-gray-950 p-4">
                <h3 className="font-bold text-lg">Tech Conference</h3>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <CalendarIcon className="w-4 h-4" />
                  <span>September 1, 2023</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <LocateIcon className="w-4 h-4" />
                  <span>San Francisco</span>
                </div>
                <div className="mt-4">
                  <Button className="bg-indigo-600 text-white rounded-full">
                    Buy Tickets
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <Link className="absolute inset-0 z-10" to={"/:id"}>
                <span className="sr-only">View Event</span>
              </Link>
              <img
                alt="Event Image"
                className="object-cover w-full h-56"
                height={300}
                src="/src/assets/Corporate-Events.jpg"
                style={{
                  aspectRatio: "500/300",
                  objectFit: "cover",
                }}
                width={500}
              />
              <div className="bg-white dark:bg-gray-950 p-4">
                <h3 className="font-bold text-lg">Sports Tournament</h3>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <CalendarIcon className="w-4 h-4" />
                  <span>August 20, 2023</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <LocateIcon className="w-4 h-4" />
                  <span>Chicago</span>
                </div>
                <div className="mt-4">
                  <Button className="bg-indigo-600 text-white rounded-full">
                    Buy Tickets
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}

function CalendarIcon(
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function LocateIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
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

function UserIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
