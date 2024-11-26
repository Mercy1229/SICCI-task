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
import user from "../types/user";
import userResponse from "../types/userResponse";
import { AddUserForm } from "@/components/addUserForm";
import TablePagination from "@/components/tablepagination";

export default function Users() {
  const [userdata, setUserdata] = useState<user[]>([]);
  const token = JSON.parse(localStorage.getItem("accessToken") || "");
  const fetchInfo = async () => {
    try {
      const userResponse = await axios.get<userResponse>(
        "http://13.233.16.129:3000/api/v1/get/users",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(userResponse.data);
      setUserdata(userResponse.data.data.users);
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
        <h1 className="text-xl font-bold text-purplecolor mb-5">User</h1>
        <AddUserForm />
      </div>
      <Table>
        <TableCaption>A list of all users.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>UserName</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        {userdata.map((user) => {
          return (
            <TableBody>
              <TableRow>
                <TableCell className="">{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.userRole.roleName}</TableCell>
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
