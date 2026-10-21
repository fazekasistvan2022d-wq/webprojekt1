import UserModel from "../models/userModel.js"
import bcrypt from "bcrypt"
const UserController ={
    //Összes felhasználó
    async getAll(req,res){
        try{
            const users = await UserModel.getAll()
            res.json(users)
        }
        catch(err){
            console.error(err)
            res.status(500).json({hiba: "Szerver hiba"})
        }
    },
    async getById(req,res){
        const {id} = req.params;
        try{
            
            const user = await UserModel.getById(id);
            if(user){
                res.json(user);
            }
            else{
                res.status(404).json({hiba: "nincs ilyen"});
            }
            
        }
        catch(err){
            console.error(err)
            res.status(500).json({hiba: "Szerver hiba"})
        }
    },
    async create(req,res){
        const {email, password, name, phone = null, profileimage=""} = req.body
        const hashedPassword = await bcrypt.hash(password, 10)
        try{
            const result = await UserModel.create({email, password: hashedPassword, name, phone: null, profileimage})
            res.json(result)
        }
        catch(err){
            if(err.code ==='ER_DUP_ENTRY'){
                res.status(400).json({error: 'Ez az email cím már foglalt'})
            }
            else{
                res.status(500).json({hiba: "Szerver hiba"})
            }
            console.error(err)
            
        }
    },
    async login(req,res){
        const {email, password} = req.body
        try{
            const user = await UserModel.getByEmail(email)
            if(!user){
                res.status(404).json({hiba: "Nincs ilyen"})
                return;
            }
            const isMatch = await bcrypt.compare(password,user.password)
            if(!isMatch){
                res.status(401).json({hiba:"Hibás jelszó"})
                return;
            }
            res.json({message: "Sikeres bejelentkezés",user})
            
        }
        catch(err){
            console.error(err)
            res.status(500).json({hiba:"Szerver hiba"})
        }
    }
}

//login

export default UserController