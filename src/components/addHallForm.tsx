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

export function AddHallForm() {
  return (
    <Dialog>
      <DialogTrigger asChild>
      <Button className="bg-white hover:bg-blue-800 text-black hover:text-white text-md font-normal">
          Add Hall
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] ">
        <DialogHeader>
          <DialogTitle>Add Hall</DialogTitle>
          <DialogDescription>
            Add a new Hall
          </DialogDescription>
        </DialogHeader>
        <div className="">
          <div className="">
            <Label htmlFor="hallname" className="text-right font-normal">
              Hall Name
            </Label>
            <Input
              id="hallname"
              defaultValue=''
              className="col-span-3"
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
          <div className="">
            <Label htmlFor="onehour" className="text-right font-normal">
            One Hour Price
            </Label>
            <Input
              id="one hour"
              defaultValue=""
              className="col-span-3"
            />
          </div>
          <div className="halfday">
            <Label htmlFor="loanType" className="text-right font-normal">
              Half Day Price
            </Label>
            <Input
              id="halfday"
              defaultValue=""
              className="col-span-3"
            />
          </div>
          <div className="">
            <Label htmlFor="fullday" className="text-right font-normal">
              Full Day price
            </Label>
            <Input
              id="fullday"
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



