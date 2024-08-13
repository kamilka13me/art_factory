import { FC, memo, Suspense, useCallback } from 'react';

import { Route, Routes } from 'react-router-dom';

import { AppRoutesProps, RouteConfig } from '@/app/providers/router/config/routeConfig';
// import MainLoaderLayout from '@/shared/layouts/MainLoaderLayout/MainLoaderLayout';

interface Props {}

const AppRouter: FC<Props> = () => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = <Suspense fallback={<div>loading</div>}>{route.element}</Suspense>;

    return <Route key={route.path} path={route.path} element={element} />;
  }, []);

  return <Routes>{Object.values(RouteConfig).map(renderWithWrapper)}</Routes>;
};

export default memo(AppRouter);
