import { NavLink } from "react-router-dom";
import pfp from '../assets/AboutMe-Photo.jpeg';

const Home = () => {
    return (
        <div>
            <h2 className="hidden sm:block text-[2rem] font-semibold mt-12 mb-15 ml-2">Home</h2>
            <div className="sm:flex text-xl items-center">
                <img className="max-w-50 my-6 sm:my-0 sm:max-w-85 shadow-md rounded-2xl sm:mr-20 sm:ml-6 m-auto" 
                    src={pfp} 
                    alt="Matteo Conci"
                    loading="eager"
                    fetchPriority="high"
                    width={340}
                    height={340} 
                    />
                <div>
                    <p className="text-center sm:text-left mx-3 text-[0.75rem] sm:text-2xl">
                        Hi! I'm Matteo, a junior Full-Stack Developer from Italy who loves turning idea into real web applications. <br></br>
                        I work across front-end and back-end with curiosity, ambition, and discipline, always motivated to improve. <br></br>
                        I’m driven to keep growing as a developer and to contribute with dedication and teamwork. <br></br>
                    </p>
                    <p className="italic mt-5 sm:mt-8 text-center text-[0.8rem] sm:text-xl">To know more about me click <NavLink to='/about-me' className='text-[#ae884c] underline hover:no-underline'>here</NavLink>.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;