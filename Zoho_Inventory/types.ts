export type Item = {
    item_id: string;
    name: string;
    item_name: string;
    brand: string;
    manufacturer: string;
    rate: number;
    available_stock: number;
    sku: string;
}

export type PartialItem = Partial<Item>