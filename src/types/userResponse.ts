import user from './user';
export default interface userResponse {
    status: string;
    message: string;
    data: {
        users:user[];
    };
  }
