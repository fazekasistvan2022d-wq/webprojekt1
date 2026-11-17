import api from "../api/axoisInstance";
import { useState, useEffect } from "react";
export default function TestForm() {
    const [message, setMessage] = useState("");
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await api.get("/users/test");
                setMessage(response.data);
            } catch (error) {
                console.error("Error fetching:", error);
                setMessage("Hiba történt a tesztadatok lekérése során");
            }
        }
        fetchData();
    }, []);
    return (
        <div>
            <p>{JSON.stringify(message)}</p>
        </div>
    );
}
