import { ButtonLink } from '@/shared/ui/ButtonLink';
import { Text } from '@/shared/ui/Text';

const ConnectToday = () => {
  return (
    <div className="flex justify-center  border-t-2 border-t-[#DCDCDC] mx-[156px] mb-[180px] max-w-[1128px] ">
      <div className="flex justify-between w-full  mt-10 gap-[60px] ">
        <div className="w-full">
          <Text
            Tag="h5"
            size="5xl"
            text="Приєднуйся до спільноти вже сьогодні."
            font="sans"
            className="font-medium"
          />
          <Text
            Tag="h5"
            size="lg"
            text="Підписуйся на нашу розсилку корисних новин."
            font="sans"
            className="text-[#474747] mt-2"
          />
        </div>
        <div className="w-full flex items-center">
          <div className="bg-[#ededed] px-2 py-2 rounded-[30px] flex justify-between items-center w-full">
            <input
              placeholder="Ваш email"
              className="bg-transparent placeholder:font-medium"
            />
            <ButtonLink to="/404" variant="textBlue" size="28" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectToday;
