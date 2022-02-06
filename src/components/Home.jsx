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
        <>
            <motion.nav
                className="bg-white rounded-r-lg"
                initial={false}
                animate={isOpen ?  {width: 300} : {width: 55}}
                >
                <motion.div  initial={false} animate={isOpen ? "open" : "closed"}>
                    <MenuToggle toggle={() => toggleOpen()}/>
                </motion.div>
                <motion.div
                        className="mt-32"
                        initial={false}
                        animate={isOpen ? {x: 100} : {x:-100}}>
                        {user.displayName || user.email}
                    </motion.div>
            </motion.nav>
            <button 
            className="absolute top-0 right-0 mx-5 my-4 text-purple-800 font-bold text-xl"
            onClick={handleLogout}>Salir</button>
        </>
        );
}