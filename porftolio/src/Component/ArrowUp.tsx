import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ArrowUp: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth'});
    };

    if (!isVisible) return null;

    return (
        <button 
            onClick={scrollToTop}
            aria-label="scroll to top"
            className="fixed text-3xl text-white bg-[#ae884c] p-1 rounded-lg left-[95%] top-[90%] z-50 hover:cursor-pointer hover:text-black">
            <FaArrowUp />
        </button>
    );
};

export default ArrowUp;