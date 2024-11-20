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
} from "@/components/ui/accordion"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import React from "react";

export default function Home() {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter((segment) => segment);
  
  return (
    <div className="flex flex-row">
        {/* Side Bar */}
        <div className="min-w-72 min-h-screen bg-purplecolor bg-fixed">
          <img src={logo} alt="profile" className="w-16 h-16 ms-5 my-2" />
          <div className="flex flex-col leading-10 text-white p-5 text-md">
				<NavLink to="Iaa"
				className={({ isActive }: { isActive: boolean }) =>
				isActive
					? "bg-purple-300 border-l-4 border-l-yellow-500 text-white text-bold p-2"
					: "p-2"
				} >IAA
				</NavLink>
				<NavLink to="hall"
				className={({ isActive }:{isActive:boolean}) =>
					isActive
					? "bg-purple-300 border-l-4 border-l-yellow-500 text-white text-bold p-2"
					: "p-2"
				} > Hall Booking
				</NavLink>
				<Accordion type="single" collapsible>
					<AccordionItem value="item-1">
						<AccordionTrigger className="text-md font-normal ms-1">
							<p>MasterTables</p>
						</AccordionTrigger>
						<div className="ms-5">
						<AccordionContent>
							<NavLink
								to="user"
								className={({ isActive }:{isActive:boolean}) =>
								isActive
									? "bg-purple-300 border-l-4 border-l-yellow-500 text-white text-bold p-2"
									: "p-2"
								} > User
							</NavLink>
						</AccordionContent>
						<AccordionContent>
							<NavLink to="roles"
							className={({ isActive }:{isActive:boolean}) =>
							isActive
								? "bg-purple-300 border-l-4 border-l-yellow-500 text-white text-bold p-2"
								: "p-2"
							} >Role
							</NavLink>
						</AccordionContent>
						<AccordionContent>
							<NavLink
							to="loanTypes"
							className={({ isActive }:{isActive:boolean}) =>
							isActive
								? "bg-purple-300 border-l-4 border-l-yellow-500 text-white text-bold p-2"
								: "p-2"
							} >Loan Type
							</NavLink>
						</AccordionContent>
						<AccordionContent>
							<NavLink
							to="arbitrator"
							className={({ isActive }:{isActive:boolean}) =>
							isActive
								? "bg-purple-300 border-l-4 border-l-yellow-500 text-white text-bold p-2"
								: "p-2"
							} > Arbitrator
							</NavLink>
						</AccordionContent>
						<AccordionContent>
							<NavLink
								to="customers"
								className={({ isActive }:{isActive:boolean}) =>
								isActive
									? "bg-purple-300 border-l-4 border-l-yellow-500 text-white text-bold p-2"
									: "p-2"
								} >Customer
							</NavLink>
						</AccordionContent>
						<AccordionContent>
							<NavLink
							to="hallTable"
							className={({ isActive }:{isActive:boolean}) =>
							isActive
								? "bg-purple-300 border-l-4 border-l-yellow-500 text-white text-bold p-2"
								: "p-2"
							} > Hall
							</NavLink>
						</AccordionContent>
					</div>
				</AccordionItem>
				</Accordion>
				<Accordion type="single" collapsible>
					<AccordionItem value="item-2">
						<AccordionTrigger className="text-md font-normal ms-1">
							<p>Reports</p>
						</AccordionTrigger>
						<div className="ms-5">
						<AccordionContent>
							<NavLink
								to="IaaReports"
								className={({ isActive }:{isActive:boolean}) =>
								isActive
									? "bg-purple-300 border-l-4 border-l-yellow-500 text-white text-bold p-2"
									: "p-2"
								} > IAA Reports
							</NavLink>
						</AccordionContent>
						<AccordionContent>
							<NavLink to="roles"
							className={({ isActive }:{isActive:boolean}) =>
							isActive
								? "bg-purple-300 border-l-4 border-l-yellow-500 text-white text-bold p-2"
								: "p-2"
							} >Hall Booking Reports
							</NavLink>
						</AccordionContent>
					</div>
				</AccordionItem>
				</Accordion>
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
                <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              {pathSegments.map((segment, index) => {
                const breadcrumbPath = `/${pathSegments.slice(0, index + 1).join("/")}`;
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
