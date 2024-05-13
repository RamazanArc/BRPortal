"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const LoginPage = () => {
  const router = useRouter();

  const userSchema = yup.object({
    username: yup.string().required("Doldurulması zorunlu alan"),
    password: yup.string().required("Doldurulması zorunlu alan").min(5).max(10),
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
      router.push("/Dashboard");
    } else {
      console.log("data yok");
    }
  };
  return (
    <div className="bg-cover bg-center bg-fixed bg-[url('/assets/br2.jpg')]">
      <div className="h-screen flex justify-center items-center backdrop-blur">
        <div className="bg-white mx-4 p-8 rounded-xl shadow-md w-full md:w-1/2 lg:w-1/3">
          <img
            src="/assets/br.png"
            alt=""
            className="m-auto"
            width={400}
            height={400}
          />
          <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300"></div>
          <h1 className="text-3xl font-bold mb-8 text-center">BR Portal</h1>
          <form
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto"
          >
            <div className="pb-2 pt-4">
              <input
                type="text"
                id="username"
                placeholder="Username"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...register("username")}
              />
              {errors?.username?.message && (
                <span className="text-red-400 text-s">
                  {errors.username.message}
                </span>
              )}
            </div>
            <div className="pb-2 pt-4">
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="password"
                id="password"
                placeholder="Password"
                {...register("password")}
              />
              {errors?.password?.message && (
                <span className="text-red-400 text-s">
                  {errors.password.message}
                </span>
              )}
            </div>
            <div className="text-right text-gray-400 hover:underline hover:text-black">
              <a href="#">Şifremi Unuttum</a>
            </div>
            <div className="px-4 pb-2 pt-4">
              <button
                className="uppercase block w-full p-4 text-lg rounded-full bg-green-700 hover:bg-green-800  focus:outline-none"
                type="submit"
              >
                giriş yap
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
