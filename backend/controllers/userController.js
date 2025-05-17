import bcrypt from 'bcrypt'
import validator from 'validator'
import userModel from "../models/userModel.js"
import jwt from 'jsonwebtoken'


const createToken = (id) => {
    return jwt.sign({id}, process.env.JWTSECRET)
}

// Route for User Login
const loginUser = async (req, res) => {


    try {
        const {email, password} = req.body;

        //Checking if user already exist or not
        const user = await userModel.findOne({email});

        if(!user){
            return res.json({success: false, message: "Email not found! Please Register first"})
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(isMatch){
            const token = createToken(user._id)
            res.json({success: true, token})
        }
        else{
            res.json({success: false, message: "Invalid credentials"});
        }
        
    } catch (error) {
        console.log(error);
        res.send({success: false, message: error.message})
    }
}

// Route for user register

const registerUser = async (req, res) => {

    try {
        const {name, email, password} = req.body;

        //Checking if user already exist or not
        const exists = await userModel.findOne({email});

        if(exists){
            return res.json({sucsess:false, message:"User already exists"})
        }

        // Validating email format and strong password

        if (!validator.isEmail(email)) {
            return res.json({sucsess:false, message:"Please enter a valid Email"})
        }

        if (password.length < 8) {
            return res.json({sucsess:false, message:"Please enter a Strong Password!"})
        }

        // Hashing user Password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new userModel({
            name,
            email, 
            password: hashedPassword
        })

        const user = await newUser.save();

        const token = createToken(user._id)

        res.json({success:true, token})

    } catch (error) {
        console.log(error);
        res.json({sucsess:false, message: error.message})
    }
    
}

// Route for admin login
const adminLogin = async (req, res) => {
    
    try {
        const {email, password} = req.body

        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign(email+password, process.env.JWTSECRET)
            res.json({success: true, token})
        }
        else{
            res.json({success: false, message: "Invalid Credentials"});
        }

    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message});
    }
}

export {loginUser, registerUser, adminLogin}