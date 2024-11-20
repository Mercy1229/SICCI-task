import LoanType from "./Loantype";
export default interface Customer {
    _id: string;
    customerName: string;
    image: string;
    mobileNumber: string;
    arbitrator: any[];
    loanType: LoanType[];
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    totalIAAs: number;
    numberOfInvoiceGenerated: number;
  }
  