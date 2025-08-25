import { useState } from "react";
import ArrowUp from "../Component/ArrowUp";
import homepage from '../assets/HomePage.webp';
import login from '../assets/Login.png';
import register from '../assets/Register.png';
import sellerLanding from '../assets/seller-landpage.webp';
import store1 from '../assets/StoreCreation1.png';
import store2 from '../assets/StoreCreation2.png';
import product1 from '../assets/Product.png';
import product2 from '../assets/ProductNoVariants.png';
import product3 from '../assets/ProductVariants.png';
import errorHandler from '../assets/ErrorHandler.jpg';
import database from '../assets/Database.svg';

const Project = () => {
    const [project, setProject] = useState(1);

    return (
        <div>
            <ArrowUp />
            <h2 className="hidden sm:block text-[2rem] mt-12 mb-12 ml-2 font-semibold">Projects</h2>
            <div>
                <ul className="sm:flex list-none justify-evenly sm:text-3xl font-medium text-center">
                    <li className={`italic no-underline hover:cursor-pointer hover:underline ${project === 1 ? 'underline text-[#ae884c]' : ''}`} onClick={() => setProject(1)}>Ecommerce App Marketplace Shopp</li>
                    <li className="hidden">|</li>
                    <li className={`hidden italic no-underline hover:cursor-pointer hover:underline ${project === 2 ? 'underline text-[#ae884c]' : ''}`} onClick={() => setProject(2)}>Reddit Clone</li>
                </ul>
            </div>
            <div className="sm:text-xl sm:mt-10 mt-6">
                {project === 1 &&
                    <div className="mb-50 w-[95%] sm:w-[100%] mx-auto">
                        <p className="mb-6 text-center italic">Link to the <a href='https://github.com/orgs/Reddit-Clone-App-Project/repositories?' target="_blank" className="underline hover:no-underline text-[#ae884c]">GitHub repository</a>.</p>
                        <p className="italic sm:text-[1.1rem] text-center">This project is still in progress. See some picture <a href="#images" className="underline text-[#ae884c]">below</a> and the database design <a href="#database" className="underline text-[#ae884c]">here</a>.</p>
                        <p className="sm:mt-10 mt-6 mx-auto sm:mx-0 font-semibold sm:text-xl text-justify sm:text-left">Full-stack web application designed to simulate a multi-role e-commerce platform, with dedicated UIs and functionalities for buyers, sellers and admins.</p>
                        <p className="mt-2 sm:text-lg text-justify sm:text-left">Users can sign up as buyers or create a store to act as sellers, while the admin oversees the platform with extended management capabilities.</p>
                        <p className="mt-2 font-semibold sm:text-xl">Key features include:</p>
                        <ol className="list-disc ml-10 sm:text-lg">
                            <li>User registration, login, and logout;</li>
                            <li>Role-based authentication and authorization (buyer, seller, admin);</li>
                            <li>Full CRUD functionality for products and its variants;</li>
                            <li>Dedicated dashboards for each user role;</li>
                            <li>Highlighted products and promotions on the homepage;</li>
                            <li>Shopping cart, checkout flow, and shipment tracking;</li>
                            <li>Store creation and management for sellers;</li>
                            <li>Secure backend with middleware and validations;</li>
                        </ol>
                        <p className="mt-4 font-semibold sm:text-xl">Main technologies used:</p>
                        <ol className="list-disc ml-10 sm:text-lg">
                            <li><span className="font-semibold">Frontend</span>: JavaScript, TypeScript, React, Redux Toolkit, Tailwind CSS;</li>
                            <li><span className="font-semibold">Backend</span>: Node.js, Express.js, PostgreSQL, RESTful API architecture;</li>
                            <li><span className="font-semibold">Authentication & Security</span>: JWT, Bcrypt, CORS, Helmet, Rate Limiter, Validator.js;</li>
                            <li><span className="font-semibold">Design</span>: Figma (UI/UX);</li>
                            <li><span className="font-semibold">Project Management & Deployment</span>: GitHub, Jira, Supabase;</li>
                            <li><span className="font-semibold">Additional</span>: Fully responsive design and modular architecture;</li>
                        </ol>
                        <div id="images" className="text-sm sm:text[1rem] text-center text-[#ae884c]">
                            <p className="mb-4 mt-8 sm:my-8 font-semibold text-[1rem] sm:text-xl">Pages:</p>
                            <figure className="mb-8 sm:mb-12">
                                <video 
                                    className="rounded-xl shadow-md w-full max-w-4xl mx-auto"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    preload="auto"
                                    width={896}
                                    height={510}
                                >
                                    <source src={homepage} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <figcaption className="mt-3">
                                    Animated homepage with promotional banner
                                </figcaption>
                            </figure>
                            <figure className="mb-8 sm:mb-12">
                                <img src={login} 
                                    alt="login page" 
                                    width={896}
                                    height={510}
                                    className="rounded-xl shadow-md w-full max-w-4xl mx-auto"/>
                                <figcaption className="mt-3">
                                    Login page for users
                                </figcaption>
                            </figure>
                            <figure className="mb-8 sm:mb-12">
                                <img src={register} 
                                    alt="register page"
                                    width={896}
                                    height={510} 
                                    className="rounded-xl shadow-md w-full max-w-4xl mx-auto"/>
                                <figcaption className="mt-3">
                                    Register page for users
                                </figcaption>
                            </figure>
                            <figure className="mb-8 sm:mb-12">
                                <video 
                                    className="rounded-xl shadow-md w-full max-w-4xl mx-auto"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    preload="auto"
                                    height={510}
                                    width={896}
                                >
                                    <source src={sellerLanding} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <figcaption className="mt-3">
                                    Seller Landing page 
                                </figcaption>
                            </figure>
                            <figure className="mb-8 sm:mb-12">
                                <img src={store1} 
                                    alt="store creation page 1" 
                                    width={896}
                                    height={510}
                                    className="rounded-xl shadow-md w-full max-w-4xl mx-auto"/>
                                <figcaption className="mt-3">
                                    Creation Store page 1
                                </figcaption>
                            </figure>
                            <figure className="mb-8 sm:mb-12">
                                <img src={store2} 
                                    alt="store creation page 1" 
                                    width={896}
                                    height={510}
                                    className="rounded-xl shadow-md w-full max-w-4xl mx-auto"/>
                                <figcaption className="mt-3">
                                    Creation Store page 2
                                </figcaption>
                            </figure>
                            <figure className="mb-8 sm:mb-12">
                                <img src={product1} 
                                    alt="store creation page 1" 
                                    width={896}
                                    height={510}
                                    className="rounded-xl shadow-md w-full max-w-4xl mx-auto"/>
                                <figcaption className="mt-3">
                                    Creation Product page
                                </figcaption>
                            </figure>
                            <figure className="mb-8 sm:mb-12">
                                <img src={product2} 
                                    alt="store creation page 1" 
                                    width={896}
                                    height={510}
                                    className="rounded-xl shadow-md w-full max-w-4xl mx-auto"/>
                                <figcaption className="mt-3">
                                    Creation Product with no variants
                                </figcaption>
                            </figure>
                            <figure className="mb-8 sm:mb-12">
                                <img src={product3} 
                                    alt="store creation page 1" 
                                    width={896}
                                    height={510}
                                    className="rounded-xl shadow-md w-full max-w-4xl mx-auto"/>
                                <figcaption className="mt-3">
                                    Creation Product with variants
                                </figcaption>
                            </figure>
                            <figure className="mb-8 sm:mb-12">
                                <img src={errorHandler} 
                                    alt="store creation page 1" 
                                    width={896}
                                    height={510}
                                    className="rounded-xl shadow-md w-full max-w-4xl mx-auto"/>
                                <figcaption className="mt-3">
                                    Error Page Handler
                                </figcaption>
                            </figure>
                        </div>
                        <div id="database">
                            <p className="mt-8 mb-4 font-semibold text-[1rem] sm:text-xl">Database:</p>
                            <p className="italic sm:text-[1.1rem] text-sm mb-8">See the database on dbdiagram.io for a more closed look at the design <a href='https://dbdiagram.io/d/688a0188cca18e685c7271c6' target="_blank" className="italic underline hover:no-underline text-[#ae884c]">here</a>.</p>
                            <figure className="mb-12">
                                <img src={database} 
                                    alt="store creation page 1" 
                                    width={896}
                                    height={510}
                                    className="w-full max-w-4xl mx-auto"/>
                                <figcaption className="mt-3 text-center text-sm sm:text-[1rem] text-[#ae884c]">
                                    Database Design
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                }
                {project === 2 &&  
                    <div className="mb-50">
                        <div>
                            <a href="#" target="_blank" className="hover:no-underline">Link to the website</a>
                        </div>
                            <p>
                                An exercise using. <br></br>
                                Language used: .
                            </p>
                    </div>
                }
            </div>
        </div>
    );
};

export default Project;