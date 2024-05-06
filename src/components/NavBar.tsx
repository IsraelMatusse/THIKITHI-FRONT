import * as React from "react";
import { Link } from "react-router-dom";
import "tailwindcss/tailwind.css";

import { Button } from "../../@/components/ui/button";
import { Input } from "../../@/components/ui/input";
import { Search, SearchIcon } from "lucide-react";
import { InputText } from "./Input";
import { InputWithButton } from "./InputWithButton";
export default function NavBar() {
  return (
    <section className="w-full py-4 px-6 bg-white shadow-md dark:bg-zinc-800">
      <div className="justify-center ">
        <div>
          <Link
            className="text-zinc-800 hover:text-zinc-600 dark:text-zinc-200 dark:hover:text-zinc-100"
            to={"/"}
          >
            <h1 className="text-2xl font-bold">THIKITHI APP</h1>
          </Link>
        </div>
        <div className="hidden md:flex space-x-4 items-center justify-center">
          <Link
            className="text-zinc-800 hover:text-zinc-600 dark:text-zinc-200 dark:hover:text-zinc-100"
            to={"/"}
          >
            Home
          </Link>
          <div className="relative group">
            <Link
              className="text-zinc-800 hover:text-zinc-600 dark:text-zinc-200 dark:hover:text-zinc-100"
              to={"/events"}
            >
              Events
            </Link>
            <div className="absolute hidden group-hover:block bg-white shadow-md dark:bg-zinc-800 rounded-md mt-2 p-2">
              <Link
                className="block text-zinc-800 hover:text-zinc-600 dark:text-zinc-200 dark:hover:text-zinc-100 py-1"
                to={"/events/upcoming"}
              >
                Upcoming Events
              </Link>
              <Link
                className="block text-zinc-800 hover:text-zinc-600 dark:text-zinc-200 dark:hover:text-zinc-100 py-1"
                to={"/events/past"}
              >
                Past Events
              </Link>
            </div>
          </div>
          <div className="relative group">
            <Link
              className="text-zinc-800 hover:text-zinc-600 dark:text-zinc-200 dark:hover:text-zinc-100"
              to={"/news"}
            >
              News
            </Link>
            <div className="absolute hidden group-hover:block bg-white shadow-md dark:bg-zinc-800 rounded-md mt-2 p-2">
              <Link
                className="block text-zinc-800 hover:text-zinc-600 dark:text-zinc-200 dark:hover:text-zinc-100 py-1"
                to={"/news/latest"}
              >
                Latest News
              </Link>
              <Link
                className="block text-zinc-800 hover:text-zinc-600 dark:text-zinc-200 dark:hover:text-zinc-100 py-1"
                to={"/news/archive"}
              >
                News Archive
              </Link>
            </div>
          </div>
          <div className="relative group">
            <Link
              className="text-zinc-800 hover:text-zinc-600 dark:text-zinc-200 dark:hover:text-zinc-100"
              to={"/promos"}
            >
              Promos
            </Link>
            <div className="absolute hidden group-hover:block bg-white shadow-md dark:bg-zinc-800 rounded-md mt-2 p-2">
              <Link
                className="block text-zinc-800 hover:text-zinc-600 dark:text-zinc-200 dark:hover:text-zinc-100 py-1"
                to={"/promos/special"}
              >
                Special Promotions
              </Link>
              <Link
                className="block text-zinc-800 hover:text-zinc-600 dark:text-zinc-200 dark:hover:text-zinc-100 py-1"
                to={"/promos/discounts"}
              >
                Discounts
              </Link>
            </div>
          </div>
          <Link
            className="text-zinc-800 hover:text-zinc-600 dark:text-zinc-200 dark:hover:text-zinc-100"
            to={"/contact"}
          >
            Contact us
          </Link>
          <div className="flex items-center justify-end mt-4 md:mt-0">
            <InputWithButton />
          </div>
        </div>

        <div className="md:hidden">
          <Button
            aria-controls="mobile-menu"
            aria-expanded="false"
            size="icon"
            variant="outline"
          >
            <MenuIcon className="h-6 w-6 text-zinc-800 dark:text-zinc-200" />
          </Button>
        </div>
      </div>
      <div className="mt-4 md:hidden" id="mobile-menu">
        <Link
          className="block py-1 text-zinc-800 hover:text-zinc-600 dark:text-zinc-200 dark:hover:text-zinc-100"
          to={"/"}
        >
          Events
        </Link>
        <Link
          className="block py-1 text-zinc-800 hover:text-zinc-600 dark:text-zinc-200 dark:hover:text-zinc-100"
          to={"/"}
        >
          News
        </Link>
        <Link
          className="block py-1 text-zinc-800 hover:text-zinc-600 dark:text-zinc-200 dark:hover:text-zinc-100"
          to={"/"}
        >
          Promos
        </Link>
        <Link
          className="block py-1 text-zinc-800 hover:text-zinc-600 dark:text-zinc-200 dark:hover:text-zinc-100"
          to={"/"}
        >
          Contact us
        </Link>
      </div>
    </section>
  );
}
function HomeIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
