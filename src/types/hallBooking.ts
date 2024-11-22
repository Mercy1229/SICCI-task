export default interface hallBooking
            {
                _id: string,
                hallId: string,
                bookingDate: string,
                causeTitle: string,
                customerName: string,
                hours: string,
                arbitratorName: string,
                bookingPartyName: string,
                bookingPartyContact: string,
                totalPrice: number,
                requiredAccessories: any[],
                extraCharges: null,
                purposeOfHearing: string,
                status: string,
                createdAt: string,
                updatedAt: string,
                __v: number
            }