//////////////////////////////////////
/////////////// PINIA STORE STATES///
////////////////////////////////////
export interface toastState {
  ToastQueue: { text: string; id: number }[];
}

export interface modalsState {
  theModal: { [key: string]: any; show: boolean; name: string };
  product: productT | null;
  client: clientT | null;
  command: commandT | null;
  vendor: vendorT | null;
}

export interface productState {
  products: productT[];
}

export interface commandState {
  commands: commandT[];
  command: commandT | null;
}

export interface invoiceState {
  invoices: invoiceT[];
  invoice: invoiceT | null;
}

export interface clientState {
  clients: clientT[];
  client: clientT | null;
}

export interface vendorState {
  vendors: vendorT[];
  vendor: vendorT | null;
}

export interface stockState {
  stockMouvements: stockMvmT[];
}
///////////////////////////////////
//////////// INTERFACES //////////
/////////////////////////////////
//////////// COMMAND INTERFACES//
export interface commandT {
  [key: string]: any;
  id: number;
  createdAt: string;
  status: string;
  clientId: number;
  commandItems: commandItemT[];
}

export interface commandItemT {
  id: number;
  productId: number;
  commandId: number;
  quantity: number;
  stockId: number;
}

export interface newCommandT extends Partial<Omit<commandT, "commandItems">> {
  commandItems: Omit<commandItemT, "id" | "commandId" | "stockId">[];
}

export interface updateCommandT
  extends Partial<Omit<commandT, "commmandItems">> {
  commandItems: Partial<commandItemT>[];
}

export interface newCommandItemT
  extends Pick<commandItemT, "productId" | "quantity"> {}
// /////////////////////////////////
///////////// INVOICE INTERFACES ///
///////////////////////////////////

export type invoiceT = {
  id: number;
  total: number;
  vendorId: number;
  createdAt: Date;
  vendorId: number;
};

export type invoiceItemT = {
  id: number;
  productId: number;
  invoiceId: number;
  quantity: number;
  stockId: number;
};

export interface newInvoiceT
  extends Omit<invoiceT, "id" | "createdAt" | "total"> {
  invoiceItems: newInvoiceItemT[];
}
export interface newInvoiceItemT
  extends Omit<invoiceItemT, "id" | "invoiceId" | "stockId"> {}
////////////////////////////////////
//////////// CLIENT INTERFACES//////
////////////////////////////////////
export interface clientT {
  id: number;
  name: string;
  phone?: string;
  addresse?: string;
  email?: string;
}

export interface newClientT extends Omit<clientT, "id"> {}
export interface updateClientT extends Partial<clientT> {}
/////////////////////////////////////////////////
//////////////////// VENDOR INTERFACES //////////
////////////////////////////////////////////////
export interface vendorT extends clientT {}
export interface newVendorT extends newClientT {}
export interface updateVendorT extends updateClientT {}
////////////////////////////////////////////////////
//////////////// STOCKMOUVMENTS INTERFACES /////////
///////////////////////////////////////////////////
export interface stockMvmT {
  id: number;
  date: string;
  model: string;
  quantity: number;
  productId: number;
  product: Pick<productT, "price" | "name">;
  commandItem?: Pick<commandItemT, "quantity" | "commandId">;
  invoiceItem?: Pick<invoiceItemT, "quantity" | "invoiceId">;
}
export interface newStockMvmT
  extends Pick<stockMvmT, "productId" | "quantity" | "model"> {}

/////////////////////////////////////////////////
/////////////// PRODUCT INTERFACES //////////////
/////////////////////////////////////////////////
export interface productT {
  id: number;
  name: string;
  price: number;
  stock: number;
  description?: string;
}
export interface newProductT extends Omit<productT, "id"> {}
export interface productTfromApiT extends Omit<productT, "stock"> {
  stockMouvements: { quantity: number }[];
}
export interface updateProductT extends Partial<productT> {}
//////////////////////////////////////////////////
/////////////////////////////////////
///////////////// OTHERS //////////

export interface editModalArgsT {
  key: string;
  value: string | boolean;
}

export interface RouteLinksTypeT {
  path: string;
  name: string;
  icon: string;
}

export interface dataRowT<T> {
  data: {
    row: T;
  };
}

export interface dataRowsT<T> {
  data: {
    rows: T[];
  };
}
