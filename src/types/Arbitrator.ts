import LoanType from "./Loantype"
import Customer from "./Customer"
export default interface Arbitrator{
    _id: string,
    arbitratorName: string,
    loanType: LoanType[];
    email: string,
    resume: any,
    mobileNumber: string,
    customers:Customer,
    createdAt: string,
    updatedAt: string,
    __v:number
}