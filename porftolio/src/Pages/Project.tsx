import { useState } from "react";

const Project = () => {
    const [project, setProject] = useState(1);

    return (
        <div className="bg-[#EAF4E0] font-chakra max-w-[1000px] mx-auto my-0 text-[1rem]">
            <h2 className="text-[2rem] mt-8 mb-12 font-semibold">Projects</h2>
            <div>
                <ul className="flex list-none justify-evenly text-2xl font-medium">
                    <li className={`italic no-underline hover:cursor-pointer hover:underline ${project === 1 ? 'underline text-[#ae884c]' : ''}`} onClick={() => setProject(1)}>Ecommerce App Marketplace Shopp</li>
                    <li>|</li>
                    <li className={`italic no-underline hover:cursor-pointer hover:underline ${project === 2 ? 'underline text-[#ae884c]' : ''}`} onClick={() => setProject(2)}>Reddit Clone</li>
                </ul>
            </div>
            <div className="text-xl mt-10">
                {project === 1 &&
                    <div>
                        <p className="mb-6">Link to the <a href='' target="_blank" className="italic underline hover:no-underline text-[#ae884c]">GitHub repository</a>.</p>
                        <p className="italic text-[1.1rem]">This project is still in progress.</p>
                        <p className="mt-4">
                            Full-stack web application designed to simulate a multi-role e-commerce platform, with different UI and functionality for buyer, seller and admin. <br></br>
                            In the marketplace the user can create an account as a buyer or can create a store and become a seller.<br></br>
                        </p>
                        <p className="mt-4">The main functionality of the project are:</p>
                        <ol className="list-disc ml-10 text-lg">
                            <li>login, registration and logout feature;</li>
                            <li>Authorization and Authentication for buyer, seller and admin;</li>
                            <li>CRUD functionality for product;</li>
                            <li>Dashboard for every role;</li>
                            <li>Hot product and sales in the homepage;</li>
                            <li>Cart, checkout and shipment tracking;</li>
                        </ol>
                        <p className="mt-4">The main technology used are:</p>
                        <ol className="list-disc ml-10 text-lg">
                            <li>JavaScript, Typescript, React, Redux and Tailwind CSS for the Front-End;</li>
                            <li>Express.js, Node.js, PostgreSQL and Rest-API for the Back-end;</li>
                            <li>JWT, Bcrypt, CORS, Helmet for Auth and security;</li>
                            <li>Figma for the UI Design;</li>
                            <li>Jira, GitHub and Supabase for version control and task manegement;</li>
                            <li>Responsive desing ;</li>
                        </ol>
                    </div>
                }
                {project === 2 &&  
                <div>
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