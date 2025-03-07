import { Connection } from "@solana/web3.js";
import axios from "axios";
import { SUPPORTED_TOKENS } from "./tokens";

let LAST_UPDATED: number | null = null;
let prices: Record<string, {price: number}> = {};

const TOKEN_PRICE_REFRESH_INTERVAL = 60 * 1000; // every 60s

export const connection = new Connection("https://solana-mainnet.g.alchemy.com/v2/EspGgEsKtp6xdG1-P32lj9raEFUlgXNc");

export async function getSupportedTokens() {
    if (!LAST_UPDATED || new Date().getTime() - LAST_UPDATED < TOKEN_PRICE_REFRESH_INTERVAL) {
        try {
            const response = await axios.get("https://api.jup.ag/price/v2?ids=So11111111111111111111111111111111111111112,EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v,Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB");
            prices = response.data.data;
            console.log(prices);
            LAST_UPDATED = new Date().getTime();
        } catch(e) {
            console.log(e);
        }
    }
    return SUPPORTED_TOKENS.map(s => ({
        ...s,
        price: prices[s.mint]?.price?? s.price
    }))
}

getSupportedTokens();