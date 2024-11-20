import LoanType from "./Loantype";
export default interface loanResponse{
    status:string,
    message:string,
    data:{
        loanTypes:LoanType[],
    }
}
