import {asynchandler} from "../utils/asynchandler.js";
const registeruser = asynchandler(async(req,res) => {
    const {fullName,username,email,password} = req.body
    console.log
})