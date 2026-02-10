import bcrypt from 'bcrypt';
import { LoginFromDB } from "../repository/Login.repo.mjs";


export const AccessLogin = async (email_id,password)=>{
    const response = await LoginFromDB(email_id);

if(!response || response.length === 0){
  return null;
}


    const matchedPassword = await bcrypt.compare(password,response[0].password);

    (!matchedPassword) && new Error("Invalid password");

    delete response[0].password;

  return response[0];
}