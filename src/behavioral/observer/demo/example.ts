import { StockMarket } from "../classes/StockMarket";
import { Investor } from "../classes/Investor";
import { TradingBot } from "../classes/TradingBot";

console.log("=== EJEMPLO OBSERVER: Stock Market ===\n");

const market = new StockMarket();

const investor1 = new Investor("Juan");
const investor2 = new Investor("María");
const bot = new TradingBot("BOT-001");

market.attach(investor1);
market.attach(investor2);
market.attach(bot);

market.setStockPrice("AAPL", 150);
market.setStockPrice("GOOGL", 95);
market.setStockPrice("MSFT", 200);

console.log("\n--- Investor Juan se retira ---");
market.detach(investor1);

market.setStockPrice("AAPL", 145);
