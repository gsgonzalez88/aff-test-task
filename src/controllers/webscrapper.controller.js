const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const _ = require('lodash');



async function main() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://develop.pub.afflu.net');
    await page.type('input[type=email]', process.env.aff_email);
    await page.type('input[type=password]', process.env.aff_pw);
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
    await page.click('.dropdown-menu.inner > li:nth-child(6) > a');
    await page.waitFor(2000);
    const html = await page.content();
    const $ = cheerio.load(html);
    const table = $('table > tbody > tr[role="row"]').map((i, e) => {
        let arr = ['date', 'commissions_total', 'sales_net', 'leads_net', 'clicks', 'epc', 'impressions', 'cr'];
        let result = e.children.map((element, index) => {
            return $(element).text();
        });
        return _.zipObject(arr, result)
    }).get();

    return table;
}



exports.main = main;
