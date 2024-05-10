/**
 * v0 by Vercel.
 * @see https://v0.dev/t/zWtQBcgBkVe
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Link } from "react-router-dom";
import { SVGProps } from "react";
import "tailwindcss/tailwind.css";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 sm:py-16 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col items-start">
          <Link className="inline-flex items-center" to="#">
            <TicketIcon className="h-8 w-8 text-white" />
            <span className="ml-2 text-xl font-bold text-white">THIKITHI</span>
          </Link>
          <p className="mt-4 text-sm">
            Melhor aplicação de venda de bilhetes online
          </p>
        </div>
        <div className="flex flex-col items-start">
          <h4 className="text-white font-semibold mb-4">Links Rápidos</h4>
          <Link className="hover:text-gray-300 transition-colors" to="/">
            Home
          </Link>
          <Link className="hover:text-gray-300 transition-colors" to="/about">
            About
          </Link>
          <Link className="hover:text-gray-300 transition-colors" to="contact">
            Contact
          </Link>
        </div>
        <div className="flex flex-col items-start">
          <h4 className="text-white font-semibold mb-4">Suporte</h4>
          <Link className="hover:text-gray-300 transition-colors" to="#">
            FAQ
          </Link>
          <Link className="hover:text-gray-300 transition-colors" to="#">
            Centro de atendimento
          </Link>
          <Link className="hover:text-gray-300 transition-colors" to="#">
            Termos de serviço
          </Link>
        </div>
        <div className="flex flex-col items-start">
          <h4 className="text-white font-semibold mb-4">Siga-nos</h4>
          <div className="flex space-x-4">
            <Link className="hover:text-gray-300 transition-colors" to="#">
              <TwitterIcon className="h-6 w-6" />
            </Link>
            <Link className="hover:text-gray-300 transition-colors" to="#">
              <FacebookIcon className="h-6 w-6" />
            </Link>
            <Link className="hover:text-gray-300 transition-colors" to="#">
              <InstagramIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-sm">© 2024 THIKITHI. Todos direitos reservados.</p>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <Link className="hover:text-gray-300 transition-colors" to="#">
            Politica de privacidade
          </Link>
          <Link className="hover:text-gray-300 transition-colors" to="#">
            Termos de serviço
          </Link>
        </div>
      </div>
    </footer>
  );
}

function FacebookIcon(
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
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

function TwitterIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
