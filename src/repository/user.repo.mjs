import db from "../configs/db.config.mjs";


export const getAllUsersFromDB = async ()=>{
    const result = await db.query("SELECT * FROM USERS");
    return result.rows;
}

export const createUserFromDB = async(data)=>{
    const result = await db.query("INSERT INTO USERS (USER_NAME,EMAIL_ID,PASSWORD) VALUES ($1,$2,$3)",[data.user_name,data.email_id,data.password]);
    return result.rows[0];
}
