import { NavLink } from "react-router-dom";

const Header = () => { 
    return (
        <header className="flex pt-8 mb-6">
            <h1 className="text-3xl font-bold">Matteo Conci</h1>
            <nav className="mr-0 m-auto text-[1.5rem] font-bold">
                <div>
                    <ul className="flex list-none">
                        <li className="ml-12 hover:underline hover:cursor-pointer"><NavLink to='/home'>Home</NavLink></li>
                        <li className="ml-12 hover:underline hover:cursor-pointer"><NavLink to='/about-me'>About Me</NavLink></li>
                        <li className="ml-12 hover:underline hover:cursor-pointer"><NavLink to='/project'>Project</NavLink></li>
                        <li className="ml-12 hover:underline hover:cursor-pointer"><NavLink to='/contact'>Contact</NavLink></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;