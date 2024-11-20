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
import HallResponse from '@/types/HallResponse';
import HallData from '@/types/hallData';

export default function HallTable(){
    const [customer, setCustomer] = useState<HallData[]>([]);
    const Token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MWI2ZmRmZDMwMTExYjYyYzc1NGE0MCIsImVtYWlsIjoiYmhhdmFuaUBzaWNjaS5pbiIsInVzZXJuYW1lIjoiQmhhdmFuaSBTSUNDSSIsInVzZXJSb2xlIjp7Il9pZCI6IjY2ZGRlYTUwOGEwMTRhZTgwZGJjZjlhYSIsInJvbGVOYW1lIjoiQmhhdmFuaSBTYW1hcmFvIiwiZGVzY3JpcHRpb24iOiJBZG1pbiBBY2NjZXNzIiwicGFnZUFjY2VzcyI6WyIvaWFhL2Rhc2hib2FyZCIsIi9oYWxsLWJvb2tpbmciLCIvbWFzdGVyLXRhYmxlL3VzZXIiLCIvbWFzdGVyLXRhYmxlL3JvbGUiLCIvbWFzdGVyLXRhYmxlL2xvYW4tdHlwZSIsIi9tYXN0ZXItdGFibGUvYXJiaXRyYXRvciIsIi9tYXN0ZXItdGFibGUvY3VzdG9tZXIiLCIvaWFhL3JlcG9ydCIsIi9tYXN0ZXItdGFibGUvaGFsbC1yb29tIiwiL2hhbGwtYm9va2luZy9yZXBvcnQiXSwiaXNBY3RpdmUiOnRydWUsInVwZGF0ZWRBdCI6IjIwMjQtMTEtMTlUMDg6NTY6MzcuMTMzWiJ9LCJpYXQiOjE3MzIwMTAxNTYsImV4cCI6MTczNDYwMjE1Nn0.NnmXoZW_xllmNlvbipVBO9z9k2-JLrKbmsLbZxKYY-A';
    const fetchInfo = async () => {
        try {
            const res = await axios.get<HallResponse>('http://13.233.48.88:8080/api/v1/get/hall-rooms', {
                headers: {
                Authorization: `Bearer ${Token}`,
                },
            });
            setCustomer(res.data.data.hallRoom);
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
                <h1 className="text-xl font-bold text-purplecolor mb-5">Halls</h1>
                <Button className='bg-white hover:bg-blue-800 text-black hover:text-white text-md font-normal'>Add Halls</Button>
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
            {customer.map((data)=>{
                return(
                    <TableBody>
                        <TableRow>
                            <TableCell className="">{data.roomName}</TableCell>
                            <TableCell>{data.description}</TableCell>
                            <TableCell>{data.oneHour}</TableCell>
                            <TableCell>{data.halfDay}</TableCell>
                            <TableCell>{data.fullDay}</TableCell>
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