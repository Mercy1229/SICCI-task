
import user from "./user"
export default interface loginResponse{
    status: string;
    message: string;
    data: {
        accessToken: string,
        user:user
}
}