import { useState } from "react";
import { useAuth } from '../context/authContext';
import { useNavigate } from "react-router-dom";

export function Register(){

    const [ user, setUser ] = useState({
        email:'',
        password:''
    });

    const [ error ,setError ] = useState();

    const { singup } = useAuth();

    const navigate = useNavigate();

    const handleChange = ({target:{name, value}}) =>{
        console.log(value);
        setUser({...user, [name]: value});
    }

    const handleSubmit = async e =>{
        e.preventDefault();
        setError('');
        try{
            await singup(user.email, user.password);
            navigate('/');
        }catch(error){
            error.code === 'auth/invalid-email' ? setError('Correo invalido'):
            error.code === 'auth/weak-password' ? setError('La contraseña debe tener al menos 6 caracteres'):
            error.code === 'auth/email-already-in-use' ? setError('El correo ya esta en uso'):
            console.log(error.message);
        }
    }

    return (
        <div>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" 
                onChange={handleChange}/>

                <label htmlFor="password">Email</label>
                <input type="password" name="password" id="password"
                onChange={handleChange}/>

                <button>Registro</button>
            </form>
        </div>
    );
}