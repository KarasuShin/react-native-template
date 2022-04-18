import { RouteKey } from '@/config/router';
import {
  NavigationContainerRefWithCurrent,
  StackActions,
} from '@react-navigation/native';

type NavigatorRef =
    NavigationContainerRefWithCurrent<ReactNavigation.RootParamList>;

export default class Navigation {
    static navigationInstance: NavigatorRef;

    static init(navigatorRef: NavigatorRef):void {
      this.navigationInstance = navigatorRef;
    }

    static replace(name: RouteKey, params?: any):void {
      this.navigationInstance.dispatch(StackActions.replace(name, params));
    }

    static push(name: RouteKey, params?: any):void {
      this.navigationInstance.dispatch(StackActions.push(name, params));
    }

    static back():void {
      this.navigationInstance.dispatch(StackActions.pop());
    }

    static getKey():RouteKey {
      return this.navigationInstance.getCurrentRoute()?.name as RouteKey;
    }
}
