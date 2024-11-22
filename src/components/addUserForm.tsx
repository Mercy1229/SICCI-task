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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Input } from "./ui/input"
import { Label } from "@/components/ui/label"

export function AddUserForm() {
  return (
    <Dialog>
      <DialogTrigger asChild>
      <Button className="bg-white hover:bg-blue-800 text-black hover:text-white text-md font-normal">
          Add User
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] ">
        <DialogHeader>
          <DialogTitle>Add User</DialogTitle>
          <DialogDescription>
            Fill in the form below to add a new user
          </DialogDescription>
        </DialogHeader>
        <div className="">
          <div className="">
            <Label htmlFor="name" className="text-right font-normal">
              UserName
            </Label>
            <Input
              id="name"
              defaultValue=''
              className="col-span-3"
            />
          </div>
          <div className="">
            <Label htmlFor="username" className="text-right font-normal">
              Email
            </Label>
            <Input
              id="username"
              defaultValue=""
              className="col-span-3"
            />
          </div>
          <div className="">
            <Label htmlFor="username" className="text-right font-normal">
              User Role
            </Label>
            <Select>
  <SelectTrigger className="w-full">
    <SelectValue placeholder="" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="Admin access">Admin access</SelectItem>
    <SelectItem value="Tally access">Tally access</SelectItem>
    <SelectItem value="ADRC">ADRC</SelectItem>
    <SelectItem value="vinod solomom">vinod solomon</SelectItem>
    <SelectItem value="Inbavijayan">GrowXcd</SelectItem>
  </SelectContent>
</Select>
          </div>
          <div className="">
            <Label htmlFor="username" className="text-right font-normal">
              Password
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
