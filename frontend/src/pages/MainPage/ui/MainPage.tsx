import ConnectToday from './componets/ConnectToday';
import Donors from './componets/Donors';
import FallingBricks from './componets/FallingBricks';
import Hero from './componets/Hero';
import HowWeWork from './componets/HowWeWork';
import News from './componets/News';
import OurProjects from './componets/OurProjects';
import OurServices from './componets/OurServices';
import OurValues from './componets/OurValues';
import Strategi from './componets/Strategi';
import WhoAreWe from './componets/WhoAreWe';

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
      <OurValues />
      <HowWeWork />
      <ConnectToday />
    </div>
  );
};

export default MainPage;
