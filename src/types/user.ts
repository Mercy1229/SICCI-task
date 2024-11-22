import role from "./role"

export default interface user{
                    _id: string,
                    username: string,
                    email: string,
                    password: string,
                    userRole: role,
            isActivated: boolean,
            isAccountLocked: boolean,
            noOfTimesLoggedIn: number,
            createdAt: string,
           updatedAt: string,
            __v: number,
            lastLoginTime: string
        }
        