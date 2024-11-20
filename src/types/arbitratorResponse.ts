import Arbitrator from "./Arbitrator";
export default interface arbitratorResponse{
    status:string,
    message:string,
    data:{
        arbitrators:Arbitrator[],
    }
}