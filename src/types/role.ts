export default interface role {
    _id: number,
    roleName: string,
    description: string,
    pageAccess?: [],
    isActive: true | false,
    updatedAt: number,
}