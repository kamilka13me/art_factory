/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-nested-ternary */

import { useState } from 'react';

import { ButtonLink } from '@/shared/ui/ButtonLink';
import { Text } from '@/shared/ui/Text';

const Strategi = () => {
  const [strategi, setStrategi] = useState<number>(1);

  const changeStrategi = (strategi: number) => {
    setStrategi(strategi);
  };

  return (
    <div className="py-10 px-10 mt-[180px]">
      <div className="flex justify-between items-center">
        <Text font="serif" text="Стратегічні напрямки фонду" size="6xl" Tag="h1" />
        <ButtonLink variant="textBlue" to="/404" text="Відкрите обговорення" />
      </div>

      <div className="grid grid-cols-2 border-t-[#DCDCDC] border-t-2 mt-10 pt-10">
        <div>
          <div onClick={() => changeStrategi(1)} className="h-[116px]  flex items-center">
            <Text
              Tag="h5"
              text="01"
              size="2xl"
              color="dark"
              className="ml-10  hover:text-[#2C05F2]"
            />
            <Text
              Tag="h5"
              text="Зростання"
              size="5xl"
              color="dark"
              className="ml-10 font-medium hover:text-[#2C05F2]"
            />
          </div>
          <div
            onClick={() => changeStrategi(2)}
            className="h-[116px] border-t-[#DCDCDC] border-t-2 flex items-center"
          >
            <Text
              Tag="h5"
              text="02"
              size="2xl"
              color="dark"
              className="ml-10 font-medium hover:text-[#2C05F2]"
            />
            <Text
              Tag="h5"
              text="Популяризація"
              size="5xl"
              color="dark"
              className="ml-10 font-medium hover:text-[#2C05F2]"
            />
          </div>
          <div
            onClick={() => changeStrategi(3)}
            className="h-[116px] border-t-[#DCDCDC] border-t-2 flex items-center"
          >
            <Text
              Tag="h5"
              text="03"
              size="2xl"
              color="dark"
              className="ml-10 font-medium hover:text-[#2C05F2]"
            />
            <Text
              Tag="h5"
              text="Реформа"
              size="5xl"
              color="dark"
              className="ml-10 font-medium hover:text-[#2C05F2]"
            />
          </div>
        </div>
        <div className="pl-[30px]">
          {strategi === 1 ? (
            <div className="gap-6 flex flex-col">
              <h6 className=" font-sans text-[28px] font-medium text-[#151515] ">
                Ми прагнемо, щоб комерційно успішних підприємців у сфері візуального
                мистецтва ставало більше. Для цього ми:
              </h6>
              <div className="flex items-center">
                <ButtonLink variant="ArrowVectorGray" to="/404" />
                <Text
                  Tag="p"
                  size="lg"
                  text="Розвиваємо інфраструктуру для вашої роботи, оскільки знаємо як важливо
                  мати доступ до юристів, бухгалтерів, виставкових просторів, майстерень
                  тощо."
                />
              </div>
              <div className="flex items-center">
                <ButtonLink variant="ArrowVectorGray" to="/404" />
                <Text
                  Tag="p"
                  size="lg"
                  text="Проводимо освітні заходи для вдосконалення ваших підприємницьких навичок, щоб ви вміли будувати життєздатні бізнес-моделі, коректно оцінювати вартість робіт, ефективно управління фінансами та багато іншого."
                />
              </div>
              <div className="flex items-center">
                <ButtonLink variant="ArrowVectorGray" to="/404" />
                <Text
                  Tag="p"
                  size="lg"
                  text="Підтримуємо вас на шляху підвищення конкурентоспроможності на міжнародному рівні та експорту мистецьких продуктів та послуг."
                />
              </div>
            </div>
          ) : strategi === 2 ? (
            <div className="gap-6 flex flex-col">
              <h6 className=" font-sans text-[28px] font-medium text-[#151515] ">
                Для збільшення попиту на українські культурні продукти ми:
              </h6>
              <div className="flex items-center">
                <ButtonLink variant="ArrowVectorGray" to="/404" />
                <Text
                  Tag="p"
                  size="lg"
                  text="Розвиваємо інфраструктуру для вашої роботи, оскільки знаємо як важливо
                  мати доступ до юристів, бухгалтерів, виставкових просторів, майстерень
                  тощо."
                />
              </div>
              <div className="flex items-center">
                <ButtonLink variant="ArrowVectorGray" to="/404" />
                <Text
                  Tag="p"
                  size="lg"
                  text="Проводимо освітні заходи для вдосконалення ваших підприємницьких навичок, щоб ви вміли будувати життєздатні бізнес-моделі, коректно оцінювати вартість робіт, ефективно управління фінансами та багато іншого."
                />
              </div>
              <div className="flex items-center">
                <ButtonLink variant="ArrowVectorGray" to="/404" />
                <Text
                  Tag="p"
                  size="lg"
                  text="Підтримуємо вас на шляху підвищення конкурентоспроможності на міжнародному рівні та експорту мистецьких продуктів та послуг."
                />
              </div>
            </div>
          ) : strategi === 3 ? (
            <div className="gap-6 flex flex-col">
              <h6 className=" font-sans text-[28px] font-medium text-[#151515] ">
                Для збільшення попиту на українські культурні продукти ми:
              </h6>
              <div className="flex items-center">
                <ButtonLink variant="ArrowVectorGray" to="/404" />
                <Text
                  Tag="p"
                  size="lg"
                  text="Розвиваємо інфраструктуру для вашої роботи, оскільки знаємо як важливо
                  мати доступ до юристів, бухгалтерів, виставкових просторів, майстерень
                  тощо."
                />
              </div>
              <div className="flex items-center">
                <ButtonLink variant="ArrowVectorGray" to="/404" />
                <Text
                  Tag="p"
                  size="lg"
                  text="Проводимо освітні заходи для вдосконалення ваших підприємницьких навичок, щоб ви вміли будувати життєздатні бізнес-моделі, коректно оцінювати вартість робіт, ефективно управління фінансами та багато іншого."
                />
              </div>
              <div className="flex items-center">
                <ButtonLink variant="ArrowVectorGray" to="/404" />
                <Text
                  Tag="p"
                  size="lg"
                  text="Підтримуємо вас на шляху підвищення конкурентоспроможності на міжнародному рівні та експорту мистецьких продуктів та послуг."
                />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Strategi;
