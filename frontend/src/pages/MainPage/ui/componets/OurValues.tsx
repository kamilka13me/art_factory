import { Text } from '@/shared/ui/Text';
import { FC, SVGProps, VFC } from 'react';
import Coop from '@/shared/assets/icons/coop.svg?react';
import MIcon from '@/shared/assets/icons/mIcon.svg?react';
import KIcon from '@/shared/assets/icons/kIcon.svg?react';
import PeopleIcon from '@/shared/assets/icons/peopleIcon.svg?react';
import GreenHeart from '@/shared/assets/icons/greenHeart.svg?react';
import PurpleRomb from '@/shared/assets/icons/purpleRomb.svg?react';
import { Icon } from '@/shared/ui/Icon';

const ValuesData = [
  { color: 'bg-[#151515]', text: 'Кооперація', Svg: Coop, textColor: 'text-white' },
  { color: 'bg-[#eaeaea]', text: 'Експеримент', Svg: MIcon, textColor: 'text-[#151515]' },
  {
    color: 'bg-[#eaeaea]',
    text: 'Нові можливості',
    Svg: KIcon,
    textColor: 'text-[#151515]',
  },
  {
    color: 'bg-[#eaeaea]',
    text: 'Повага до людської гідності',
    Svg: PeopleIcon,
    textColor: 'text-[#151515]',
  },
  {
    color: 'bg-[#eaeaea]',
    text: 'Бережливе ставлення до природи',
    Svg: GreenHeart,
    textColor: 'text-[#151515]',
  },
  {
    color: 'bg-[#eaeaea]',
    text: 'Примноження українського мистецтва',
    Svg: PurpleRomb,
    textColor: 'text-[#151515]',
  },
];

interface ValuesProps {
  textColor: string;
  color: string;
  Svg: VFC<SVGProps<SVGSVGElement>> | string;
  text: string;
  index: number;
}

const Values = ({ color, text, Svg, index, textColor }: ValuesProps) => {
  return (
    <div
      className={`h-[360px] w-[360px] rounded-[30px] p-10 flex flex-col justify-between ${color}`}
    >
      <div className="flex justify-between">
        <Icon Svg={Svg} width={100} height={100} />
        <Text
          className="text-[#B6B6B6]"
          Tag="p"
          text={'0' + (++index).toString()}
          size="xl"
        />
      </div>

      <Text Tag="p" text={text} size="xl" className={`${textColor}`} />
    </div>
  );
};

const OurValues = () => {
  return (
    <div className="w-full max-w-[1128px] my-10 mx-10 flex  flex-col justify-center items-center">
      <Text Tag="h1" size="6xl" font="serif" text="Наші цінності" />
      <div className="flex flex-wrap gap-6 justify-between">
        {ValuesData.map((value, index) => (
          <Values
            key={index}
            color={value.color}
            Svg={value.Svg}
            text={value.text}
            textColor={value.textColor}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default OurValues;
