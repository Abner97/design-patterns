export class InventorySystem {
  checkStock(productId: string): boolean {
    console.log(`📦 Verificando stock del producto ${productId}...`);
    return true;
  }

  reserveProduct(productId: string): void {
    console.log(`✅ Producto ${productId} reservado`);
  }
}
