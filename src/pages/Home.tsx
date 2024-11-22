import { UserCircle } from "lucide-react";
import logo from "../assets/home-logo.jpg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import React from "react";
import NavLinks from "./NavLink";
import { PaginationDemo } from "@/components/pagination";

export default function Home() {
  const location = useLocation();
  const pathSegments = location.pathname
    .split("/")
    .filter((segment) => segment);

  return (
    <div className="flex flex-row min-h-screen">
      {/* Side Bar */}
      <div className="min-w-72 min-h-screen bg-purplecolor bg-fixed">
        <img src={logo} alt="profile" className="w-16 h-16 ms-5 my-2" />
        <div className="flex flex-col leading-10 text-white p-5 text-md">
          <NavLinks />
        </div>
      </div>
      {/* Top NavBar */}

      <div className="flex flex-col w-full">
        <div className="w-full flex flex-row justify-end bg-[#2B2962] p-2">
          <div className="justify-end my-auto me-3">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <button className="py-2 px-2 rounded-full bg-white">
                  <UserCircle className="h-5 w-5" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>My Account</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="flex flex-col mt-2 w-full">
          <Breadcrumb className="ps-5">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/home">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              {pathSegments.map((segment, index) => {
                const breadcrumbPath = `/${pathSegments
                  .slice(0, index + 1)
                  .join("/")}`;
                return (
                  <React.Fragment key={breadcrumbPath}>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink href={breadcrumbPath}>
                        {segment.charAt(0).toUpperCase() + segment.slice(1)}
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                  </React.Fragment>
                );
              })}
            </BreadcrumbList>
          </Breadcrumb>
          {/* Dashboard Body */}
          <div className="max-w-screen-lg">
            <Outlet />
          </div>
        </div>
        
      </div>
      
    </div>
  );
}
