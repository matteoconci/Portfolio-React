import aboutMePhoto from '../assets/AboutMe-Photo.jpeg';
import css from '../assets/CSS-icon.png';
import github from '../assets/GitHub-icon.png';
import html from '../assets/HTML-icon.png';
import javascript from '../assets/JavaScript-icon.png';
import typescript from '../assets/Typescript-icon.svg';
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
            <h2 className="text-[2rem] font-semibold mt-16 mb-0">About Me</h2>
            <div className="flex text-xl items-center">
                <div>
                    <p>
                    Hi! I'm Matteo, a junior web developer from Trentino Alto-Adige, Italy. I started my journey in Civil Engeegnering, but after learning some basic Python at the university
                    I soon realised that this was my correct path, so after leaving my civil career, I started learning coding from the basic with HTML, CSS and Javascript. I'm looking forward to implement
                    AI in my future projects and start learning machine learning and artificial intelligence.
                    </p>
                    <p>
                    When I'm away from my pc, I really like to practise sport in my mountain or you can find me in front of the TV following motorsport. I also like photography and videogames.
                    Looking forward to learning new things and improving my skills and meet new people to focus on new projects and with the same passion!
                    </p>
                </div>
                <img className="max-w-72 ml-8" src={aboutMePhoto} alt="Matteo Conci" />
            </div>

            <div className="mt-12 mb-10">
                <h2 className="text-[2rem] mb-7 font-semibold">Skills</h2>
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