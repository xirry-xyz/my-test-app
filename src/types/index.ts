export interface User {
    uid: string;
    email: string | null;
    displayName: string | null;
    photoURL: string | null;
    familyId?: string;
}

export interface Family {
    id: string;
    name: string;
    members: string[];
}

export interface Item {
    id: string;
    familyId: string;
    name: string;
    category: string;
    quantity: number;
    unit: string;
    threshold: number;
    expiryDate?: number; // Timestamp
    updatedAt: number; // Timestamp
}

export interface ConsumptionLog {
    id: string;
    familyId: string;
    itemId: string;
    itemName: string;
    amount: number;
    date: number; // Timestamp
    userId: string;
}

export interface ShoppingListItem {
    id: string;
    familyId: string;
    itemId?: string;
    name: string;
    isBought: boolean;
    addedBy: string;
}
