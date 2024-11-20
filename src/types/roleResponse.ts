import role from './role';
export default interface roleResponse {
    status: string;
    message: string;
    data: {
        roles:role[];
    };
  }
