import { useAuth } from "../context/authContext";

export function Home(){

    const {user, logout, loading} = useAuth();

    const handleLogout = async () =>{
        await logout();
    }

    if(loading) return <p>Cargando...</p>

    if(!loading) console.log(user);

    return (
        <div>
            <h1>HOME</h1>
            <p>
                { user.displayName || user.email }
            </p>
            <p><button onClick={handleLogout}>Salir</button></p>
        </div>
        );
}