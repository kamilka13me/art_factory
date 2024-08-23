import { AppRouter } from '@/app/providers/router';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { Header } from '@/widgets/Header';
import Footer from '@/widgets/Header/ui/Footer';

const App = () => {
  return (
    <div>
      <MainLayout header={<Header />} content={<AppRouter />} footer={<Footer />} />
    </div>
  );
};

export default App;
