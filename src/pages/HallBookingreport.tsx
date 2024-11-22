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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import hallBooking from "@/types/hallBooking";
import hallBookingResponse from "@/types/hallBookingResponse";
import { DatePickerDemo } from "./datePicker";

export default function HallBookingReport() {
  const [hallbooking, setHallbooking] = useState<hallBooking[]>([]);
  const token = JSON.parse(localStorage.getItem("accessToken") || "");
  const fetchInfo = async () => {
    try {
      const hallBookingResponse = await axios.get<hallBookingResponse>(
        "http://13.233.16.129:3000/api/v1/get/hall-booking",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(hallBookingResponse.data);
      setHallbooking(hallBookingResponse.data.data.hallBooking);
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
        <h1 className="text-xl font-bold text-purplecolor mb-5">Hall Booking Report</h1>
        <div className="flex flex-row space-x-4">
          <DatePickerDemo />
        <Button className="bg-purplecolor hover:bg-blue-800 text-white hover:text-white text-md font-normal">
         clear
        </Button>
        </div>
        
      </div>

      <Table>
        <TableCaption>list of all Iaa Transactions.</TableCaption>
        <TableHeader>
        <TableRow>
            <TableHead>Cause Title</TableHead>
            <TableHead>customer Name</TableHead>
            <TableHead>Booking Party Name</TableHead>
            <TableHead>Arbitrator Name</TableHead>
            <TableHead>Hours</TableHead>
            <TableHead>Total Price</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        {hallbooking.map((data) => {
          return (
            <TableBody>
                <TableRow>
          <TableCell>{data.causeTitle}
          </TableCell>
          <TableCell>{data.customerName}</TableCell>
          <TableCell className="">{data.bookingPartyName}</TableCell>
          <TableCell className="">{data.arbitratorName}</TableCell>
          <TableCell className="">{data.hours}</TableCell>
          <TableCell className="">{data.totalPrice}</TableCell>
          <TableCell className="">{data.bookingDate}</TableCell>
          <TableCell className="">{data.status}</TableCell>
        </TableRow>
            </TableBody>
          );
        })}
      </Table>
    </div>
  );
}
        