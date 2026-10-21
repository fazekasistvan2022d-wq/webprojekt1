import api from "../api/axoisInstance.js";
import { useState } from "react";
export default function regForm(){
    const [formdata, setFormdata] = useState({
        email:'',
        password:'',
        confirmpassword:'',
        name:'',
        phone:'',
        profileimage:''
    })
    const [islogged, setIslogged] = useState(false)
    const handleChange = (e)=>{
        setFormdata({...formdata,[e.target.name]: e.target.value})
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            const response = await api.post('/users/login',formdata)
            console.log("Login successful: ",response.data)
            setIslogged(true)
        }
        catch(err){
            console.error(err)
        }
    }
    return(
        <div className="login-form">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email" name="email" required  onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Jelszó: </label>
                    <input type="password" name="password" id="password"  onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Jelszó megerősítése: </label>
                    <input type="password" name="password" id="password"  onChange={handleChange}/>
                </div>


                <div className="form-group">
                    <label htmlFor="name">Név: </label>
                    <input type="text" name="name" id="name"  onChange={handleChange}/>
                </div>


                <div className="form-group">
                    <label htmlFor="phone">Telefon: </label>
                    <input type="text" name="phone" id="phone"  onChange={handleChange}/>
                </div>


                <div className="form-group">
                    <label htmlFor="profileimage">Profil kép: </label>
                    <input type="file" name="profileimage" id="profileimage"  onChange={handleChange}/>
                </div>

                <button type="submit" >Bejelentkezés</button>
            {islogged && <p>{"Sikeres regisztráció"}</p>}
        </form>
        </div>
    )
};