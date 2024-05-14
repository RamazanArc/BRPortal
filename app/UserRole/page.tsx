"use client";
import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";

const UserRole = () => {
  const [users, setUsers] = useState([
    {
      username: "rarc",
      name: "Ramazan Arici",
      mail: "ramazan@example.com",
      roleCode: "Admin",
    },
    {
      username: "sbas",
      name: "Sedat Bas",
      mail: "sedat.bas@brmagazacilik.com.tr",
      roleCode: "Admin",
    },
    {
      username: "berturk",
      name: "Batu Ertürk",
      mail: "batu.erturk@brmagazacilik.com.tr",
      roleCode: "Admin",
    },
  ]);
  const [searchTerm, setSearchTerm] = useState("");

  // Arama kutusuna yazıldığında çalışacak fonksiyon
  const handleSearch = (event: any) => {
    setSearchTerm(event.target.value);
  };

  // Filtreleme fonksiyonu
  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex">
      <Sidebar />
      <div className="relative overflow-x-auto w-full">
        <h1 className="font-bold text-xl mt-5 mb-5 ml-5">BR Portal Users</h1>
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
            placeholder="Kullanıcı Ara"
            required
            value={searchTerm}
            onChange={handleSearch}
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
          >
            Search
          </button>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500  mt-10">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                User Name
              </th>
              <th scope="col" className="px-6 py-3">
                Name Surname
              </th>
              <th scope="col" className="px-6 py-3">
                Mail
              </th>
              <th scope="col" className="px-6 py-3">
                Role Name
              </th>
              <th scope="col" className="px-6 py-3">
                #
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.username} className="odd:bg-white even:bg-gray-100">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  {user.username}
                </th>
                <td className="px-6 py-4">{user.name}</td>
                <td className="px-6 py-4">{user.mail}</td>
                <td className="px-6 py-4">{user.roleCode}</td>
                <td className="px-6 py-4">
                  <button className="font-medium text-blue-600 hover:underline">
                    Delete User
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

export default UserRole;
