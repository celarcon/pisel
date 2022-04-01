import { useState } from "react";
import { useAuth } from '../context/authContext';
import { useNavigate } from "react-router-dom";
import { Alert } from "./Alerts/Alert";

export function Login(){

    const [ user, setUser ] = useState({
        email:'',
        password:''
    });

    const [ error ,setError ] = useState();

    const { login, loginWithGoogle, reserPassword } = useAuth();

    const navigate = useNavigate();

    const handleChange = ({target:{name, value}}) =>{
        console.log(value);
        setUser({...user, [name]: value});
    }

    const handleSubmit = async e =>{
        e.preventDefault();
        setError('');
        try{
            await login(user.email, user.password);
            navigate('/');
        }catch(error){
            error.code === 'auth/invalid-email' ? setError('Correo invalido'):
            error.code === 'auth/wrong-password' ? setError('Contraseña erronea'):
            setError(error.message);
        }
    }

    const handleReserPassword = async e =>{
        e.preventDefault();
        
        try{
            if(!user.email){
                return setError('Introduce un correo');
            }else{ 
                await reserPassword(user.email);
                setError('Hemos enviado un correo para resetear tu contraseña');
            }
        }catch(error){
            console.log(error.message);
        }
    }

    const handleGoogleLogin = async e =>{
        try{
            await loginWithGoogle();
            navigate('/home');
        }catch(error){
            console.log(error.message);
        }
        
    }
    return (
        <div className="h-screen flex">
            <div className="w-full max-w-xs m-auto ">
                <h1 className="mb-3 text-2xl font-medium text-purple-800">Inicio de sesión</h1>
                <form onSubmit={handleSubmit} className="bg-white rounded px-4 py-4 shadow-md">
                    <label htmlFor="email" className="block text-sm">Email</label>
                    <input type="email" name="email" placeholder="correo@ejemplo.com"
                    className="w-full appearance-none px-1 border-b-2 mb-3 focus:outline-none"
                    onChange={handleChange}/>

                    <label htmlFor="password" className="block text-sm" >Contraseña</label>
                    <input type="password" name="password" id="password" placeholder="*******"
                    className="w-full appearance-none px-1 border-b-2 mb-3 focus:outline-none"
                    onChange={handleChange}/>

                    <button className="w-full rounded bg-purple-800 py-2 text-white font-bold">Login</button>
                </form>
                <button onClick={handleGoogleLogin}
                className="w-full bg-white rounded shadow-md mt-3 py-3 text-purple-800 font-medium">
                Iniciar con google
                </button>
                <p className="pt-3 mb-3">
                    <span onClick={handleReserPassword}
                    className="cursor-pointer hover:text-purple-800">
                        has olvidado tu contraseña?
                    </span>
                </p>
                {error && <Alert message={error}/>}
            </div>
        </div>
    );
}
