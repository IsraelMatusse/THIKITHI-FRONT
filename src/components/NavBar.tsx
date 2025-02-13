import { Link } from "react-router-dom";
import "tailwindcss/tailwind.css";
import { Button } from "../../@/components/ui/button";
import { Input } from "../../@/components/ui/input";
import { ImUser } from "react-icons/im";
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
          <div>
            <Link to={"/"}>
              <Button>
                <ImUser className="text-zinc-800 hover:text-zinc-600 dark:text-zinc-200 dark:hover:text-zinc-100" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div>
        <Input
          className="grow w-full m-0 p-0 text-ink-500 !border-0 !shadow-none   placeholder-grey-600 justify-end"
          id="search-query"
          name="q"
          placeholder="Pesquise por palavras-chave"
          type="search"
        />
      </div>
    </section>
  );
}
