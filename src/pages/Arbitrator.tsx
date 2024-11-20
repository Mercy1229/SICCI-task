import React from 'react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { useState,useEffect } from 'react';
  import axios from 'axios';
import { Button } from '@/components/ui/button';
import Arbitrator from '@/types/Arbitrator';
import arbitratorResponse from '@/types/arbitratorResponse';

export default function ArbitratorTable(){
    const [arbitrator, setArbitrator] = useState<Arbitrator[]>([]);
    const Token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MWI2ZmRmZDMwMTExYjYyYzc1NGE0MCIsImVtYWlsIjoiYmhhdmFuaUBzaWNjaS5pbiIsInVzZXJuYW1lIjoiQmhhdmFuaSBTSUNDSSIsInVzZXJSb2xlIjp7Il9pZCI6IjY2ZGRlYTUwOGEwMTRhZTgwZGJjZjlhYSIsInJvbGVOYW1lIjoiQmhhdmFuaSBTYW1hcmFvIiwiZGVzY3JpcHRpb24iOiJBZG1pbiBBY2NjZXNzIiwicGFnZUFjY2VzcyI6WyIvaWFhL2Rhc2hib2FyZCIsIi9oYWxsLWJvb2tpbmciLCIvbWFzdGVyLXRhYmxlL3VzZXIiLCIvbWFzdGVyLXRhYmxlL3JvbGUiLCIvbWFzdGVyLXRhYmxlL2xvYW4tdHlwZSIsIi9tYXN0ZXItdGFibGUvYXJiaXRyYXRvciIsIi9tYXN0ZXItdGFibGUvY3VzdG9tZXIiLCIvaWFhL3JlcG9ydCIsIi9tYXN0ZXItdGFibGUvaGFsbC1yb29tIiwiL2hhbGwtYm9va2luZy9yZXBvcnQiXSwiaXNBY3RpdmUiOnRydWUsInVwZGF0ZWRBdCI6IjIwMjQtMTEtMTlUMDg6NTY6MzcuMTMzWiJ9LCJpYXQiOjE3MzIwMTAxNTYsImV4cCI6MTczNDYwMjE1Nn0.NnmXoZW_xllmNlvbipVBO9z9k2-JLrKbmsLbZxKYY-A';
  const fetchInfo = async () => {
    try {
        const res = await axios.get<arbitratorResponse>('http://13.233.16.129:3000/api/v1/get/arbitrators', {
            headers: {
              Authorization: `Bearer ${Token}`,
            },
          });
      console.log(res.data);
      setArbitrator(res.data.data.arbitrators);
    } catch (error) {
      console.error("Error fetching hall:", error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);
    return(
        <div className="border shadow-md w-full m-5 p-5">
            <div className='flex flex-row justify-between'>
            <h1 className="text-xl font-bold text-purplecolor mb-5">Arbitrator</h1>
            <Button className='bg-white hover:bg-blue-800 text-black hover:text-white text-md font-normal'>Add Arbitrator</Button>
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
        {arbitrator.map((data)=>{
            return(
        <TableBody>
            <TableRow>
            <TableCell className="">{data.arbitratorName}</TableCell>
            <TableCell>{data.email}</TableCell>
            <TableCell>{data.loanType.map((d)=>{return(
                <p>{d.loanTypeName}</p>
            )})}</TableCell>
            <TableCell className='flex flex-row space-x-5'>
                <Button className='bg-white hover:bg-blue-800 text-black hover:text-white my-3' >Edit</Button>
                <Button className='bg-white hover:bg-blue-800 text-black hover:text-white my-3'>Delete</Button>
            </TableCell>
            </TableRow>
        </TableBody>
            )
        })}
        
        </Table>

        </div>
    )
}