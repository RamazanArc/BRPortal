"use client";
import Sidebar from "@/app/Components/Sidebar";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const AddMenu = () => {
  const router = useRouter();
  // State to track the checkbox status
  const [isUpperMenuSelected, setIsUpperMenuSelected] = useState(false);
  const userSchema = yup.object({
    upperMenu: yup.boolean().required("Doldurulması zorunlu alan"),
    upperMenuId: yup.string().required("Doldurulması zorunlu alan"),
    menuLink: yup.string().required("Doldurulması zorunlu alan"),
    menuName: yup.string().required("Doldurulması zorunlu alan"),
    icon: yup.string().required("Doldurulması zorunlu alan"),
    menuOrder: yup.string().required("Doldurulması zorunlu alan"),
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
      <h1 className="font-bold text-xl mt-5 mb-5 ml-5">Add Menu</h1>

      <div className="flex mt-36">
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <div className="mb-7">
                <label
                  htmlFor="upperMenu"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Upper Menu
                </label>
                <input
                  id="upperMenu"
                  type="checkbox"
                  {...register("upperMenu")}
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  onChange={(e) => setIsUpperMenuSelected(e.target.checked)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="menuName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Menu Name
                </label>
                <input
                  type="text"
                  placeholder="Menu Name"
                  id="menuName"
                  {...register("menuName")}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>
            <div>
              <div className="mb-4">
                <label
                  htmlFor="upperMenuId"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Upper Menu Id
                </label>
                <input
                  type="text"
                  id="upperMenuId"
                  placeholder="Upper Menu Id"
                  {...register("upperMenuId")}
                  // Disable the input field if the checkbox is selected
                  disabled={isUpperMenuSelected}
                  className={`${
                    isUpperMenuSelected ? "bg-gray-300" : "bg-gray-50 "
                  } border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="icon"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Icon
                </label>
                <input
                  type="text"
                  id="icon"
                  placeholder="Icon"
                  {...register("icon")}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>
            <div>
              <div className="mb-4">
                <label
                  htmlFor="menuLink"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Menu Link
                </label>
                <input
                  type="text"
                  id="menuLink"
                  placeholder="Menu Link"
                  {...register("menuLink")}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="menuOrder"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Menu Order
                </label>
                <input
                  type="text"
                  id="menuOrder"
                  placeholder="Menu Order"
                  {...register("menuOrder")}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <button className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 mt-5">
                  Menü Ekle
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMenu;
