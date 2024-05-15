"use client";
import Link from "next/link";
import { useState } from "react";
import {
  FaRegUser,
  FaBusinessTime,
  FaWarehouse,
  FaCriticalRole,
} from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import {
  MdLogout,
  MdAdminPanelSettings,
  MdMenuBook,
  MdControlCamera,
} from "react-icons/md";
import { BsGraphUp } from "react-icons/bs";

const Sidebar = () => {
  const [active, setActive] = useState(true);
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const Menus = [
    {
      title: "E-Ticaret",
      icon: <FaBusinessTime className="h-6 w-6" />,
      href: "/Dashboard",
      subMenus: [],
    },
    {
      title: "Finans",
      icon: <BsGraphUp className="h-6 w-6" />,
      href: "/Dashboard",
      subMenus: [],
    },
    {
      title: "Depo",
      icon: <FaWarehouse className="h-6 w-6" />,
      href: "/Dashboard",
      subMenus: [],
    },
    {
      title: "Yetkilendirme",
      icon: <MdAdminPanelSettings className="h-6 w-6" />,
      // href: "/Dashboard",
      subMenus: [
        {
          title: "Menu List",
          href: "/Menu",
          icon: <MdMenuBook className="h-6 w-6" />,
        },
        {
          title: "User Role",
          href: "/UserRole",
          icon: <FaCriticalRole className="h-6 w-6" />,
        },
        {
          title: "Controller Role",
          href: "/Control",
          icon: <MdControlCamera className="h-6 w-6" />,
        },
      ],
    },
  ];

  function toggleSidebar() {
    setActive(!active);
  }

  function toggleMenu(index: any) {
    if (activeMenu === index) {
      setActiveMenu(null); // If the clicked menu is already active, close it
    } else {
      setActiveMenu(index);
    }
  }

  function toggleSubMenu(index: any) {
    if (activeSubMenu === index) {
      setActiveSubMenu(null); // If the clicked submenu is already active, close it
    } else {
      setActiveSubMenu(index);
    }
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
              E-Ticaret Portal
            </label>
            <button className="p-3 rounded-xl0" onClick={toggleSidebar}>
              <IoIosMenu className="h-6 w-6 rounded-md hover:bg-black hover:text-white" />
            </button>
          </div>
          <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300"></div>

          <div className="space-y-3">
            {Menus.map((menu, index) => (
              <div key={index}>
                <a href={menu.href}>
                  <button
                    className={`flex w-full p-3 rounded text-white hover:bg-black hover:text-white relative ${
                      activeMenu === index ? "bg-black" : ""
                    }`}
                    onClick={() => toggleMenu(index)}
                  >
                    {menu.icon}
                    <span className={`ml-3 ${active ? "block" : "hidden"}`}>
                      {menu.title}
                    </span>
                    {menu.subMenus.length > 0 && (
                      <div
                        className={`absolute right-4 top-1/2 transform -translate-y-1/2 transition-transform ${
                          active ? "block" : "hidden"
                        }`}
                      >
                        {activeMenu === index ? (
                          <IoChevronUp className="h-5 w-5" />
                        ) : (
                          <IoChevronDown className="h-5 w-5" />
                        )}
                      </div>
                    )}
                  </button>
                </a>
                <div
                  className={`${
                    activeMenu === index ? "block" : "hidden"
                  } space-y-2 pl-8 transition-all duration-300`}
                >
                  {menu.subMenus.map((submenu, subIndex) => (
                    <button
                      key={subIndex}
                      className={`flex w-full rounded text-white hover:bg-black hover:text-white relative ${
                        activeSubMenu === subIndex ? "bg-black" : ""
                      }`}
                      onClick={() => toggleSubMenu(subIndex)}
                    >
                      <a
                        className={` flex text-white hover:bg-black hover:text-white px-4 py-2 rounded ${
                          active ? "block" : "hidden"
                        }`}
                        href={submenu.href}
                      >
                        {submenu.icon}
                        <span className={`ml-3 ${active ? "block" : "hidden"}`}>
                          {submenu.title}
                        </span>
                      </a>
                    </button>
                  ))}
                </div>
              </div>
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
