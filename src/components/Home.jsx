import { useAuth } from "../context/authContext";
import { MenuToggle } from "./MenuToogle";
import { motion, useCycle } from "framer-motion";

export function Home(){

    const {user, logout, loading} = useAuth();

    const [isOpen, toggleOpen] = useCycle(false, true);

    const handleLogout = async () =>{
        await logout();
    }

    if(loading) return <p>Cargando...</p>

    if(!loading) console.log(user);

    return (
        <div>
            <motion.nav
                initial={false}
                animate={isOpen ? "open" : "closed"}
                >
                <MenuToggle toggle={() => toggleOpen()} />
            </motion.nav>
            <h1>HOME</h1>
            <p>
                { user.displayName || user.email }
            </p>
            <p><button onClick={handleLogout}>Salir</button></p>
        </div>
        );
}