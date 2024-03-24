export default interface Ad {
    user: any; //pridano kvuli buildu
    id: string,
    category: string,
    location: string,
    phoneNumber: string,
    salary: number,
    section: string,
    text: string,
    userId: string | null,
}