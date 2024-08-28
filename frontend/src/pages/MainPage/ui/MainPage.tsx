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
      <div className="bg-main-dark rounded-b-[60px]  flex flex-col items-center ">
        <div className="max-w-[1440px] flex flex-col justify-center">
          <Hero />
          <Donors />
          <WhoAreWe />
          <OurServices />
          <FallingBricks />
          <OurProjects />
          <News />

          {/* <div className="text-white h-[1200px] flex mb-10">end</div> */}
        </div>
      </div>
      <div className=" flex flex-col items-center ">
        <div className="max-w-[1440px] flex flex-col justify-center">
          <Strategi />
          <OurValues />
          <HowWeWork />
          <ConnectToday />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
