import { FaFacebook } from "react-icons/fa";
import { HiMail, HiPhone } from "react-icons/hi";
import { HiMapPin } from "react-icons/hi2";

export const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-4 bg-teal text-primary-foreground rounded-xl m-2 md:m-8 px-6 md:px-12 py-8 md:py-12">
      <div className="flex flex-col gap-4">
        <img
          src="https://placehold.co/200x50"
          alt="JESUS IS LORD GLOBAL MINISTRY"
        />
        <span>
          <h1 className="text-2xl font-bold">JESUS IS LORD GLOBAL MINISTRY</h1>
          <p>Blumentritt Outreach</p>
        </span>

        <div className="space-y-1">
          <span className="flex items-center gap-2">
            <HiMapPin className="w-4 h-4" />
            <p className="text-sm">
              2/F, 2610 Aurora Blvd, Sta. Cruz, Manila, Philippines
            </p>
          </span>
          <span className="flex items-center gap-2">
            <HiMail className="w-4 h-4" />
            <p className="text-sm">jilgm.blum@gmail.com</p>
          </span>
          <span className="flex items-center gap-2">
            <HiPhone className="w-4 h-4" />
            <p className="text-sm">+63 939 906 4026 - Pastor Ronnie Castro</p>
          </span>
          <span className="flex items-center gap-2">
            <FaFacebook className="w-4 h-4" />
            <p className="text-sm">JILGMBlum</p>
          </span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
        <span className="space-y-2">
          <p className="text-lg font-bold">About us</p>
          <p>Who We Are</p>
          <p>What We Do</p>
          <p>Get Involved</p>
        </span>
        <span className="space-y-2">
          <p className="text-lg font-bold">Ways to Partner with Us</p>
          <p>Sponsor a Child</p>
          <p>Share our Story</p>
          <p>Pray with us</p>
        </span>
        <div>
          <p>Subscribe to our newsletter</p>
          <span className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="border-2 bg-accent border-gray-300 text-primary rounded-md p-2 outline-none focus:ring-1 focus:ring-teal"
            />
            <button className="bg-teal-foreground text-primary-foreground font-medium px-4 py-2 rounded-md cursor-pointer">
              Subscribe
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};
