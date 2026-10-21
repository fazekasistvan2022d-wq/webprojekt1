import api from "../api/axoisInstance.js";
import { useState } from "react";
export default function loginForm(){
    const [formdata, setFormdata] = useState({
        email:'',
        password:''
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
            <form action="">
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email" name="email" required  onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Jelszó: </label>
                    <input type="password" name="password" id="password"  onChange={handleChange}/>
                </div>
                <button type="submit" onClick={handleSubmit}>Bejelentkezés</button>
            {islogged && <p>{"Bejelentkezett"}</p>}
        </form>
        </div>
    )
};