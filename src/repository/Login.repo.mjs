import db from "../configs/db.config.mjs";



export const LoginFromDB = async (email_id)=>{
    const result = await db.query(`SELECT USER_ID, USER_NAME, EMAIL_ID, PASSWORD 
       FROM users 
       WHERE EMAIL_ID = $1`,[email_id]);
    return result.rows;
}