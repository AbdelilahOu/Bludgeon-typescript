////////////////////////////
export interface updateData<T> {
  id: number;
  data: T;
}
///////////////////////////
/////////// CLIENT ///////
/////////////////////////
export interface clientT {
  id: number;
  name: string;
  email?: string;
  phone?: string;
  addresse?: string;
}
export interface newClientT extends Omit<clientT, "id"> {}
export interface updateClientT extends Partial<newClientT> {}

////////////////////////////
////////////// VENDOR //////
////////////////////////////

export interface vendorT {
  id: number;
  name: string;
  email?: string;
  phone?: string;
  addresse?: string;
}
export interface newVendorT extends Omit<vendorT, "id"> {}
export interface updateVendorT extends Partial<newVendorT> {}

//////////////////////////
///////////// PRODUCT ////
/////////////////////////

export interface productT {
  id: number;
  name: string;
  price: number;
  description?: string;
  quantity: number;
  tva: number;
  type: string;
}

export interface newProductT extends Omit<productT, "id"> {}
export interface updateProductT extends Partial<newProductT> {}

//////////////////////////
//////////// COMMAND /////
//////////////////////////
export interface commandT {
  id: number;
  vendorId: number;
  status: string;
}

export interface newCommandT extends Omit<commandT, "id"> {}

export interface updateCommmandT extends Partial<newCommandT> {}

export interface commandItemT {
  id: number;
  commandId: number;
  productId: number;
  stockId: number;
  quantity: number;
}

export interface newCommandItemT extends Omit<commandItemT, "id"> {}
export interface updateCommandItemT extends Partial<commandItemT> {}

export interface incomingCommandT extends newCommandT {
  commandItems: newCommandItemT[];
}
//////////////////////////////
////////////// INVOICE ///////
/////////////////////////////

export interface invoiceT {
  id: number;
  clientId: number;
  total: number;
}

export interface newInvoiceT extends Omit<invoiceT, "id"> {}

export interface updateInvoiceT extends Partial<newInvoiceT> {}

export interface invoiceItemT {
  id: number;
  productId: number;
  invoiceId: number;
  stockId: number;
  quantity: number;
}

export interface newInvoiceItemT extends Omit<invoiceItemT, "id"> {}
export interface updateInvoiceItemT extends Partial<invoiceItemT> {}
export interface incomingInvoiceT extends newInvoiceT {
  invoiceItems: newInvoiceItemT[];
}

//////////////////////////////
///////// STOCK //////////////
///////////////////////////

export interface stockT {
  id: number;
  model: string;
  quantity: number;
  productId: number;
}

export interface newStockT extends Omit<stockT, "id"> {}
