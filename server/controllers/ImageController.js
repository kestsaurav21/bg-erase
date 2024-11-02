import axios from 'axios'
import fs from 'fs'
import FormData from 'form-data'
import userModel from '../models/userModel.js'
import { log } from 'console'


// Controller function to remove background from Image

const removeBgImage = async (req,res) => {

        try {

            const { clerkId } = req.body;

            const user = await userModel.findOne({clerkId});
    
            if(!user){
                return res.json({ success:false, message: 'User not found' })
            }

            if(user.creditBalance === 0){
                return res.json({ success:false, message:'No Credit Balance', creditBalance: user.creditBalance})
            }

            const imagePath = req.file.path;


            
        } catch (error) {
            console.log(error.message);
            res.json({success:false, message:error.message})
        }
}


export {removeBgImage}