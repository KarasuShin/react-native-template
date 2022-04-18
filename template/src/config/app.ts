import type { RouteKey } from '@/config/router';

export interface NavBarConfig {
  backgroundColor: string,
  textColor: string,
  titleAlign: 'left'| 'center',
  shadow: boolean,
}

export interface TabBarConfig {
  headerShown: boolean;
  iconSize: number;
}

export interface ServerConfig {
  ssl: boolean;
  host: string;
  port: number;
  timeout: number;
}

interface AppConfig {
  home:RouteKey;
  navBar:NavBarConfig;
  tabBar: TabBarConfig;
  server: ServerConfig;
}

const appConfig: AppConfig = {
  home: 'Home',
  navBar: {
    backgroundColor: '#3D7CFA',
    textColor: '#fff',
    titleAlign: 'center',
    shadow: false,
  },
  tabBar: {
    headerShown: false,
    iconSize: 24,
  },
  server: {
    ssl: false,
    host: 'localhost',
    port: 80,
    timeout: 5000,
  },
};

export default appConfig;
