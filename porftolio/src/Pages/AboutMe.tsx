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
import cv from '../MATTEO-CONCI.pdf';
import cvEng from '../MATTEO-CONCI-ENG.pdf';

const AboutMe = () => {
    return (
        <div>
            <h2 className="hidden sm:block text-[2rem] font-semibold mt-12 mb-8 ml-2">About Me</h2>
            <div className='flex flex-col gap-3 sm:gap-6 text-[0.75rem] sm:text-lg text-justify m-auto mx-3'>
                <p>
                    Hi! I’m Matteo, a junior full-stack developer from Trentino Alto-Adige, Italy.
                    My journey began in civil engineering, but during university 
                    I discovered programming through a Python class and realised that this was my true path.
                    I decided to change direction and fully dedicate myself to software development, 
                    starting from the fundamentals of web development.
                </p>
                <p>
                    Since then, I have been working across both front-end and back-end, building complete web applications
                    — from database design to responsive UI — using technologies like TypeScript, React, Redux Toolkit, 
                    Node.js, Express and PostgreSQL. These experiences allowed me to improve my problem-solving skills, 
                    refine my workflow and learn how to deliver projects with precision and care.
                </p>
                <p>
                    What I love most about coding is the freedom to transform ideas into real products without limits, 
                    while constantly improving my skills and discovering new tools. 
                    I consider myself ambitious, disciplined, motivated and focused on teamwork: 
                    I believe the best results come from collaboration and the exchange of different perspectives.
                </p>
                <p>
                    Beyond coding, I have practiced endurance sports at a competitive level and 
                    I still enjoy training in the mountains, with a passion for photography and sailing. 
                    These passions taught me resilience, discipline and attention to detail — 
                    qualities I also bring into software development.
                </p>
            </div>

            <div className="sm:mt-12 mt-8 mb-10">
                <h2 className="sm:text-[2rem] mb-1 sm:mb-7 ml-2 font-semibold">Skills</h2>
                <p className='mb-4 sm:mb-12 text-[0.8rem] sm:text-xl text-center'>Download my curriculum vitae <a className='italic underline font-medium text-[#ae884c]' href={cv} download='CV_Matteo_Conci_Ita.pdf'>italian version</a> or <a className='italic underline font-medium text-[#ae884c]' href={cvEng} download='CV_Matteo_Conci_Eng.pdf'>english version</a>.</p>
                <div className='mx-2'>
                    <ul className="flex text-[0.6rem] sm:text-xl italic sm:font-medium list-none justify-around">
                        <li className="flex items-center">
                            <img className="w-5 sm:w-11 mr-2 sm:mr-4" src={html} alt="HTML" />
                            <span>HTML</span>
                        </li>
                        <li className="flex items-center">
                            <img className="w-5 sm:w-11 mr-2 sm:mr-4" src={css} alt="CSS" />
                            <span>CSS</span>
                        </li>
                        <li className="flex items-center">
                            <img className="w-6 sm:w-11 mr-2 sm:mr-4" src={tailwind} alt="GitHub" />
                            <span>TailWind CSS</span>
                        </li>
                        <li className="flex items-center">
                            <img className="w-5 sm:w-11 mr-2 sm:mr-4" src={javascript} alt="JavaScript" />
                            <span>JavaScript</span>
                        </li>
                    </ul>
                    <ul className="flex list-none text-[0.6rem] sm:text-xl italic sm:font-medium justify-around mt-4 sm:mt-8">
                        <li className="flex items-center">
                            <img className="w-4 sm:w-11 mr-2 sm:mr-4" src={typescript} alt="GitHub" />
                            <span>TypeScript</span>
                        </li>
                        <li className="flex items-center">
                            <img className="w-5 sm:w-11 mr-2 sm:mr-4" src={react} alt="GitHub" />
                            <span>React</span>
                        </li>
                        <li className="flex items-center">
                            <img className="w-5 sm:w-11 mr-2 sm:mr-4" src={redux} alt="GitHub" />
                            <span>Redux</span>
                        </li>
                        <li className="flex items-center">
                            <img className="w-6 sm:w-11 mr-2 sm:mr-4" src={node} alt="GitHub" />
                            <span>Node.js</span>
                        </li>
                    </ul>
                    <ul className="flex list-none text-[0.6rem] sm:text-xl italic sm:font-medium justify-around mt-4 sm:mt-8">
                        <li className="flex items-center">
                            <img className="w-4 sm:w-11 mr-2 sm:mr-4" src={express} alt="GitHub" />
                            <span>Express.js</span>
                        </li>
                        <li className="flex items-center">
                            <img className="w-5 sm:w-11 mr-2 sm:mr-4" src={sql} alt="GitHub" />
                            <span>SQL Database</span>
                        </li>
                        <li className="flex items-center">
                            <img className="w-5 sm:w-11 mr-2 sm:mr-4" src={restAPI} alt="GitHub" />
                            <span>RestAPI</span>
                        </li>
                        <li className="flex items-center">
                            <img className="w-5 sm:w-11 mr-2 sm:mr-4" src={github} alt="GitHub" />
                            <span>GitHub</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;