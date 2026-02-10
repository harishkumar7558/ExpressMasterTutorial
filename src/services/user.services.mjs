import { createUserFromDB, deleteUserFromDB, getAllUsersFromDB, getByEmailFromDB, getByIdFromDB, updateUserFromDB } from "../repository/user.repo.mjs";


export const getAllUsers = async()=>{
    const response = await getAllUsersFromDB();
    return response;
}

export const createUser = async(data)=>{
    const response = await createUserFromDB(data);
    return response;
}

export const getUserEmail = async(id)=>{
    const response = await getByEmailFromDB(id)
    return response;
}

export const getUserById = async(id)=>{
    const response = await getByIdFromDB(id);
    return response;
}

export const updateUserById = async(id,data)=>{
    const response = await updateUserFromDB(id,data);
    return response;
}
export const deleteUserById = async(id)=>{
    const response = await deleteUserFromDB(id);
    return response;
}