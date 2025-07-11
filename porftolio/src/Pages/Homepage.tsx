
const Homepage = () => {
    return (
           <body>
            <header>
                <div class="name">
                    <h1>Matteo Conci</h1> <!-- valutare se mettere h1 o cosa -->
                </div>
                <nav class="nav-laptop">
                    <div class="list">
                        <ul class="nav-list">
                            <li class="nav-item"><a class="a-nav" href="#about-me" onclick="aboutMeDisplay()">About Me</a></li>
                            <li class="nav-item"><a class="a-nav" href="#project" onclick="projectDisplay()">Project</a></li>
                            <li class="nav-item"><a class="a-nav" href="#contact" onclick="contactDisplay()">Contact</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
            <nav class="nav-mobile">
                <div class="list">
                    <ul class="nav-list">
                        <li class="nav-item"><a class="a-nav" href="#about-me" onclick="aboutMeDisplay()">About Me</a></li>
                        <li class="nav-item"><a class="a-nav" href="#project" onclick="projectDisplay()">Project</a></li>
                        <li class="nav-item"><a class="a-nav" href="#contact" onclick="contactDisplay()">Contact</a></li>
                    </ul>
                </div>
            </nav>
            <main>
                <section class="about-me" id="about-me">
                    <article class="about-me-article">
                        <h2 class="about-me-h2">About Me</h2>
                        <div class="about-me-content">
                            <div class="about-me-text">
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
                            <img class="profile-pic" src="Style/Resorce/Img/AboutMe-Photo.jpeg" alt="Matteo Conci">
                        </div>
                    </article>
                    <article class="about-me-skills">
                        <h2>Skills</h2>
                        <div class="skills">
                            <ul class="skills-list">
                                <li class="skill-item">
                                    <img class="skill-icon" src="Style/Resorce/Img/HTML-icon.png" alt="HTML">
                                    <span>HTML</span>
                                </li>
                                <li class="skill-item">
                                    <img class="skill-icon" src="Style/Resorce/Img/CSS-icon.png" alt="CSS">
                                    <span>CSS</span>
                                </li>
                                <li class="skill-item">
                                    <img class="skill-icon" src="Style/Resorce/Img/JavaScript-icon.png" alt="JavaScript">
                                    <span>JavaScript</span>
                                </li>
                                <li class="skill-item">
                                    <img class="skill-icon" src="Style/Resorce/Img/Python-icon.png" alt="Python">
                                    <span>Python</span>
                                </li>
                                <li class="skill-item">
                                    <img class="skill-icon" src="Style/Resorce/Img/GitHub-icon.png" alt="GitHub">
                                    <span>GitHub</span>
                                </li>
                            </ul>
                        </div>
                    </article>
                </section>

                <section class="project" id="project">
                        <h2>Projects</h2>
                        <div class="projects-navbar">
                            <ul class="projects-list">
                                <li class="project-flexbox" onclick="flexboxDisplay()">Flexbox Business site</li>
                                <li class="projects-space">|</li>
                                <li class="project-2" onclick="twoDisplay()">Project 2</li>
                                <li class="projects-space">|</li>
                                <li class="project-3" onclick="threeDisplay()">Project 3</li>
                            </ul>
                        </div>
                        <div class="projects-content">
                            <div class="flexbox" id="flexbox">
                                <div class="link-flexbox">
                                    <a href="https://matteoconci.github.io/flexbox-business-site-starting/" target="_blank">Link to the website</a>
                                </div>
                                    <p class="text-flexbox">
                                        An exercise using flexbox with the goal to reproduce a business site for a company. <br>
                                        Language used: HTML and CSS.
                                    </p>
                            </div>
                            <div class="two" id="two">
                                <div class="link-project2">
                                    <a href="#" target="_blank">Link to the website</a>
                                </div>
                                    <p class="text-project2">
                                        An exercise using. <br>
                                        Language used: .
                                    </p>
                            </div>
                            <div class="three" id="three">
                                <div  class="link-project3">
                                    <a href="#" target="_blank">Link to the website</a>
                                </div>
                                    <p class="text-project3">
                                        An exercise using . <br>
                                        Language used: .
                                    </p>
                            </div>
                        </div>
                </section>

                <section class="contact" id="contact">
                    <h2>Contacts</h2>
                    <p class="contact-text">
                        If you want to reach me out for future projects feel free to contact me.
                    </p>
                    <div class="contact-icon">
                        <div class="mail-contact">
                            <a href="mailto:matteo.conci54@hotmail.it?subject=Request%20for%20Information&body=Hello,%20I%20would%20like%20more%20information.">
                                <img class="img-icon" src="Style/Resorce/Img/mail-icon.png" alt="Send an email">
                            </a>
                        </div>
                        <div class="phone-contact">
                            <a href="tel:+393451790418" target="_blank">
                                <img class="img-icon" src="Style/Resorce/Img/phone-icon.png" alt="Phone contact">
                            </a>
                        </div>
                        <div class="github-contact">
                            <a href="https://github.com/matteoconci" target="_blank">
                                <img class="img-icon" src="Style/Resorce/Img/GitHub-icon.png" alt="Github contact">
                            </a>
                        </div>
                        <div class="linkedin-contact">
                            <a href="#" target="_blank">
                            <img class="img-icon" src="Style/Resorce/Img/Linkedin-icon.png" alt="Linkedin contact">
                        </a>
                        </div>
                    </div>
                </section>
            </main>
        </body>
    );
};

export default Homepage;