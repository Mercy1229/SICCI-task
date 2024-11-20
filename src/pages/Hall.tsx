import axios from "axios";
import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
} from "../components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Clock } from "lucide-react";
import HallData from '../types/hallData'
import HallResponse from "@/types/HallResponse";

function Hallplan(){
  const [hall, setHall] = useState<HallData[]>([]);
  const fetchInfo = async () => {
    try {
      const response = await axios.get<HallResponse>('http://13.233.16.129:3000/api/v1/get/hall-rooms');
      setHall(response.data.data.hallRoom);
      console.log(hall)
    } catch (error) {
      console.error("Error fetching hall:", error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="border shadow-md w-full m-5 p-5">
      <h1 className="text-xl font-bold text-purplecolor">Hall Booking</h1>
      <div className="px-20 mt-5">
        <div className="w-full grid grid-cols-2 gap-5">
          {hall.map((hall) => (
            <Card key={hall._id} className="border-none shadow-md">
              <CardHeader>
                <p className="text-2xl border-b-2 pb-2 font-medium">
                  {hall.roomName}
                </p>
              </CardHeader>
              <CardContent className="flex flex-row justify-between space-x-5">
                <div className="flex flex-col ps-2 bg-green-200">
                  <p>{hall.paymentPendingBookings}</p>
                  <p>Payment pending</p>
                </div>
                <div className="flex flex-col ps-2 bg-pink-200">
                  <p>{hall.paymentReceivedBookings}</p>
                  <p>payment Received</p>
                </div>
                <Button className="bg-white hover:bg-blue-800 text-black hover:text-white mt-12">
                  <Plus className="h-full w-full" />
                </Button>
                <Button className="bg-white hover:bg-blue-800 text-black hover:text-white mt-12">
                  <Clock className="h-full w-full" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hallplan;
