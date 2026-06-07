const scrape = require('website-scraper');
const options = {
  urls: ['https://hellamaid.ca/'],
  directory: './public/clone',
  sources: [
    {selector: 'img', attr: 'src'},
    {selector: 'img', attr: 'srcset'},
    {selector: 'link[rel="stylesheet"]', attr: 'href'},
    {selector: 'script', attr: 'src'},
    {selector: 'source', attr: 'srcset'},
  ],
};

console.log("Starting scrape...");
scrape(options).then((result) => {
    console.log("Scrape successful. Saved to ./public/clone");
}).catch((err) => {
    console.error("Scrape failed.", err);
});
