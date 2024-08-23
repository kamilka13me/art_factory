import FallingBricks from './componets/FallingBricks';
import Donors from './componets/Donors';
import Hero from './componets/Hero';
import WhoAreWe from './componets/WhoAreWe';
import OurServices from './componets/OurServices';
import OurProjects from './componets/OurProjects';
import News from './componets/News';
import Strategi from './componets/Strategi';

const MainPage = () => {
  return (
    <div>
      <div className="bg-main-dark min-h-screen rounded-b-[60px] ">
        <Hero />
        <Donors />
        <WhoAreWe />
        <OurServices />
        <FallingBricks />
        <OurProjects />
        <News />

        {/* <div className="text-white h-[1200px] flex mb-10">end</div> */}
      </div>
      <Strategi />
    </div>
  );
};

export default MainPage;
