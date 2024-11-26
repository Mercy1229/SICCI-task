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
import Arbitrator from "@/types/Arbitrator";
import arbitratorResponse from "@/types/arbitratorResponse";
import { AddArbitratorForm } from "@/components/addArbitratorForm";
import TablePagination from "@/components/tablepagination";

export default function ArbitratorTable() {
  const [arbitrator, setArbitrator] = useState<Arbitrator[]>([]);
  const token = JSON.parse(localStorage.getItem("accessToken") || "");
  const fetchInfo = async () => {
    try {
      const arbitratorresponse = await axios.get<arbitratorResponse>(
        "http://13.233.16.129:3000/api/v1/get/arbitrators",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(arbitratorresponse.data);
      setArbitrator(arbitratorresponse.data.data.arbitrators);
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
        <h1 className="text-xl font-bold text-purplecolor mb-5">Arbitrator</h1>
        <AddArbitratorForm />
      </div>
      <Table>
        <TableCaption>A list of all Arbitrators.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Arbitrator Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Loan Type</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        {arbitrator.map((data) => {
          return (
            <TableBody>
              <TableRow>
                <TableCell className="">{data.arbitratorName}</TableCell>
                <TableCell>{data.email}</TableCell>
                <TableCell>
                  {data.loanType.map((d) => {
                    return <p>{d.loanTypeName}</p>;
                  })}
                </TableCell>
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
