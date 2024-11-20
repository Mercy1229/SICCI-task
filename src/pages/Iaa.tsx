import axios from "axios";
import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
} from "../components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Clock } from "lucide-react";
import Customer from "@/types/Customer";
import ApiResponse from "@/types/Response";

function Iaa(){
  const url = "http://13.233.16.129:3000/api/v1/get/customers";
  const [customers, setCustomers] = useState<Customer[]>([]);

  const fetchInfo = async () => {
    try {
      const response = await axios.get<ApiResponse>(url);
      setCustomers(response.data.data.customers);
    } catch (error) {
      console.error("Error fetching customers:", error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="border shadow-md w-full m-5 p-5">
      <h1 className="text-xl font-bold text-purplecolor">IAA Transactions</h1>
      <div className="px-20 mt-5">
        <div className="w-full grid grid-cols-2 gap-5">
          {customers.map((customer) => (
            <Card key={customer._id} className="border-none shadow-md">
              <CardHeader>
                <p className="text-2xl border-b-2 pb-2 font-medium">
                  {customer.customerName}
                </p>
              </CardHeader>
              <CardContent className="flex flex-row justify-between space-x-5">
                <div className="flex flex-col ps-2 bg-green-200">
                  <p>Invoice Generated</p>
                  <p>{customer.numberOfInvoiceGenerated}</p>
                </div>
                <div className="flex flex-col ps-2 bg-pink-200">
                  <p>Invoice pending</p>
                  <p>{customer.totalIAAs}</p>
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

export default Iaa;
