import { Outlet } from 'react-router-dom';
import Header from './Header';

const Root = () => {
    return (
        <div className="min-h-screen bg-[#EAF4E0] font-chakra text-[1rem] pb-10">
            <div className="max-w-[1000px] mx-auto mb-auto">
                <Header />
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Root;