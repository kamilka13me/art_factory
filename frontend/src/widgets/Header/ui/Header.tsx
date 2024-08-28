import LogoDark from '@/shared/assets/icons/LogoDark.svg?react';

import { Container } from '@/shared/layouts/Container';
import { ButtonLink } from '@/shared/ui/ButtonLink';
import { Icon } from '@/shared/ui/Icon';
import { LanguageSwitcher } from '@/shared/ui/LanguageSwitcher';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { useLocation } from 'react-router-dom';
const Header = () => {
  const location = useLocation();

  if (location.pathname === '/404') {
    return null;
  }
  return (
    <header className="absolute top-[68px] z-30 w-full">
      <Container>
        <VStack justify="between" align="center">
          <Icon Svg={LogoDark} height={42} width={162} />
          <nav className="flex gap-9 items-center ">
            {/* lang switcher */}
            <LanguageSwitcher languages={['УКР', 'ENG']} />

            <Text
              Tag="h5"
              text="Проєкти"
              size="sm"
              color="base/text_dark"
              className="font-semibold"
            />
            <Text
              Tag="h5"
              text="Послуги"
              size="sm"
              color="base/text_dark"
              className="font-semibold"
            />
            <Text
              Tag="h5"
              text="Новини"
              size="sm"
              color="base/text_dark"
              className="font-semibold"
            />
            <Text
              Tag="h5"
              text="Про нас"
              size="sm"
              color="base/text_dark"
              className="font-semibold"
            />
          </nav>

          <ButtonLink variant="arrowTextBlue" text="Підтримати фонд" to="/404" />
        </VStack>
      </Container>
    </header>
  );
};

export default Header;
