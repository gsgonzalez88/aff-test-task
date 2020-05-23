const puppeteer = require('puppeteer');

const scrapingResults = [
    {
        date: "Apr 30, 2020",
        commissions_total: "$1,706.68",
        sales_net: "190",
        leads_net: "0",
        clicks: "2436",
        epc: "$0,34",
        impressions: "0",
        cr: "7.80%"
    }
]

async function main() {
    const browser = await puppeteer.launch({ headless: false});
    const page = await browser.newPage();
    await page.goto('https://develop.pub.afflu.net');
    await page.type('input[type=email]','');    
    await page.type('input[type=password]','');
    await page.click('button');
    await page.waitFor(10000);
    await page.click('#pushActionRefuse');
    await page.click('.home-table-fullreport');
    await page.waitFor(2000);
    await page.click('#datepicker');
    await page.waitFor(1000);
    const input = await page.$('input[name=daterangepicker_start]');
    await input.click({ clickCount: 3 });
    await input.type("04/01/2020");
    const input2 = await page.$('input[name=daterangepicker_end]');
    await input2.click({ clickCount: 3 });
    await input2.type("04/30/2020");
    await page.click('.applyBtn');
    await page.waitFor(2000); 
    await page.click('div.portlet-title > div.dataTables_length > label > div.dropdown.bootstrap-select.form-control.input-xs.input-sm.input-inline > button');
    /* await page.waitFor(3000); */
    await page.click('.dropdown-menu.inner > li:nth-child(6) > a');
    /* const span = await page.$('span:contains("All")')
    await span.click(); */
}



exports.main = main;
