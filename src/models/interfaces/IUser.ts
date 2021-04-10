export interface IUser {
    id?: number,
    email: string,
    password?: string,
    photo?: string,
    fileName?: string,
    token?: string,
    isAdmin?: boolean,
    createdAt?: Date,
    deletedAt?: Date | null
}