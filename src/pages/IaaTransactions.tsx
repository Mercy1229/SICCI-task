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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import IaaTransactions from "@/types/IaaTransactions";
import IaaTransactionsResponse from "@/types/IaatransactionsResponse";
import Customer from "@/types/Customer";
import customerResponse from "@/types/CustomerResponse";

export default function IaaReportTable() {
  const [transactions, setTransactions] = useState<IaaTransactions[]>([]);
  const [customer,setCustomer]=useState<Customer[]>([]);
  const token = JSON.parse(localStorage.getItem("accessToken") || "");
  const fetchInfo = async () => {
    try {
      const iaaResponse = await axios.get<IaaTransactionsResponse>(
        "http://13.233.16.129:3000/api/v1/get/iaa-transactions",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(iaaResponse.data);
      setTransactions(iaaResponse.data.data.iaaTransactions);
    } catch (error) {
      console.error("Error fetching hall:", error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);
  const fetchcustomerInfo = async () => {
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
    fetchcustomerInfo();
  }, []);
  return (
    <div className="border shadow-md w-full m-5 p-5">
      <div className="flex flex-row justify-between">
        <h1 className="text-xl font-bold text-purplecolor mb-5">Iaa Report</h1>
        <div className="flex flex-row space-x-4">
        <Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select Customer" />
  </SelectTrigger>
  <SelectContent>
    {customer.map((data)=>{
      return(
<SelectItem value={data.customerName}>{data.customerName}</SelectItem>
      )
    })}
  </SelectContent>
</Select>

        <Button className="bg-purplecolor hover:bg-blue-800 text-white hover:text-white text-md font-normal">
         filter
        </Button>
        </div>
        
      </div>

      <Table>
        <TableCaption>list of all Iaa Transactions.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Batch no</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Loan Type</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Pending</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        {transactions.map((data) => {
          return (
            <TableBody>
              <TableRow>
                <TableCell className="">{data.batchNumber}</TableCell>
                <TableCell>
                  {data.customer ? data.customer.customerName : " "}
                </TableCell>
                <TableCell>{data.loanType.loanTypeName}</TableCell>
                <TableCell>{data.date}</TableCell>
                <TableCell>{data.status}</TableCell>
                <TableCell>{data.paymentStatus}</TableCell>
                <TableCell className="flex flex-row space-x-5">
                  <Button className="bg-white hover:bg-blue-800 text-black hover:text-white my-3">
                    view
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          );
        })}
      </Table>
    </div>
  );
}
