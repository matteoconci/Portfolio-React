import { Outlet } from 'react-router-dom';
import Header from './Header';

const Root = () => {
    return (
        <body className="bg-[#EAF4E0] font-chakra max-w-[1000px] mx-auto my-0 text-[1rem]">
            <Header />
            <main>
                <Outlet />
            </main>
        </body>
    );
};

export default Root;