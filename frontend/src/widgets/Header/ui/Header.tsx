import { Container } from '@/shared/layouts/Container';
import { Icon } from '@/shared/ui/Icon';
import { VStack } from '@/shared/ui/Stack';

// import LogoDark from '@/shared/assets/icons/LogoDark.svg';
import LogoDark from '@/shared/assets/icons/LogoDark.svg?react';

const Header = () => {
  return (
    <header className="mt-12">
      <Container>
        <VStack>
          <Icon Svg={LogoDark} className="h-11 w-[160px]" />
        </VStack>
      </Container>
    </header>
  );
};

export default Header;
