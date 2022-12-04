export interface animationState {
  Animations: any[];
  IndexAnimation: any;
  AnimationsNames: string[];
  IsLoading: boolean;
}

export interface routerState {
  RouteLinks: { path: string; name: string }[];
  ValidRouteLinks: { path: string; StyledPath: string }[];
  ActiveLink: string;
}

export interface toastState {
  ToastQueue: { text: string; id: number }[];
}
