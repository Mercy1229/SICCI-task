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
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Outlet, useLocation } from "react-router-dom";
import React from "react";
import NavLinks from "./NavLink";
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  const location = useLocation();
  const pathSegments = location.pathname
    .split("/")
    .filter((segment) => segment);
  const pathLabels: Record<string, string> = {
    dashboard: "Dashboard",
    "master-table": "Master Tables",
    "reports": "Reports",
    "iaa": "IAA",
    "hall": "Hall Booking",
    "users": " Users",
    "roles": " Roles",
    "loan-types": " Loan Types",
    "arbitrator": " Arbitrator",
    "customers": " Customers",
    "hall-table": " Hall Table",
    "iaa-reports": " IAA Reports",
    "hall-booking": " Hall Booking Reports",
  };

  return (
    <div className="flex flex-row min-h-screen">
      {/* side bar */}
      <div className="min-w-72 min-h-screen bg-purplecolor bg-fixed">
        <img src={logo} alt="profile" className="w-16 h-16 ms-5 my-2" />
        <div className="flex flex-col leading-10 text-white">
          <NavLinks />
        </div>
      </div>
      {/* nav bar */}
      <div className="flex flex-col w-full">
        <div className="w-full flex flex-row justify-end bg-[#2B2962] p-2 space-x-5">
          <ModeToggle />
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
          {/* breadcrumb */}
          <Breadcrumb className="ps-5">
            <BreadcrumbList>
              {pathSegments.map((segment, index) => {
                const breadcrumbPath = `/${pathSegments
                  .slice(0, index + 1)
                  .join("/")}`;
                return (
                  <div key={breadcrumbPath} className="flex flex-row space-x-3">
                    {index > 0 && <BreadcrumbSeparator className="my-auto">/
                    </BreadcrumbSeparator>}
                    <BreadcrumbItem>
                    
                      <BreadcrumbLink href={breadcrumbPath}>
                        {pathLabels[segment] || segment.charAt(0).toUpperCase() + segment.slice(1)}
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                  </div>
                );
              })}
            </BreadcrumbList>
          </Breadcrumb>
          <div className="max-w-screen-lg">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
