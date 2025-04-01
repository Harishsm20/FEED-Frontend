// React router component
import { Outlet } from 'react-router-dom'

// Layout Components import
import { Footer, Header } from '../components'

const HomeLayout = () => {
  return (
    <div className="relative">
      <Header />
      <div className="mt-2"> {/* Push content down to avoid overlap */}
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
};


export default HomeLayout