
export interface IUser {
    id?: string,
    email: string,
    password?: string,
    photo?: string,
    fileName?: string,
    token?: string,
    role?: number,
    createdAt?: Date,
    deletedAt?: Date | null
}