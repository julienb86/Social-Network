import bcrypt from "bcryptjs"
import dotenv from "dotenv"
dotenv.config();
const saltRounds: number = Number(process.env.SALT_HASH);

export const encrypt = async (password: string): Promise<string> => {
    try {
        const result = await bcrypt.hash(password, saltRounds);
        return result;
    }
    catch (err) {
        console.log(err)
        throw new err("Impossible to hash the password")
    }
}

export const decrypt = async (password: string, passwordFromUser: string): Promise<boolean> => {
    try {
        const result = await bcrypt.compare(password, passwordFromUser);
        return result;
    }
    catch (err) {
        console.log(err)
        throw new err("Failed to hash the password")
    }
}