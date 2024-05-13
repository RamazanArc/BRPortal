"use client";
import Link from "next/link";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { IoHomeSharp } from "react-icons/io5";
import { MdLogout, MdOutlineStorefront } from "react-icons/md";

const Sidebar = () => {
  const [active, setActive] = useState(true);
  const Menus = [
    {
      title: "Home",
      icon: <IoHomeSharp className="h-6 w-6" />,
      href: "/Dashboard",
    },
    {
      title: "Proudcts",
      icon: <MdOutlineStorefront className="h-6 w-6" />,
      href: "/Proudcts",
    },
  ];

  function toggleSidebar() {
    setActive(!active);
  }
  return (
    <div className="flex min-h-screen">
      <aside
        className={`
          transition-all duration-300
          flex flex-col items-center justify-between bg-green-900 sticky
          ${active ? "w-64" : "w-20"}
        `}
      >
        <div className="p-4 w-full space-y-6">
          <div className="flex items-center justify-between text-white">
            <img
              className={`
                ${active ? "block" : "hidden"}
                w-20 h-7
              `}
              src="/assets/br.png"
            />
            <label
              className={`
                ${active ? "block" : "hidden"}
                w-full h-full pl-4
              `}
            >
              BR Portal
            </label>
            <button className="p-3 rounded-xl0" onClick={toggleSidebar}>
              <IoIosMenu className="h-6 w-6 rounded-md hover:bg-black hover:text-white" />
            </button>
          </div>
          <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300"></div>

          <div className="space-y-3">
            {Menus.map((Menu, index) => (
              <Link
                key={index}
                className="flex w-full p-3 rounded text-white hover:bg-black hover:text-white"
                href={Menu.href}
              >
                {Menu.icon}
                <span
                  className={`
                  ml-3
                  ${active ? "block" : "hidden"}
                `}
                >
                  {Menu.title}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between w-full h-16 px-3 py-2 ">
          <div
            className={`
              w-full space-x-3
              ${active ? "flex" : "hidden"}
            `}
          >
            <FaRegUser className="h-10 w-10 rounded-xl text-white" />
            <div className="flex flex-col items-left justify-center text-white">
              <span className="text-sm">Ramazan Arıcı</span>
            </div>
          </div>

          <Link
            className="p-3 rounded-xl text-white hover:bg-black hover:text-white "
            href={"/Login"}
          >
            <MdLogout className="h-6 w-6" />
          </Link>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
