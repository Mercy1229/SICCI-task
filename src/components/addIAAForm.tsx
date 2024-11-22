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

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
      <Button className="bg-white hover:bg-blue-800 text-black hover:text-white mt-12">
                  <Plus className="h-full w-full" />
                </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] ">
        <DialogHeader>
          <DialogTitle>Add IAA - Step 1</DialogTitle>
          <DialogDescription>
            Add a new IAA
          </DialogDescription>
        </DialogHeader>
        <div className="">
          <div className="">
            <Label htmlFor="name" className="text-right font-normal">
              Customer Name
            </Label>
            <Input
              id="name"
              defaultValue=''
              className="col-span-3"
            />
          </div>
          <div className="">
            <Label htmlFor="username" className="text-right font-normal">
              Batch/Lot No
            </Label>
            <Input
              id="username"
              defaultValue=""
              className="col-span-3"
            />
          </div>
          <div className="">
            <Label htmlFor="username" className="text-right font-normal">
              Loan Type
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
              Remarks
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
