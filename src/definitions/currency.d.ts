export interface Currency {
    name: string;
    fractionSize: number;
    symbol: {
        grapheme: string;
        template: string;
        rtl: boolean;
    };
    uniqSymbol: boolean
}

export interface Currencies {
    [currency: string] : Currency
}