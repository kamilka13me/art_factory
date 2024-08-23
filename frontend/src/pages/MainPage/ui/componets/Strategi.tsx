import { ButtonLink } from '@/shared/ui/ButtonLink';
import { Text } from '@/shared/ui/Text';

const Strategi = () => {
  return (
    <div className="py-10 px-10">
      <div className="flex justify-between">
        <Text font="serif" text="Стратегічні напрямки фонду" size="6xl" Tag="h1" />
        <ButtonLink variant="textBlue" to="/404" text="text" />
      </div>

      <div>s</div>
    </div>
  );
};

export default Strategi;
