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
import LoanType from "../types/Loantype";
import loanResponse from "../types/loanResponse";
import { AddloanTypeForm } from "@/components/addLoantypeForm";
import TablePagination from "@/components/tablepagination";

export default function LoanTypes() {
  const [Loandata, setLoandata] = useState<LoanType[]>([]);
  const token = JSON.parse(localStorage.getItem("accessToken") || "");

  const fetchInfo = async () => {
    try {
      const loanResponse = await axios.get<loanResponse>(
        "http://13.233.16.129:3000/api/v1/get/loan-types",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(loanResponse.data);
      setLoandata(loanResponse.data.data.loanTypes);
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
        <h1 className="text-xl font-bold text-purplecolor mb-5">Loan Types</h1>
        <AddloanTypeForm />
      </div>

      <Table>
        <TableCaption>A list of all Loan Types.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Loan Type Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>isActive?</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        {Loandata.map((loan) => {
          return (
            <TableBody>
              <TableRow>
                <TableCell className="">{loan.loanTypeName}</TableCell>
                <TableCell>{loan.description}</TableCell>
                <TableCell>{`${
                  loan.isActive == true ? "Yes" : "no"
                }`}</TableCell>
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
