"use client";
import Sidebar from "@/app/Components/Sidebar";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const UserRole = () => {
  const [controller, setController] = useState([
    {
      controllerName: "ACCOUNTİNGRELATEDPARTYSCREEN",
      roleCode: "Admin",
    },
    {
      controllerName: "ASNORDER",
      roleCode: "TDR-PERSONEL",
    },
    {
      controllerName: "AUTHORİZATİON",
      roleCode: "IT-PERSONNEL",
    },
  ]);

  const userSchema = yup.object({
    controllerName: yup.string(),
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

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: any) => {
    setSearchTerm(event.target.value);
  };

  // Filtreleme fonksiyonu
  const filteredControllers = controller.filter((controller) =>
    controller.controllerName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex">
      <Sidebar />
      <div className="relative overflow-x-auto w-full">
        <h1 className="font-bold text-xl mt-5 mb-5 ml-5">Controller</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="relative mb-5 pl-4 flex gap-4 items-center">
            <div>
              <label
                htmlFor="controllerName"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Controller
              </label>
              <select
                id="controllerName"
                className="block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                {...register("controllerName")}
              >
                <option value="option1">ACCOUNTİNGRELATEDPARTYSCREEN</option>
                <option value="option2">ASNORDER</option>
                <option value="option3">AUTHORİZATİON</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="roleSelect"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Role Name
              </label>
              <select
                id="roleSelect"
                className="block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                {...register("roleCode")}
              >
                <option value="" disabled>
                  Select Role
                </option>
                <option value="option1">STOCK-MANAGER</option>
                <option value="option2">TDR-PERSONEL S</option>
                <option value="option3">IT-PERSONNEL</option>
              </select>
            </div>
            <div>
              <button
                type="submit"
                className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 mt-6"
              >
                Kaydet
              </button>
            </div>
          </div>
        </form>
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
            placeholder="Controller Ara"
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
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 mt-10">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Controlle Name
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
            {filteredControllers.map((controller) => (
              <tr
                key={controller.controllerName}
                className="odd:bg-white even:bg-gray-100"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  {controller.controllerName}
                </th>
                <td className="px-6 py-4">{controller.roleCode}</td>
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
