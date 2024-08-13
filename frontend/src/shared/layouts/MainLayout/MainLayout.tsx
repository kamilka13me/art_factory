import { FC, ReactElement } from 'react';

interface Props {
  header: ReactElement;
  content: ReactElement;
  footer: ReactElement;
}

const MainLayout: FC<Props> = (props) => {
  const { content, header, footer } = props;

  return (
    <div className="flex flex-col mx-auto min-h-screen overflow-auto bg-main-dark items-center">
      {header}
      <main className="flex-1 h-full w-full max-w-[1440px] ">{content}</main>
      {footer}
    </div>
  );
};

export default MainLayout;
