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
        to="/dashboard/iaa"
        className={({ isActive }: { isActive: boolean }) =>
          isActive
            ? "bg-purple-300 border-l-4 border-l-yellow-500 text-white text-bold p-5"
            : "px-2 py-4"
        }
      >
        IAA
      </NavLink>
      <NavLink
        to="/dashboard/hall"
        className={({ isActive }: { isActive: boolean }) =>
          isActive
            ? "bg-purple-300 border-l-4 border-l-yellow-500 text-white text-bold p-5"
            : "px-2 py-4"
        }
      >
        Hall Booking
      </NavLink>
      <Accordion type="single" collapsible>
        <AccordionItem value="master-tables">
          <AccordionTrigger className="text-md font-normal ms-2">
            <p>Master Tables</p>
          </AccordionTrigger>
          <div className="ms-5">
            <AccordionContent>
              <NavLink
                to="/master-table/users"
                className={({ isActive }: { isActive: boolean }) =>
                  isActive
                    ? "bg-purple-300 border-l-4 border-l-yellow-500 text-white text-bold p-5 block"
                    : "p-2 block"
                }
              >
                Users
              </NavLink>
            </AccordionContent>
            <AccordionContent>
              <NavLink
                to="/master-table/roles"
                className={({ isActive }: { isActive: boolean }) =>
                  isActive
                    ? "bg-purple-300 border-l-4 border-l-yellow-500 text-white text-bold p-5 block"
                    : "p-2 block"
                }
              >
                Roles
              </NavLink>
            </AccordionContent>
            <AccordionContent>
              <NavLink
                to="/master-table/loan-types"
                className={({ isActive }: { isActive: boolean }) =>
                  isActive
                    ? "bg-purple-300 border-l-4 border-l-yellow-500 text-white text-bold p-5 block"
                    : "p-2 block"
                }
              >
                Loan Types
              </NavLink>
            </AccordionContent>
            <AccordionContent>
              <NavLink
                to="/master-table/arbitrator"
                className={({ isActive }: { isActive: boolean }) =>
                  isActive
                    ? "bg-purple-300 border-l-4 border-l-yellow-500 text-white text-bold p-5 block"
                    : "p-2 block"
                }
              >
                Arbitrator
              </NavLink>
            </AccordionContent>
            <AccordionContent>
              <NavLink
                to="/master-table/customers"
                className={({ isActive }: { isActive: boolean }) =>
                  isActive
                    ? "bg-purple-300 border-l-4 border-l-yellow-500 text-white text-bold p-5 block"
                    : "p-2 block"
                }
              >
                Customers
              </NavLink>
            </AccordionContent>
            <AccordionContent>
              <NavLink
                to="/master-table/hall-table"
                className={({ isActive }: { isActive: boolean }) =>
                  isActive
                    ? "bg-purple-300 border-l-4 border-l-yellow-500 text-white text-bold p-5 block"
                    : "p-2 block"
                }
              >
                Hall Table
              </NavLink>
            </AccordionContent>
          </div>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="reports">
          <AccordionTrigger className="text-md font-normal ms-2">
            <p>Reports</p>
          </AccordionTrigger>
          <div className="ms-5">
            <AccordionContent>
              <NavLink
                to="/reports/iaa-reports"
                className={({ isActive }: { isActive: boolean }) =>
                  isActive
                    ? "bg-purple-300 border-l-4 border-l-yellow-500 text-white text-bold p-5 block"
                    : "p-2 block"
                }
              >
                IAA Reports
              </NavLink>
            </AccordionContent>
            <AccordionContent>
              <NavLink
                to="/reports/hall-booking-reports"
                className={({ isActive }: { isActive: boolean }) =>
                  isActive
                    ? "bg-purple-300 border-l-4 border-l-yellow-500 text-white text-bold p-5 block"
                    : "p-2 block"
                }
              >
                Hall Booking Reports
              </NavLink>
            </AccordionContent>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
