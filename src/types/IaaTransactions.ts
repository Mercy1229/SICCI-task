import Costdata from "./costdata"
import Customer from "./Customer"
import fileData from "./fileData"
import LoanType from "./Loantype"

export default interface IaaTransactions{
    _id: string,
    customer: Customer,
    batchNumber: string,
    loanType: LoanType[],
    date: string,
    file: any,
    remarks: string,
    fileLotData:fileData[]
    costData: Costdata[]
    status: string,
    paymentStatus: string,
    createdAt: string,
    updatedAt: string,
    __v: number,
    generatedInvoice: string,
    generatedInvoiceDate: string,
    generatedInvoiceNumber: string,
}