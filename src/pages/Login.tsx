import React, { useState, useEffect } from "react";
import loginImage from "../assets/login-bg.png";
import Logo from "../assets/login-logo.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormData {
  email: string;
  password: string;
}

interface LoginResponse {
  data: {
    accessToken: string;
  };
}

export default function Login() {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup.string().required("Password is required").min(8),
  });

  const { register, handleSubmit, formState: { errors }, } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();
  const [token, setToken] = useState('');
  useEffect(() => {
    if (token) {
      localStorage.setItem("accessToken", JSON.stringify(token));
    }
  }, [token]);

  const onSubmitHandler = async (data: FormData) => {
    try {
      const res = await axios.post<LoginResponse>(
        "http://13.233.16.129:3000/api/v1/login",
        data
      );

      if (res.status === 200) {
        const accessToken = res.data.data.accessToken;
        setToken(accessToken); 
        navigate("/dashboard"); 
      } else {
        toast.error("Login failed!");
      }
    } catch (error) {
      console.error("Error during login: ", error);
      toast.error("Invalid username or password!");
    }
  };

  return (
    <div className="flex flex-row max-h-screen max-w-screen">
      <div className="hidden w-2/3 lg:block">
        <img src={loginImage} alt="img" />
        <div className="min-h-24 w-full bg-textaccent"></div>
      </div>
      <div className="mt-10">
        <div className="w-2/4 mx-auto pt-20">
          <img src={Logo} alt="logo" />
          <h1 className="text-textaccent font-bold font-sans text-2xl mt-10">
            Login
          </h1>
          <form onSubmit={handleSubmit(onSubmitHandler)} className="pe-10">
            <div className="mt-4 leading-10">
              <label className="text-md font-medium">Email Address</label>
              <Input
                placeholder="m@example.com"
                {...register("email")}
                type="email"
                className="p-2 h-10 font-semibold focus:border-purple-400"
              />
              <p className="text-sm text-red-500">{errors.email?.message}</p>
            </div>
            <div className="mt-1 leading-10">
              <label className="text-md font-medium">Password</label>
              <Input
                placeholder="*********"
                {...register("password")}
                type="password"
                className="p-2 h-10 font-semibold focus:border-purple-400"
              />
              <p className="text-sm text-red-500">{errors.password?.message}</p>
            </div>
            <div className="mt-5">
              <Button
                type="submit"
                className="w-full bg-textaccent hover:bg-blue-800 py-5 text-white text-lg"
              >
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer position="bottom-right" autoClose={false} />
    </div>
  );
}
