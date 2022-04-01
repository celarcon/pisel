import { Link } from 'react-router-dom';

export function Main() {
    return (
        <>
            <div className="h-screen" >
                <nav className="flex items-center justify-between flex-wrap p-6">
                    <div className="flex items-center flex-shrink-0 text-white mr-6">
                        <span className="font-semibold text-xl tracking-tight text-purple-800">AKK</span>
                    </div>
                    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                        <div className="text-sm lg:flex-grow">
                            <Link to="/login" className="block font-semibold mt-4 lg:inline-block lg:mt-0 text-purple-800 hover:text-white mr-4">
                                Login
                            </Link>
                            <Link to="/register" href="#" className="block font-semibold mt-4 lg:inline-block lg:mt-0 text-purple-800 hover:text-white mr-4">
                                Register
                            </Link>
                        </div>
                    </div>
                </nav>
                <div className="flex justify-content items-center p-6">
                    <span className="font-bold text-5xl tracking-tight text-purple-800">Santiago Cebrián Alarcón</span>
                </div>
            </div>
        </>
    );
}