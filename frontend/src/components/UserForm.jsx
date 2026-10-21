import { useState } from "react";
import axios from "axios";
import "./UserForm.css";

const initialForm = {
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    role: "developer",
    newsletter: false,
};

function UserForm() {
    const [form, setForm] = useState(initialForm);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;

        setForm((prevForm) => ({
            ...prevForm,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        setError("");
        setSuccess("");

        if (!form.firstName.trim()) {
            setError("A vezetéknév megadása kötelező!");
            return;
        }

        if (!form.lastName.trim()) {
            setError("A keresztnév megadása kötelező!");
            return;
        }

        if (!form.email.trim()) {
            setError("Az e-mail cím megadása kötelező!");
            return;
        }

        if (!form.email.includes("@")) {
            setError("Az e-mail címnek tartalmaznia kell a @ jelet!");
            return;
        }

        if (form.age !== "" && Number(form.age) <= 0) {
            setError("Az életkornak 0-nál nagyobbnak kell lennie!");
            return;
        }

        try {
            setLoading(true);

            const response = await axios.post("https://jsonplaceholder.typicode.com/users", {
                firstName: form.firstName,
                lastName: form.lastName,
                email: form.email,
                age: form.age === "" ? null : Number(form.age),
                role: form.role,
                newsletter: form.newsletter,
            });

            setSuccess(`Sikeres beküldés! Az új felhasználó ID-ja: ${response.data.id}`);

            setForm(initialForm);
        } catch (err) {
            console.error(err);

            setError("Hiba történt az adatok elküldése közben. Kérjük, próbáld újra!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="form-container">
            <h1>Felhasználói regisztráció</h1>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="firstName">Vezetéknév *</label>

                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        disabled={loading}
                        placeholder="Pl. Kovács"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="lastName">Keresztnév *</label>

                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        disabled={loading}
                        placeholder="Pl. János"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">E-mail cím *</label>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        disabled={loading}
                        placeholder="Pl. kovacs.janos@example.hu"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="age">Életkor</label>

                    <input
                        type="number"
                        id="age"
                        name="age"
                        value={form.age}
                        onChange={handleChange}
                        min="1"
                        disabled={loading}
                        placeholder="Pl. 30"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="role">Szerepkör</label>

                    <select id="role" name="role" value={form.role} onChange={handleChange} disabled={loading}>
                        <option value="developer">Fejlesztő</option>
                        <option value="designer">Designer</option>
                        <option value="manager">Projektmenedzser</option>
                    </select>
                </div>

                <div className="checkbox-group">
                    <input
                        type="checkbox"
                        id="newsletter"
                        name="newsletter"
                        checked={form.newsletter}
                        onChange={handleChange}
                        disabled={loading}
                    />

                    <label htmlFor="newsletter">Feliratkozom a hírlevélre</label>
                </div>

                {error && <div className="error-message">{error}</div>}

                {success && <div className="success-message">{success}</div>}

                <button type="submit" disabled={loading}>
                    {loading ? "Küldés folyamatban..." : "Küldés"}
                </button>
            </form>
        </div>
    );
}

export default UserForm;
