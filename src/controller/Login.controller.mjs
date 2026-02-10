
import { AccessLogin } from "../services/login.mjs";


export const login = async(req,res)=>{
    try {
        const data = req.body || {};

        if(!data.email_id || !data.password) return res.status(400).json({message:"Email and password are required"});

        const EntryAccess = await AccessLogin(data.email_id ,data.password);

        if(!EntryAccess || EntryAccess.length === 0) return res.status(400).json({message:"User not found"});


        // console.log("entry acess",EntryAccess);

        // if(!EntryAccess || EntryAccess.length === 0) return res.status(400).json({message:"User not found"});

        // const matchedPassword = await bcrypt.compare(data.password,EntryAccess.password);

        // if(!matchedPassword) return res.status(400).json({message:"Invalid password"});

        // delete EntryAccess.password;

        res.status(200).json({message:"Login successful",data:EntryAccess});

    } catch (error) {
        res.status(500).json({message:"Internal server error",error:error.message});
    }
}