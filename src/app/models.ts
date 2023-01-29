export interface LineItem {
    item: string;
    quantity: number;
    unitPrice: number;
}

export interface Order {
    name: string;
    address: string;
    email: string;
    phone: string;
    express: string;
    delivery: string;
    lineItems: LineItem[];
}