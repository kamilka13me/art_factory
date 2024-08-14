import Donors from './componets/Donors';
import Hero from './componets/Hero';
import WhoAreWe from './componets/WhoAreWe';

const MainPage = () => {
  return (
    <div className="bg-main-dark h-[1200px]">
      <Hero />
      <Donors />
      <WhoAreWe />
    </div>
  );
};

export default MainPage;
