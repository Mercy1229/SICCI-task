import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "./ui/input"
import { Label } from "@/components/ui/label"

export function AddloanTypeForm() {
  return (
    <Dialog>
      <DialogTrigger asChild>
      <Button className="bg-white hover:bg-blue-800 text-black hover:text-white text-md font-normal">
          Add Loan Type
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] ">
        <DialogHeader>
          <DialogTitle>Add Loan Type</DialogTitle>
          <DialogDescription>
            Add a new loan type
          </DialogDescription>
        </DialogHeader>
        <div className="">
          <div className="">
            <Label htmlFor="loantypename" className="text-right font-normal">
              Loan Type Name
            </Label>
            <Input
              id="name"
              defaultValue=''
              className="col-span-3 hover:border-purple-800"
            />
          </div>
          <div className="">
            <Label htmlFor="description" className="text-right font-normal">
              Description
            </Label>
            <Input
              id="description"
              defaultValue=""
              className="col-span-3"
            />
          </div>
          
        </div>
        <DialogFooter>
          <Button type="submit" className="bg-purple-900 text-white hover:bg-purple-700">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
