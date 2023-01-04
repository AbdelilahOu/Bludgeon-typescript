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

export interface modalsState {
  TheModal: {
    name: string;
    mode: string;
  };
}

export interface editModalArgs {
  key: string;
  value: string;
}

export interface productState {
  products: product[];
}

export interface product {
  id: number;
  name: string;
  unite: String;
  price: number;
}

export interface clientState {
  clients: client[];
  client: client | null;
}

export interface client {
  id: number;
  name: string;
  adresse: string;
  phone: string;
}

export interface dataRow<T> {
  data: {
    row: T;
  };
}

export interface dataRows<T> {
  data: {
    rows: T[];
  };
}

export interface updateClient {
  name?: string;
  adresse?: string;
  phone?: string;
}
