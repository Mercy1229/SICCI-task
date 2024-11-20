export default interface HallData{
    _id: string,
     roomName: string,
     description: string,
     oneHour: number,
     fourHour: number,
     halfDay: number,
     fullDay: number,
     isActive: boolean,
     createdAt: string,
     updatedAt: string,
     __v: any,
     paymentPendingBookings: number,
     paymentReceivedBookings: number
 }
 