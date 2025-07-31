import { NavLink } from "react-router-dom";
import pfp from '../assets/AboutMe-Photo.jpeg';

const Home = () => {
    return (
        <div>
            <h2 className="text-[2rem] font-semibold mt-16 mb-16 ml-2">Home</h2>
            <div className="flex text-xl items-center">
                <img className="max-w-85 rounded-2xl mr-20 ml-6" 
                    src={pfp} 
                    alt="Matteo Conci"
                    loading="eager"
                    fetchPriority="high"
                    width={340}
                    height={340} 
                    />
                <div>
                    <p>
                        Hi! I'm Matteo, a junior full-stack developer with a passion for building complete web applications. <br></br>
                        I work on both front-end and back-end with great attention to detail, curiosity, and a constant drive to learn. <br></br>
                        My goal is to grow professionally, learn new languages, and collaborate with people who share my passion. <br></br>
                    </p>
                    <p className="italic mt-5 text-lg">To know more about me click <NavLink to='/about-me' className='text-[#ae884c] underline hover:no-underline'>here</NavLink>.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;