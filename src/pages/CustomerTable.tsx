import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import Customer from "@/types/Customer";
import customerResponse from "@/types/CustomerResponse";
import { AddCustomerForm } from "@/components/addCustomerForm";
import TablePagination from "@/components/tablepagination";

export default function CustomerTable() {
  const [customer, setCustomer] = useState<Customer[]>([]);
  const token = JSON.parse(localStorage.getItem("accessToken") || "");
  const fetchInfo = async () => {
    try {
      const customerresponse = await axios.get<customerResponse>(
        "http://13.233.16.129:3000/api/v1/get/customers",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(customerresponse.data);
      setCustomer(customerresponse.data.data.customers);
    } catch (error) {
      console.error("Error fetching hall:", error);
    }
  };
  useEffect(() => {
    fetchInfo();
  }, []);
  return (
    <div className="border shadow-md w-full m-5 p-5">
      <div className="flex flex-row justify-between">
        <h1 className="text-xl font-bold text-purplecolor mb-5">Customer</h1>
        <AddCustomerForm />
      </div>
      <Table>
        <TableCaption>A list of all Customers.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Customer Name</TableHead>
            <TableHead>Loan Type</TableHead>
            <TableHead>Phone Number</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        {customer.map((data) => {
          return (
            <TableBody>
              <TableRow>
                <TableCell className="">{data.customerName}</TableCell>
                <TableCell className="flex flex-row space-x-1">
                  {data.loanType.map((d) => {
                    return <p>{d.loanTypeName} </p>;
                  })}
                </TableCell>
                <TableCell>{data.mobileNumber}</TableCell>
                <TableCell className="flex flex-row space-x-5">
                  <Button className="bg-white hover:bg-blue-800 text-black hover:text-white my-3">
                    Edit
                  </Button>
                  <Button className="bg-white hover:bg-blue-800 text-black hover:text-white my-3">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          );
        })}
      </Table>
      <TablePagination />
    </div>
  );
}
