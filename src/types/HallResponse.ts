import HallData from './hallData';
export default interface HallResponse {
    status: string;
    message: string;
    data: {
      hallRoom:HallData[];
    };
  }