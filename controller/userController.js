const bcrypt = require("bcrypt");
const User = require("../model/userModel");
const jwt = require("jsonwebtoken");


const register = async (req, res) => { 
   
   const token = jwt.sign({
    _id: newUser._id,
    firstName: newUser.firstName,
    lastName: newUser.lastName,
    email: newUser.email,
    isAdmin: newUser.isAdmin
}, process.env.jwtSecret, {expiresIn: "1d"});

    await newUser.save()
        return res.status(201).json({
            success: true,
            message: "User Registered Sucessfully.",
            token,
            newUser
        });
   
   
    //Destructure the data
    const {firstName,lastName,email,password} = req.body;
    try{
        if (!firstName || !lastName || !email || !password){
            return res.status(400).json({
                message:"All field required"

            });
        }
        const existingEmail = await User.findOne({email:email})
        if(existingEmail){
            return res.status(400).json({
                success: false,
                message: "Email already exist..."
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = new User({
            firstName, lastName, email, password: hashedPassword
        });

        await newUser.save()
        return res.status(201).json({

                success: true,
                message: "user registered sucessfully.",
                newUser
        });


    }catch (error){
        return res.status(500).json({

                success: false,
                message: "Internal Server error ${error}",
                newUser
        });
    }

}

const login = async (req, res) => {
    

}

module.exports = {
    register,
    login
}
   