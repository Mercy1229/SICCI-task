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
import { Plus } from "lucide-react"

export function AddHallForm() {
  return (
    <Dialog>
      <DialogTrigger asChild>
      <Button className="bg-white hover:bg-blue-800 text-black hover:text-white mt-12">
                  <Plus className="h-full w-full" />
                </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] ">
        <DialogHeader>
          <DialogTitle>Hall Booking - Step 1</DialogTitle>
          <DialogDescription>
            Book a Hall
          </DialogDescription>
        </DialogHeader>
        <div className="">
          <div className="">
            <Label htmlFor="name" className="text-right font-normal">
              Hall Name
            </Label>
            <Input
              id="name"
              defaultValue='vf'
              className="col-span-3"
            />
          </div>
          <div className="">
            <Label htmlFor="username" className="text-right font-normal">
              Cause Title
            </Label>
            <Input
              id="username"
              defaultValue=""
              className="col-span-3"
            />
          </div>
          <div className="">
            <Label htmlFor="username" className="text-right font-normal">
              Customer Name
            </Label>
            <Input
              id="username"
              defaultValue=""
              className="col-span-3"
            />
          </div>
          <div className="">
            <Label htmlFor="username" className="text-right font-normal">
              Hours
            </Label>
            <Input
              id="username"
              defaultValue=""
              className="col-span-3"
            />
          </div>
          <div className="">
            <Label htmlFor="username" className="text-right font-normal">
              Arbitrator Name
            </Label>
            <Input
              id="username"
              defaultValue=""
              className="col-span-3"
            />
          </div>
          <div className="">
            <Label htmlFor="username" className="text-right font-normal">
              Date
            </Label>
            <Input
              id="username"
              defaultValue=""
              className="col-span-3"
            />
          </div>
          <div className="">
            <Label htmlFor="username" className="text-right font-normal">
              Booking Party Name
            </Label>
            <Input
              id="username"
              defaultValue=""
              className="col-span-3"
            />
          </div>
          <div className="">
            <Label htmlFor="username" className="text-right font-normal">
              Booking Party Contact
            </Label>
            <Input
              id="username"
              defaultValue=""
              className="col-span-3"
            />
          </div>
          <div className="">
            <Label htmlFor="username" className="text-right font-normal">
              File
            </Label>
            <Input
              id="username"
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
