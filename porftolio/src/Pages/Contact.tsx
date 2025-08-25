import linkedin from '../assets/Linkedin-icon.png';
import mail from '../assets/mail-icon.png';
import phone from '../assets/phone-icon.png';
import github from '../assets/GitHub-icon.png';
import whatsapp from '../assets/whatsapp.png';

const Contact = () => {
    return (
        <div className="mb-20">
            <h2 className="hidden sm:block text-[2rem] mt-12 mb-12 ml-2 font-semibold">Contacts</h2>
            <p className="sm:text-xl text-center">
                If you want to reach me out for future projects feel free to contact me.
            </p>
            <div className="sm:flex items-center justify-center mt-4 sm:mt-10">
                <div className='group mt-8 sm:mr-2'>
                    <a href="mailto:matteo.conci54@hotmail.it?subject=Request%20for%20Information&body=Hello,%20I%20would%20like%20more%20information.">
                        <img className="max-w-[3.8rem] m-auto w-14"
                            loading='eager'
                            fetchPriority='high' 
                            src={mail} 
                            alt="Send an email" />
                    </a>
                    <div className='text-center mt-2 sm:opacity-0 sm:group-hover:opacity-100'>
                        matteo.conci54@hotmail.it
                    </div>
                </div>
                <div className='mt-10 group sm:mr-9'>
                    <img className='max-w-8 m-auto w-14'
                        loading='eager'
                        fetchPriority='high'  
                        src={phone} 
                        alt="Phone contact" />
                    <div className='text-center mt-4 sm:opacity-0 sm:group-hover:opacity-100'>
                        +39 345 1790418
                    </div>
                </div>
                <div className='mt-10 group sm:mr-12'>
                    <a href="https://wa.me/393451790418" target="_blank" rel="noopener noreferrer">
                        <img className='max-w-12 m-auto w-14'
                            loading='eager'
                            fetchPriority='high'   
                            src={whatsapp} 
                            alt="WhatsApp contact" />
                    </a>
                    <div className='text-center mt-4 sm:opacity-0 sm:group-hover:opacity-100'>
                        +39 345 1790418
                    </div>
                </div>
                <div className='group mt-10 sm:mr-16'>
                    <a href="https://github.com/matteoconci" target="_blank">
                        <img className="max-w-12 m-auto w-14"
                            loading='eager'
                            fetchPriority='high'   
                            src={github} 
                            alt="Github contact" />
                    </a>
                    <div className='text-center mt-4 sm:opacity-0 sm:group-hover:opacity-100'>
                        <a href="https://github.com/matteoconci" className='italic hover:underline' target="_blank">matteoconci</a>
                    </div>
                </div>
                <div className='group mt-10 sm:mr-15'>
                    <a href="https://linkedin.com/in/matteoconci" target="_blank">
                        <img className="max-w-12 m-auto w-14"
                            loading='eager'
                            fetchPriority='high'   
                            src={linkedin} 
                            alt="Linkedin contact" />
                    </a>
                    <div className='text-center mt-4 sm:opacity-0 sm:group-hover:opacity-100'>
                        <a href="https://linkedin.com/in/matteoconci" className='italic hover:underline' target="_blank">Matteo Conci</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;