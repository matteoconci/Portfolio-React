import linkedin from '../assets/Linkedin-icon.png';
import mail from '../assets/mail-icon.png';
import phone from '../assets/phone-icon.png';
import github from '../assets/GitHub-icon.png';

const Contact = () => {
    return (
        <div className="mb-20 bg-[#EAF4E0] font-chakra max-w-[1000px] mx-auto my-0 text-[1rem]">
            <h2 className="text-[2rem] mt-8 mb-12 font-semibold">Contacts</h2>
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
        </div>
    );
};

export default Contact;