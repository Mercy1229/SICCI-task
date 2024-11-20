import Customer from "./Customer";
export default interface customerResponse{
    status:string,
    message:string,
    data:{
        customers:Customer[]
    }
}