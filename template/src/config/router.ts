import type { ComponentType } from 'react';
import TabPageOne from '@/pages/TabPageOne';
import TabPageTwo from '@/pages/TabPageTwo';
import StackPageOne from '@/pages/StackPageOne';
import { TabNavigation } from '@/components/AppProvider/Navigation';

export type RouteKey = string

export interface TabRoute {
  key: RouteKey;
  name: string;
  component: ComponentType<any>;
  icon?: string;
  headerShown?: boolean
}

export interface StackRoute {
  key: RouteKey;
  component: ComponentType<any>;
  name?: string;
  headerShown?:boolean;
}

const tabRoutes: TabRoute[] = [
  {
    key: 'Tab1',
    name: 'Tab1',
    component: TabPageOne,
    icon: 'blur',
  },
  {
    key: 'Tab2',
    name: 'Tab2',
    component: TabPageTwo,
    icon: 'blur',
  },
];

const stackRoutes: StackRoute[] = [{
  key: 'Home',
  component: TabNavigation,
  headerShown: false,
}, {
  key: 'StackPageOne',
  component: StackPageOne,
  name: 'StackPageOne',
  headerShown: true,
}];

export { tabRoutes, stackRoutes };
