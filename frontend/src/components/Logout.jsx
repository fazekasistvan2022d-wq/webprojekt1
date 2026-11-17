import api from './api/axiosInstance';
import { useState, useEffect } from 'react';
export default function Logout(){
    const [message, setMessage] = useState("")
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await api.get("/users/logout");
                setMessage(response.data);
            } catch (error) {
                console.error("Error fetching:", error);
                setMessage("Hiba történt a tesztadatok lekérése során");
            }
        }
        fetchData();
    }, []);
    return(
        <div></div>
    )
}