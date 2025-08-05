import css from '../assets/CSS-icon.png';
import github from '../assets/GitHub-icon.png';
import html from '../assets/HTML-icon.png';
import javascript from '../assets/JavaScript-icon.png';
import typescript from '../assets/typescript-icon.svg';
import tailwind from '../assets/Tailwind-Icon.svg';
import sql from '../assets/SQL-icon.png';
import redux from '../assets/Redux-icon.svg';
import react from '../assets/React-icon.svg';
import restAPI from '../assets/RestAPI-icon.svg';
import express from '../assets/Express.js-icon.png';
import node from '../assets/Node.js-icon.svg';
import cv from '../MATTEO CONCI.pdf';

const AboutMe = () => {
    return (
        <div>
            <h2 className="text-[2rem] font-semibold mt-12 mb-8 ml-2">About Me</h2>
            <div className='flex flex-col gap-6 text-lg'>
                <p>
                    Hi! I'm Matteo, a junior full-stack developer from Trentino Alto-Adige, Italy. My journey began in civil engineering, 
                    but during university I discovered programming through a basic Python course and realised that this was my true path. 
                    I decided to change direction, leaving my civil career to fully dedicate myself to software development, 
                    starting from the fundamentals of HTML, CSS and JavaScript. 
                </p>
                <p>
                    Today, I work across both front-end and back-end development, 
                    building complete web applications that combine intuitive user experiences with solid, efficient server-side logic.
                    I’m continuously refining my problem-solving skills and, in the near future, 
                    I aim to learn Rust to tackle more complex and high-performance projects.
                </p>
                <p>
                    What I love most about coding is the freedom to shape ideas without limits—discovering new tools, 
                    refining my process, and bringing concepts to life with care and precision.
                </p>
                <p>
                    I consider myself a curious, proactive and open-minded person. I strongly believe in collaboration and teamwork, 
                    because I think the best projects are born from the contribution of multiple perspectives.
                    My goal is to grow professionally and continue working on stimulating projects that allow me to combine creativity, 
                    logic and attention to the end user.
                </p>
                <p>   
                    I approach every project with precision and a constant drive for improvement. 
                    I enjoy turning ideas into well-crafted, 
                    functional products and believe that success comes from open exchange of ideas and shared effort.
                </p>
                <p>
                    Outside of coding, you’ll find me enjoying sports in the mountains, following motorsport events, 
                    exploring photography or playing video games. I’m always eager to learn new things, grow my abilities, 
                    and connect with passionate people to create impactful projects.
                </p>
            </div>

            <div className="mt-12 mb-10">
                <h2 className="text-[2rem] mb-7 ml-2 font-semibold">Skills</h2>
                <p className='mb-12 text-xl'>Download my <a className='italic underline font-medium text-[#ae884c]' href={cv} download='CV_Matteo_Conci.pdf'>curriculum vitae</a>.</p>
                <div>
                    <ul className="flex list-none justify-around">
                        <li className="text-xl italic font-medium flex items-center">
                            <img className="w-11 mr-4" src={html} alt="HTML" />
                            <span>HTML</span>
                        </li>
                        <li className="text-xl italic font-medium flex items-center">
                            <img className="w-11 mr-4" src={css} alt="CSS" />
                            <span>CSS</span>
                        </li>
                        <li className="text-xl italic font-medium flex items-center">
                            <img className="w-12 mr-4" src={tailwind} alt="GitHub" />
                            <span>TailWind CSS</span>
                        </li>
                        <li className="text-xl italic font-medium flex items-center">
                            <img className="w-12 mr-4" src={javascript} alt="JavaScript" />
                            <span>JavaScript</span>
                        </li>
                    </ul>
                    <ul className="flex list-none justify-around mt-8">
                        <li className="text-xl italic font-medium flex items-center">
                            <img className="w-11 mr-4" src={typescript} alt="GitHub" />
                            <span>TypeScript</span>
                        </li>
                        <li className="text-xl italic font-medium flex items-center">
                            <img className="w-12 mr-4" src={react} alt="GitHub" />
                            <span>React</span>
                        </li>
                        <li className="text-xl italic font-medium flex items-center">
                            <img className="w-11 mr-4" src={redux} alt="GitHub" />
                            <span>Redux</span>
                        </li>
                        <li className="text-xl italic font-medium flex items-center">
                            <img className="w-18 mr-4" src={node} alt="GitHub" />
                            <span>Node.js</span>
                        </li>
                    </ul>
                    <ul className="flex list-none justify-around mt-8">
                        <li className="text-xl italic font-medium flex items-center">
                            <img className="w-10 mr-4" src={express} alt="GitHub" />
                            <span>Express.js</span>
                        </li>
                        <li className="text-xl italic font-medium flex items-center">
                            <img className="w-12 mr-4" src={sql} alt="GitHub" />
                            <span>SQL Database</span>
                        </li>
                        <li className="text-xl italic font-medium flex items-center">
                            <img className="w-12 mr-4" src={restAPI} alt="GitHub" />
                            <span>RestAPI</span>
                        </li>
                        <li className="text-xl italic font-medium flex items-center">
                            <img className="w-12 mr-4" src={github} alt="GitHub" />
                            <span>GitHub</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;