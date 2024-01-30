import { Outlet } from 'react-router-dom';
import WatchSidebar from '../pages/watch/WatchSidebar';

const WatchLayout = () => {

    return (
        <div className='flex bg-gray-100 min-h-screen'>
            <div className='col-span-4'>
                <WatchSidebar/>
            </div>
            <Outlet/>
        </div>
    );
}

export default WatchLayout;
 