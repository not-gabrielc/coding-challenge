const base = 'https://api.coingecko.com/api/v3/coins/'
const coinMarket = base + 'markets?'


export async function Coins(perPage: any, pageNumber: any, priceChange: any) {
    try {
        const response = await fetch(coinMarket + 'vs_currency=usd&order=market_cap_desc&per_page=' + perPage + '&page=' + (pageNumber + 1) + '&sparkline=true&price_change_percentage=' + priceChange);
        const res = await response.json();
        return res;
    }
    catch (error: any) {
        console.log(error.message)
    }
}

export async function CoinChart(id: any, day: any) {
    try {
        const response = await fetch(coinMarket + id + '/market_chart?vs_currency=usd&days=' + day);
        const res = await response.json();
        return res;
    }
    catch (error: any) {
        console.log(error.message)
    }
}