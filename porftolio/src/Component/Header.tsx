import { NavLink } from "react-router-dom";

const Header = () => { 
    return (
        <header className="flex mt-8 mb-8">
            <h1 className="text-2xl font-bold">Matteo Conci</h1>
            <nav className="mr-0 m-auto text-[1.2rem] font-bold">
                <div>
                    <ul className="flex list-none">
                        <li className="ml-12 hover:underline hover:cursor-pointer"><NavLink to='/'>About Me</NavLink></li>
                        <li className="ml-12 hover:underline hover:cursor-pointer"><NavLink to='/project'>Project</NavLink></li>
                        <li className="ml-12 hover:underline hover:cursor-pointer"><NavLink to='/contact'>Contact</NavLink></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;