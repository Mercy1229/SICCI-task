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

export function AddRoleForm() {
  return (
    <Dialog>
      <DialogTrigger asChild>
      <Button className="bg-white hover:bg-blue-800 text-black hover:text-white text-md font-normal">
          Add Role
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] ">
        <DialogHeader>
          <DialogTitle>Add Role</DialogTitle>
          <DialogDescription>
            Fill in the form below to add a new role
          </DialogDescription>
        </DialogHeader>
        <div className="">
          <div className="">
            <Label htmlFor="name" className="text-right font-normal">
              Role Name
            </Label>
            <Input
              id="name"
              defaultValue=''
              className="col-span-3"
            />
          </div>
          <div className="">
            <Label htmlFor="username" className="text-right font-normal">
              Description
            </Label>
            <Input
              id="username"
              defaultValue=""
              className="col-span-3"
            />
          </div>
          <div className="">
            <Label htmlFor="username" className="text-right font-normal">
              Page Access
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
