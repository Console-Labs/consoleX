export interface CryptoAsset {
    id: string;
    name: string;
    symbol: string;
    amount: number;
    value: number;
    price: number;
    change24h: number;
    icon: string;
}

export const mockAssets: CryptoAsset[] = [
    {
        id: "bitcoin",
        name: "Bitcoin",
        symbol: "BTC",
        amount: 0.5,
        price: 37892,
        value: 18946,
        change24h: 2.34,
        icon: "/crypto-icons/btc.svg"
    },
    {
        id: "ethereum",
        name: "Ethereum",
        symbol: "ETH",
        amount: 4.2,
        price: 2085,
        value: 8757,
        change24h: -1.2,
        icon: "/crypto-icons/eth.svg"
    },
    {
        id: "solana",
        name: "Solana",
        symbol: "SOL",
        amount: 45.5,
        price: 58.42,
        value: 2658.11,
        change24h: 5.67,
        icon: "/crypto-icons/sol.svg"
    }
]; 