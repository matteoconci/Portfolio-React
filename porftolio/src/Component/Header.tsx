import { NavLink } from "react-router-dom";

const Header = () => { 
    return (
        <header className="sm:flex pt-5 sm:pt-8 sm:mb-6 mb-4">
            <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-0">Matteo Conci</h1>
            <nav className="sm:mr-0 sm:m-auto text-sm sm:text-[1.5rem] font-bold">
                <div className="flex">
                    <ul className="flex list-none gap-x-4 m-auto sm:m-0">
                        <li className="hover:underline hover:cursor-pointer"><NavLink to='/home'>Home</NavLink></li>
                        <li className="hover:underline hover:cursor-pointer"><NavLink to='/about-me'>About Me</NavLink></li>
                        <li className="hover:underline hover:cursor-pointer"><NavLink to='/project'>Project</NavLink></li>
                        <li className="hover:underline hover:cursor-pointer"><NavLink to='/contact'>Contact</NavLink></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;