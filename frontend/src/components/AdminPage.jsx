import { useState, useEffect } from "react";
export default function AdminPage() {
    const [isAdmin, setIsAdmin] = useState(false);
    const [message, setMessage] = useState("");
    useEffect(() => {
        const checkAdmin = async () => {
            try {
                const response = await api.get("/users/test");
                const data = await response.json();
                setIsAdmin(data.isAdmin);
            } catch (error) {
                console.error("Error checking admin status:", error);
                setMessage("Error checking admin status.");
            }
        };

        checkAdmin();
    }, []);

    return (
        <div>
            <h1>Admin Page</h1>
            <p>Welcome to the admin page. Here you can manage users and perform administrative tasks.</p>
        </div>
    );
}
