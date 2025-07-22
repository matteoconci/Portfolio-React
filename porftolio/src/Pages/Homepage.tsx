import aboutMePhoto from '../assets/AboutMe-Photo.jpeg';
import css from '../assets/CSS-icon.png';
import github from '../assets/GitHub-icon.png';
import html from '../assets/HTML-icon.png';
import javascript from '../assets/JavaScript-icon.png';
import linkedin from '../assets/Linkedin-icon.png';
import mail from '../assets/mail-icon.png';
import phone from '../assets/phone-icon.png';

const Homepage = () => {
    return (
           <body className="bg-[#EAF4E0] font-chakra max-w-[1000px] mx-auto my-0 text-[1rem] ">
            <header className="flex mt-4 mb-8">
                <h1 className="text-2xl">Matteo Conci</h1>
                <nav className="mr-0 m-auto text-[1.2rem] font-bold">
                    <div>
                        <ul className="flex list-none">
                            <li className="ml-12 hover:underline"><a className="text-black no-underline" href="#about-me">About Me</a></li>
                            <li className="ml-12 hover:underline"><a className="text-black no-underline" href="#project">Project</a></li>
                            <li className="ml-12 hover:underline"><a className="text-black no-underline" href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
            <main>
                <section id="about-me">
                    <article>
                        <h2 className="text-[2rem] mt-8 mb-0">About Me</h2>
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
                    </article>
                    <article className="mt-8">
                        <h2 className="text-[2rem] mt-8 mb-12">Skills</h2>
                        <div>
                            <ul className="flex list-none justify-around mt-8 mr-12">
                                <li className="text-xl italic font-medium flex items-center">
                                    <img className="max-w-12 mr-4" src={html} alt="HTML" />
                                    <span>HTML</span>
                                </li>
                                <li className="text-xl italic font-medium flex items-center">
                                    <img className="max-w-12 mr-4" src={css} alt="CSS" />
                                    <span>CSS</span>
                                </li>
                                <li className="text-xl italic font-medium flex items-center">
                                    <img className="max-w-12 mr-4" src={javascript} alt="JavaScript" />
                                    <span>JavaScript</span>
                                </li>
                                {/* <li className="text-xl italic font-medium flex items-center">
                                    <img className="max-w-12 mr-4" src="Style/Resorce/Img/Python-icon.png" alt="Python" />
                                    <span>Python</span>
                                </li> */}
                                <li className="text-xl italic font-medium flex items-center">
                                    <img className="max-w-12 mr-4" src={github} alt="GitHub" />
                                    <span>GitHub</span>
                                </li>
                            </ul>
                        </div>
                    </article>
                </section>

                <section id="project">
                        <h2 className="text-[2rem] mt-8 mb-12">Projects</h2>
                        <div>
                            <ul className="flex list-none justify-between text-2xl font-medium">
                                <li className="italic no-underline hover:cursor-pointer hover:underline">Flexbox Business site</li>
                                <li>|</li>
                                <li className="italic no-underline hover:cursor-pointer hover:underline">Project 2</li>
                                <li>|</li>
                                <li className="italic no-underline hover:cursor-pointer hover:underline">Project 3</li>
                            </ul>
                        </div>
                        <div className="text-xl mt-10">
                            <div id="flexbox">
                                <div>
                                    <a href="https://matteoconci.github.io/flexbox-business-site-starting/" target="_blank" className="text-black hover:no-underline">Link to the website</a>
                                </div>
                                    <p>
                                        An exercise using flexbox with the goal to reproduce a business site for a company. <br></br>
                                        Language used: HTML and CSS.
                                    </p>
                            </div>
                            <div id="two">
                                <div>
                                    <a href="#" target="_blank" className="text-black hover:no-underline">Link to the website</a>
                                </div>
                                    <p>
                                        An exercise using. <br></br>
                                        Language used: .
                                    </p>
                            </div>
                            <div id="three">
                                <div>
                                    <a href="#" target="_blank" className="text-black hover:no-underline">Link to the website</a>
                                </div>
                                    <p>
                                        An exercise using . <br></br>
                                        Language used: .
                                    </p>
                            </div>
                        </div>
                </section>

                <section className="mb-20" id="contact">
                    <h2 className="text-[2rem] mt-8 mb-12">Contacts</h2>
                    <p className="text-xl">
                        If you want to reach me out for future projects feel free to contact me.
                    </p>
                    <div className="flex items-center justify-evenly mt-12">
                        <div>
                            <a href="mailto:matteo.conci54@hotmail.it?subject=Request%20for%20Information&body=Hello,%20I%20would%20like%20more%20information.">
                                <img className="max-w-[3.5rem]" src={mail} alt="Send an email" />
                            </a>
                        </div>
                        <div>
                            <a href="tel:+393451790418" target="_blank">
                                <img className="max-w-[2.1rem]" src={phone} alt="Phone contact" />
                            </a>
                        </div>
                        <div>
                            <a href="https://github.com/matteoconci" target="_blank">
                                <img className="max-w-12" src={github} alt="Github contact" />
                            </a>
                        </div>
                        <div>
                            <a href="#" target="_blank">
                            <img className="max-w-12" src={linkedin} alt="Linkedin contact" />
                        </a>
                        </div>
                    </div>
                </section>
            </main>
        </body>
    );
};

export default Homepage;