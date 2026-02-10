import db from "../configs/db.config.mjs";


export const getAllUsersFromDB = async ()=>{
    const result = await db.query("SELECT * FROM USERS");
    return result.rows;
}

export const createUserFromDB = async(data)=>{
    const result = await db.query("INSERT INTO USERS (USER_NAME,EMAIL_ID,PASSWORD) VALUES ($1,$2,$3)",[data.user_name,data.email_id,data.password]);
    return result.rows[0];
}

export const getByEmailFromDB = async(id)=>{

    const result = await db.query("SELECT * FROM USERS WHERE EMAIL_ID=($1)",[id])
    return result.rows;

}

export const getByIdFromDB = async(id)=>{
    const result = await db.query("SELECT * FROM USERS WHERE USER_ID=$1",[id])
    return result.rows;
}

export const updateUserFromDB = async(id,data)=>{
    const result = await db.query("UPDATE USERS SET USER_NAME=$1,EMAIL_ID=$2,PASSWORD=$3 WHERE USER_ID=$4",[data.user_name,data.email_id,data.password,id])
    return result.rows;
}

export const deleteUserFromDB = async(id)=>{
    const result = await db.query("DELETE FROM USERS WHERE USER_ID=$1",[id])
    return result.rows;
}

