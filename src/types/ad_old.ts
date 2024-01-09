export interface NewInzeratType {
    kategorie?: string;
    rubrika?: string;
    cena?: string;
    lokace?: string;
    text?: string;
    id?: string;
    displayName?: string;
    phoneNumber?: string;
}

export interface AddInzeratType {
    kategorie: string;
    rubrika: string;
    cena: number;
    lokace: string;
    text: string;
    displayName: string;
}