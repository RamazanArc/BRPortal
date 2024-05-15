"use client";
import Sidebar from "@/app/Components/Sidebar";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const UserRole = () => {
  const [users, setUsers] = useState([
    {
      userID: "1edb5-425527-4586564d-8eda-204cb55647330119",
      username: "rarc",
      roleCode: "Admin",
    },
  ]);
  const userSchema = yup.object({
    userName: yup.string(),
    roleCode: yup.string().required("Doldurulması zorunlu alan"),
  });
  type UserSchemaType = yup.InferType<typeof userSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSchemaType>({
    resolver: yupResolver(userSchema),
  });

  const onSubmit = async (data: UserSchemaType) => {
    if (data !== null) {
      console.log(data);
    } else {
      console.log("data yok");
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="relative overflow-x-auto w-full">
        <h1 className="font-bold text-xl mt-5 mb-5 ml-5">Add Role</h1>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <div className="relative mb-5 pl-4 flex gap-4 items-center">
            <div>
              <label
                htmlFor="user"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                User
              </label>
              <input
                type="text"
                id="user"
                className="block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                placeholder="rarc"
                disabled
                {...register("userName")}
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
                {...register("roleCode")}
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
                type="submit"
                className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 mt-6"
              >
                Add Role
              </button>
            </div>
          </div>
        </form>
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
