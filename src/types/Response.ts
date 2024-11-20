import Customer from "./Customer";

export default interface ApiResponse {
    status: string;
    message: string;
    data: {
      customers: Customer[];
    };
  }
  