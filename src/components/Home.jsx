import { useAuth } from "../context/authContext";

export function Home(){

    const {user, logout, loading} = useAuth();

    const handleLogout = async () =>{
        await logout();
    }

    if(loading) return <p>Cargando...</p>

    return (
        <div>
            <h1>HOME</h1>
            <p>{user.email}</p>
            <p><button onClick={handleLogout}>Salir</button></p>
        </div>
        );
}