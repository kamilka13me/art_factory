import { AppRouter } from '@/app/providers/router';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { Header } from '@/widgets/Header';

const App = () => {
  return (
    <div>
      <MainLayout
        header={<Header />}
        content={<AppRouter />}
        footer={<div>footer</div>}
      />
    </div>
  );
};

export default App;
