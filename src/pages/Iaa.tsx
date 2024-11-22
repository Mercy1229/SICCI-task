import axios from "axios";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import Customer from "@/types/Customer";
import ApiResponse from "@/types/Response";
import { DialogDemo } from "@/components/addIAAForm";
import { Link } from "react-router-dom";




function Iaa() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const token = JSON.parse(localStorage.getItem("accessToken") || "");
  const fetchInfo = async () => {
    try {
      const iaaresponse = await axios.get<ApiResponse>(
        "http://13.233.16.129:3000/api/v1/get/customers",
        {
          headers: {
            Authorization: `Barear ${token}`,
          },
        }
      );
      setCustomers(iaaresponse.data.data.customers);
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
                
  {/* <Button className="bg-white hover:bg-blue-800 text-black hover:text-white mt-12">
                  <Plus className="h-full w-full" />
                </Button> */}
 <DialogDemo />

                
                <Button className="bg-white hover:bg-blue-800 text-black hover:text-white mt-12">
                  <Clock className="h-full w-full" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="flex justify-end mt-16 mb-2">
        <Link to='hall'>
        <Button type="submit" className="bg-purple-800 hover:bg-purple-500">Next</Button>
        </Link>
        
      </div>  
    </div>
  );
}

export default Iaa;
