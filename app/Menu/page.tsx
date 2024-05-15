"use client";
import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import { useRouter } from "next/navigation";

const Menu = () => {
  const router = useRouter();
  const [menu, setMenu] = useState([
    {
      id: 4,
      upperMenuId: 0,
      menuName: "Yetkilendirme",
      link: "",
      icon: "md-MdAdminPanelSettings",
      menuOrder: 4,
    },
    {
      id: 5,
      upperMenuId: 4,
      menuName: "Menu List",
      link: "/Menu",
      icon: "md-MdMenuBook",
      menuOrder: 1,
    },
    {
      id: 6,
      upperMenuId: 4,
      menuName: "Controller Role",
      link: "/ControllerRole",
      icon: "fa-FaCriticalRole",
      menuOrder: 2,
    },
  ]);
  const [searchTerm, setSearchTerm] = useState("");

  // Arama kutusuna yazıldığında çalışacak fonksiyon
  const handleSearch = (event: any) => {
    setSearchTerm(event.target.value);
  };

  // Filtreleme fonksiyonu
  const filteredMenus = menu.filter((menu) =>
    menu.menuName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex">
      <Sidebar />
      <div className="relative overflow-x-auto w-full">
        <h1 className="font-bold text-xl mt-5 mb-5 ml-5">Menu List</h1>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
            placeholder="Menü Ara"
            required
            value={searchTerm}
            onChange={handleSearch}
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
          >
            Search
          </button>
        </div>
        <div className="flex  pl-5 pt-5">
          <button
            onClick={() => router.push("/Menu/AddMenu")}
            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
          >
            Menü Ekle
          </button>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500  mt-10">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Upper Menu Id
              </th>
              <th scope="col" className="px-6 py-3">
                Menu Name
              </th>
              <th scope="col" className="px-6 py-3">
                Link
              </th>
              <th scope="col" className="px-6 py-3">
                Icon
              </th>
              <th scope="col" className="px-6 py-3">
                Menu Order
              </th>
              <th scope="col" className="px-6 py-3">
                #
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredMenus.map((menu) => (
              <tr key={menu.id} className="odd:bg-white even:bg-gray-100">
                <td className="px-6 py-4">{menu.id}</td>
                <td className="px-6 py-4">{menu.upperMenuId}</td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  {menu.menuName}
                </th>
                <td className="px-6 py-4">{menu.link}</td>
                <td className="px-6 py-4">{menu.icon}</td>
                <td className="px-6 py-4">{menu.menuOrder}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => router.push("/Menu/AddRole")}
                    className="flex font-medium text-green-600 hover:underline"
                  >
                    Add Role
                  </button>
                  <button className="font-medium text-red-600 hover:underline">
                    Delete Menu
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Menu;
