// client
export interface clientT extends newClientT {
  id: number;
}

export interface newClientT {
  name: string;
  phone: string;
}

export interface updateClientT extends Partial<newClientT> {}

// product
export interface productT extends newProductT {
  id: number;
}

export interface newProductT {
  name: string;
  price: number;
  stock: number;
}

export interface updateProductT extends Partial<newProductT> {}

// stockmovement

export interface stockMovementT extends newStockMovementT {
  id: number;
}

export interface newStockMovementT {
  quantity: number;
  model: string;
}

//  command
export interface commandT {
  id: number;
  client?: clientT;
  items?: commandItemT[];
}

// commanditems

export interface commandItemT extends newCommandItemT {
  id: number;
  product: productT;
}

export interface newCommandItemT {
  quantity: number;
  productId: number;
}

export interface updateCommandT extends Partial<{ items: newCommandItemT[] }> {}
// Invoice
export interface invoiceT extends newInvoiceT {
  id: number;
  client?: clientT;
  command?: commandT;
}

export interface newInvoiceT {
  total: number;
}
