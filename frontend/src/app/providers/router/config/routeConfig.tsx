import { RouteProps } from 'react-router-dom';

import { LoginPage } from '@/pages/LoginPage';
import { MainPage } from '@/pages/MainPage';

import { AppRoutes, getRouteMain, getRouteLogin } from '@/shared/const/routes';
import { NotFoundPage } from '@/pages/NotFoundPage';

export type AppRoutesProps = RouteProps & {
  path: string;
  authOnly?: boolean;
  //   roles?: UserRoles[];
};

export const RouteConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: getRouteMain(),
    element: <MainPage />,
  },
  [AppRoutes.LOGIN]: {
    path: getRouteLogin(),
    element: <LoginPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <NotFoundPage />,
  },
};
