import React from "react";
import loginImage from '../assets/login-bg.png';
import Logo from '../assets/login-logo.png';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState,useEffect } from "react";

export default function Login() {
  interface FormData {
    email: string;
    password: string;
  }

  const schema = yup.object().shape({
    email: yup.string().email("Enter a valid email").required("Email is required"),
    password: yup.string().required("Password is required").min(8),
  });

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();
  
  const onSubmitHandler = async (data: FormData) => {
    const formData = {
      email: data.email,
      password: data.password,
    };
  //   const [token, setToken] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('accessToken', JSON.stringify(token));
  // }, []);

    try {
      const res = await axios.post('http://13.233.16.129:3000/api/v1/login', formData);
    
        // localStorage.setItem("accessToken", token);
      if (res.status === 200) {
        // localStorage.setItem("Token", res.data.accessToken); 
        navigate("/home"); // Navigate to Home
        // setToken(res.data.accessToken);
        // console.log(token)
      } else {
        toast.error("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error during login: ", error);
      toast.error("Invalid username or password!");
    }
   
  };

  return (
    <div className='flex flex-row max-h-screen max-w-screen'>
      <div className='hidden w-2/3 lg:block'>
        <img src={loginImage} alt="img" />
        <div className='min-h-24 w-full bg-textaccent'></div>
      </div>
      <div className='mt-10'>
        <div className='w-2/4 mx-auto pt-20'>
          <img src={Logo} alt='logo' className='' />
          <h1 className='text-textaccent font-bold font-sans text-2xl mt-10'>Login</h1>
          <form onSubmit={handleSubmit(onSubmitHandler)} className="pe-10">
            <div className='mt-4 leading-10'>
            <label className='text-md font-medium'>Email Address</label>
              <Input 
                placeholder="m@example.com" 
                {...register("email")} 
                type="email" 
                className="p-2 h-10 font-semibold focus:border-purple-400"
              />
              <p className="text-sm text-red-500">{errors.email?.message}</p>
            </div>
            <div className='mt-1 leading-10'>
              <label className='text-md font-medium'>Password</label>
              <Input 
                placeholder="*********" 
                {...register("password")} 
                type="password" 
                className="p-2 h-10 font-semibold focus:border-purple-400"
              />
              <p className="text-sm text-red-500">{errors.password?.message}</p>
            </div>
            <div className='mt-5'>
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
