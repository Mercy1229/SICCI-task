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
import HallResponse from "@/types/HallResponse";
import HallData from "@/types/hallData";
import { AddHallForm } from "@/components/addHallForm";
import TablePagination from "@/components/tablepagination";

export default function HallTable() {
  const [customer, setCustomer] = useState<HallData[]>([]);
  const token = JSON.parse(localStorage.getItem("accessToken") || "");
  const fetchInfo = async () => {
    try {
      const hallTableResponse = await axios.get<HallResponse>(
        "http://13.233.48.88:8080/api/v1/get/hall-rooms",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCustomer(hallTableResponse.data.data.hallRoom);
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
        <h1 className="text-xl font-bold text-purplecolor mb-5">Halls</h1>
        <AddHallForm />
      </div>

      <Table>
        <TableCaption>A list of all Halls.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Hall Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>One Hour</TableHead>
            <TableHead>Half Day</TableHead>
            <TableHead>Full Day</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        {customer.map((data) => {
          return (
            <TableBody>
              <TableRow>
                <TableCell className="">{data.roomName}</TableCell>
                <TableCell>{data.description}</TableCell>
                <TableCell>{data.oneHour}</TableCell>
                <TableCell>{data.halfDay}</TableCell>
                <TableCell>{data.fullDay}</TableCell>
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
