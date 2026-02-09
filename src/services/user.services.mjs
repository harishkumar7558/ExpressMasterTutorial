import { createUserFromDB, getAllUsersFromDB } from "../repository/user.repo.mjs";


export const getAllUsers = async()=>{
    const response = await getAllUsersFromDB();
    return response;
}

export const createUser = async(data)=>{
    const response = await createUserFromDB(data);
    return response;
}