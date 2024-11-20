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
import role from '../types/role';
import roleResponse from '../types/roleResponse';
  
export default function Roles(){
    const [roledata, setRoledata] = useState<role[]>([]);
    const Token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YzhhNjA4ZDRjYjUxNjM4MTllYmU2OCIsImVtYWlsIjoiamFiZXpAZW50cmFucy5pbyIsInVzZXJuYW1lIjoiamFiZXpzYW5qYXliIiwidXNlclJvbGUiOnsiX2lkIjoiNjZkZGVhNTA4YTAxNGFlODBkYmNmOWFhIiwicm9sZU5hbWUiOiJhZG1pbkFjY2VzcyIsImRlc2NyaXB0aW9uIjoiVGhpcyBjb250YWlucyBhbGwgYWNjZXNzIHRvIHRoZSBhcHBsaWNhdGlvbiIsInBhZ2VBY2Nlc3MiOlsiL2lhYS9kYXNoYm9hcmQiLCIvaGFsbC1ib29raW5nIiwiL21hc3Rlci10YWJsZS91c2VyIiwiL21hc3Rlci10YWJsZS9yb2xlIiwiL21hc3Rlci10YWJsZS9sb2FuLXR5cGUiLCIvbWFzdGVyLXRhYmxlL2N1c3RvbWVyIiwiL21hc3Rlci10YWJsZS9hcmJpdHJhdG9yIiwiL2lhYS9yZXBvcnQiLCIvbWFzdGVyLXRhYmxlL2hhbGwtcm9vbSIsIi9oYWxsLWJvb2tpbmcvcmVwb3J0IiwiL2Rhc2hib2FyZCJdLCJpc0FjdGl2ZSI6dHJ1ZSwidXBkYXRlZEF0IjoiMjAyNC0xMC0yNFQxNzoxNzo1NC42MDhaIn0sImlhdCI6MTczMTkyNTI4OSwiZXhwIjoxNzM0NTE3Mjg5fQ.dXzHvmxFvdRcWzXmWzT7fKbYExW9UGN-iqpX_FK6TGs';
    // console.log(Token)
   
  const fetchInfo = async () => {
    try {
        const res = await axios.get<roleResponse>('http://13.233.16.129:3000/api/v1/get/roles', {
            headers: {
              Authorization: `Bearer ${Token}`,
            },
          });
      console.log(res.data);
      setRoledata(res.data.data.roles);
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
            <h1 className="text-xl font-bold text-purplecolor mb-5">Role</h1>
            <Button className='bg-white hover:bg-blue-800 text-black hover:text-white text-md font-normal'>Add Role</Button>
            </div>
            <Table>
            <TableCaption>A list of all roles.</TableCaption>
            <TableHeader>
                <TableRow>
                <TableHead>Role Name</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>isActive?</TableHead>
                <TableHead>Action</TableHead>
                </TableRow>
        </TableHeader>
        {roledata.map((role)=>{
            return(
        <TableBody>
            <TableRow>
            <TableCell className="">{role.roleName}</TableCell>
            <TableCell>{role.description}</TableCell>
            <TableCell>{`${role.isActive==true ?'Yes':'no'}`}</TableCell>
            <TableCell className='flex flex-row space-x-5'>
                <Button className='bg-white hover:bg-blue-800 text-black hover:text-white my-3'>Edit</Button>
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