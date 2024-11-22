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

export function AddArbitratorForm() {
  return (
    <Dialog>
      <DialogTrigger asChild>
      <Button className="bg-white hover:bg-blue-800 text-black hover:text-white text-md font-normal">
          Add Arbitrator
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] ">
        <DialogHeader>
          <DialogTitle>Add Arbitrator</DialogTitle>
          <DialogDescription>
            Add a new Arbitrator
          </DialogDescription>
        </DialogHeader>
        <div className="">
          <div className="">
            <Label htmlFor="arbitratorname" className="text-right font-normal">
              Arbitrator Name
            </Label>
            <Input
              id="arbitratorname"
              defaultValue=''
              className="col-span-3"
            />
          </div>
          <div className="">
            <Label htmlFor="email" className="text-right font-normal">
              Email
            </Label>
            <Input
              id="email"
              defaultValue=""
              className="col-span-3"
            />
          </div>
          <div className="">
            <Label htmlFor="loanType" className="text-right font-normal">
              Loan Type
            </Label>
            <Input
              id="loantype"
              defaultValue=""
              className="col-span-3"
            />
          </div>
          <div className="">
            <Label htmlFor="customer" className="text-right font-normal">
              customer
            </Label>
            <Input
              id="customer"
              defaultValue=""
              className="col-span-3"
            />
          </div>
          <div className="">
            <Label htmlFor="phonenumber" className="text-right font-normal">
              Phone Number
            </Label>
            <Input
              id="phonenumber"
              defaultValue=""
              className="col-span-3"
            />
          </div>
          <div className="">
            <Label htmlFor="resume" className="text-right font-normal">
              Resume
            </Label>
            <Input
            type="file"
              id="resume"
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
