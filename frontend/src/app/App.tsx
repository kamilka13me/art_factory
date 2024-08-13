import { Header } from '@/widgets/Header';
import { AppRouter } from '@/app/providers/router';
import { MainLayout } from '@/shared/layouts/MainLayout';

function App() {
  return (
    <div>
      <MainLayout
        header={<Header />}
        content={<AppRouter />}
        footer={<div>footer</div>}
      />
    </div>
  );
}

export default App;
