import { Icon } from '@/shared/ui/Icon';
import LogoWhite from '@/shared/assets/icons/LogoWhiteNoText.svg?react';
import { ButtonLink } from '@/shared/ui/ButtonLink';

const NotFoundPage = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-screen w-full bg-[#151515] gap-7">
        <div className="h-[72px] text-center text-[#e8e8e8] text-7xl font-normal font-['IBM Plex Serif']">
          404
        </div>

        <div className="flex items-center">
          <div className="text-center text-white text-4xl font-normal font-['IBM Plex Serif'] leading-[41.40px]">
            Ця сторінка в розробці
          </div>
          <div className="min-w-16 ml-6">
            <Icon Svg={LogoWhite} width={63} height={33} />
          </div>
        </div>

        <ButtonLink variant="arrowTextBlue" to="/" text="На головну" />
      </div>
    </div>
  );
};

export default NotFoundPage;
