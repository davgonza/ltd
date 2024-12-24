import { SvgIconProps } from '@mui/material';
import paths, { rootPaths } from './paths';
import DashboardIcon from 'components/icons/DashboardIcon';

export interface MenuItem {
  id: number;
  name: string;
  pathName: string;
  path?: string;
  active?: boolean;
  icon?: string;
  svgIcon?: (props: SvgIconProps) => JSX.Element;
  items?: MenuItem[];
}

const sitemap: MenuItem[] = [
  {
    id: 2,
    name: 'Employees',
    path: rootPaths.root,
    pathName: 'dashboard',
    svgIcon: DashboardIcon,
    active: true,
  },
  {
    id: 9,
    name: 'Authentication',
    pathName: 'authentication',
    icon: 'material-symbols:security-rounded',
    active: true,
    items: [
      {
        id: 10,
        name: 'Sign in',
        path: paths.signin,
        pathName: 'sign-in',
        active: true,
      },
      {
        id: 11,
        name: 'Sign up',
        path: paths.signup,
        pathName: 'sign-up',
        active: true,
      },
    ],
  },

  {
    id: 1,
    name: 'Customers',
    path: '#!',
    pathName: 'leaderboard',
    icon: 'ri:bar-chart-line',
  },
  //   {
  //     id: 3,
  //     name: 'Order',
  //     path: '#!',
  //     pathName: 'order',
  //     icon: 'ph:shopping-cart-light',
  //   },
  {
    id: 4,
    name: 'Process',
    path: '#!',
    pathName: 'products',
    icon: 'mdi:shopping-outline',
  },
  {
    id: 5,
    name: 'Reports',
    path: '#!',
    pathName: 'sales-report',
    icon: 'ph:chart-line',
  },
  //   {
  //     id: 6,
  //     name: 'Messages',
  //     path: '#!',
  //     pathName: 'messages',
  //     icon: 'mdi:message-processing-outline',
  //   },
  {
    id: 7,
    name: 'Settings',
    path: '#!',
    pathName: 'settings',
    icon: 'fluent:settings-24-regular',
    active: true,
    items: [
      {
        id: 12,
        name: 'Classifications',
        path: paths.signin,
        pathName: '#',
        active: false,
      },
      {
        id: 13,
        name: 'Sectors',
        path: paths.signup,
        pathName: '#',
        active: false,
      },
      {
        id: 14,
        name: 'Banks',
        path: paths.signup,
        pathName: '#',
        active: false,
      },
      {
        id: 15,
        name: 'Users',
        path: paths.signup,
        pathName: '#',
        active: false,
      },
    ],
  },
  {
    id: 8,
    name: 'Sign Out',
    path: '#!',
    pathName: 'sign-out',
    icon: 'humbleicons:logout',
    active: true,
  },
];

export default sitemap;
