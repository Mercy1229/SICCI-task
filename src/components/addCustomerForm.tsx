import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "./ui/input";
import { Label } from "@/components/ui/label";

export function AddCustomerForm() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-white hover:bg-blue-800 text-black hover:text-white text-md font-normal">
          Add Customer
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] ">
        <DialogHeader>
          <DialogTitle>Add Customer</DialogTitle>
          <DialogDescription>Add a new Customer</DialogDescription>
        </DialogHeader>
        <div className="">
          <div className="">
            <Label htmlFor="customername" className="text-right font-normal">
              Customer Name
            </Label>
            <Input id="customername" defaultValue="" className="col-span-3" />
          </div>
          <div className="">
            <Label htmlFor="phonenumber" className="text-right font-normal">
              Phone Number
            </Label>
            <Input id="phonenumber" defaultValue="" className="col-span-3" />
          </div>
          <div className="">
            <Label htmlFor="arbitrator" className="text-right font-normal">
              Arbitrator
            </Label>
            <Input id="arbitrator" defaultValue="" className="col-span-3" />
          </div>
          <div className="">
            <Label htmlFor="loanType" className="text-right font-normal">
              Loan Type
            </Label>
            <Input id="loantype" defaultValue="" className="col-span-3" />
          </div>
          <div className="">
            <Label htmlFor="image" className="text-right font-normal">
              Image
            </Label>
            <Input
              type="file"
              id="image"
              defaultValue=""
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            className="bg-purple-900 text-white hover:bg-purple-700"
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
