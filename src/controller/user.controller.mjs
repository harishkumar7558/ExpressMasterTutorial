import bcrypt from 'bcrypt';
import { createUser, deleteUserById, getAllUsers, getUserById, getUserEmail, updateUserById } from "../services/user.services.mjs";



export const fetchAllUsers = async(req,res)=>{

    try {
        const data = await getAllUsers();
        if(!data){
            return res.status(400).json({message:"no users found"});
        }
        res.status(200).json({message:"success",data:data});

    } catch (error) {
        res.status(500).json({message:"Internal server error",error:error.message});
    }
}

export const createUsers = async (req,res)=>{
    try {
            const data = req.body || {};
            console.log(data);
            if(!data.user_name || !data.email_id || !data.password){
                return res.status(400).json({message:"name,email and password are required"});
            }
            const saltRound = 10;
            const hashedPassword = await bcrypt.hash(data.password,saltRound);
            data.password = hashedPassword;
            const response = await createUser(data);
            res.status(200).json({message:"success",data:response});

        
    } catch (error) {
        res.status(500).json({message:"Internal server error",error:error.message});
    }


}

export const getEmailFromUser= async(req,res)=>{
    
    try {
        const id = req.query.email_id;
        const user = await getUserEmail(id);
        if(!user){
            return res.status(400).json({message:"email is required"});
        }
        res.status(200).json({message:"success",data:user});
    } catch (error) {
        res.status(500).json({message:"Internal server error",error:error.message});
    }
}

export const getUserId = async(req,res)=>{
    try {
        const id = req.params.id;
        const user = await getUserById(id);
        if(!user || user.length === 0){
            res.status(400).json({messae:"user not found"});
        } 
        res.status(200).json({message:"success",data:user});
        
    } catch (error) {
        res.status(500).json({message:"Internal server error",error:error.message});
    }
}

export const updateUserId = async(req,res)=>{
    try {
        const id = req.params.id;
        const data = req.body || {};
        if(!data.user_name || !data.email_id || !data.password){
            return res.status(400).json({message:"name,email and password are required"});
        }
        const saltRound = 10;
        const hashedPassword = await bcrypt.hash(data.password,saltRound);
        data.password = hashedPassword;
        const response = await updateUserById(id,data);
        res.status(200).json({message:"successfully updated",data:id});
    } catch (error) {
        res.status(500).json({message:"Internal server error",error:error.message});
    }
}

export const deleteUserId = async(req,res)=>{
    try {
        const id = req.params.id;
        const response = await deleteUserById(id);
        res.status(200).json({message:"successfully deleted",data:id});
    } catch (error) {
        res.status(500).json({message:"Internal server error",error:error.message});
    }
}