const fs = require("fs");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const trade_html = fs.readFileSync("../data/trade-history.html")
const trade = new JSDOM(trade_html.toString());
trade.window.document.querySelectorAll("#main-container > div > div.stickyFooter-content.hero-fold.pb-4 > div > div > div > div > div.overflow-auto > table > tbody > tr").forEach(function(content) {
    const tbl = new JSDOM(content.innerHTML);
        tbl.window.document.querySelectorAll("div").forEach(function(row, index) {
        console.log(`Trade ${index}` , row.textContent)
    })
})

const wallet_html = fs.readFileSync("../data/wallet.html")
const wallet = new JSDOM(wallet_html.toString());
wallet.window.document.querySelectorAll("#main-container > div > div.stickyFooter-content.hero-fold.pb-4 > div > div.col-span-5.grid-row.grid-gap-5 > div.bg-white.rounded.text-black.pb-1.mb-8.dash__card.dash__card--wide > div > div.relative.z-1.bb-wallets-table-container > div > div > div > div > div > div").forEach(function(content) {
    // console.log("Wallet", content.innerHTML);
    const div = new JSDOM(content.innerHTML);
        div.window.document.querySelectorAll("p").forEach(function(row, index) {
        console.log(`Wallet ${index}` , row.textContent)
    })
})
