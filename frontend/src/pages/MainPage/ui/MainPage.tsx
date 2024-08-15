import FallingBricks from './componets/bricks';
import Donors from './componets/Donors';
import Hero from './componets/Hero';
import WhoAreWe from './componets/WhoAreWe';

const MainPage = () => {
  return (
    <div className="bg-main-dark-screen ">
      <Hero />
      <Donors />
      <WhoAreWe />
      <FallingBricks />
      {/* <div className="text-white h-[1200px] flex mb-10">end</div> */}
    </div>
  );
};

export default MainPage;
