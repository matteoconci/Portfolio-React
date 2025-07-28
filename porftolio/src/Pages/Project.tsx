
const Project = () => {
    return (
        <div className="bg-[#EAF4E0] font-chakra max-w-[1000px] mx-auto my-0 text-[1rem]">
            <h2 className="text-[2rem] mt-8 mb-12 font-semibold">Projects</h2>
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
        </div>
    );
};

export default Project;