import React from 'react';

import { ButtonLink } from '@/shared/ui/ButtonLink';
import { Text } from '@/shared/ui/Text';

const HowWeWork = () => {
  return (
    <div className="mt-[244px] flex justify-center items-center flex-col  mx-auto max-w-[822px] pb-[180px]">
      <Text
        Tag="h2"
        text="Як ми працюємо"
        size="sm"
        className="font-medium text-[#B6B6B6]"
      />
      <Text
        Tag="h1"
        text="Наш фонд – це велика родина, яка об’єднує українські таланти та ініціативи з різних куточків країни та з-за кордону. Реєструйтеся на послуги, беріть участь у проєктах та залишайте пропозиції щодо покращення нашої роботи."
        size="5xl"
        font="serif"
        align="center"
        className=" text-[#151515] mt-3 "
      />
      <ButtonLink
        variant="arrowTextBlue"
        text="Перейти до послуг"
        to="/404"
        className="mt-10"
      />
    </div>
  );
};

export default HowWeWork;
