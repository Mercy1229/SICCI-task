import IaaTransactions from "./IaaTransactions";
export default interface IaaTransactionsResponse {
    status: string;
    message: string;
    data: {
        iaaTransactions:IaaTransactions[];
    };
  }
