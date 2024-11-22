import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  import { NavLink } from "react-router-dom";
  import React from "react";
  
  export default function NavLinks() {
    return (
      <div className="flex flex-col leading-none">
        <NavLink
          to="Iaa"
          className={({ isActive }: { isActive: boolean }) =>
            isActive
              ? "bg-purple-300 border-l-4 border-l-yellow-500 text-white text-bold p-5"
              : "p-2"
          }
        >
          IAA
        </NavLink>
        <NavLink
          to="hall"
          className={({ isActive }: { isActive: boolean }) =>
            isActive
              ? "bg-purple-300 border-l-4 border-l-yellow-500 text-white text-bold p-5"
              : "p-2"
          }
        >
          Hall Booking
        </NavLink>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-md font-normal ms-1">
              <p>MasterTables</p>
            </AccordionTrigger>
            <div className="ms-5">
              <AccordionContent>
                <div className="flex w-full">
                  <NavLink
                    to="user"
                    className={({ isActive }: { isActive: boolean }) =>
                      isActive
                        ? "bg-purple-300 border-l-4 border-l-yellow-500 text-white text-bold p-5 w-full block"
                        : "p-2 w-full block"
                    }
                  >
                    User
                  </NavLink>
                </div>
              </AccordionContent>
              <AccordionContent>
                <div className="flex w-full">
                  <NavLink
                    to="roles"
                    className={({ isActive }: { isActive: boolean }) =>
                      isActive
                        ? "bg-purple-300 border-l-4 border-l-yellow-500 text-white text-bold p-5 w-full block"
                        : "p-2 w-full block"
                    }
                  >
                    Role
                  </NavLink>
                </div>
              </AccordionContent>
              <AccordionContent>
                <div className="flex w-full">
                  <NavLink
                    to="loanTypes"
                    className={({ isActive }: { isActive: boolean }) =>
                      isActive
                        ? "bg-purple-300 border-l-4 border-l-yellow-500 text-white text-bold p-5 w-full block"
                        : "p-2 w-full block"
                    }
                  >
                    Loan Type
                  </NavLink>
                </div>
              </AccordionContent>
              <AccordionContent>
                <div className="flex w-full">
                  <NavLink
                    to="arbitrator"
                    className={({ isActive }: { isActive: boolean }) =>
                      isActive
                        ? "bg-purple-300 border-l-4 border-l-yellow-500 text-white text-bold p-5 w-full block"
                        : "p-2 w-full block"
                    }
                  >
                    Arbitrator
                  </NavLink>
                </div>
              </AccordionContent>
              <AccordionContent>
                <div className="flex w-full">
                  <NavLink
                    to="customers"
                    className={({ isActive }: { isActive: boolean }) =>
                      isActive
                        ? "bg-purple-300 border-l-4 border-l-yellow-500 text-white text-bold p-5 w-full block"
                        : "p-2 w-full block"
                    }
                  >
                    Customer
                  </NavLink>
                </div>
              </AccordionContent>
              <AccordionContent>
                <div className="flex w-full">
                  <NavLink
                    to="hallTable"
                    className={({ isActive }: { isActive: boolean }) =>
                      isActive
                        ? "bg-purple-300 border-l-4 border-l-yellow-500 text-white text-bold p-5 w-full block"
                        : "p-2 w-full block"
                    }
                  >
                    Hall
                  </NavLink>
                </div>
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
                <div className="flex w-full">
                  <NavLink
                    to="iaa-reports"
                    className={({ isActive }: { isActive: boolean }) =>
                      isActive
                        ? "bg-purple-300 border-l-4 border-l-yellow-500 text-white text-bold p-5 w-full block"
                        : "p-2 w-full block"
                    }
                  >
                    IAA Reports
                  </NavLink>
                </div>
              </AccordionContent>
              <AccordionContent>
                <div className="flex w-full">
                  <NavLink
                    to="hall-booking-report"
                    className={({ isActive }: { isActive: boolean }) =>
                      isActive
                        ? "bg-purple-300 border-l-4 border-l-yellow-500 text-white text-bold p-5 w-full block"
                        : "p-2 w-full block"
                    }
                  >
                    Hall Booking Reports
                  </NavLink>
                </div>
              </AccordionContent>              
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    );
  }
  

