const https = require('https');

const titles = [
  'Christian_worship',
  'Sermon',
  'Choir',
  'Sunday_school',
  'Church_architecture',
  'Pastor',
  'Christian_cross',
  'Bible',
  'Altar',
  'Baptism',
  'Christian_ministry',
  'Gospel_music',
  'Prayer',
  'Christian_fellowship'
];

async function test() {
  for (const title of titles) {
    const url = `https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&piprop=original&titles=${title}`;
    await new Promise(resolve => {
      https.get(url, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
          const json = JSON.parse(data);
          const pages = json.query.pages;
          const pageId = Object.keys(pages)[0];
          if (pages[pageId].original) {
            console.log(`${title}: ${pages[pageId].original.source}`);
          } else {
            console.log(`${title}: NO IMAGE`);
          }
          resolve();
        });
      });
    });
  }
}
test();
