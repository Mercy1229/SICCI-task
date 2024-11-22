import hallBooking from "./hallBooking"

export default interface hallBookingResponse{
    status:string,
    message:string,
    data:{
        hallBooking:hallBooking[]
    }
}