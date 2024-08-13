import { RouteProps } from 'react-router-dom';

import { AppRoutes, getRouteMain, getRouteLogin } from '@/shared/const/routes';
import { MainPage } from '@/pages/MainPage';
import { LoginPage } from '@/pages/LoginPage';
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
};
