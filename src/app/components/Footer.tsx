import { Facebook } from "lucide-react";
import { Twitter } from "lucide-react";
import { Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white p-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-7 px-6">
        <div>
          <h3 className="text-xl font-semibold mb-4">Exclusive</h3>
          <p className="mb-4">Get 10% off your first order</p>
          <div className="flex items-center border border-white rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent px-4 py-2 outline-none flex-1 text-white"
            />
            <button className="bg-white text-black px-4 py-2">→</button>
          </div>
        </div>

        <div className="pl-8">
          <h3 className="text-xl font-semibold mb-4">Support</h3>
          <p className="mb-2">
            111 Bijoy sarani, Dhaka,
            <br /> DH 1515, Bangladesh.
          </p>
          <p className="mb-2">exclusive@gmail.com</p>
          <p className="mb-2">+88015-88888-9999</p>
        </div>

        <div className="pl-8">
          <h3 className="text-xl font-semibold mb-4">Account</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                My Account
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Login / Register
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Cart
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Wishlist
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Shop
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Link</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms Of Use
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Download App</h3>
          <p className="mb-4">Save $3 with App New User Only</p>
          <div className="flex space-x-4 mb-4">
            <img src="/google-play.png" alt="Google Play" className="w-24" />
            <img src="/app-store.svg" alt="App Store" className="w-24" />
          </div>
          <div className="flex space-x-6 text-2xl">
            <a href="#" className="hover:text-gray-400">
              {" "}
              <Facebook />
            </a>
            <a href="#" className="hover:text-gray-400">
              {" "}
              <Twitter />
            </a>
            <a href="#" className="hover:text-gray-400">
              {" "}
              <Instagram />
            </a>
            <a href="#" className="hover:text-gray-400">
              {" "}
              <Linkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
