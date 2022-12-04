interface clientT extends createClientT {
  id: Number;
}

interface productT extends createProductT {
  id: number;
}

interface stockT extends createStockT {
  id: number;
}

interface createStockT {
  id_product: number;
  initiale_quantity: number;
  sold_quantity: number;
  min_quantity: number;
}

interface updateStockT {
  id_product?: number;
  initiale_quantity?: number;
  sold_quantity?: number;
  min_quantity?: number;
}

interface createClientT {
  c_name: string;
  adresse: string;
  phone: string;
}

interface createCommandT {
  id_client: number;
  command_date: Date;
  command_delivery: Date;
}

interface commandlineT {
  id_command: number;
  id_product: number;
  product_quantity: number;
}

interface updateClientT {
  c_name?: string;
  adresse?: string;
  phone?: string;
}

interface updateCommandT {
  id_client?: number;
  command_date?: Date;
  command_delivery?: Date;
}

interface createProductT {
  p_name: string;
  unite: string;
  price: number;
}

interface updateProductT {
  p_name?: string;
  unite?: string;
  price?: number;
}

export {
  updateCommandT,
  createCommandT,
  updateProductT,
  createProductT,
  createClientT,
  updateClientT,
  commandlineT,
  createStockT,
  updateStockT,
  productT,
  stockT,
  clientT,
};
