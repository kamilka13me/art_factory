import { FC, ReactElement } from 'react';

interface Props {
  header: ReactElement;
  content: ReactElement;
  footer: ReactElement;
}

const MainLayout: FC<Props> = (props) => {
  const { content, header, footer } = props;

  return (
    <div className="flex flex-col mx-auto min-h-screen   items-center">
      {header}
      <main className="flex-1 h-full w-full max-w-[1440px] relative">{content}</main>
      {footer}
    </div>
  );
};

export default MainLayout;
