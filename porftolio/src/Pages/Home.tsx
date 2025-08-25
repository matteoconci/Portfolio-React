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
                    <p className="text-center mx-3 text-[0.7rem]">
                        Hi! I'm Matteo, a junior full-stack developer with a passion for building complete web applications. <br></br>
                        I work on both front-end and back-end with great attention to detail, curiosity, and a constant drive to learn. <br></br>
                        My goal is to grow professionally, learn new languages, and collaborate with people who share my passion. <br></br>
                    </p>
                    <p className="italic mt-5 text-center text-[0.8rem] sm:text-lg">To know more about me click <NavLink to='/about-me' className='text-[#ae884c] underline hover:no-underline'>here</NavLink>.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;