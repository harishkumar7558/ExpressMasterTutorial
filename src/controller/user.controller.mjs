import { createUser, getAllUsers } from "../services/user.services.mjs";



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
            const response = await createUser(data);
            res.status(200).json({message:"success",data:response});

        
    } catch (error) {
        res.status(500).json({message:"Internal server error",error:error.message});
    }


}