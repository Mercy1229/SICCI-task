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
import TablePagination from "@/components/tablepagination";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import role from "../types/role";
import roleResponse from "../types/roleResponse";
import { AddRoleForm } from "@/components/addRoleForm";

export default function Roles() {
  const [roledata, setRoledata] = useState<role[]>([]);
  const token = JSON.parse(localStorage.getItem("accessToken") || "");
  const fetchInfo = async () => {
    try {
      const res = await axios.get<roleResponse>(
        "http://13.233.16.129:3000/api/v1/get/roles",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data);
      setRoledata(res.data.data.roles);
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
        <h1 className="text-xl font-bold text-purplecolor mb-5">Role</h1>
        <AddRoleForm />
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
        {roledata.map((role) => {
          return (
            <TableBody>
              <TableRow>
                <TableCell className="">{role.roleName}</TableCell>
                <TableCell>{role.description}</TableCell>
                <TableCell>{`${
                  role.isActive == true ? "Yes" : "no"
                }`}</TableCell>
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
