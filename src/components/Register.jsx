import { useState } from "react";
import { useAuth } from '../context/authContext';
import { useNavigate } from "react-router-dom";
import { Alert } from "./Alerts/Alert";

export function Register() {

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState();

    const { singup } = useAuth();

    const navigate = useNavigate();

    const handleChange = ({ target: { name, value } }) => {
        console.log(value);
        setUser({ ...user, [name]: value });
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setError('');
        try {
            await singup(user.email, user.password);
            navigate('/');
        } catch (error) {
            error.code === 'auth/invalid-email' ? setError('Correo invalido') :
                error.code === 'auth/wrong-password' ? setError('Contraseña erronea') :
                    error.code === 'auth/weak-password' ? setError('La contraseña debe tener al menos 6 caracteres') :
                        error.code === 'auth/email-already-in-use' ? setError('El correo ya esta en uso') :
                            console.log(error.message);
        }
    }

    return (
        <div className="h-screen flex">
            <div className="w-full max-w-xs m-auto">
                <h1 className="mb-3 text-2xl font-medium text-purple-800">Registro</h1>
                <form onSubmit={handleSubmit} className="bg-white rounded px-4 py-4 shadow-md">
                    <label htmlFor="email" className="block text-sm">Email</label>
                    <input type="email" name="email"
                        laceholder="correo@ejemplo.com"
                        className="w-full appearance-none px-1 border-b-2 mb-3 focus:outline-none"
                        onChange={handleChange} />

                    <label htmlFor="password" className="block text-sm">contraseña</label>
                    <input type="password" name="password" id="password"
                        placeholder="*******"
                        className="w-full appearance-none px-1 border-b-2 mb-3 focus:outline-none"
                        onChange={handleChange} />

                    <button className="w-full rounded bg-purple-800 py-2 text-white font-bold mb-3">Registro</button>
                </form>
                {error && <Alert message={error} />}
            </div>
        </div>
    );
}