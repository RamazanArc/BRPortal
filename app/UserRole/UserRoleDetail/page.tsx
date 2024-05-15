"use client";
import Sidebar from "@/app/Components/Sidebar";
import React, { useState } from "react";

const UserRole = () => {
  const [users, setUsers] = useState([
    {
      userID: "1edb5-425527-4586564d-8eda-204cb55647330119",
      username: "rarc",
      roleCode: "Admin",
    },
  ]);

  return (
    <div className="flex">
      <Sidebar />
      <div className="relative overflow-x-auto w-full">
        <h1 className="font-bold text-xl mt-5 mb-5 ml-5">Add Role</h1>
        <div className="relative mb-5 pl-4 flex gap-4 items-center">
          <div>
            <label
              htmlFor="input1"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              User
            </label>
            <input
              type="text"
              id="input1"
              className="block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
              placeholder="rarc"
              disabled
            />
          </div>
          <div>
            <label
              htmlFor="roleSelect"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Role
            </label>
            <select
              id="roleSelect"
              className="block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
            >
              <option value="" disabled>
                Select Role
              </option>
              <option value="option1">Admin</option>
              <option value="option2">DEALER-USERS</option>
              <option value="option3">STORE</option>
            </select>
          </div>
          <div>
            <button
              type="button"
              className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 mt-6"
            >
              Add Role
            </button>
          </div>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 mt-10">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                User ID
              </th>
              <th scope="col" className="px-6 py-3">
                User Name
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
            {users.map((user) => (
              <tr key={user.username} className="odd:bg-white even:bg-gray-100">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  {user.userID}
                </th>
                <td className="px-6 py-4">{user.username}</td>
                <td className="px-6 py-4">{user.roleCode}</td>
                <td className="px-6 py-4">
                  <button className="font-medium text-red-600 hover:underline">
                    Delete
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
